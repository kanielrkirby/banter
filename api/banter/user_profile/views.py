from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated
from .models import Profile, ProfileRelation, ProfileRelationStatus
from .serializers import ProfileSerializer, ProfileRelationStatusSerializer, ProfileRelationSerializer

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
        #profile = Profile.objects.get(id=self.kwargs['profile_id'])
        profile = Profile.objects.get(requester=self.kwargs['profile_id'])
        return ProfileRelation.objects.filter(Q(requester=profile) | Q(receiver=profile))

class ProfileAuthView(APIView):
    """
    View to check if a profile is authenticated, and if so, return the profile.
    """
    permission_classes = [IsAuthenticated]
    def get(self, request):
        """
        Get the authenticated profile.
        """
        profile = request.user
        # remove password from profile
        profile.password = None
        serializer = ProfileSerializer(profile)
        serializer.data['authenticated'] = True
        return Response(serializer.data)

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

