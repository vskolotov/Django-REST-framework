from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import GenericViewSet
from .serializers import SiteUserModelSerializer
from .models import SiteUser


class SiteUserMixinViewSet(ListModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    serializer_class = SiteUserModelSerializer
    queryset = SiteUser.objects.all()
