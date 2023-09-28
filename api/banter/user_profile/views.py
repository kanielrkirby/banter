from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Profile, ProfileRelation, ProfileRelationStatus
from .serializers import ProfileSerializer, ProfileRelationStatusSerializer, ProfileRelationSerializer
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
import os

secure = os.environ.get('SECURE', False)

class ProfilesView(generics.ListAPIView):
    """
    View for listing all profiles and creating a new profile.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.request.method == "GET":
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = []
        return [permission() for permission in permission_classes]

    def get(self, request):
        """
        Get all profiles.
        """
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)

    def post(self, request):
        """
        Create a profile.
        """
        profile = Profile.objects.create_user(username=request.data['username'], password=request.data['password'])
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

class ProfileView(APIView):
    """
    View for getting, updating, and deleting a profile.
    """
    permission_classes = [IsAuthenticated]
    def get(self, request, profile_id):
        """
        Get a profile.
        """
        profile = Profile.objects.get(id=profile_id)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request, profile_id):
        """
        Update a profile.
        """
        profile = Profile.objects.get(id=profile_id)
        profile.name = request.data['name']
        profile.save()
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def delete(self, request, profile_id):
        """
        Delete a profile.
        """
        profile = Profile.objects.get(id=profile_id)
        profile.status = ProfileRelationStatus.objects.get(name='deleted')
        profile.save()
        return Response(status=204)

class ProfileAddFriendView(APIView):
    """
    View for adding a friend to a profile.
    """
    permission_classes = [IsAuthenticated]
    def post(self, request, id):
        """
        Add a friend to a profile.
        """
        requester_profile = request.user
        receiver_profile = Profile.objects.get(id=id)
        profile_relation, created = ProfileRelation.objects.update_or_create(
            requester_profile=requester_profile,
            receiver_profile=receiver_profile,
            defaults={'status_id': 1}
        )
        
        serializer = ProfileRelationSerializer(profile_relation)
        return Response(serializer.data)


class ProfileRelationView(generics.ListAPIView):
    """
    View for listing all profiles that are related to a profile.
    """
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        """
        Get all profiles that are related to a profile.
        """
        profile = Profile.objects.get(id=self.kwargs['id'])
        return ProfileRelation.objects.filter(Q(requester_profile=profile) | Q(receiver_profile=profile))

class ProfileSelfRelationView(generics.ListAPIView):
    """
    View for listing all profiles that are related to the authenticated profile.
    """
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        """
        Get all profiles that are related to the authenticated profile.
        """
        profile = self.request.user
        relations = ProfileRelation.objects.filter(Q(requester_profile=profile) | Q(receiver_profile=profile))
        profiles = []
        for relation in relations:
            if relation.requester_profile == profile:
                profiles.append(relation.receiver_profile)
            else:
                profiles.append(relation.requester_profile)
        return profiles

class ProfileAuthView(APIView):
    """
    View to check if a profile is authenticated, and if so, return the profile.
    Also, this view is used to refresh the access token.
    """
    authentication_classes = []
    permission_classes = [AllowAny]

    def get(self, request):
        """
        Get the authenticated profile or handle token refresh.
        """
        response = Response()

        def logout():
            print("In logout")
            response = Response("Unauthorized", status=status.HTTP_401_UNAUTHORIZED)
            response.delete_cookie('access_token')
            response.delete_cookie('refresh_token')
            return response

        try:
            print("In try")
            refresh_token = request.COOKIES.get('refresh_token')
            if refresh_token:
                print("In refresh_token")
                refresh = RefreshToken(refresh_token)
                access_token = str(refresh.access_token)

                try:
                    print("In try 2")
                    access = AccessToken(access_token)
                    user = access.payload.get('user_id')  # Assuming the user ID is stored in the token
                    if user:
                        print("In user")
                        # Retrieve the user and include user data in response_data
                        profile = Profile.objects.get(id=user)  # Replace with your UserProfile model retrieval logic
                        serializer = ProfileSerializer(profile)
                        response.data = serializer.data
                        response.set_cookie('access_token', access_token, httponly=True, secure=secure)
                        response.data['password'] = None
                        response.data['authenticated'] = True

                except Exception as e:
                    print("In except")
                    print(e)
                    return logout()

        except Exception as e:
            print("In except 2")
            return logout()

        return response

class ProfileLogoutView(APIView):
    """
    View to logout a profile.
    """
    permission_classes = []
    def get(self, request):
        """
        Logout a profile.
        """
        response = Response()
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')
        return response


# Get profiles that are "status=friends" to the authenticated profile.
class ProfileFriendsView(generics.ListAPIView):
    """
    View for listing all profiles that are friends with the authenticated profile.
    """
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        """
        Get all profiles that are friends with the authenticated profile.
        """
        profile = self.request.user
        return ProfileRelation.objects.filter(Q(requester_profile=profile) | Q(receiver_profile=profile), status=ProfileRelationStatus.objects.get(name='friends'))
