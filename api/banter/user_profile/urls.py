from django.urls import path
from .views import SelfProfileView, ProfileView, ProfileRelationView, ProfileRelationsView, ProfileRoomView, ProfileRoomsView, ProfileFriendRoomView, ProfileFriendsView
from django.http import HttpResponse

urlpatterns = [
    path('self/', SelfProfileView.as_view(), name='self-profile'),
    path('relations/', ProfileRelationsView.as_view(), name='profile-relations-list'),
    path('relation/<uuid:profile_id>/', ProfileRelationView.as_view(), name='profile-relation-detail'),
    path('rooms/', ProfileRoomsView.as_view(), name='profile-rooms-list'),
    path('room/<uuid:room_id>/', ProfileRoomView.as_view(), name='profile-room-detail'),
    path('<uuid:profile_id>/', ProfileView.as_view(), name='profile-detail'),
    path('friend-room/', ProfileFriendRoomView.as_view(), name='profile-friend-room'),
    path('friends/', ProfileFriendsView.as_view(), name='profile-friends-list')
]
