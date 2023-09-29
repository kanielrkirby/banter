from django.urls import path
from .views import Login, Refresh, Logout, PublicProfileSelfView

urlpatterns = [
    path('login/', Login.as_view(), name='token_obtain_pair'),
    path('refresh/', Refresh.as_view(), name='token_refresh'),
    path('logout/', Logout.as_view(), name='token_discard'),
    path('profile/', PublicProfileSelfView.as_view(), name='profile'),
]
