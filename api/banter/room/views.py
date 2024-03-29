from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from .models import Room, Message, RoomProfile
from user_profile.models import Profile
from user_profile.serializers import ProfileSerializer
from .serializers import RoomSerializer, MessageSerializer
from .enums import RoomProfileStatusEnum, ProfileMessageStatusEnum, RoomStatusEnum
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.db.models import Q
from django.core.paginator import Paginator
from rest_framework.pagination import CursorPagination
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from django.shortcuts import get_object_or_404

class RoomView(APIView):
    """
    View for creating, getting, updating, and deleting a room (depending on authed profile's status in the room)
    """
    permission_classes = [IsAuthenticated]
    def get(self, request, room_id):
        """
        Get a room. Must be a member|admin|owner of the room.
        """
        room = get_object_or_404(Room, id=room_id, status=not RoomStatusEnum.deleted.value)
        if not room:
            return Response(status=404)
        if not RoomProfile.objects.filter(profile=request.user, room=room, status__in=[RoomProfileStatusEnum.owner.value, RoomProfileStatusEnum.admin.value, RoomProfileStatusEnum.member.value]):
            return Response(status=403)
        serializer = RoomSerializer(room)
        return Response(serializer.data)

    def post(self, request):
        """
        Create a room.
        """
        room = Room.objects.create(name=request.data['name'])
        profile_room = RoomProfile.objects.create(profile=request.user, room=room, status=RoomProfileStatusEnum.owner.value)
        serializer = RoomSerializer(room)
        return Response(serializer.data)

    def put(self, request, room_id):
        """
        Update a room. Must be an admin|owner of the room.
        """
        room = get_object_or_404(Room, id=room_id)
        if not RoomProfile.objects.filter(profile=request.user, room=room, status__in=[RoomProfileStatusEnum.owner.value, RoomProfileStatusEnum.admin.value]):
            return Response(status=403)
        room.name = request.data['name']
        room.save()
        serializer = RoomSerializer(room)
        return Response(serializer.data)

    def delete(self, request, room_id):
        """
        Delete a room.
        """
        room = get_object_or_404(Room, id=room_id)
        if not room:
            return Response(status=404)
        if not RoomProfile.objects.filter(profile=request.user, room=room, status__in=[RoomProfileStatusEnum.owner.value]):
            return Response(status=403)
        room.status = RoomStatusEnum.deleted.value
        return Response(status=204)

class RoomProfileView(APIView):
    """
    View for getting, updating, and deleting a profile's status in a room.
    """

    def get(self, request, room_id, profile_id):
        """
        Get a profile's status in a room.
        """
        profile = get_object_or_404(Profile, id=profile_id)
        room = get_object_or_404(Room, id=room_id, status=not RoomStatusEnum.deleted.value)
        if not RoomProfile.objects.filter(profile=request.user, room=room, status__in=[RoomProfileStatusEnum.owner.value, RoomProfileStatusEnum.admin.value, RoomProfileStatusEnum.member.value]):
            return Response(status=403)
        profile_room = RoomProfile.objects.get(profile=profile, room=room)
        serializer = RoomProfileSerializer(profile_room)
        return Response(serializer.data)

    def put(self, request, room_id, profile_id):
        """
        Update a profile's status in a room.
        """
        profile = get_object_or_404(Profile, id=profile_id)
        room = get_object_or_404(Room, id=room_id, status=not RoomStatusEnum.deleted.value)
        if not RoomProfile.objects.filter(profile=request.user, room=room, status__in=[RoomProfileStatusEnum.owner.value, RoomProfileStatusEnum.admin.value]):
            return Response(status=403)
        profile_room = RoomProfile.objects.get(profile=profile, room=room)
        profile_room.status = request.data['status']
        profile_room.save()
        serializer = RoomProfileSerializer(profile_room)
        return Response(serializer.data)

    def delete(self, request, room_id, profile_id):
        """
        Remove a profile from a room.
        """
        profile = get_object_or_404(Profile, id=profile_id)
        room = get_object_or_404(Room, id=room_id, status=not RoomStatusEnum.deleted.value)
        if not RoomProfile.objects.filter(profile=request.user, room=room, status__in=[RoomProfileStatusEnum.owner.value, RoomProfileStatusEnum.admin.value]):
            return Response(status=403)
        profile_room = RoomProfile.objects.get(profile=profile, room=room)
        profile_room.delete()
        return Response(status=204)

