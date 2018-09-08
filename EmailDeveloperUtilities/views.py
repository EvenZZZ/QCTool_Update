__author__ = 'ychai'
#!/usr/bin/python2.7
# -*- coding: utf-8 -*-

from django.shortcuts import render, get_object_or_404

def index(request):
    return render(request, 'index.html')

