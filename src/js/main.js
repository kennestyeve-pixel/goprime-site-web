/**
 * ============================================================================
 * GOPRIME - POINT D'ENTRÉE PRINCIPAL (MAIN.JS)
 * ============================================================================
 */

import { initWhatsAppButtons } from './whatsapp.js';
import { initHeroVideo, renderVideoGallery } from './video-gallery.js';
import { initFaqAccordion } from './faq.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialiser tous les liens et boutons WhatsApp
  initWhatsAppButtons();

  // 2. Initialiser la vidéo Hero et le lecteur modal
  initHeroVideo();

  // 3. Rendre la galerie de démonstrations vidéo modulaires
  renderVideoGallery();

  // 4. Initialiser la FAQ interactive
  initFaqAccordion();

  // 5. Scroll reveal animation avec IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });
  } else {
    // Fallback si IntersectionObserver n'est pas supporté
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('is-visible');
    });
  }
});
