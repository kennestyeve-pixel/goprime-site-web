/**
 * ============================================================================
 * GOPRIME - CONFIGURATION CENTRALISÉE
 * ============================================================================
 * Ce fichier regroupe tous les réglages principaux du site :
 * - Coordonnées WhatsApp et messages préremplis
 * - Emplacement de la vidéo Hero
 * - Liste des vidéos de la galerie (ajoutez, remplacez ou retirez des vidéos ici)
 * - Configuration de la section Avant / Après
 * - Tarifs et caractéristiques
 * ============================================================================
 */

export const GOPRIME_CONFIG = {
  // Coordonnées WhatsApp officielles
  whatsapp: {
    phoneNumber: '237673984349', // Format international sans le '+'
    displayPhone: '+237 673 984 349',
    messages: {
      hero: 'Bonjour GoPrime, je veux transformer les photos de mes produits en vidéos publicitaires.',
      header: 'Bonjour GoPrime, je souhaite commander une vidéo publicitaire pour mes produits.',
      offer1: 'Bonjour GoPrime, je souhaite commander une Vidéo publicitaire générée par IA en profitant de l\'offre spéciale (tarif promotionnel : 5 000 FCFA au lieu du tarif normal de 8 000 FCFA, soit 37,5 % de réduction). Pouvez-vous me donner les renseignements pour ma commande ?',
      offer2: 'Bonjour GoPrime, je souhaite commander une Vidéo e-commerce avec motion design en profitant de l\'offre spéciale (tarif promotionnel : à partir de 8 000 FCFA au lieu du tarif normal à partir de 10 000 FCFA, soit 20 % de réduction). Pouvez-vous me donner les renseignements pour ma commande ?',
      offer3: 'Bonjour GoPrime, je souhaite commander une Vidéo de présentation de services professionnels en profitant de l\'offre spéciale (tarif promotionnel : à partir de 10 000 FCFA au lieu du tarif normal à partir de 15 000 FCFA, soit 33,3 % de réduction). Pouvez-vous me donner les renseignements pour ma commande ?',
      beforeAfter: 'Bonjour GoPrime, j\'ai vu votre comparatif Avant / Après et je souhaite une vidéo publicitaire pour mon produit.',
      gallery: 'Bonjour GoPrime, j\'ai vu vos vidéos publicitaires générées par IA et je souhaite un résultat pour mes photos de produits.',
      aiAds: 'Bonjour GoPrime, je souhaite commander une Vidéo publicitaire générée par IA en profitant de l\'offre promotionnelle à 5 000 FCFA au lieu de 8 000 FCFA (-37,5 %).',
      motionDesign: 'Bonjour GoPrime, je possède déjà des vidéos de mes produits et je souhaite profiter de l\'offre promotionnelle Vidéo e-commerce avec motion design à partir de 8 000 FCFA au lieu de 10 000 FCFA (-20 %).',
      faq: 'Bonjour GoPrime, j\'ai une question concernant votre service de vidéos publicitaires :',
      finalCta: 'Bonjour GoPrime, je veux présenter mon produit en vidéo publicitaire.',
      mobileSticky: 'Bonjour GoPrime, je souhaite transformer mes photos en vidéo publicitaire.',
      services: 'Bonjour GoPrime, je suis artisan / prestataire de services et je souhaite profiter de l\'offre promotionnelle Vidéo de présentation de services professionnels à partir de 10 000 FCFA au lieu de 15 000 FCFA (-33,3 %).',
      // Messages de référence hors période promotionnelle (appliqués automatiquement dès le 1er janvier 2027)
      regularMessages: {
        offer1: 'Bonjour GoPrime, je souhaite commander l\'offre « Vidéo publicitaire générée avec l\'intelligence artificielle » au tarif normal de 8 000 FCFA. Voici mon produit :',
        offer2: 'Bonjour GoPrime, je souhaite commander l\'offre « Vidéo e-commerce avec motion design » (tarif normal : à partir de 10 000 FCFA). Voici ma vidéo produit :',
        offer3: 'Bonjour GoPrime, je souhaite commander l\'offre « Vidéo de présentation de services professionnels » (tarif normal : à partir de 15 000 FCFA). Voici mon activité :',
        aiAds: 'Bonjour GoPrime, je souhaite créer une vidéo publicitaire générée avec l\'intelligence artificielle (8 000 FCFA) à partir des photos de mon produit.',
        motionDesign: 'Bonjour GoPrime, je possède déjà des vidéos de mes produits et je souhaite les améliorer avec votre offre Vidéo e-commerce avec motion design (à partir de 10 000 FCFA).',
        services: 'Bonjour GoPrime, je suis artisan / prestataire de services et je souhaite une vidéo de présentation de services professionnels (à partir de 15 000 FCFA).'
      }
    }
  },

  // ==========================================================================
  // CAMPAGNE PROMOTIONNELLE CENTRALISÉE (NOVEMBRE - DÉCEMBRE 2026)
  // À partir du 1er janvier 2027, les tarifs normaux redeviennent automatiquement actifs.
  // ==========================================================================
  promoCampaign: {
    enabled: true,
    startDate: '2026-11-07T00:00:00+01:00',
    endDate: '2026-12-31T23:59:59+01:00',
    label: 'OFFRE SPÉCIALE NOVEMBRE - DÉCEMBRE 2026',
    validityText: 'Offre valable du 7 novembre au 31 décembre 2026.',
    banner: {
      title: 'C\'EST LE MOMENT DE BOOSTER VOTRE BUSINESS !',
      subtitle: 'Profitez de nos tarifs promotionnels sur nos trois catégories de vidéos publicitaires. Des offres exceptionnelles disponibles uniquement en novembre et décembre 2026.',
      ctaText: 'PROFITER DE L\'OFFRE',
      ctaHref: '#grille-tarifs'
    }
  },

  // Emplacement de la vidéo principale dans le Hero (en haut de page)
  heroVideo: {
    title: 'Démonstration GoPrime',
    caption: 'Format vertical 9:16',
    subcaption: 'Prêt pour TikTok, Facebook & Statut WhatsApp',
    poster: '/images/hero-preview.svg',
    videoSrc: '/videos/hero-goprime.mp4.mp4',
    alt: 'Vidéo de présentation principale GoPrime format vertical 9:16'
  },

  // ==========================================================================
  // STRUCTURE INDÉPENDANTE DES 3 GRANDES PRESTATIONS GOPRIME
  // (Méthodes de production, niveaux de complexité et tarifications distincts)
  // ==========================================================================
  serviceCategories: {
    // 1. Vidéos publicitaires générées avec l'intelligence artificielle
    aiProductVideos: {
      id: 'prestation-ia-produits',
      number: '01',
      tag: 'Prestation 1 • Création par Intelligence Artificielle',
      title: 'Vidéos publicitaires générées avec l\'Intelligence Artificielle',
      subtitle: 'Vous n\'avez que de simples photos de vos articles ? Nous les transformons en vidéos publicitaires verticales 9:16 captivantes grâce à l\'intelligence artificielle.',
      inputRequired: 'Photos de vos produits (prises au smartphone)',
      productionMethod: 'Génération visuelle IA + Mise en scène produit + Accroches',
      waType: 'aiAds',
      pricingPlan: {
        name: 'Vidéo publicitaire générée par IA',
        regularPrice: '8 000',
        promoPrice: '5 000',
        discountPercent: '37,5 %',
        savings: '3 000 FCFA',
        price: '8 000',
        currency: 'FCFA',
        waType: 'offer1'
      },
      videos: [
        {
          id: 'demo-montres',
          category: 'Montres & Accessoires de style',
          title: 'Montres MS — Design & Élégance',
          description: 'Mise en valeur du design, de la précision des détails et de l\'élégance des montres.',
          poster: '/images/demo-mode.svg',
          videoSrc: '/videos/pub%20montre%20hermes.mp4',
          isPlaceholder: false
        },
        {
          id: 'demo-beaute',
          category: 'Beauté & Cosmétiques',
          title: 'Soins & Laits Cosmétiques — Moby',
          description: 'Mise en scène publicitaire du produit cosmétique et valorisation visuelle générée par IA.',
          poster: '/images/demo-beaute.svg',
          videoSrc: '/videos/vid%C3%A9o%20moby%202.mp4',
          isPlaceholder: false
        },
        {
          id: 'demo-quotidien',
          category: 'Accessoires & Articles du quotidien',
          title: 'Bouilloires & Équipements Maison',
          description: 'Valorisation des accessoires et de leurs caractéristiques à travers une vidéo publicitaire dynamique.',
          poster: '/images/demo-hightech.svg',
          videoSrc: '/videos/pub%20bouloire.mp4',
          isPlaceholder: false
        },
        {
          id: 'demo-chaussures-pro',
          category: 'Chaussures professionnelles & Sécurité',
          title: 'Chaussures de Sécurité JCTOP',
          description: 'Mise en avant du produit, de ses finitions robustes et de son univers professionnel.',
          poster: '/images/demo-chaussures.svg',
          videoSrc: '/videos/PUB%20jctop%20complet.mp4',
          isPlaceholder: false
        }
      ]
    },

    // 2. Vidéos E-commerce améliorées par Motion Design
    ecommerceMotionDesign: {
      id: 'prestation-motion-design',
      number: '02',
      tag: 'Prestation 2 • Sublimation Vidéo & Motion Design',
      title: 'Vidéos E-commerce améliorées par Motion Design',
      subtitle: 'Vous possédez déjà des vidéos de vos produits ou de votre boutique ? Nous récupérons vos séquences originales et les transformons en véritables publicités professionnelles rythmées.',
      inputRequired: 'Vos vidéos originales de produits ou d\'activité',
      productionMethod: 'Animations Motion Design + Zooms dynamiques + Habillage graphique',
      waType: 'motionDesign',
      pricingPlan: {
        name: 'Vidéo e-commerce avec motion design',
        pricePrefix: 'À partir de',
        regularPrice: '10 000',
        promoPrice: '8 000',
        discountPercent: '20 %',
        savings: '2 000 FCFA',
        price: '10 000',
        currency: 'FCFA',
        waType: 'offer2'
      },
      features: [
        'Animations Motion Design sur mesure',
        'Zooms dynamiques sur les détails clés du produit',
        'Transitions professionnelles fluides',
        'Effets visuels percutants pour retenir l\'attention',
        'Textes animés et superpositions graphiques lisibles',
        'Montage publicitaire rythmé et attractif (format 9:16)'
      ],
      // Démonstration réelle dédiée à la prestation Motion Design E-commerce
      videoDemo: {
        id: 'demo-motion-ecom-avant-apres',
        label: 'DÉMONSTRATION RÉELLE • AVANT / APRÈS',
        title: 'Démonstration E-commerce Avant / Après — Motion Design',
        caption: 'Découvrez comment GoPrime transforme une vidéo produit classique en une publicité plus dynamique grâce au Motion Design.',
        videoSrc: '/videos/pub%20e-com%20avt%20apr.mp4'
      },
      videos: [
        {
          id: 'demo-motion-ecom-avant-apres',
          label: 'DÉMONSTRATION RÉELLE • AVANT / APRÈS',
          category: 'DÉMONSTRATION RÉELLE • AVANT / APRÈS',
          title: 'Démonstration E-commerce Avant / Après',
          description: 'Découvrez comment GoPrime transforme une vidéo produit classique en une publicité plus dynamique grâce au Motion Design.',
          videoSrc: '/videos/pub%20e-com%20avt%20apr.mp4',
          isPlaceholder: false
        }
      ]
    },

    // 3. Vidéos de présentation des services et entreprises
    businessServicesShowcase: {
      id: 'prestation-services-entreprises',
      number: '03',
      tag: 'Prestation 3 • Entreprises, Artisans & Savoir-faire',
      title: 'Votre savoir-faire mérite aussi sa vidéo publicitaire.',
      subtitle: 'Vous êtes soudeur, menuisier, artisan ou prestataire de services ? GoPrime transforme vos photos et vidéos de terrain en une présentation publicitaire dynamique et professionnelle.',
      inputRequired: 'Photos et séquences vidéo réelles de votre activité / chantier / atelier',
      productionMethod: 'Storytelling métier + Montage pro + Motion Design, zooms & effets',
      waType: 'services',
      pricingPlan: {
        name: 'Vidéo de présentation de services professionnels',
        pricePrefix: 'À partir de',
        regularPrice: '15 000',
        promoPrice: '10 000',
        discountPercent: '33,3 %',
        savings: '5 000 FCFA',
        price: '15 000',
        currency: 'FCFA',
        waType: 'offer3'
      },
      sectors: [
        'Soudeurs & entreprises de soudure',
        'Menuisiers aluminium & bois',
        'Ateliers de fabrication',
        'Entreprises de travaux métalliques',
        'Artisans & prestataires de services'
      ],
      videoDemo: {
        id: 'demo-services-soudure',
        badge: 'Réalisation terrain • Soudure & Travaux métalliques',
        title: 'Présentation d\'entreprise – Soudure et travaux métalliques',
        description: 'Valorisez votre entreprise et montrez concrètement votre savoir-faire grâce à des vidéos publicitaires professionnelles. Nous mettons en scène vos réalisations, votre atelier, vos équipements et vos techniciens en pleine activité.',
        videoSrc: '/videos/zamb%C3%A9%20pub%20sdure.mp4'
      }
    }
  },

  // Références maintenues pour compatibilité directe avec les modules existants
  galleryVideos: [
    {
      id: 'demo-montres',
      category: 'Montres & Accessoires de style',
      title: 'Montres MS — Design & Élégance',
      description: 'Mise en valeur du design, de la précision des détails et de l\'élégance des montres.',
      poster: '/images/demo-mode.svg',
      videoSrc: '/videos/pub%20montre%20hermes.mp4',
      isPlaceholder: false
    },
    {
      id: 'demo-beaute',
      category: 'Beauté & Cosmétiques',
      title: 'Soins & Laits Cosmétiques — Moby',
      description: 'Mise en scène publicitaire du produit cosmétique et valorisation visuelle générée par IA.',
      poster: '/images/demo-beaute.svg',
      videoSrc: '/videos/vid%C3%A9o%20moby%202.mp4',
      isPlaceholder: false
    },
    {
      id: 'demo-quotidien',
      category: 'Accessoires & Articles du quotidien',
      title: 'Bouilloires & Équipements Maison',
      description: 'Valorisation des accessoires et de leurs caractéristiques à travers une vidéo publicitaire dynamique.',
      poster: '/images/demo-hightech.svg',
      videoSrc: '/videos/pub%20bouloire.mp4',
      isPlaceholder: false
    },
    {
      id: 'demo-chaussures-pro',
      category: 'Chaussures professionnelles & Sécurité',
      title: 'Chaussures de Sécurité JCTOP',
      description: 'Mise en avant du produit, de ses finitions robustes et de son univers professionnel.',
      poster: '/images/demo-chaussures.svg',
      videoSrc: '/videos/PUB%20jctop%20complet.mp4',
      isPlaceholder: false
    }
  ],

  // Section Avant / Après
  beforeAfter: {
    before: {
      tag: 'Point de départ',
      label: 'Photo du produit',
      image: '/videos/IMG-20260822-WA0021.jpg',
      title: 'Une photo simple prise avec votre smartphone',
      desc: 'Vous prenez vous-même 1 à 3 photos claires de votre article (ici, un masque facial de protection) avec la caméra de votre téléphone et vous nous les envoyez directement sur WhatsApp.',
      highlight: 'Aucun matériel professionnel requis'
    },
    after: {
      tag: 'Livrable GoPrime',
      label: 'Vidéo publicitaire finale',
      image: '/videos/IMG-20260822-WA0021.jpg',
      videoSrc: '/videos/pub masque faciale.mp4',
      title: 'Une vidéo verticale 9:16 rythmée & animée',
      desc: 'Mise en scène dynamique du masque facial avec effets visuels, titrage accrocheur dès les premières secondes, musique rythmée et appel clair à commander sur WhatsApp.',
      highlight: 'Prête à être publiée sur vos pages et statuts'
    }
  },

  // Offres et Tarifs officiels de référence + Tarifs promotionnels (Novembre - Décembre 2026)
  pricing: {
    offer1: {
      categoryNumber: '01',
      categoryLabel: 'Catégorie 1 • Intelligence Artificielle',
      name: 'Vidéos publicitaires générées par IA',
      pricePrefix: 'Tarif unique',
      regularPrice: '8 000',
      promoPrice: '5 000',
      discountPercent: '37,5 %',
      savingsAmount: '3 000 FCFA',
      price: '8 000',
      currency: 'FCFA',
      period: 'Méthode IA • Livraison sous 48 heures',
      description: 'Création de vidéos publicitaires à partir d\'images de produits, avec mise en scène visuelle et génération de séquences avec l\'IA.',
      waType: 'offer1',
      promoCtaLabel: 'Commander à 5 000 FCFA sur WhatsApp',
      regularCtaLabel: 'Commander sur WhatsApp (8 000 FCFA)',
      features: [
        'Création de vidéos publicitaires à partir d\'images de produits',
        'Mise en scène visuelle et génération de séquences avec l\'IA',
        'Format vertical 9:16 prêt pour TikTok, Facebook & Statut WhatsApp',
        'Livraison rapide sous 48 heures'
      ]
    },
    offer2: {
      categoryNumber: '02',
      categoryLabel: 'Catégorie 2 • Motion Design E-commerce',
      name: 'Vidéos e-commerce avec motion design',
      pricePrefix: 'À partir de',
      regularPrice: '10 000',
      promoPrice: '8 000',
      discountPercent: '20 %',
      savingsAmount: '2 000 FCFA',
      price: '10 000',
      currency: 'FCFA',
      period: 'Montage Motion Design • Livraison sous 3 jours',
      badge: 'Populaire E-commerce',
      description: 'Amélioration de vidéos existantes fournies par les commerçants pour rendre leurs vidéos plus dynamiques et attractives.',
      waType: 'offer2',
      promoCtaLabel: 'Commander dès 8 000 FCFA sur WhatsApp',
      regularCtaLabel: 'Commander sur WhatsApp (dès 10 000 FCFA)',
      features: [
        'Amélioration de vidéos existantes fournies par les commerçants',
        'Ajout de motion design, animations, zooms et transitions',
        'Effets visuels et superpositions graphiques de textes',
        'Livraison sous 3 jours'
      ]
    },
    offer3: {
      categoryNumber: '03',
      categoryLabel: 'Catégorie 3 • Services & Entreprises',
      name: 'Vidéos de présentation de services professionnels',
      pricePrefix: 'À partir de',
      regularPrice: '15 000',
      promoPrice: '10 000',
      discountPercent: '33,3 %',
      savingsAmount: '5 000 FCFA',
      price: '15 000',
      currency: 'FCFA',
      period: 'Montage & Narration approfondis • Livraison sous 7 jours',
      description: 'Présentation d\'entreprises, d\'ateliers et de prestations professionnelles à partir de véritables images et séquences vidéo du professionnel en activité.',
      waType: 'offer3',
      promoCtaLabel: 'Commander dès 10 000 FCFA sur WhatsApp',
      regularCtaLabel: 'Commander sur WhatsApp (dès 15 000 FCFA)',
      features: [
        'Présentation d\'entreprises, d\'ateliers et de prestations professionnelles',
        'Utilisation de véritables images et séquences vidéo du professionnel en activité',
        'Montage dynamique, motion design, zooms et transitions',
        'Mise en valeur du savoir-faire • Livraison sous 7 jours'
      ]
    }
  }
};

/**
 * Vérifie automatiquement si la campagne promotionnelle Novembre-Décembre 2026 est active.
 * Dès le 1er janvier 2027, retourne false et rétablit les tarifs normaux de référence.
 * @param {Date} [now]
 * @returns {boolean}
 */
export function isPromoCampaignActive(now = new Date()) {
  const promo = GOPRIME_CONFIG.promoCampaign;
  if (!promo || !promo.enabled) return false;
  const start = new Date(promo.startDate);
  const end = new Date(promo.endDate);
  return now >= start && now <= end;
}
