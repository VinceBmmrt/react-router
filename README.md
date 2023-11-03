# Blog React - Router

L'objectif est de pouvoir afficher le détail d'un article

## 1. Création de la route paramétrée

Commence par configurer ton router en lui indiquant une nouvelle route qui te permettra d'afficher une page.
Cette page affichera le détail d'un article.

Étapes

1. Créer le composant qui sera afficher sur ma route
2. Configurer le router (fichier `/src/routes.tsx`) en lui ajoutant le children de la route `/article/:id`
3. Rajouter le lien vers mes pages depuis le composant `Post.tsx` (lien "lire la suite")

## 2. Appel API

Appel l'API te permettant de récupérer les données d'un article.
Affiche les informations de l'article sur la page.

Étapes

1. Récupérer le slug depuis mon url
2. Appeler l'API pour récupérer les données de l'article (en passant le slug)
3. Afficher les informations de l'article sur la page
   3.1 Attention, le type définis dans notre appel API n'est pas forcément représentatif de la vérité.

[Tu peux voir les différentes disponibles ici](https://oblog-react.vercel.app/)

## Bonus. Gestion d'un article inexistant

Si l'article n'existe pas, afficher la page d'erreur.
(essayer avec une route qui n'existe pas directement dans l'url)
