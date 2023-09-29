from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView, TokenVerifyView
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from rest_framework.permissions import IsAuthenticated, AllowAny
from user_profile.models import Profile, ProfileRelation, ProfileRelationStatus, ProfileStatus
from user_profile.serializers import ProfileSerializer, ProfileRelationStatusSerializer, ProfileRelationSerializer
import os

secure = os.environ.get('SECURE', False)


class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:  
            access_token = response.data['access']
            refresh_token = response.data['refresh']
            response.data = {} 
            response.set_cookie('access_token', access_token, httponly=True, samesite='Lax', secure=secure) 
            response.set_cookie('refresh_token', refresh_token, httponly=True, samesite='Lax', secure=secure)
            response.data['user'] = BaseProfileSelfView().get(request).data
        else:
            return TokenDiscardView().post(request, *args, **kwargs)
        return response

class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        request.data['refresh'] = request.COOKIES.get('refresh_token')
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            access_token = response.data['access']
            response.data = {}  
            response.set_cookie('access_token', access_token, httponly=True, samesite='Lax', secure=secure) 
            response.data['user'] = BaseProfileSelfView().get(request).data
        else:
            return TokenDiscardView().post(request, *args, **kwargs)
        return response

class CustomTokenDiscardView(APIView):
    def post(self, request, *args, **kwargs):
        response = Response()
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')
        return response

class BaseProfileSelfView(APIView):
    """
    Base View for getting, updating, and deleting the current user's profile.
    """
    permission_classes = []
    def get(self, request):
        """
        Get the current user's profile.
        """
        profile = request.user
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request):
        """
        Update the current user's profile.
        """
        profile = request.user
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def delete(self, request):
        """
        Delete the current user's profile.
        """
        profile = request.user
        profile.status = ProfileStatus.objects.get(name='deleted')
        profile.save()
        return Response(status=204)

class PublicProfileSelfView(APIView):
    """
    Public View for getting the current user's profile. Must be authenticated.
    """
    permission_classes = [IsAuthenticated]
    def get(self, request):
        """
        Get the current user's profile.
        """
        return BaseProfileSelfView().get(request)
