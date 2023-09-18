from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from main import consumers

websocket_urlpatterns = [
    path('ws/chat/<uuid:room_id>/', consumers.ChatConsumer.as_asgi()),
]

application = ProtocolTypeRouter({
    'websocket': URLRouter(websocket_urlpatterns),
})

