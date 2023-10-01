from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _
import uuid
from django.db.models.signals import post_migrate
from django.dispatch import receiver
from .enums import ProfileRelationStatusEnum, ProfileStatusEnum

class ProfileManager(BaseUserManager):
    def create_user(self, username, email, status, password=None, **extra_fields):
        """
        Create and return a regular user with the given username and password.
        """
        if not username:
            raise ValueError('The Username field must be set')
        if not email:
            raise ValueError('The Email field must be set')
        user = self.model(username=username, email=email, status=status, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        """
        Create and return a superuser with the given username and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, email, password, **extra_fields)

    def get_by_natural_key(self, username):
        return self.get(username=username)

class Profile(AbstractBaseUser, PermissionsMixin):
    """
    Represents a user profile.
    Fields:
        id: the unique identifier of the profile
        username: the username of the profile
        email: the email of the profile
        password: the password of the profile
        created_at: the date and time the profile was created
        updated_at: the date and time the profile was last updated
        status: the status of the profile [active, offline, busy, deleted]
    """
    objects = ProfileManager()
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(_('email address'), unique=True)
    password = models.CharField(_('password'), max_length=128, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=20, choices=[(tag.name, tag.value) for tag in ProfileStatusEnum])

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
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
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=20, choices=[(tag.name, tag.value) for tag in ProfileRelationStatusEnum])

    class Meta:
        unique_together = ['requester_profile', 'receiver_profile']
        ordering = ['requester_profile', 'receiver_profile']

    def __str__(self):
        return f"{self.requester_profile.username} - {self.receiver_profile.username} - {self.status.name}"

