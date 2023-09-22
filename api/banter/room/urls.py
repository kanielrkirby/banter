# path: banter/room/urls.py
from django.urls import path
from .views import RoomsView, RoomView, MessagesView, MessageView

urlpatterns = [
    path('', RoomsView.as_view()),
    path('<uuid:room_id>/', RoomView.as_view()),
    path('<uuid:room_id>/messages/', MessagesView.as_view()),
    path('<uuid:room_id>/messages/<uuid:message_id>/', MessageView.as_view()),
]
