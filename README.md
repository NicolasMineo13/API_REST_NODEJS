# Bibliothèque

## Description

Ce projet est une application de gestion de bibliothèque. Elle permet de gérer les livres, les auteurs, les emprunts, les utilisateurs, etc.

## Fonctionnalités

- **Accessibilité**
    - L'application est accessible via des requêtes HTTP.
    - L'application est accessible via une interface web.

- **Authentification :**
  - Se connecter à l'application.
  - Se déconnecter de l'application.

- **Opérations CRUD sur la Base de Données :**
  - Créer, lire, mettre à jour (complètement et/ou partiellement), supprimer l'ensemble des données de la base.

- **Persistance :**
  - La manipulation des données de la base de données se fait via l'utilisation de DAO.

- **Contrôle d'Accès :**
  - Les opérations d'authentification reposent sur l'utilisation du standard RFC 7519 (JWT).

- **Tests Unitaires :**
  - Toutes les opérations sur la base de données font l'objet de tests unitaires (utilisation de Mocha.).

## Extensions

- **[★★★★☆] Mise en œuvre des Tests d'Intégration :**
  - Pour tester l'intégration entre les différentes parties de l'application.

- **[★★★☆☆] Implémentation du Refresh Token pour la Gestion de l'Authentification :**
  - Un mécanisme de Refresh Token est mis en place pour gérer l'authentification de manière sécurisée.

## Installation

### Prérequis

- Node.js

### Dépendances principales

- Express
- JWT
- Bcrypt
- Mocha
- Chai
- Sqlite3

### Procédure

Ouvrir un terminal dans le dossier du projet et exécuter les commandes suivantes :

- ```npm install```

- ```node app``` // Pour lancer l'application

- ```npm test``` // Pour lancer les tests unitaires

## Utilisation

### Interface Web

- Ouvrir un navigateur web et se rendre à l'adresse suivante : http://localhost:3000
Ou 
- Ouvrir le fichier integration_tests.postman_collection.json avec Postman.

### Token JWT

- Des tokens JWT de test ont été écrit directement dans le fichier integration_tests.postman_collection.json dans chaque headers.

## Endpoints

### Authentification

- **POST** localhost:3000/utilisateurs/login?login=```login```&password=```password```
  - Permet de se connecter à l'application.
  - Paramètres :
    - login : string
    - password : string

- **POST** localhost:3000/utilisateurs/logout/```:id```
    - Permet de se déconnecter de l'application.
    - Paramètres :
        - id : string

### Utilisateurs

- **GET** localhost:3000/utilisateurs
  - Permet de récupérer la liste des utilisateurs.

- **GET** localhost:3000/utilisateurs?id=```id```&login=```login```&password=```password```
    - Permet de filtrer les utilisateurs.
    - Paramètres :
        - id : string
        - login : string
        - password : string

- **POST** localhost:3000/utilisateurs?login=```login```&password=```password```
    - Permet de créer un utilisateur.
    - Paramètres :
        - login : string
        - password : string

- **PATCH** localhost:3000/utilisateurs/```:id```?login=```login```&password=```password```
    - Permet de mettre à jour un utilisateur.
    - Paramètres :
        - id : string
        - login : string
        - password : string

- **DELETE** localhost:3000/utilisateurs/```:id```
    - Permet de supprimer un utilisateur.
    - Paramètres :
        - id : string

### Auteurs

- **GET** localhost:3000/auteurs
  - Permet de récupérer la liste des auteurs.

- **GET** localhost:3000/auteurs?id=```id```&nom=```nom```&prenom=```prenom```
    - Permet de filtrer les auteurs.
    - Paramètres :
        - id : string
        - nom : string
        - prenom : string

- **POST** localhost:3000/auteurs?nom=```nom```&prenom=```prenom```
    - Permet de créer un auteur.
    - Paramètres :
        - nom : string
        - prenom : string

- **PATCH** localhost:3000/auteurs/```:id```?nom=```nom```&prenom=```prenom```
    - Permet de mettre à jour un auteur.
    - Paramètres :
        - id : string
        - nom : string
        - prenom : string

- **DELETE** localhost:3000/auteurs/```:id```
    - Permet de supprimer un auteur.
    - Paramètres :
        - id : string

### Livres

- **GET** localhost:3000/livres
  - Permet de récupérer la liste des livres.

- **GET** localhost:3000/livres?id=```id```&titre=```titre```&date=```date```&id_auteur=```id_auteur```&id_genre=```id_genre```
    - Permet de filtrer les livres.
    - Paramètres :
        - id : string
        - titre : string
        - date : string
        - id_auteur : string
        - id_genre : string

- **POST** localhost:3000/livres?titre=```titre```&date=```date```&id_auteur=```id_auteur```&id_genre=```id_genre```
    - Permet de créer un livre.
    - Paramètres :
        - titre : string
        - date : string
        - id_auteur : string
        - id_genre : string

- **PATCH** localhost:3000/livres/```:id```?titre=```titre```&date=```date```&id_auteur=```id_auteur```&id_genre=```id_genre```
    - Permet de mettre à jour un livre.
    - Paramètres :
        - id : string
        - titre : string
        - date : string
        - id_auteur : string
        - id_genre : string

- **DELETE** localhost:3000/livres/```:id```
    - Permet de supprimer un livre.
    - Paramètres :
        - id : string

### Genres

- **GET** localhost:3000/genres
  - Permet de récupérer la liste des genres.

- **GET** localhost:3000/genres?id=```id```&genre=```genre```
    - Permet de filtrer les genres.
    - Paramètres :
        - id : string
        - genre : string

- **POST** localhost:3000/genres?genre=```genre```
    - Permet de créer un genre.
    - Paramètres :
        - genre : string

- **PATCH** localhost:3000/genres/```:id```?genre=```genre```
    - Permet de mettre à jour un genre.
    - Paramètres :
        - id : string
        - genre : string

- **DELETE** localhost:3000/genres/```:id```
    - Permet de supprimer un genre.
    - Paramètres :
        - id : string