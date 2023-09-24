from django.db import models

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

class ProfileRoomStatus(models.Model):
    """
    Represents the status of a profile within a room.
    Fields:
        name: the name of the status [owner, admin, member, muted, banned, ignored]
    """
    name = models.CharField(max_length=20, unique=True)

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
    profile = models.ForeignKey('user_profile.Profile', on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    status = models.ForeignKey(ProfileRoomStatus, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['profile', 'room']
        ordering = ['room', 'status']

    def __str__(self):
        return f"{self.profile.name} - {self.room.name} - {self.status.name}"

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

class MessageStatus(models.Model):
    """
    Represents the status of a message (e.g., sent, received, delivered, read, ignored, deleted).
    Fields:
        name: the name of the status [sent, received, delivered, read, ignored, deleted]
    """
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

class ProfileMessageStatus(models.Model):
    """
    Represents the status of a message for a profile (e.g., read, delivered, etc.).
    Fields:
        name: the name of the status [sent, received, delivered, read, ignored, deleted]
    """
    name = models.CharField(max_length=20, unique=True)

    class Meta:
        verbose_name_plural = 'Profile Message Statuses'

    def __str__(self):
        return self.name

class ProfileMessageStatusMapping(models.Model):
    """
    Represents the mapping between a profile, a message, and the message's status for that profile.
    Fields:
        profile: the profile
        message: the message
        status: the status of the message for the profile
    """
    profile = models.ForeignKey('user_profile.Profile', on_delete=models.CASCADE, related_name='message_statuses')
    message = models.ForeignKey(Message, on_delete=models.CASCADE, related_name='profile_statuses')
    status = models.ForeignKey(ProfileMessageStatus, on_delete=models.CASCADE, related_name='messages')

    class Meta:
        unique_together = ['profile', 'message']
        verbose_name = 'Profile Message Status Mapping'
        verbose_name_plural = 'Profile Message Status Mappings'

    def __str__(self):
        return f"{self.profile.name} - {self.message.id} - {self.status.name}"


