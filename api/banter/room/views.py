from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Room, Message, ProfileRoomStatus, ProfileRoom, MessageStatus
from .serializers import RoomSerializer, MessageSerializer

class RoomsView(generics.ListAPIView):
    """
    View for listing all rooms.
    """
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class RoomView(APIView):
    """
    View for getting, creating, updating, and deleting a room.
    """
    def get(self, request, room_id):
        """
        Get a room.
        """
        room = Room.objects.get(id=room_id)
        serializer = RoomSerializer(room)
        return Response(serializer.data)

    def post(self, request, room_id):
        """
        Create a room.
        """
        room = Room.objects.create(name=request.data['name'])
        serializer = RoomSerializer(room)
        return Response(serializer.data)

    def put(self, request, room_id):
        """
        Update a room.
        """
        room = Room.objects.get(id=room_id)
        room.name = request.data['name']
        room.save()
        serializer = RoomSerializer(room)
        return Response(serializer.data)

    def delete(self, request, room_id):
        """
        Delete a room.
        """
        room = Room.objects.get(id=room_id)
        room.delete()
        return Response(status=204)

class MessagesView(APIView):
    """
    View for listing all messages in a room.
    """
    def get(self, request, room_id):
        """
        Get all messages in a room.
        """
        messages = Message.objects.filter(room=room_id)
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

class MessageView(APIView):
    """
    View for getting, creating, updating, and deleting a message.
    """
    def get(self, request, room_id, message_id):
        """
        Get a message.
        """
        message = Message.objects.get(id=message_id)
        serializer = MessageSerializer(message)
        return Response(serializer.data)

    def post(self, request, room_id):
        """
        Create a message.
        """
        message = Message.objects.create(
            profile=request.data['profile'],
            room=request.data['room'],
            body=request.data['body'],
        )
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
