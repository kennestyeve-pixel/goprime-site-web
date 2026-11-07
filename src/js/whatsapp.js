/**
 * ============================================================================
 * GOPRIME - GESTIONNAIRE WHATSAPP
 * ============================================================================
 * Génère des liens WhatsApp sécurisés et correctement encodés pour tous
 * les boutons d'appel à l'action.
 * ============================================================================
 */

import { GOPRIME_CONFIG, isPromoCampaignActive } from './config.js';

/**
 * Construit un lien WhatsApp avec message encodé
 * @param {string} messageText 
 * @returns {string}
 */
export function buildWhatsAppUrl(messageText) {
  const phone = GOPRIME_CONFIG.whatsapp.phoneNumber;
  const encoded = encodeURIComponent(messageText || '');
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Synchronise l'affichage des tarifs promotionnels ou normaux selon la date de validité
 */
export function syncPromoPricingDisplay() {
  const promoActive = isPromoCampaignActive();
  const pricingSection = document.getElementById('tarifs');
  if (!pricingSection) return;

  if (!promoActive) {
    pricingSection.classList.add('pricing-section--promo-expired');

    // Masquer la bannière promotionnelle et les badges promo si la date est dépassée (après le 31 déc. 2026)
    document.querySelectorAll('[data-promo-only]').forEach((el) => {
      el.style.display = 'none';
    });

    // Rétablir l'affichage des tarifs normaux de référence en grand
    document.querySelectorAll('[data-regular-price]').forEach((el) => {
      const regPrice = el.getAttribute('data-regular-price');
      if (regPrice) {
        el.innerHTML = `${regPrice} <span class="pricing-card__currency">FCFA</span>`;
      }
    });

    document.querySelectorAll('[data-regular-cta]').forEach((el) => {
      const regLabel = el.getAttribute('data-regular-cta');
      if (regLabel) {
        el.textContent = regLabel;
      }
    });
  }
}

/**
 * Initialise tous les liens WhatsApp de la page
 */
export function initWhatsAppButtons() {
  syncPromoPricingDisplay();

  const promoActive = isPromoCampaignActive();
  const messagesPool = (!promoActive && GOPRIME_CONFIG.whatsapp.messages.regularMessages)
    ? { ...GOPRIME_CONFIG.whatsapp.messages, ...GOPRIME_CONFIG.whatsapp.messages.regularMessages }
    : GOPRIME_CONFIG.whatsapp.messages;

  const waButtons = document.querySelectorAll('[data-wa-type], [data-wa-message]');

  waButtons.forEach((btn) => {
    const waType = btn.getAttribute('data-wa-type');
    let message = btn.getAttribute('data-wa-message');

    if (!message && waType && messagesPool[waType]) {
      message = messagesPool[waType];
    } else if (!message) {
      message = messagesPool.hero;
    }

    const fullUrl = buildWhatsAppUrl(message);

    if (btn.tagName.toLowerCase() === 'a') {
      btn.setAttribute('href', fullUrl);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    } else {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(fullUrl, '_blank', 'noopener,noreferrer');
      });
    }
  });
}
