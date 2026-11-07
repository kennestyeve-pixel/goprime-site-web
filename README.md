# GoPrime — Landing Page Officielle

Landing page à fort taux de conversion conçue pour **GoPrime**, service qui transforme les photos et vidéos de produits en vidéos publicitaires verticales (format 9:16) prêtes à publier pour les commerçants et vendeurs sur WhatsApp, Facebook, TikTok et Instagram au Cameroun.

---

## 🚀 Démarrage Rapide

### 1. Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure) installé.

### 2. Lancer le site en développement local
Dans le terminal, à la racine du dossier :

```bash
# Lancer le serveur de développement Vite
npm run dev
```

Le site sera disponible immédiatement sur l'adresse locale (par défaut : `http://localhost:3000`).

### 3. Compiler pour la production
Pour générer les fichiers optimisés pour votre hébergement web :

```bash
npm run build
```
Les fichiers prêts à être hébergés seront générés dans le dossier `dist/`.

---

## 🎬 Comment Ajouter ou Remplacer Vos Vidéos

Le site est conçu avec une **configuration centralisée**. Vous n'avez pas besoin de toucher à la structure HTML pour modifier vos vidéos ou vos coordonnées.

### Étape 1 : Déposez vos fichiers vidéo
Placez vos vidéos verticales au format MP4 dans le dossier :
👉 `public/videos/`

*Exemple de noms de fichiers recommandés :*
- `hero-demo.mp4` (vidéo principale en tête de page)
- `demo-mode.mp4` (démonstration catégorie Mode)
- `demo-beaute.mp4` (démonstration catégorie Beauté)
- `demo-chaussures.mp4` (démonstration catégorie Chaussures)
- `demo-hightech.mp4` (démonstration catégorie High-Tech)

> **💡 Recommandation de performance :** 
> Privilégiez des fichiers MP4 encodés en H.264 / AAC d'une taille inférieure à 10–15 Mo pour assurer une lecture fluide même sur les réseaux mobiles 3G/4G au Cameroun.

### Étape 2 : Connectez vos vidéos dans `src/js/config.js`
Ouvrez le fichier :
👉 `src/js/config.js`

Pour la vidéo principale du Hero, modifiez simplement `videoSrc` :
```javascript
heroVideo: {
  title: 'Démonstration GoPrime',
  poster: '/images/hero-preview.svg',
  videoSrc: '/videos/hero-demo.mp4', // <-- Renseignez le chemin ici
}
```

Pour les vidéos de la galerie, mettez à jour la liste `galleryVideos` :
```javascript
{
  id: 'demo-mode',
  category: 'Mode & Prêt-à-porter',
  title: 'Robe & Prêt-à-porter',
  poster: '/images/demo-mode.svg',
  videoSrc: '/videos/demo-mode.mp4', // <-- Renseignez le chemin ici
}
```

*Remarque : Si `videoSrc` reste vide (`''`), la carte affiche un aperçu propre et propose d'ouvrir directement une discussion WhatsApp pour voir des exemples dans cette catégorie sans générer d'erreur.*

---

## 📱 Numéro WhatsApp et Messages Préremplis

Le numéro WhatsApp officiel est configuré dans `src/js/config.js` :
- **Numéro :** `+237 673 984 349` (`237673984349`)
- Tous les boutons du site (Header, Hero, Offre 1, Offre 2, Avant/Après, FAQ, Footer et barre fixe mobile) sont pré-câblés avec des messages contextuels encodés proprement.

---

## 📁 Architecture du Projet

```
goprime site web/
├── index.html                 # Structure HTML sémantique, SEO & accessibilité
├── package.json               # Scripts Vite & configuration npm
├── vite.config.js             # Configuration du serveur local
├── README.md                  # Documentation du projet
├── public/                    # Fichiers statiques servis directement
│   ├── favicon.svg            # Favicon vectoriel GoPrime
│   ├── og-image.svg           # Image de partage social (WhatsApp, Facebook)
│   ├── images/                # Aperçus SVG vectoriels ultra-légers
│   └── videos/                # Dossier dédié pour vos fichiers vidéos MP4
└── src/
    ├── css/                   # Styles CSS modulaires & Vanilla
    │   ├── variables.css      # Design tokens (Bleu #0A2540, Orange, Vert WhatsApp)
    │   ├── base.css           # Reset & typographie
    │   ├── layout.css         # Structure des sections & en-tête
    │   ├── components.css     # Composants UI (boutons, cartes 9:16, lecteur modal)
    │   └── responsive.css     # Adaptations mobile-first & tablettes
    └── js/                    # Logique JavaScript modulaire
        ├── config.js          # CONFIGURATION CENTRALISÉE (Vidéos, textes, prix)
        ├── whatsapp.js        # Gestionnaire universel des liens WhatsApp
        ├── video-gallery.js   # Rendu de la galerie & lecteur vidéo modal natif
        ├── faq.js             # Accordéon FAQ interactif
        └── main.js            # Initialisation & animation au défilement
```
