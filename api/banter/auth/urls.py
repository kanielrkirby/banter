from django.urls import path
from .views import ProfileAuthView, ProfileLogoutView

urlpatterns = [
    path('token/obtain/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', ProfileLogoutView.as_view()),
]
