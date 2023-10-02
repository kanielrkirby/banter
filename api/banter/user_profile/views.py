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
        receiver_profile = Profile.objects.get(email=request.data['email'])
        profile_relation, created = ProfileRelation.objects.update_or_create(
            requester_profile=requester_profile,
            receiver_profile=receiver_profile,
            defaults={'status': ProfileRelationStatusEnum.requested.value}
        )

        reverse_profile_relation, created = ProfileRelation.objects.update_or_create(
            requester_profile=receiver_profile,
            receiver_profile=requester_profile,
            defaults={'status': ProfileRelationStatusEnum.received.value}
        )

        if reverse_profile_relation.status == ProfileRelationStatusEnum.friend.value or reverse_profile_relation.status == ProfileRelationStatusEnum.requested.value:
            profile_relation.status = ProfileRelationStatusEnum.friend.value
            profile_relation.save()
            reverse_profile_relation.status = ProfileRelationStatusEnum.friend.value
            reverse_profile_relation.save()

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
    ordering = '-updated_at'

class ProfileRoomsView(generics.ListAPIView):
    """
    View for listing all profile rooms and creating a new profile room.
    """
    pagination_class = ProfileRoomsCursorPagination
    serializer_class = RoomSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        """
        Get all profile rooms.
        """
        profile = self.request.user
        room_ids = RoomProfile.objects.filter(profile=profile).values_list('room_id', flat=True)
        return Room.objects.filter(id__in=room_ids)

    def post(self, request):
        """
        Create a profile room.
        """
        profile = request.user
        room = Room.objects.get(id=request.data['room'])
        profile_room, created = RoomProfile.objects.update_or_create(
            profile=profile,
            room=room,
            defaults={'status': 1}
        )
        return Response(status=201)

class ProfileFriendRoomView(APIView):
    """
    View for adding a room with 2 owners (friends).
    """
    permission_classes = [IsAuthenticated]
    def post(self, request):
        """
        Create a room with 2 owners (friends).
        """
        profile = request.user
        friend_profile = Profile.objects.get(id=request.data['id'])
        if not ProfileRelation.objects.filter(
            Q(requester_profile=profile, receiver_profile=friend_profile) |
            Q(requester_profile=friend_profile, receiver_profile=profile),
            status=ProfileRelationStatusEnum.friend.value
        ).exists():
            return Response(status=403)
        names = ','.join(sorted([profile.username, friend_profile.username]))
        room = Room.objects.create(name=names)
        profile_room, created = RoomProfile.objects.update_or_create(
            profile=profile,
            room=room,
            defaults={'status': RoomProfileStatusEnum.owner.value}
        )
        friend_profile_room, created = RoomProfile.objects.update_or_create(
            profile=friend_profile,
            room=room,
            defaults={'status': RoomProfileStatusEnum.owner.value}
        )
        serializer = RoomSerializer(room)
        return Response(serializer.data)

class ProfileFriendsView(APIView):
    """
    View for getting all friends of a profile.
    """
    permission_classes = [IsAuthenticated]
    def get(self, request):
        """
        Get all friends of a profile.
        """
        profile = request.user
        profile_relations = ProfileRelation.objects.filter(
            requester_profile=profile,
            status=ProfileRelationStatusEnum.friend.value,
        )
        friends = []
        for profile_relation in profile_relations:
            if profile_relation.requester_profile == profile:
                friends.append(profile_relation.receiver_profile)
            else:
                friends.append(profile_relation.requester_profile)
        serializer = ProfileSerializer(friends, many=True)
        return Response(serializer.data)
