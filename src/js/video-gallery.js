/**
 * ============================================================================
 * GOPRIME - GALERIE & LECTEUR VIDÉO MODULAIRE
 * ============================================================================
 * Gère le rendu de la galerie vidéo à partir de la configuration centralisée
 * ainsi que le lecteur vidéo universel sans autoplay avec son.
 * ============================================================================
 */

import { GOPRIME_CONFIG } from './config.js';
import { buildWhatsAppUrl } from './whatsapp.js';

let modalElement = null;
let modalPlayer = null;
let modalContentContainer = null;

/**
 * Crée le modal vidéo global dans le DOM
 */
function createVideoModal() {
  if (modalElement) return;

  const modalHtml = `
    <div id="videoModal" class="video-modal" role="dialog" aria-modal="true" aria-label="Lecteur vidéo publicitaire">
      <div class="video-modal__content">
        <button type="button" class="video-modal__close-btn" id="closeVideoModal" aria-label="Fermer la vidéo">
          <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
        <div id="videoModalBody" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;"></div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  modalElement = document.getElementById('videoModal');
  modalContentContainer = document.getElementById('videoModalBody');
  const closeBtn = document.getElementById('closeVideoModal');

  closeBtn.addEventListener('click', closeVideo);

  modalElement.addEventListener('click', (e) => {
    if (e.target === modalElement) {
      closeVideo();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalElement.classList.contains('video-modal--active')) {
      closeVideo();
    }
  });
}

/**
 * Ouvre une vidéo dans le modal
 * @param {Object} item 
 */
export function openVideo(item) {
  createVideoModal();

  if (item.videoSrc && item.videoSrc.trim() !== '') {
    // Si un fichier vidéo existe, on insère le lecteur vidéo natif
    modalContentContainer.innerHTML = `
      <video id="activeModalPlayer" class="video-modal__player" controls playsinline preload="metadata">
        <source src="${item.videoSrc}" type="video/mp4">
        Votre navigateur ne prend pas en charge la lecture vidéo HTML5.
      </video>
    `;

    modalPlayer = document.getElementById('activeModalPlayer');
    modalElement.classList.add('video-modal--active');
    document.body.style.overflow = 'hidden';

    // Lecture contrôlée par l'utilisateur (avec son car initiée par un clic)
    modalPlayer.play().catch(() => {
      // Ignorer si la politique du navigateur restreint la lecture automatique
    });
  } else {
    // Si aucun fichier vidéo n'est encore lié, afficher une boîte informative propre
    const waUrl = buildWhatsAppUrl(`Bonjour GoPrime, je souhaite voir des exemples de vidéos pour la catégorie : ${item.category || item.title}`);
    
    modalContentContainer.innerHTML = `
      <div class="video-modal__fallback-info">
        <div style="font-size: 2.5rem;">🎬</div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #FFFFFF;">${item.title || 'Vidéo en préparation'}</h3>
        <p style="font-size: 0.875rem; color: #94A3B8; line-height: 1.5;">
          ${item.category ? 'Catégorie : <strong>' + item.category + '</strong><br>' : ''}
          Cet emplacement est réservé. Contactez-nous pour recevoir des vidéos récentes dans cette catégorie.
        </p>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm" style="margin-top: 0.5rem;">
          Demander des exemples sur WhatsApp
        </a>
      </div>
    `;

    modalElement.classList.add('video-modal--active');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Ferme le modal et stoppe la vidéo
 */
export function closeVideo() {
  if (!modalElement) return;

  if (modalPlayer) {
    modalPlayer.pause();
    modalPlayer.currentTime = 0;
  }

  modalElement.classList.remove('video-modal--active');
  document.body.style.overflow = '';
  modalContentContainer.innerHTML = '';
  modalPlayer = null;
}

/**
 * Initialise le Hero Vidéo principal
 */
export function initHeroVideo() {
  const heroVideo = document.getElementById('heroMainVideo');
  if (heroVideo) {
    // Assurer la lecture automatique en mode muet conformément aux politiques navigateurs
    heroVideo.muted = true;
    heroVideo.play().catch(() => {
      // L'utilisateur peut lancer la lecture manuellement via les contrôles natifs
    });
    return;
  }

  const heroCard = document.getElementById('heroVideoCard');
  if (!heroCard) return;

  const heroData = GOPRIME_CONFIG.heroVideo;
  
  heroCard.addEventListener('click', () => {
    openVideo(heroData);
  });

  const playBtn = heroCard.querySelector('.hero-video-card__play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openVideo(heroData);
    });
  }
}

/**
 * Rend la galerie de démonstrations vidéo
 */
export function renderVideoGallery() {
  const galleryGrid = document.getElementById('videoGalleryGrid');
  if (!galleryGrid) return;

  // 1. Rendu de la galerie de la Prestation 1 (Vidéos IA Produits)
  const videos = (GOPRIME_CONFIG.serviceCategories && GOPRIME_CONFIG.serviceCategories.aiProductVideos && GOPRIME_CONFIG.serviceCategories.aiProductVideos.videos) || GOPRIME_CONFIG.galleryVideos || [];

  galleryGrid.innerHTML = videos.map((item, index) => {
    const hasVideo = item.videoSrc && item.videoSrc.trim() !== '';

    return `
      <article class="video-card reveal-on-scroll" data-index="${index}">
        <div class="video-card__thumb-wrap ${hasVideo ? 'video-card__thumb-wrap--player' : ''}">
          <span class="video-card__category">${item.category}</span>
          ${hasVideo ? `
            <video
              class="video-card__video"
              controls
              playsinline
              preload="metadata"
              aria-label="Vidéo publicitaire : ${item.title}"
            >
              <source src="${item.videoSrc}#t=0.5" type="video/mp4">
              ${decodeURI(item.videoSrc) !== item.videoSrc ? `<source src="${decodeURI(item.videoSrc)}#t=0.5" type="video/mp4">` : ''}
              Votre navigateur ne prend pas en charge la lecture vidéo HTML5.
            </video>
            <button type="button" class="video-card__play" aria-label="Lire la vidéo : ${item.title}">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
          ` : `
            <img src="${item.poster}" alt="Aperçu vidéo ${item.title}" class="video-card__poster" loading="lazy">
            <button type="button" class="video-card__play" aria-label="Lecture">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
            <span class="video-card__status-badge">Format 9:16</span>
          `}
        </div>
        <div class="video-card__info">
          <h3 class="video-card__title">${item.title}</h3>
          <p class="video-card__meta">${item.description}</p>
        </div>
      </article>
    `;
  }).join('');

  // Gestion des lecteurs vidéo intégrés et des boutons de lecture
  const allVideoElements = galleryGrid.querySelectorAll('.video-card__video');
  const cards = galleryGrid.querySelectorAll('.video-card');

  cards.forEach((card, idx) => {
    const item = videos[idx];
    const videoEl = card.querySelector('.video-card__video');
    const playBtn = card.querySelector('.video-card__play');
    const thumbWrap = card.querySelector('.video-card__thumb-wrap');

    if (videoEl) {
      // Bouton Play superposé : lance ou met en pause la vidéo de la carte
      if (playBtn) {
        playBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (videoEl.paused) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      }

      // Quand une vidéo démarre, mettre en pause les autres vidéos de la galerie et masquer le bouton central
      videoEl.addEventListener('play', () => {
        card.classList.add('video-card--playing');
        allVideoElements.forEach((otherVideo) => {
          if (otherVideo !== videoEl && !otherVideo.paused) {
            otherVideo.pause();
          }
        });
      });

      videoEl.addEventListener('pause', () => {
        card.classList.remove('video-card--playing');
      });

      videoEl.addEventListener('ended', () => {
        card.classList.remove('video-card--playing');
      });
    } else if (thumbWrap) {
      thumbWrap.addEventListener('click', () => {
        openVideo(item);
      });

      thumbWrap.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openVideo(item);
        }
      });
    }
  });

  // 2. Initialisation du lecteur de démonstration de la Prestation 2 (Vidéos E-commerce Motion Design)
  const motionSlot = document.getElementById('motionDesignGallerySlot');
  const motionConfig = GOPRIME_CONFIG.serviceCategories && GOPRIME_CONFIG.serviceCategories.ecommerceMotionDesign;
  const motionDemo = (motionConfig && motionConfig.videoDemo) || (motionConfig && motionConfig.videos && motionConfig.videos[0]);

  if (motionSlot && !document.getElementById('motionShowcaseVideo') && motionDemo && motionDemo.videoSrc) {
    motionSlot.innerHTML = `
      <div class="motion-video-showcase">
        <div class="motion-video-showcase__label">
          <span class="motion-video-showcase__dot" aria-hidden="true"></span>
          <span>${motionDemo.label || 'DÉMONSTRATION RÉELLE • AVANT / APRÈS'}</span>
        </div>

        <div class="motion-video-frame" id="motionVideoFrame">
          <video
            id="motionShowcaseVideo"
            class="motion-video-frame__player"
            controls
            playsinline
            preload="metadata"
            aria-label="Démonstration réelle Avant / Après — Vidéo E-commerce améliorée par Motion Design"
          >
            <source src="${motionDemo.videoSrc}#t=0.5" type="video/mp4">
            Votre navigateur ne prend pas en charge la lecture vidéo HTML5.
          </video>
          <button type="button" class="motion-video-frame__play" id="motionVideoPlayBtn" aria-label="Lire la vidéo de démonstration E-commerce Avant / Après">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>

        <p class="motion-video-showcase__caption">
          ${motionDemo.caption || motionDemo.description || 'Découvrez comment GoPrime transforme une vidéo produit classique en une publicité plus dynamique grâce au Motion Design.'}
        </p>
      </div>
    `;
  }

  const motionVideo = document.getElementById('motionShowcaseVideo');
  const motionPlayBtn = document.getElementById('motionVideoPlayBtn');
  const motionFrame = document.getElementById('motionVideoFrame');

  if (motionVideo && motionFrame) {
    if (motionPlayBtn) {
      motionPlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (motionVideo.paused) {
          motionVideo.play().catch(() => {});
        } else {
          motionVideo.pause();
        }
      });
    }

    motionVideo.addEventListener('play', () => {
      motionFrame.classList.add('motion-video-frame--playing');
    });

    motionVideo.addEventListener('pause', () => {
      motionFrame.classList.remove('motion-video-frame--playing');
    });

    motionVideo.addEventListener('ended', () => {
      motionFrame.classList.remove('motion-video-frame--playing');
    });
  }

  // 3. Initialisation du lecteur indépendant de la Prestation 3 (Services & Entreprises)
  const serviceVideo = document.getElementById('serviceShowcaseVideo');
  const servicePlayBtn = document.getElementById('serviceVideoPlayBtn');
  const serviceFrame = document.getElementById('serviceVideoFrame');

  // Synchronisation globale : une seule vidéo de démonstration joue avec le son à la fois
  const allInteractiveVideos = document.querySelectorAll('.video-card__video, #motionShowcaseVideo, #serviceShowcaseVideo, .comparison-card__video');
  allInteractiveVideos.forEach((vid) => {
    vid.addEventListener('play', () => {
      allInteractiveVideos.forEach((other) => {
        if (other !== vid && !other.paused) {
          other.pause();
        }
      });
    });
  });

  if (serviceVideo && serviceFrame) {
    if (servicePlayBtn) {
      servicePlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (serviceVideo.paused) {
          serviceVideo.play().catch(() => {});
        } else {
          serviceVideo.pause();
        }
      });
    }

    serviceVideo.addEventListener('play', () => {
      serviceFrame.classList.add('service-video-frame--playing');
    });

    serviceVideo.addEventListener('pause', () => {
      serviceFrame.classList.remove('service-video-frame--playing');
    });

    serviceVideo.addEventListener('ended', () => {
      serviceFrame.classList.remove('service-video-frame--playing');
    });
  }
}
