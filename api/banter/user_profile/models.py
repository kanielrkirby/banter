from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _
import uuid
from django.db.models.signals import post_migrate
from django.dispatch import receiver


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

class ProfileRelationStatus(models.Model):
    """
    Represents the status of a profile relation (e.g., friend, requested, received, blocked, ignored).
    Fields:
        name: the name of the status [friend, requested, received, blocked, ignored]
    """
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

@receiver(post_migrate)
def populate_default_profile_relation_statuses(sender, **kwargs):
    statuses = ['friend', 'requested', 'received', 'blocked', 'ignored']
    for status in statuses:
        ProfileRelationStatus.objects.get_or_create(name=status)


class ProfileStatus(models.Model):
    """
    Represents the status of a profile.
    Fields:
        id: the id of the status
        name: the name of the status [active, offline, busy, deleted]
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

@receiver(post_migrate)
def populate_default_statuses(sender, **kwargs):
    statuses = ['active', 'offline', 'busy', 'deleted']
    for status in statuses:
        ProfileStatus.objects.get_or_create(name=status)

class Profile(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(_('password'), max_length=128, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.ForeignKey(ProfileStatus, default=2, on_delete=models.CASCADE)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = ProfileManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

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
        status: the status of the relationship
    """
    requester_profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='requester_relations')
    receiver_profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='receiver_relations')
    status = models.ForeignKey(ProfileRelationStatus, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['requester_profile', 'receiver_profile']
        ordering = ['requester_profile', 'receiver_profile']

    def __str__(self):
        return f"{self.requester_profile.username} - {self.receiver_profile.username} - {self.status.name}"
