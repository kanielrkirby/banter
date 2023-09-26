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
    permission_classes = [IsAuthenticated]
    #permission_classes = []
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
        profile = Profile.objects.get(id=self.kwargs['profile_id'])
        return ProfileRelation.objects.filter(Q(requester=profile) | Q(receiver=profile))
