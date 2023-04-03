from django.db import models
import datetime

# Create your models here.
class USER(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    code = models.CharField(max_length=100)
    mcode = models.CharField(max_length=100)
    excesstime = models.CharField(max_length=100)
    usetime = models.CharField(max_length=100)
    islogin = models.CharField(max_length=100)
    createtime = models.DateField(auto_now=True)

class Mcode(models.Model):
    mcode = models.CharField(max_length=100)
    codetime = models.CharField(max_length=100)



    