from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _
import uuid
from django.db.models.signals import post_migrate
from django.dispatch import receiver
from enum import Enum
from .enums import ProfileRelationStatus, ProfileStatus, ProfileRoomStatus


class ProfileManager(BaseUserManager):
    """
    Manager for the Profile model.
    """
    def create_user(self, username, password):
        """
        Create a user.
        """
        if not username:
            raise ValueError('Users must have a username.')
        
        if not password:
            raise ValueError('Users must have a password.')

        user = self.model(username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password):
        """
        Create a superuser.
        """
        user = self.create_user(username, password=password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class Profile(AbstractBaseUser, PermissionsMixin):
    """
    Represents a user profile.
    Fields:
        id: the unique identifier of the profile
        username: the username of the profile
        password: the password of the profile
        created_at: the date and time the profile was created
        updated_at: the date and time the profile was last updated
        status: the status of the profile [active, offline, busy, deleted]
    """
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(_('password'), max_length=128, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=20, choices=[(tag.name, tag.value) for tag in ProfileStatus])

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = ProfileManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = [
        'username',
        'password',
    ]

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.username

class ProfileRelation(models.Model):
    """
    Represents the relationship between two profiles.
    Fields:
        requester_profile: the profile that initiated the relationship
        receiver_profile: the profile that received the relationship
        status: the status of the relationship [friend, requested, received, blocked, ignored, rejected]
    """
    requester_profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='requester_relations')
    receiver_profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='receiver_relations')
    status = models.CharField(max_length=20, choices=[(tag.name, tag.value) for tag in ProfileRelationStatus])

    class Meta:
        unique_together = ['requester_profile', 'receiver_profile']
        ordering = ['requester_profile', 'receiver_profile']

    def __str__(self):
        return f"{self.requester_profile.username} - {self.receiver_profile.username} - {self.status.name}"

class ProfileRoom(models.Model):
    """
    Represents the relationship between profiles and rooms, 
    capturing the status of a profile in a given room.
    Fields:
        profile: the profile
        room: the room
        status: the status of the profile in the room [owner, admin, member, muted, banned, ignored]
    """
    profile = models.ForeignKey('user_profile.Profile', on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=[(tag.name, tag.value) for tag in ProfileRoomStatus])

    class Meta:
        unique_together = ['profile', 'room']

    def __str__(self):
        return f"{self.profile.name} - {self.room.name} - {self.status.name}"
