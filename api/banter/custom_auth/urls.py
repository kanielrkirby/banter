from django.urls import path
from .views import CustomTokenObtainPairView, CustomTokenRefreshView, CustomTokenDiscardView, PublicProfileSelfView

urlpatterns = [
    path('token/obtain/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('token/discard/', CustomTokenDiscardView.as_view(), name='token_discard'),
    path('profile/', PublicProfileSelfView.as_view(), name='profile'),
]
