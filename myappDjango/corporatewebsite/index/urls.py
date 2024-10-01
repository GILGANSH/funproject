from django.urls import path
from .views import StartPage, GeneralSerializerViews

# Здесь описывается url для index

urlpatterns = [
    path('', StartPage),
    path('api/sendingdata', GeneralSerializerViews.as_view()),
]
