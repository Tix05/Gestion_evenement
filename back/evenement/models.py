from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import make_password

class Utilisateur(models.Model):
    id_utilisateur = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    mot_de_passe = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Utilisateur"

    def __str__(self):
        return self.nom
    
    def save(self, *args, **kwargs):
        if self.mot_de_passe and not self.mot_de_passe.startswith('pbkdf2_sha256'):
            self.mot_de_passe = make_password(self.mot_de_passe)
        super(Utilisateur, self).save(*args, **kwargs)


class Organisateur(Utilisateur):
    class Meta:
        verbose_name = "Organisateur"


class Participant(Utilisateur):
    class Meta:
        verbose_name = "Participant"


class Evenement(models.Model):
    id_evenement = models.AutoField(primary_key=True)
    titre = models.CharField(max_length=100)
    description = models.TextField()
    lieu = models.CharField(max_length=200)
    date = models.DateTimeField()
    capacite = models.IntegerField()
    organisateur = models.ForeignKey(Organisateur, on_delete=models.CASCADE, related_name="evenements")

    class Meta:
        verbose_name = "Evénement"

    def __str__(self):
        return self.titre


class Session(models.Model):
    id_session = models.AutoField(primary_key=True)
    titre = models.CharField(max_length=100)
    description = models.TextField()
    debut = models.DateTimeField()
    fin = models.DateTimeField()
    evenement = models.ForeignKey(Evenement, on_delete=models.CASCADE, related_name="sessions")

    class Meta:
        verbose_name = "Session"

    def __str__(self):
        return self.titre


class Inscription(models.Model):
    id_inscription = models.AutoField(primary_key=True)
    participant = models.ForeignKey(Participant, on_delete=models.CASCADE, related_name="inscriptions")
    evenement = models.ForeignKey(Evenement, on_delete=models.CASCADE, related_name="inscriptions")
    date_inscription = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = "Inscription"

    def __str__(self):
        return f"{self.participant.nom} - {self.evenement.titre}"


class Notification(models.Model):
    id_notification = models.AutoField(primary_key=True)
    contenu = models.TextField()
    date_envoi = models.DateTimeField(default=timezone.now)
    evenement = models.ForeignKey(Evenement, on_delete=models.CASCADE, related_name="notifications")

    class Meta:
        verbose_name = "Notification"

    def __str__(self):
        return f"Notification pour {self.evenement.titre}"


class Message(models.Model):
    id_message = models.AutoField(primary_key=True)
    contenu = models.TextField()
    date_envoi = models.DateTimeField(default=timezone.now)
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE, related_name="messages")
    evenement = models.ForeignKey(Evenement, on_delete=models.CASCADE, related_name="messages")

    class Meta:
        verbose_name = "Message"

    def __str__(self):
        return f"Message de {self.utilisateur.nom} pour {self.evenement.titre}"