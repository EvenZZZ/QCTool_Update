__author__ = 'ychai'

from django.conf.urls import patterns, url

from QCTool import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^result/$', views.result, name='result'),
    url(r'^litmusHelper/$', views.litmusHelper, name='litmusHelper')
    # url(r'^(?P<pk>\d+)/$', views.DetailView.as_view(), name='detail'),
    # url(r'^(?P<pk>\d+)/results/$', views.ResultsView.as_view(), name='results'),
    # url(r'^(?P<poll_id>\d+)/vote/$', views.vote, name='vote'),
)