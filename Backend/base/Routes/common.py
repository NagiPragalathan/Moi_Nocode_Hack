from django.shortcuts import render, HttpResponse
# from .NoCodeAutomate.testing import Nocode_test

def home(request):
    return render(request,'common/index.html')

def blog(request):
    return render(request,'common/blog-single.html')
