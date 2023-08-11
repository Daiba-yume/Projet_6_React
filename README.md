# Projet 6: Créez une application web de location immobilière avec React

## Description

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy.
Refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. 
L'application doit-être réactive et s'adapter de manière fluide à différents appareils.

## Contraintes fonctionnelles

- Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
- S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Utilisation

1. Démarrez l'application : `npm start`
2. Ouvrez votre navigateur et accédez à : `http://localhost:3000`

