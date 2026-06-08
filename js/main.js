/**
 * Liberation War Archive — Minimal JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Init External Libraries (if present)
  if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true });
  if (typeof GLightbox !== 'undefined') GLightbox({ selector: '.glightbox' });

  // 2. Mobile Nav Toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }

  // 3. Simple Filtering (for Interviews/Photos)
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      // Update active pill
      e.target.parentElement.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      
      // Filter items
      const filter = e.target.getAttribute('data-filter');
      document.querySelectorAll('[data-category], [data-role]').forEach(item => {
        const type = item.getAttribute('data-category') || item.getAttribute('data-role');
        item.style.display = (filter === 'all' || type === filter) ? '' : 'none';
      });
    });
  });

  // 4. Simple Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (contactForm.checkValidity()) {
        contactForm.style.display = 'none';
        document.getElementById('formSuccess').classList.add('show');
      } else {
        contactForm.reportValidity();
      }
    });
  }
});

// Simple download function
window.downloadImage = (url, filename) => {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'download';
  a.click();
};
