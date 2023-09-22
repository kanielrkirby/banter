from django.db import models

class ProfileRoomStatus(models.Model):
    """
    Represents the status of a profile within a room.
    Fields:
        name: the name of the status [owner, admin, member, muted, banned, ignored]
    """
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

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

class ProfileRoom(models.Model):
    """
    Represents the relationship between profiles and rooms, 
    capturing the status of a profile in a given room.
    Fields:
        profile: the profile
        room: the room
        status: the status of the profile in the room
    """
    profile = models.ForeignKey('Profile', on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    status = models.ForeignKey(ProfileRoomStatus, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['profile', 'room']
        ordering = ['room', 'status']

    def __str__(self):
        return f"{self.profile.name} - {self.room.name} - {self.status.name}"

