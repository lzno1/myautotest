from django.shortcuts import render
from django.http import HttpResponse
from django.core.serializers import serialize
from .models import USER
from .models import Mcode

# Create your views here.
def home(request):
    obj = USER.objects.first()
    data = serialize("json", [obj], fields=('name', 'password', 'email','code','mcode','excesstime','usetime','islogin','createtime'))
    return HttpResponse(data, content_type="application/json")
