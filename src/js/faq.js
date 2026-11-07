/**
 * ============================================================================
 * GOPRIME - FAQ ACCORDÉON INTERACTIF
 * ============================================================================
 * Gère l'accordéon de questions/réponses avec transitions fluides et accessibilité
 * ============================================================================
 */

export function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('faq-item--active');

      // Fermer les autres questions pour une lecture épurée sur mobile
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('faq-item--active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Basculer l'état de l'élément cliqué
      if (isActive) {
        item.classList.remove('faq-item--active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('faq-item--active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
