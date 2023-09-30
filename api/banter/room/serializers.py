from rest_framework import serializers
from .models import Room, Message, RoomProfile


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class RoomProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomProfile
        fields = '__all__'
