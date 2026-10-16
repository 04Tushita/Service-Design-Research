/**
 * Research Findings Controller
 * Handles filter chips and insight card excerpt modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterChips = document.querySelectorAll('.chip-btn');
  const insightCards = document.querySelectorAll('.insight-card');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalTitle = document.querySelector('.modal-title');
  const modalQuote = document.querySelector('.modal-quote-block');
  const modalBody = document.querySelector('.modal-body-text');
  const modalClose = document.querySelector('.modal-close-btn');

  // Filter chips functionality
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filterVal = chip.getAttribute('data-filter');

      insightCards.forEach(card => {
        const interview = card.getAttribute('data-interview');
        const theme = card.getAttribute('data-theme');

        if (filterVal === 'all') {
          card.style.display = 'flex';
        } else if (filterVal.startsWith('int-') && interview === filterVal.replace('int-', '')) {
          card.style.display = 'flex';
        } else if (filterVal === 'pain' && theme === 'pain') {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal open on card click
  insightCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.insight-card-title')?.textContent || 'Insight Excerpt';
      const quote = card.querySelector('.insight-card-quote')?.textContent || '';
      const source = card.querySelector('.insight-card-source')?.textContent || 'Transcript';
      const fullContext = card.getAttribute('data-excerpt') || 'Full interview transcript detailing user frustration, workflow workarounds, and systemic friction points.';

      if (modalTitle) modalTitle.textContent = `${source} • ${title}`;
      if (modalQuote) modalQuote.textContent = quote;
      if (modalBody) modalBody.textContent = fullContext;

      if (modalBackdrop) {
        modalBackdrop.classList.add('open');
      }
    });
  });

  // Modal close
  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
    }
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('open')) {
      closeModal();
    }
  });
});
