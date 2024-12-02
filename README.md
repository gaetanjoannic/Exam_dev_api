# Système de réservation de terrains de badminton

## Table des matières
- [Système de réservation de terrains de badminton](#système-de-réservation-de-terrains-de-badminton)
  - [Table des matières](#table-des-matières)
  - [Lancer le projet](#lancer-le-projet)
  - [Conception](#conception)
    - [Dictionnaire des données](#dictionnaire-des-données)
    - [Tableau](#tableau)
  - [Sécurité](#sécurité)
  - [Remarques](#remarques)
  - [Références](#références)

## Lancer le projet
- npm init
- npm install
- npm start
- node install express

/!\ don't forget to check your node version using node -v /!\

## Conception

### Dictionnaire des données

### Tableau 

| Ressources | URL | Methodes HTTP | Paramètre d'URL/Variations | Commentaires |
| ---------- | --- | ------------- | -------------------------- | ------------ |
| page d'accueil | / | GET | 
| page de reservation | /reservation | GET/POST | 
| suppression d'une réservation | /reservation/:id | DELETE | 
| liste des terrains | /terrains | GET |
| authentification d'un admin | /auth/login | POST | 


## Sécurité

## Remarques
L'application developpée n'est pas encore utilisable.
Par manque d'organisation, j'ai mal géré la répartition du temps.

## Références

- [Le dépot du cours](https://github.com/paul-schuhm/web-api)
- [MDN](https://developer.mozilla.org/fr/)
- [Le site d'express](https://expressjs.com/)