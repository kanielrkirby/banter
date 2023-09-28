from django.urls import path
from .views import ProfilesView, ProfileView, ProfileSelfRelationView, ProfileAuthView, ProfileLogoutView
from django.http import HttpResponse

urlpatterns = [
    path('', ProfilesView.as_view()),
    path('<uuid:profile_id>/', ProfileView.as_view()),
    path('related/', ProfileSelfRelationView.as_view()),
    path('auth/', ProfileAuthView.as_view()),
    path('logout/', ProfileLogoutView.as_view()),
]