class RoomProfilesView(APIView):
    """
    View for getting all profiles in a room, and creating a new profile in a room.
    """
    permission_classes = [IsAuthenticated]
    def get(self, request, room_id):
        """
        Get all profiles in a room.
        """
        room = get_object_or_404(Room, id=room_id, status=not RoomStatusEnum.deleted.value)
        if not RoomProfile.objects.filter(profile=request.user, room=room, status__in=[RoomProfileStatusEnum.owner.value, RoomProfileStatusEnum.admin.value, RoomProfileStatusEnum.member.value]):
            return Response(status=403)
        profile_rooms = RoomProfile.objects.filter(room=room)
        serializer = RoomProfileSerializer(profile_rooms, many=True)
        return Response(serializer.data)

    def post(self, request, room_id):
        """
        Add a profile to a room.
        """
        room = get_object_or_404(Room, id=room_id, status=not RoomStatusEnum.deleted.value)
        if not RoomProfile.objects.filter(profile=request.user, room=room, status__in=[RoomProfileStatusEnum.owner.value, RoomProfileStatusEnum.admin.value]):
            return Response(status=403)
        profile = Profile.objects.get(id=request.data['profile'])
        profile_room = RoomProfile.objects.create(profile=profile, room=room, status=RoomProfileStatusEnum.member.value)
        serializer = RoomProfileSerializer(profile_room)
        return Response(serializer.data)


class MessageView(APIView):
    """
    View for getting, updating, and deleting a message.
    """
    permission_classes = [IsAuthenticated]
    def get(self, request, room_id, message_id):
        """
        Get a message.
        """
        message = get_object_or_404(Message, id=message_id)
        serializer = MessageSerializer(message)
        return Response(serializer.data)

    def put(self, request, room_id, message_id):
        """
        Update a message.
        """
        message = get_object_or_404(Message, id=message_id)
        message.body = request.data['body']
        message.save()
        serializer = MessageSerializer(message)
        return Response(serializer.data)

    def delete(self, request, room_id, message_id):
        """
        Toggle the status of a message to deleted.
        """
        message = get_object_or_404(Message, id=message_id)
        message.deleted = True
        message.save()
        return Response(status=204)

class MessagesCursorPagination(CursorPagination):
    page_size = 30
    ordering = '-created_at'

class MessagesView(ListAPIView):
    """
    View for listing all messages in a room and creating a new message.
    """
    pagination_class = MessagesCursorPagination
    permission_classes = [IsAuthenticated]
    def get(self, request, room_id):
        """
        Get all messages in a room. Must be a member|admin|owner|muted of the room.
        """
        room = get_object_or_404(Room, id=room_id, status=not RoomStatusEnum.deleted.value)
        if not RoomProfile.objects.filter(profile=request.user, room=room, status__in=[RoomProfileStatusEnum.owner.value, RoomProfileStatusEnum.admin.value, RoomProfileStatusEnum.member.value, RoomProfileStatusEnum.muted.value]):
            return Response(status=403)
        messages = Message.objects.filter(room=room)
        messages = self.paginate_queryset(messages)
        serializer = MessageSerializer(messages, many=True)
        for message in serializer.data:
            message['profile'] = ProfileSerializer(Profile.objects.get(id=message['profile'])).data
        return Response(serializer.data)

    def post(self, request, room_id):
        """
        Create a message. Must be a member|admin|owner of the room.
        """
        message = Message.objects.create(
            profile=request.user,
            room_id=room_id,  # Directly use the room_id here
            body=request.data['body']
        )

        serializer = MessageSerializer(message)
        channel_data = serializer.data
        print(channel_data)
        channel_data['profile'] = ProfileSerializer(Profile.objects.get(id=channel_data['profile'])).data
        channel_data['room'] = RoomSerializer(Room.objects.get(id=channel_data['room'])).data
        room_group_name = f'chat_{room_id}'
        async_to_sync(get_channel_layer().group_send)(
            room_group_name,
            {
                'type': 'chat.message',
                'message': channel_data
            }
        )

        return Response(serializer.data)

