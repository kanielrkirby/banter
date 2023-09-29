from django.urls import path
from .views import CustomTokenObtainPairView, CustomTokenRefreshView, TokenDiscardView

urlpatterns = [
    path('token/obtain/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('token/discard/', CustomTokenDiscard.as_view(), name='token_discard'),
]
