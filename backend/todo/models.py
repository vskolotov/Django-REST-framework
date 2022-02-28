from django.db import models
from users.models import SiteUser


class Project(models.Model):
    title = models.CharField(verbose_name='title', max_length=64, blank=False)
    repository = models.URLField(verbose_name='repository', max_length=128, blank=True)
    users = models.ManyToManyField(SiteUser)

    def __str__(self):
        return self.title


class Note(models.Model):
    text = models.TextField(max_length=1024)
    created = models.DateTimeField(verbose_name='created', auto_now_add=True)
    updated = models.DateTimeField(verbose_name='updated', auto_now=True)
    is_active = models.BooleanField(verbose_name='active', default=True)
    user = models.ForeignKey(SiteUser, on_delete=models.CASCADE, related_name='+')
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
