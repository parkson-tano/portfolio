from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to="project\image", max_length=None)
    github = models.CharField(max_length=256, null=True, blank=True)
    demo = models.CharField(max_length=256, null=True, blank=True)
    blog = models.BooleanField(default=False)

    def __str__(self):
        return self.title