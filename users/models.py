from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser


class SiteUser(AbstractBaseUser):
    ADMINISTRATOR = 'admin'
    MANAGER = 'manager'
    DEVELOPER = 'dev'
    USER = 'user'

    ROLE_CHOICES = (
        (ADMINISTRATOR, 'Администратор'),
        (MANAGER, 'Менеджер проекта'),
        (DEVELOPER, 'Разрабочик'),
        (USER, 'Пользователь')
    )
    email = models.EmailField(verbose_name='email', unique=True, blank=False)
    first_name = models.CharField(verbose_name='name', max_length=30, blank=True)
    last_name = models.CharField(verbose_name='surname', max_length=30, blank=True)
    date_joined = models.DateTimeField(verbose_name='registered', auto_now_add=True)
    rule = models.CharField(verbose_name='rule', max_length=64, choices=ROLE_CHOICES, default=USER)
