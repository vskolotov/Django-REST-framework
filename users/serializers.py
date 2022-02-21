from rest_framework.serializers import ModelSerializer
from .models import SiteUser


class SiteUserModelSerializer(ModelSerializer):
    class Meta:
        model = SiteUser
        fields = '__all__'
