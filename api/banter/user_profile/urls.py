from django.urls import path
from .views import ProfilesView, ProfileView, ProfileSelfRelationView, ProfileAddFriendView, ProfileSelfFriendView
from django.http import HttpResponse

urlpatterns = [
    path('', ProfilesView.as_view()),
    path('add/<str:id>/', ProfileAddFriendView.as_view()),
    path('<uuid:profile_id>/', ProfileView.as_view()),
    path('related/', ProfileSelfRelationView.as_view()),
    path('friend/', ProfileSelfFriendView.as_view()),
]
