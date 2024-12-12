from rest_framework import serializers
from .models import *

class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = ['id_utilisateur', 'nom', 'email', 'mot_de_passe']


class OrganisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organisateur
        fields = ['id_utilisateur', 'nom', 'email', 'mot_de_passe']


class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = ['id_utilisateur', 'nom', 'email', 'mot_de_passe']


class EvenementSerializer(serializers.ModelSerializer):
    organisateur = serializers.PrimaryKeyRelatedField(queryset=Organisateur.objects.all())

    class Meta:
        model = Evenement
        fields = ['id_evenement', 'titre', 'description', 'lieu', 'date', 'capacite', 'organisateur']


class SessionSerializer(serializers.ModelSerializer):
    evenement = serializers.PrimaryKeyRelatedField(queryset=Evenement.objects.all())

    class Meta:
        model = Session
        fields = ['id_session', 'titre', 'description', 'debut', 'fin', 'evenement']


class InscriptionSerializer(serializers.ModelSerializer):
    participant = serializers.PrimaryKeyRelatedField(queryset=Participant.objects.all())
    evenement = serializers.PrimaryKeyRelatedField(queryset=Evenement.objects.all())

    class Meta:
        model = Inscription
        fields = ['id_inscription', 'participant', 'evenement', 'date_inscription']


class NotificationSerializer(serializers.ModelSerializer):
    evenement = serializers.PrimaryKeyRelatedField(queryset=Evenement.objects.all())

    class Meta:
        model = Notification
        fields = ['id_notification', 'contenu', 'date_envoi', 'evenement']


class MessageSerializer(serializers.ModelSerializer):
    utilisateur = serializers.PrimaryKeyRelatedField(queryset=Utilisateur.objects.all())
    evenement = serializers.PrimaryKeyRelatedField(queryset=Evenement.objects.all())

    class Meta:
        model = Message
        fields = ['id_message', 'contenu', 'date_envoi', 'utilisateur', 'evenement']