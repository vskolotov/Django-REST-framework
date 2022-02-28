from django.contrib import admin
from .models import SiteUser
from todo.models import Project, Note

# Register your models here.
admin.site.register(SiteUser)
admin.site.register(Project)
admin.site.register(Note)
