# Projet Programmation Web : ChillFeedApp

## Description :
ChillFeedNutrition est une application web ayant pour but d’accompagner les coachs sportifs dans le suivi client. De les suivre dans leur avancement et de les
conseiller d’un point de vue de leur alimentation.
## Utilisation 

#### API Tierce
Modifier le fichier services/api.service.ts dans la partie front pour mettre votre propre clé de l'API Nutritionix afin de profiter de toute les
fonctionnalitées de l'application.

### API Maison 
les routes de cette api sont dispnoble au format swagger en suivant le lien : <http://localhost:5000/docs>

> Installation

### Sans Docker
#### Prérequis:

- node version supérieur à 10.24.0 (testé qu'avec cette dernière et la version 14)


- lancer les commandes suivantes :
```sh
$ cd backend
```
```sh
$ npm install 
```
```sh   
$ npm run start
```
### Avec Docker

```sh
$ cd backend
```
1. créer l'image à partir du docker file 

```sh
$ docker build -t chillfeed .
```

2. lancement du conteneur

```sh
$ docker run -d -p 5000:5000 chillfeed
```


