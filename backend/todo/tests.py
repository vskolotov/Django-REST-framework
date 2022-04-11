import json
from mixer.backend.django import mixer
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APITestCase
from .views import ProjectViewSet, NoteViewSet
from .models import Project
from users.models import SiteUser


class TestProjectViewSet(TestCase):
    def test_get_project_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestNotesViewSet(TestCase):
    def test_get_notes_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/notes/')
        view = NoteViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestCustomUserViewSet(TestCase):

    def test_create_project(self):
        factory = APIRequestFactory()
        request = factory.post('/api/project/', {'title': 'testproject', 'users': [1, ]}, format='json')
        admin = SiteUser.objects.create_superuser('admin@ya.ru', 'admin', 'adminadmin')
        force_authenticate(request, admin)
        view = ProjectViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_detail_user(self):
        user = SiteUser.objects.create(email='admin@ya.ru', username='admin', password='adminadmin',
                                       is_superuser=True, is_active=True)
        client = APIClient()
        response = client.get(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestViewSet(APITestCase):
    def test_get_list(self):
        response = self.client.get('/api/projects/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_mixer(self):
        project = mixer.blend(Project)
        user = SiteUser.objects.create_superuser(email='admin@ya.ru', username='admin', password='adminadmin',
                                                   first_name='admin', last_name='admin')
        self.client.login(username='admin', password='adminadmin')
        response = self.client.put(f'/api/projects/{project.id}/', {'title': 'test', 'users': ['1']})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        project = Project.objects.get(id=project.id)
        self.assertEqual(project.title, 'test')
