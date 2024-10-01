from rest_framework import serializers
from .models import PokaBezNazvania

class GeneralSerializer(serializers.ModelSerializer):
    class Meta:
        model = PokaBezNazvania
        fields = '__all__'