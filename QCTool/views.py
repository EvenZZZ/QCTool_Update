#!/usr/bin/python2.7
# -*- coding: utf-8 -*-

from django.shortcuts import render, get_object_or_404
from QCTool.models import QCHTMLParser
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.views import generic
from django.utils import timezone


def index(request):
    return render(request, 'QCTool/index.html')


def result(request):
    source = request.POST['source']
    account = request.POST['account']
    bot = QCHTMLParser(source)
    bot.run(account)
    result_obj = bot.getResult()
    return render(request, 'QCTool/result_' + account + '.html', result_obj)

def litmusHelper(request):
    return render(request, 'QCTool/litmusHelper.html')