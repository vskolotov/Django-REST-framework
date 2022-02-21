from rest_framework.viewsets import ModelViewSet
from .serializers import SiteUserModelSerializer
from .models import SiteUser


class SiteUserViewSet(ModelViewSet):
    serializer_class = SiteUserModelSerializer
    queryset = SiteUser.objects.all()
