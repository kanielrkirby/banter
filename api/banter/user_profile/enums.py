class ProfileStatus(Enum):
    """
    Enum for the status of a profile.
    Fields:
        offline: the profile is offline
        active: the profile is active
        busy: the profile is busy
        deleted: the profile is deleted
    """
    offline = 1
    active = 2
    busy = 3
    deleted = 4

class ProfileRelationStatus(Enum):
    """
    Enum for the status of a profile relation.
    Fields:
        friend: the profile is a friend
        requested: the profile has requested to be a friend with another profile
        received: the profile has received a friend request from another profile
        blocked: the profile has blocked another profile
        ignored: the profile has ignored another profile
        rejected: the profile has rejected another profile
    """
    friend = 1
    requested = 2
    received = 3
    blocked = 4
    ignored = 5
    rejected = 6

class ProfileRoomStatus(Enum):
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

