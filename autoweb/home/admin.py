from django.contrib import admin
from .models import USER
from .models import Mcode

# Register your models here.
class userInfo(admin.ModelAdmin):
    list_display = ['name', 'password', 'email','code','mcode','excesstime','usetime','islogin','createtime']

class mcodeInfo(admin.ModelAdmin):
    list_display = ['mcode', 'codetime']

admin.site.register(USER, userInfo)
admin.site.register(Mcode, mcodeInfo)