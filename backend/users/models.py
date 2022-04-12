from django.db import models
from django.contrib.auth.models import AbstractUser


class SiteUser(AbstractUser):
    ADMINISTRATOR = 'admin'
    MANAGER = 'manager'
    DEVELOPER = 'dev'
    USER = 'user'

    ROLE_CHOICES = (
        (ADMINISTRATOR, 'Администратор'),
        (MANAGER, 'Менеджер проекта'),
        (DEVELOPER, 'Разработчик'),
        (USER, 'Пользователь')
    )
    email = models.CharField(max_length=64, unique=True)
    username = models.CharField(max_length=64, unique=True)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    date_joined = models.DateTimeField(verbose_name='registered', auto_now_add=True)
    rule = models.CharField(verbose_name='rule', max_length=64, choices=ROLE_CHOICES, default=USER)
