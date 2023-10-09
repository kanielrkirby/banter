from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from django.utils.translation import gettext_lazy as _

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        # Override default behavior to use email instead of username for authentication
        self.user = authenticate(email=attrs['email'], password=attrs['password'])
        
        # Everything else remains the same
        if self.user is None or not self.user.is_active:
            raise AuthenticationFailed(_('No active account found with the given credentials'), code='authentication')
        
        # This will return the tokens (access and refresh tokens)
        return super().validate(attrs)

