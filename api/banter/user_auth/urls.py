from django.urls import path
from .views import Signup, Login, Refresh, Logout

urlpatterns = [
    path('signup/', Signup.as_view(), name='signup'),
    path('login/', Login.as_view(), name='token_obtain_pair'),
    path('refresh/', Refresh.as_view(), name='token_refresh'),
    path('logout/', Logout.as_view(), name='token_discard'),
]
