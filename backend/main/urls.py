from .views import ProjectAPI
from django.urls import path


urlpatterns = [
    path('project/', ProjectAPI.as_view({
    'get': 'list',
    'post' : 'create'
    })),
    path('project/<int:pk>', ProjectAPI.as_view({
        'get': 'retrieve', 'patch': 'partial_update', 'delete': 'destroy', 'put': 'update'
    })),
]
