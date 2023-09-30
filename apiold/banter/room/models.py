from django.db import models
from django.db.models import Q
from .enums import RoomStatusEnum, ProfileMessageStatusEnum

class Room(models.Model):
    """
    Represents a chat or discussion room.
    Fields:
        name: the name of the room
        created_at: the date and time the room was created
        updated_at: the date and time the room was last updated
    """
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name


class Message(models.Model):
    """
    Represents a message sent by a profile in a specific room.
    Fields:
        id: the unique identifier of the message
        profile: the profile that sent the message
        room: the room in which the message was sent
        body: the body of the message
        created_at: the date and time the message was created
        updated_at: the date and time the message was last updated
    """
    id = models.UUIDField(primary_key=True, editable=False)
    profile = models.ForeignKey('user_profile.Profile', on_delete=models.CASCADE, related_name='messages')
    room = models.ForeignKey('room.Room', on_delete=models.CASCADE, related_name='messages')
    body = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.profile.name}: {self.body[:50]}..."  # Displaying the first 50 chars of the message

class ProfileMessage(models.Model):
    """
    Represents the mapping between a profile, a message, and the message's status for that profile.
    Fields:
        profile: the profile
        message: the message
        status: the status of the message for the profile 
    """
    profile = models.ForeignKey('user_profile.Profile', on_delete=models.CASCADE, related_name='message_statuses')
    message = models.ForeignKey(Message, on_delete=models.CASCADE, related_name='profile_statuses')
    status = models.CharField(max_length=20, choices=[(tag.name, tag.value) for tag in ProfileMessageStatusEnum])

    class Meta:
        unique_together = ['profile', 'message']

    def __str__(self):
        return f"{self.profile.name} - {self.message.id} - {self.status.name}"
