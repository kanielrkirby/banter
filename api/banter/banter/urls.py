"""
URL configuration for banter project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
import os
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

secure = os.getenv('DJANGO_SECURE') or True

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
from rest_framework_simplejwt.views import TokenRefreshView

class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        request.data['refresh'] = request.COOKIES.get('refresh_token')
        
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            access_token = response.data['access']
            response.data = {}  
            response.set_cookie('access_token', access_token, httponly=True, samesite='Lax', secure=secure) 
            response.data['id'] = request.user.id
        return response


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/profile/', include('user_profile.urls')),
    path('api/room/', include('room.urls')),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
]
