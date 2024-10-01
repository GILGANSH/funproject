from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import GeneralSerializer
# Create your views here.


def StartPage(request):
    return render(request, 'index.html')



class GeneralSerializerViews(APIView):

    def get(self, request):
        pass

    def post(self, request):
        """Обработка POST-запроса от axios"""
        # 1. Создайте сериализатор с полученными данными
        serializer = GeneralSerializer(data=request.data)
        
        # 2. Проверьте, валидны ли данные
        if serializer.is_valid():
            serializer.save()  # Сохраните данные в БД, если требуется
            return Response({"message": "Данные получены и обработаны"})
        else:
            return Response(serializer.errors, status=400) 