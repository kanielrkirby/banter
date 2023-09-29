from enum import Enum

class ProfileMessageStatusEnum(Enum):
    """
    Enum for the status of a message for a profile.
    Fields:
        sent: the message has been sent
        received: the message has been received
        delivered: the message has been delivered
        read: the message has been read
        ignored: the message has been ignored
        deleted: the message has been deleted
    """
    sent = 1
    received = 2
    delivered = 3
    read = 4
    ignored = 5
    deleted = 6

class RoomStatusEnum(Enum):
    """
    Enum for the status of a room (e.g., active, inactive, deleted).
    Fields:
        active: the room is active
        deleted: the room is deleted
    """
    active = 1
    deleted = 1

class RoomProfileStatus(Enum):
    """
    Enum for the status of a profile in a room.
    Fields:
        owner: the profile is the owner of the room
        admin: the profile is an admin of the room
        member: the profile is a member of the room
        muted: the profile is muted in the room
        banned: the profile is banned from the room
        ignored: the profile is ignored from joining the room
    """
    owner = 1
    admin = 2
    member = 3
    muted = 4
    banned = 5
    ignored = 6
