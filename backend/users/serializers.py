from rest_framework.serializers import ModelSerializer
from .models import SiteUser


class SiteUserModelSerializer(ModelSerializer):
    class Meta:
        model = SiteUser
        fields = ['email', 'username', 'first_name', 'last_name']


class SiteUserModelSerializerV2(ModelSerializer):
    class Meta:
        model = SiteUser
        fields = ['email', 'username', 'first_name', 'last_name', 'is_superuser', 'is_staff']
