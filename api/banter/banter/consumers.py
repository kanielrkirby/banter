import json
import uuid
from channels.layers import get_channel_layer
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.apps import apps

class WSConsumer(AsyncWebsocketConsumer):
    user_channels = {}

    async def connect(self):
        print("Trying to connect")
        user = self.scope.get('user')
        if user and user.is_authenticated:
            print("Connected")
            self.user_channels[user.id] = self.channel_name
            await self.add_friend_request_group(user.id)
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

    async def add_friend_request_group(self, profile_id):
        await self.channel_layer.group_add(
            f'friend_request_{profile_id}',
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        print("Received")
        print(text_data_json)
        event_type = text_data_json['type']
        if event_type == 'chat_message':
            await self.handle_chat_message(text_data_json)
        elif event_type == 'friend_request':
            await self.handle_friend_request(text_data_json)
        else:
            print("Unknown event type")

    async def handle_chat_message(self, data):
        message = data['message']
        room_uuid = data['room_uuid']

        if self.scope["user"].is_authenticated:
            await self.channel_layer.group_send(
                f'chat_{room_uuid}',
                {
                    'type': 'chat_message',
                    'message': message
                }
            )

    async def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))

    async def handle_friend_request(self, data):
        friend_request = data['friend_request']
        if not friend_request:
            return
        recipient_channel_name = self.user_channels.get(friend_request['to_profile_id'])
        if not recipient_channel_name:
            return
        await self.channel_layer.send(
            recipient_channel_name,
            {
                'type': 'friend_request',
                'friend_request': friend_request
            }
        )

    async def friend_request(self, event):
        print("Sending friend request_ _ _ _ _")
        print(event)
        friend_request = event['friend_request']
        await self.send(text_data=json.dumps({
            'friend_request': friend_request
        }))

