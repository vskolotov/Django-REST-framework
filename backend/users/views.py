from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import GenericViewSet
from .serializers import SiteUserModelSerializer, SiteUserModelSerializerV2
from .models import SiteUser


class SiteUserMixinViewSet(ListModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = SiteUser.objects.all()

    def get_serializer_class(self):
        if self.request.version == '2.0':
            return SiteUserModelSerializerV2
        return SiteUserModelSerializer
