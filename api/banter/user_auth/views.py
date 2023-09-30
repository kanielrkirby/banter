from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from user_profile.models import Profile
from user_profile.serializers import ProfileSerializer
from user_profile.enums import ProfileStatusEnum
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.tokens import AccessToken
import os

secure = os.environ.get('SECURE', False)

class TokenDiscardView(APIView):
    """
    View for discarding a profile's access token.
    """
    permission_classes = []
    def post(self, request, *args, **kwargs):
        response = Response()
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')
        return response

class Signup(generics.CreateAPIView):
    """
    View for creating a new profile.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = []
    def post(self, request, *args, **kwargs):
        profile = Profile.objects.create_user(username=request.data['username'], password=request.data['password'], status=ProfileStatusEnum.offline.name)
        response = super().post(request, *args, **kwargs)
        if response.status_code >= 200 and response.status_code < 300:
            response.data = {} 
        return response

class Login(TokenObtainPairView):
    """
    View for logging in a profile.
    """
    permission_classes = []
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:  
            access_token = response.data['access']
            refresh_token = response.data['refresh']
            response.data = {} 
            response.set_cookie('access_token', access_token, httponly=True, samesite='Lax', secure=secure) 
            response.set_cookie('refresh_token', refresh_token, httponly=True, samesite='Lax', secure=secure)
            response.data['user'] = ProfileSerializer(Profile.objects.get(id=AccessToken(access_token).payload['user_id'])).data
        else:
            return TokenDiscardView().post(request, *args, **kwargs)
        return response

class Refresh(TokenRefreshView):
    """
    View for refreshing a profile's access token.
    """
    permission_classes = []
    def post(self, request, *args, **kwargs):
        request.data['refresh'] = request.COOKIES.get('refresh_token')
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            access_token = response.data['access']
            response.data = {}  
            response.set_cookie('access_token', access_token, httponly=True, samesite='Lax', secure=secure) 
            response.data['user'] = ProfileSerializer(Profile.objects.get(id=AccessToken(access_token).payload['user_id'])).data
        else:
            return TokenDiscardView().post(request, *args, **kwargs)
        return response

class Logout(APIView):
    """
    View for logging out a profile.
    """
    permission_classes = []
    def post(self, request, *args, **kwargs):
        response = Response()
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')
        return response

