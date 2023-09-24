from rest_framework import serializers
from .models import Profile, ProfileRelationStatus, ProfileRelation

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ProfileRelationStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileRelationStatus
        fields = '__all__'


class ProfileRelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileRelation
        fields = '__all__'


