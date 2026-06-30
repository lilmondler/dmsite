/* ============================================================
   DM365 redesign demo — main.js
   No external libraries. No analytics. No data is sent anywhere.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  initMobileNav();
  initRevealOnScroll();
  initAccordion();
  initDemoForm();
  initAudienceSwitch();
  setActiveNavLink();
});

/* ---------- Mobile navigation ---------- */
function initMobileNav() {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.mobile-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.contains('is-open');
    nav.classList.toggle('is-open', !isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  });

  // Close mobile menu when a link inside it is clicked
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ---------- Reveal-on-scroll ---------- */
function initRevealOnScroll() {
  var items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(function (el) { observer.observe(el); });
}

/* ---------- FAQ accordion ---------- */
function initAccordion() {
  var triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var panel = document.getElementById(trigger.getAttribute('aria-controls'));
      var expanded = trigger.getAttribute('aria-expanded') === 'true';

      trigger.setAttribute('aria-expanded', String(!expanded));
      if (panel) {
        panel.style.maxHeight = expanded ? null : panel.scrollHeight + 'px';
      }
    });
  });
}

/* ---------- Demo "Request a demo" / contact form ----------
   This is a static front-end demo. Nothing is sent to a server.
   Before going to production, wire this up to your CRM or backend
   (see the comment block in contact.html for exactly where). */
function initDemoForm() {
  var form = document.querySelector('#demo-request-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var note = form.querySelector('.form-note');
    if (note) {
      note.textContent = 'Thank you. This is a demo form — no data was sent anywhere. Connect it to your backend or CRM before production use.';
      note.classList.add('is-visible');
      note.setAttribute('role', 'status');
    }
    form.reset();
    if (note) note.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/* ---------- Solutions page: audience switch (CRO / Sponsor / Site / RWE) ---------- */
function initAudienceSwitch() {
  var buttons = document.querySelectorAll('.audience-switch [data-audience]');
  if (!buttons.length) return;

  var panels = document.querySelectorAll('[data-audience-panel]');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-audience');

      buttons.forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
      btn.setAttribute('aria-selected', 'true');

      panels.forEach(function (panel) {
        var match = panel.getAttribute('data-audience-panel') === target;
        panel.hidden = !match;
      });
    });
  });
}

/* ---------- Highlight the current page in the header nav ---------- */
function setActiveNavLink() {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a, .mobile-nav-list a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });
}
