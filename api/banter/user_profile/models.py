from django.db import models

class ProfileRelationStatus(models.Model):
    """
    Represents the status of a profile relation (e.g., friend, requested, received, blocked, ignored).
    Fields:
        name: the name of the status [friend, requested, received, blocked, ignored]
    """
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

class Profile(models.Model):
    """
    Represents a user profile.
    Fields:
        id: the unique identifier of the profile
        username: the username of the profile
        hashed_password: the hashed password of the profile
        created_at: the date and time the profile was created
        updated_at: the date and time the profile was last updated
        status: the status of the profile
    """
    id = models.UUIDField(primary_key=True, editable=False)
    username = models.CharField(max_length=100)
    hashed_password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.ForeignKey(ProfileRelationStatus, on_delete=models.CASCADE)

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
