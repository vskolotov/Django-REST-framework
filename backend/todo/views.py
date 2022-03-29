from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectModelSerializer, NoteModelSerializer
from .models import Project, Note


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class NoteLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectViewSet(ModelViewSet):
    serializer_class = ProjectModelSerializer
    queryset = Project.objects.all()
    pagination_class = ProjectLimitOffsetPagination

    def get_queryset(self):
        title = self.request.query_params.get('title', '')
        projects = Project.objects.all()
        if title:
            projects = projects.filter(title__contains=title)
        return projects


class NoteViewSet(ModelViewSet):
    serializer_class = NoteModelSerializer
    queryset = Note.objects.all()
    pagination_class = NoteLimitOffsetPagination

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()

    def get_queryset(self):
        text = self.request.query_params.get('text', '')
        notes = Note.objects.all()
        if text:
            notes = notes.filter(text__contains=text)
        return notes
