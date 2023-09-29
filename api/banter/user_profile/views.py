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
from enum import Enum

"""
Contains the logic for the profile, relations between profiles, and the status of the relations,
as well as relations between profiles and rooms.
"""

secure = os.environ.get('SECURE', False)


class ProfileRoom(models.Model):
    """
    Represents the relationship between profiles and rooms, 
    capturing the status of a profile in a given room.
    Fields:
        profile: the profile
        room: the room
        status: the status of the profile in the room
    """
    profile = models.ForeignKey('user_profile.Profile', on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=[(tag.name, tag.value) for tag in ProfileRoomStatus])

    class Meta:
        unique_together = ['profile', 'room']
        ordering = ['room', 'status']

    def __str__(self):
        return f"{self.profile.name} - {self.room.name} - {self.status.name}"

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

class ProfileSelfFriendView(generics.ListAPIView):
    """
    View for listing all profiles that are friend|received|requested with the authenticated profile.
    """
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        """
        Get all profiles that are friends with the authenticated profile.
        """
        profile = self.request.user
        relations = ProfileRelation.objects.filter(Q(requester_profile=profile) | Q(receiver_profile=profile), Q(status=1) | Q(status=2) | Q(status=3))
        profiles = []
        for relation in relations:
            if relation.requester_profile == profile:
                profiles.append(relation.receiver_profile)
            else:
                profiles.append(relation.requester_profile)
        return profiles

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
