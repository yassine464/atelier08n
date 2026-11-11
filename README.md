# Mes Accessoires - Mini Projet sprint 01 (Authentification Angular)

## Lancer
    npm install
    npm start        (ou: ng serve)
puis ouvrir http://localhost:4200

## Comptes de test
- admin / 123    (ADMIN : Ajouter, Modifier, Supprimer)
- yassine / 123  (USER : lecture seule)

## Ce qui est implémenté (Atelier 16)
- Page login (`/login`) + message d'erreur
- AuthService (SignIn, logout, isAdmin) + LocalStorage (reste connecté après F5)
- Menu contextualisé (utilisateur connecté, Login/Logout, Ajouter admin seulement)
- Boutons Modifier/Supprimer visibles seulement pour ADMIN
- Guard `accessoireGuard` sur `/add-accessoire` et `/updateAccessoire/:id` -> `/app-forbidden`
