from django.db import models
from django.db.models import Q
from .enums import RoomProfileStatusEnum
import uuid

class Room(models.Model):
    """
    Represents a chat or discussion room.
    Fields:
        name: the name of the room
        created_at: the date and time the room was created
        updated_at: the date and time the room was last updated
    """
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
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
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    profile = models.ForeignKey('user_profile.Profile', on_delete=models.CASCADE, related_name='messages')
    room = models.ForeignKey('room.Room', on_delete=models.CASCADE, related_name='messages')
    body = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        self.room.updated_at = timezone.now()
        self.room.save()
        super().save(*args, **kwargs)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.profile.username}: {self.body[:50]}..." 

class RoomProfile(models.Model):
    """
    Represents the relationship between a room and a profile.
    Fields:
        room: the room
        profile: the profile
        status: the status of the relationship [member, admin, owner]
    """
    room = models.ForeignKey('room.Room', on_delete=models.CASCADE, related_name='room_profiles')
    profile = models.ForeignKey('user_profile.Profile', on_delete=models.CASCADE, related_name='room_profiles')
    status = models.CharField(max_length=20, choices=[(tag.name, tag.value) for tag in RoomProfileStatusEnum])

    class Meta:
        unique_together = ['room', 'profile']
        ordering = ['room', 'profile']

    def room_updated_at_proxy(self):
        return self.requester_profile.updated_at

    def __str__(self):
        return f"{self.room.name} - {self.profile.username} - {self.status.name}"


