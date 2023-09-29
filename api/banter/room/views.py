from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Room, Message, ProfileRoomStatus, ProfileRoom, MessageStatus
from .serializers import RoomSerializer, MessageSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.db.models import Q
from enums import RoomStatusEnum, MessageStatusEnum

class RoomsView(generics.ListAPIView):
    """
    View for listing all rooms related to authed profile and creating a new room with authed profile as owner.
    """
    def get(self, request):
        """
        Get all rooms for a profile.
        """
        profile_id = request.user.id
        profile_rooms = ProfileRoom.objects.filter(profile=profile_id)
        serializer = RoomSerializer(profile_rooms, many=True)
        return Response(serializer.data)

    def post(self, request):
        """
        Create a room.
        """
        if not request.data['name'] or not request.user:
            return Response(status=400)
        room = Room.objects.create(name=request.data['name'], owner=request.user)
        serializer = RoomSerializer(room)
        return Response(serializer.data)

class RoomView(APIView):
    """
    View for getting, updating, and deleting a room (depending on authed profile's status in the room)
    """
    def get(self, request, room_id):
        """
        Get a room. Must be a member|admin|owner of the room.
        """
        room = Room.objects.get(id=room_id)
        if not room:
            return Response(status=404)
        if not ProfileRoom.objects.filter(profile=request.user, room=room, status__in=[ProfileRoomStatus.owner, ProfileRoomStatus.admin, ProfileRoomStatus.member]):
            return Response(status=403)
        serializer = RoomSerializer(room)
        return Response(serializer.data)

    def put(self, request, room_id):
        """
        Update a room. Must be an admin|owner of the room.
        """
        room = Room.objects.get(id=room_id)
        if not room:
            return Response(status=404)
        if not ProfileRoom.objects.filter(profile=request.user, room=room, status__in=[ProfileRoomStatus.owner, ProfileRoomStatus.admin]):
            return Response(status=403)
        room.name = request.data['name']
        room.save()
        serializer = RoomSerializer(room)
        return Response(serializer.data)

    def delete(self, request, room_id):
        """
        Delete a room.
        """
        room = Room.objects.get(id=room_id)
        if not room:
            return Response(status=404)
        if not ProfileRoom.objects.filter(profile=request.user, room=room, status__in=[ProfileRoomStatus.owner]):
            return Response(status=403)
        room.status = RoomStatuses.deleted
        return Response(status=204)

class RoomProfilesView(APIView):
    """
    View for getting all profiles in a room, adding|removing a profile from a room, and updating a profile's status in a room.
    """
    def get(self, request, room_id):
        """
        Get all profiles in a room.
        """
        profiles = ProfileRoom.objects.filter(room=room_id)
        serializer = ProfileRoomSerializer(profiles, many=True)
        return Response(serializer.data)

    def post(self, request, room_id):
        """
        Add a profile to a room.
        """
        profile = Profile.objects.get(id=request.data['profile_id'])
        room = Room.objects.get(id=room_id)
        if not profile or not room:
            return Response(status=404)
        if not ProfileRoom.objects.filter(profile=request.user, room=room, status__in=[ProfileRoomStatus.owner, ProfileRoomStatus.admin]):
            return Response(status=403)
        profile_room = ProfileRoom.objects.create(profile=profile, room=room, status=ProfileRoomStatus.member)
        serializer = ProfileRoomSerializer(profile_room)
        return Response(serializer.data)

    def delete(self, request, room_id):
        """
        Remove a profile from a room.
        """
        profile = Profile.objects.get(id=request.data['profile_id'])
        room = Room.objects.get(id=room_id)
        if not profile or not room:
            return Response(status=404)
        if not ProfileRoom.objects.filter(profile=request.user, room=room, status__in=[ProfileRoomStatus.owner, ProfileRoomStatus.admin]):
            return Response(status=403)
        profile_room = ProfileRoom.objects.get(profile=profile, room=room)
        profile_room.delete()
        return Response(status=204)

    def put(self, request, room_id):
        """
        Update a profile's status in a room.
        """
        profile = Profile.objects.get(id=request.data['profile_id'])
        room = Room.objects.get(id=room_id)
        if not profile or not room:
            return Response(status=404)
        if not ProfileRoom.objects.filter(profile=request.user, room=room, status__in=[ProfileRoomStatus.owner, ProfileRoomStatus.admin]):
            return Response(status=403)
        profile_room = ProfileRoom.objects.get(profile=profile, room=room)
        profile_room.status = request.data['status']
        profile_room.save()
        serializer = ProfileRoomSerializer(profile_room)
        return Response(serializer.data)

class ProfileRoomsView(APIView):




class MessagesView(APIView):
    """
    View for listing all messages in a room and creating a new message.
    """
    def get(self, request, room_id):
        """
        Get all messages in a room.
        """
        messages = Message.objects.filter(room=room_id)
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

    def post(self, request, room_id):
        """
        Create a message.
        """
        message = Message.objects.create(
            profile=request.user,
            room=Room.objects.get(id=room_id),
            body=request.data['body']
        )
        serializer = MessageSerializer(message)
        return Response(serializer.data)

class MessageView(APIView):
    """
    View for getting, updating, and deleting a message.
    """
    def get(self, request, room_id, message_id):
        """
        Get a message.
        """
        message = Message.objects.get(id=message_id)
        serializer = MessageSerializer(message)
        return Response(serializer.data)

    def put(self, request, room_id, message_id):
        """
        Update a message.
        """
        message = Message.objects.get(id=message_id)
        message.body = request.data['body']
        message.save()
        serializer = MessageSerializer(message)
        return Response(serializer.data)

    def delete(self, request, room_id, message_id):
        """
        Toggle the status of a message to deleted.
        """
        message = Message.objects.get(id=message_id)
        message.status = MessageStatus.objects.get(name='deleted')
        message.save()
        return Response(status=204)
