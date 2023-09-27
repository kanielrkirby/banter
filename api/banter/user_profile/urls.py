from django.urls import path
from .views import ProfilesView, ProfileView, ProfileRelationView, ProfileAuthView
from django.http import HttpResponse

urlpatterns = [
    path('', ProfilesView.as_view()),
    path('<uuid:profile_id>/', ProfileView.as_view()),
    path('related/', ProfileRelationView.as_view()),
    path('auth/', ProfileAuthView.as_view()),
]
