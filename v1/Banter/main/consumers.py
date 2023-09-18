import json
from channels.generic.websocket import AsyncWebsocketConsumer
import asyncio

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.id = self.scope['url_route']['kwargs']['id']
        await self.channel_layer.group_add(
            self.room_id,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_id,
            self.channel_name
        )

    async def receive(self, text_data):
        try:
            text_data_json = json.loads(text_data)
            message = text_data_json.get('message', '') 

            if not message:
                raise ValueError("Message content is empty.")

            await self.channel_layer.group_send(
                self.room_id,
                {
                    'type': 'chat_message',
                    'message': message
                }
            )
        except json.JSONDecodeError:
            await self.send(text_data=json.dumps({
                'error': 'Invalid JSON format.'
            }))
        except ValueError as e:
            await self.send(text_data=json.dumps({
                'error': str(e)
            }))


    async def chat_message(self, event):
        message = event['message']

        await self.send(text_data=json.dumps({
            'message': message
        }))
