from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from backend.users.models import SiteUser
import json
import os

JSON_PATH = 'users\json'


def load_from_json(file_name):
    print(os.getcwd())
    with open(os.path.join(JSON_PATH, file_name + '.json'), 'r', encoding='utf-8') as infile:
        return json.load(infile)


class Command(BaseCommand):
    def handle(self, *args, **options):
        users = load_from_json('users')

        SiteUser.objects.all().delete()
        for user in users:
            new_user = SiteUser(**user)
            new_user.save()

        User.objects.create_superuser(username='admin', email='admin@ya.ru', password='adminadmin')
