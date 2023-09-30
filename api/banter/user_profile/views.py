from django.shortcuts import render
from django.db.models import Q
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Profile, ProfileRelation
from .serializers import ProfileSerializer, ProfileRelationSerializer
from room.serializers import RoomSerializer, RoomProfileSerializer
from .enums import ProfileStatusEnum, ProfileRelationStatusEnum
from room.enums import RoomProfileStatusEnum
from room.models import Room, RoomProfile
import os
from django.core.paginator import Paginator
from rest_framework.pagination import CursorPagination
from django.db.models import F

secure = os.environ.get('DJANGO_SECURE', False)

class SelfProfileView(APIView):
    """
    View for getting, updating, deleting the authenticated profile.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """
        Get the authenticated profile.
        """
        profile = request.user
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request):
        """
        Update the authenticated profile.
        """
        profile = request.user
        profile.name = request.data['name']
        profile.save()
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def delete(self, request):
        """
        Delete the authenticated profile.
        """
        profile = request.user
        profile.status = ProfileStatusEnum.deleted.value

class ProfileView(APIView):
    """
    View for getting a profile.
    """

    def get(self, request, profile_id):
        """
        Get a profile.
        """
        profile = Profile.objects.get(id=profile_id)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

class ProfileRelationView(APIView):
    """
    View for getting, updating, and deleting a profile relation.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, profile_id):
        """
        Get a profile relation.
        """
        requester_profile = request.user
        receiver_profile = Profile.objects.get(id=profile_id)
        profile_relation = ProfileRelation.objects.get(requester_profile=requester_profile, receiver_profile=receiver_profile)
        serializer = ProfileRelationSerializer(profile_relation)
        return Response(serializer.data)

    def put(self, request, profile_id):
        """
        Update a profile relation.
        """
        requester_profile = request.user
        receiver_profile = Profile.objects.get(id=profile_id)
        profile_relation = ProfileRelation.objects.get(requester_profile=requester_profile, receiver_profile=receiver_profile)
        profile_relation.status = ProfileRelationStatusEnum[request.data['status']]
        profile_relation.save()
        serializer = ProfileRelationSerializer(profile_relation)
        return Response(serializer.data)

    def delete(self, request, profile_id):
        """
        Delete a profile relation.
        """
        requester_profile = request.user
        receiver_profile = Profile.objects.get(id=profile_id)
        profile_relation = ProfileRelation.objects.get(requester_profile=requester_profile, receiver_profile=receiver_profile)
        profile_relation.delete()
        return Response(status=204)

class ProfileRelationsCursorPagination(CursorPagination):
    page_size = 10
    ordering = '-updated_at'
    
class ProfileRelationsView(generics.ListAPIView):
    """
    View for listing all profile relations and creating a new profile relation.
    """
    pagination_class = ProfileRelationsCursorPagination
    serializer_class = ProfileRelationSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        """
        Get all profile relations.
        """
        status = self.request.query_params.get('status', None)
        queryset = ProfileRelation.objects.all()
        if status is not None:
            queryset = queryset.filter(status=status)
        return queryset

    def post(self, request):
        """
        Create a profile relation.
        """
        requester_profile = request.user
        receiver_profile = Profile.objects.get(id=request.data['receiver_profile'])
        profile_relation, created = ProfileRelation.objects.update_or_create(
            requester_profile=requester_profile,
            receiver_profile=receiver_profile,
            defaults={'status_id': 1}
        )
        serializer = ProfileRelationSerializer(profile_relation)
        return Response(serializer.data)

class ProfileRoomView(APIView):
    """
    View for getting, updating, and deleting a profile room.
    """

    def get(self, request, room_id):
        """
        Get a profile room.
        """
        profile = request.user
        room = Room.objects.get(id=room_id)
        profile_room = RoomProfile.objects.get(profile=profile, room=room)
        serializer = RoomProfileSerializer(profile_room)
        return Response(serializer.data)

    def put(self, request, room_id):
        """
        Update a profile room.
        """
        profile = request.user
        room = Room.objects.get(id=room_id)
        profile_room = RoomProfile.objects.get(profile=profile, room=room)
        profile_room.status = RoomProfileStatusEnum[request.data['status']]
        profile_room.save()
        serializer = RoomProfileSerializer(profile_room)
        return Response(serializer.data)

    def delete(self, request, room_id):
        """
        Delete a profile room.
        """
        profile = request.user
        room = Room.objects.get(id=room_id)
        profile_room = RoomProfile.objects.get(profile=profile, room=room)
        profile_room.delete()
        return Response(status=204)

class ProfileRoomsCursorPagination(CursorPagination):
    page_size = 10
    ordering = 'room_updated_at_proxy'

class ProfileRoomsView(generics.ListAPIView):
    """
    View for listing all profile rooms and creating a new profile room.
    """
    pagination_class = ProfileRoomsCursorPagination
    serializer_class = RoomProfileSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        """
        Get all profile rooms.
        """
        return RoomProfile.objects.annotate(room_updated_at_proxy=F('room__updated_at'))

    def post(self, request):
        """
        Create a profile room.
        """
        profile = request.user
        room = Room.objects.get(id=request.data['room'])
        profile_room, created = RoomProfile.objects.update_or_create(
            profile=profile,
            room=room,
            defaults={'status_id': 1}
        )
        serializer = RoomProfileSerializer(profile_room)
        return Response(serializer.data)
