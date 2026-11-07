====================================================================
GUIDE D'AJOUT DES VIDÉOS - GOPRIME
====================================================================

Ce dossier est l'emplacement dédié pour déposer vos fichiers vidéos MP4
et vos images d'aperçu (posters).

1. FORMAT RECOMMANDÉ :
   - Vidéo verticale format 9:16 (ex: 1080x1920 px ou 720x1280 px).
   - Format de fichier : MP4 (codec H.264 / AAC pour une compatibilité
     maximale sur tous les smartphones Android, iPhone et navigateurs).
   - Taille recommandée : moins de 10-15 Mo par vidéo pour garantir
     un chargement rapide même sur connexion mobile 3G/4G au Cameroun.

2. STRUCTURE CONSEILLÉE :
   Déposez vos fichiers ici avec des noms simples sans accents ni espaces :
   - hero-demo.mp4          (Vidéo principale de présentation en tête de page)
   - demo-mode.mp4          (Exemple catégorie Mode & Prêt-à-porter)
   - demo-beaute.mp4        (Exemple catégorie Beauté & Cosmétiques)
   - demo-chaussures.mp4    (Exemple catégorie Chaussures & Maroquinerie)
   - demo-hightech.mp4      (Exemple catégorie High-Tech & Accessoires)
   - apres-produit.mp4      (Vidéo finale pour la section Avant / Après)

3. OÙ CONNECTER VOS VIDÉOS DANS LE CODE :
   Ouvrez simplement le fichier central :
   `src/js/config.js`

   Vous y trouverez la liste complète avec les variables :
   - videoSrc: '/videos/demo-mode.mp4'
   - poster: '/images/poster-mode.jpg'

   Si une vidéo n'est pas encore prête, laissez `videoSrc: ''` et la page
   affichera un élégant badge d'attente sans casser le design du site.
====================================================================
