# path: banter/room/urls.py
from django.urls import path
from .views import RoomView, MessagesView, MessageView, RoomProfilesView, RoomProfileView

urlpatterns = [
    path('', RoomView.as_view(), name='room-list'),
    path('<uuid:room_id>/', RoomView.as_view(), name='room-detail'),
    path('<uuid:room_id>/messages/', MessagesView.as_view(), name='room-messages-list'),
    path('<uuid:room_id>/message/<uuid:message_id>/', MessageView.as_view(), name='room-message-detail'),
    path('<uuid:room_id>/profiles/', RoomProfilesView.as_view(), name='room-profiles-list'),
    path('<uuid:room_id>/profile/<uuid:profile_id>/', RoomProfileView.as_view(), name='room-profile-detail'),
]
