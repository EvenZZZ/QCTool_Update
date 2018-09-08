from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from . import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'EmailDeveloperUtilities.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^QCTool/', include('QCTool.urls', namespace="QCTool")),
    url(r'^$', views.index, name="home"),
)
