from django.urls import path
from .views import StartPage

# Здесь описывается url для index

urlpatterns = [
    path('', StartPage),
]
