import json
import uuid
from channels.layers import get_channel_layer
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.apps import apps

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print("Trying to connect")
        self.room_uuid = self.scope['url_route']['kwargs']['room_id']
        self.room_group_name = f'chat_{self.room_uuid}'

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        if self.scope.get('user'):
            print("Connected")
            await self.accept()
        else:
            print("Rejected")
            await self.close()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        print(f"Received message: {text_data}")
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        if self.scope["user"].is_authenticated:
            # Save the message to your database
            await self.save_message(message)

            # Send the message to the room group
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'chat.message',
                    'message': message
                }
            )

    async def chat_message(self, event):
        # Send the message to the WebSocket
        message = event['message']
        await self.send(text_data=json.dumps({
            'message': message
        }))

