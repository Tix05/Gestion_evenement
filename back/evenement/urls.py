from django.urls import path
from .views import *

urlpatterns = [
    path('utilisateurs/', UtilisateurListCreateView.as_view(), name='utilisateur-list-create'),
    path('utilisateurs/<int:pk>/', UtilisateurDetailView.as_view(), name='utilisateur-detail'),

    path('organisateurs/', OrganisateurListCreateView.as_view(), name='organisateur-list-create'),
    path('organisateurs/<int:pk>/', OrganisateurDetailView.as_view(), name='organisateur-detail'),

    path('participants/', ParticipantListCreateView.as_view(), name='participant-list-create'),
    path('participants/<int:pk>/', ParticipantDetailView.as_view(), name='participant-detail'),

    path('evenements/', EvenementListCreateView.as_view(), name='evenement-list-create'),
    path('evenements/<int:pk>/', EvenementDetailView.as_view(), name='evenement-detail'),

    path('sessions/', SessionListCreateView.as_view(), name='session-list-create'),
    path('sessions/<int:pk>/', SessionDetailView.as_view(), name='session-detail'),

    path('inscriptions/', InscriptionListCreateView.as_view(), name='inscription-list-create'),
    path('inscriptions/<int:pk>/', InscriptionDetailView.as_view(), name='inscription-detail'),

    path('notifications/', NotificationListCreateView.as_view(), name='notification-list-create'),
    path('notifications/<int:pk>/', NotificationDetailView.as_view(), name='notification-detail'),

    path('messages/', MessageListCreateView.as_view(), name='message-list-create'),
    path('messages/<int:pk>/', MessageDetailView.as_view(), name='message-detail'),
]