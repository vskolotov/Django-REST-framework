from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import SiteUser


# class DRFSiteUser(UserAdmin):
#     model = SiteUser
#     list_display = ['username', 'email', 'first_name', 'last_name', 'date_joined', 'rule', 'is_staff']


# Register your models here.
admin.site.register(SiteUser)
