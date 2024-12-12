from django.contrib import admin
from .models import *

class UtilisateurAdmin(admin.ModelAdmin):
    list_display = ('id', 'nom', 'email', 'motDePasse')
    search_fields = ('nom', 'email')
    list_per_page = 15

class OrganisateurAdmin(admin.ModelAdmin):
    list_display = ('id', 'nom', 'email')
    search_fields = ('nom', 'email')
    list_per_page = 15

class ParticipantAdmin(admin.ModelAdmin):
    list_display = ('id', 'nom', 'email', 'dateInscription')
    search_fields = ('nom', 'email')
    list_filter = ('dateInscription',)
    list_per_page = 15

class EvenementAdmin(admin.ModelAdmin):
    list_display = ('id', 'titre', 'description', 'lieu', 'date', 'capacite')
    list_filter = ('date', 'lieu')
    search_fields = ('titre', 'description')
    fieldsets = (
        ('Informations', {
            'fields': ('titre', 'description', 'lieu', 'capacite')
        }),
        ('Dates', {
            'fields': ('date',),
        }),
    )
    list_per_page = 15
    ordering = ('-date',)

class SessionAdmin(admin.ModelAdmin):
    list_display = ('id', 'titre', 'description', 'debut', 'fin')
    list_filter = ('debut', 'fin')
    search_fields = ('titre', 'description')
    fieldsets = (
        ('Informations', {
            'fields': ('titre', 'description', 'debut', 'fin')
        }),
    )
    list_per_page = 15
    ordering = ('-debut',)

class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'contenu', 'dateEnvoi', 'ecrit_par')
    list_filter = ('dateEnvoi',)
    search_fields = ('contenu',)
    list_per_page = 15

class NotificationAdmin(admin.ModelAdmin):
    list_display = ('id', 'contenu', 'dateEnvoi', 'evenement')
    list_filter = ('dateEnvoi',)
    search_fields = ('contenu', 'evenement__titre')
    fieldsets = (
        ('Informations', {
            'fields': ('contenu', 'evenement')
        }),
        ('Dates', {
            'fields': ('dateEnvoi',),
        }),
    )
    list_per_page = 15

# Enregistrement des classes dans l'admin
admin.site.register(Utilisateur, UtilisateurAdmin)
admin.site.register(Organisateur, OrganisateurAdmin)
admin.site.register(Participant, ParticipantAdmin)
admin.site.register(Evenement, EvenementAdmin)
admin.site.register(Session, SessionAdmin)
admin.site.register(Message, MessageAdmin)
admin.site.register(Notification, NotificationAdmin)
