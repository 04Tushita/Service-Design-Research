/**
 * Shared site JavaScript
 * Handles back-to-top scroll, mobile nav toggling, and global interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      navList.classList.toggle('mobile-open');
      const isOpen = navList.classList.contains('mobile-open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Back to top button
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
