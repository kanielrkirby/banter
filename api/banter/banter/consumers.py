import json
import uuid
from channels.layers import get_channel_layer
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.apps import apps

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print("Trying to connect")
        if self.scope.get('user'):
            print("Connected")
            await self.accept()
        else:
            print("Rejected")
            await self.close()

    async def disconnect(self, close_code):
        print("Disconnected")
        pass

    async def add_user_to_room(self, room_uuid):
        await self.channel_layer.group_add(
            f'chat_{room_uuid}',
            self.channel_name
        )

    async def remove_user_from_room(self, room_uuid):
        await self.channel_layer.group_discard(
            f'chat_{room_uuid}',
            self.channel_name
        )

    async def receive(self, text_data):
        print(f"Received message: {text_data}")
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        room_uuid = text_data_json['room_uuid']

        if self.scope["user"].is_authenticated:
            await self.channel_layer.group_send(
                f'chat_{room_uuid}',
                {
                    'type': 'chat.message',
                    'message': message
                }
            )

    async def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))

