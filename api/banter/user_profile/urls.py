from django.urls import path
from .views import SelfView, ProfileView, ProfileRelationView, ProfileRelationsView, ProfileRoomView, ProfileRoomsView
from django.http import HttpResponse

urlpatterns = [
    path('self/', SelfProfileView.as_view(), name='self-profile'),
    path('relations/', ProfileRelationsView.as_view(), name='profile-relations-list'),
    path('relation/<uuid:profile_id>/', ProfileRelationView.as_view(), name='profile-relation-detail'),
    path('rooms/', ProfileRoomsView.as_view(), name='profile-rooms-list'),
    path('room/<uuid:room_id>/', ProfileRoomView.as_view(), name='profile-room-detail'),
    path('<uuid:profile_id>/', ProfileView.as_view(), name='profile-detail'),
]
