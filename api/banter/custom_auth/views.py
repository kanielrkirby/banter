from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView, TokenVerifyView

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:  
            access_token = response.data['access']
            refresh_token = response.data['refresh']
            response.data = {} 
            response.set_cookie('access_token', access_token, httponly=True, samesite='Lax', secure=secure) 
            response.set_cookie('refresh_token', refresh_token, httponly=True, samesite='Lax', secure=secure)
            response.data['id'] = request.user.id
        return response

class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        request.data['refresh'] = request.COOKIES.get('refresh_token')
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            access_token = response.data['access']
            response.data = {}  
            response.set_cookie('access_token', access_token, httponly=True, samesite='Lax', secure=secure) 
            response.data['id'] = request.user.id
        else:
            return TokenDiscardView().post(request, *args, **kwargs)
        return response

class TokenDiscardView(APIView):
    def post(self, request, *args, **kwargs):
        response = Response()
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')
        return response
