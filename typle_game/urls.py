from django.urls import path
from . import views

urlpatterns = [
    path('typle_game/', views.typle_game, name='typle_game'),
    path('new_game/', views.new_game, name='new_game'),
]