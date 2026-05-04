/* ═══════════════════════════════════════════
   ONE TOUCH DENTAL — main.js
   Handles: Form, Nav, Animations, FAQ, Tracking
═══════════════════════════════════════════ */

// ── CONSTANTS ──────────────────────────────
const WA_NUMBER = '254708792043';
const CLINIC_NAME = 'One Touch Dental Clinic';

// ── DOM READY ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAnimations();
  initMobileMenu();
  setLeadSource();
  initBodyOffset();
});

// ── NAV SCROLL EFFECT ──────────────────────
function initNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── BODY OFFSET (nav + ribbon) ──────────────
function initBodyOffset() {
  const ribbon = document.getElementById('emergencyRibbon');
  if (!ribbon) return;
  document.body.classList.add('has-ribbon');

  // When ribbon is closed, remove offset
  const closeBtn = ribbon.querySelector('.er-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.body.classList.remove('has-ribbon');
    });
  }
}

// ── MOBILE MENU ────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('hamBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ── LEAD SOURCE TRACKING ───────────────────
function setLeadSource() {
  const sourceField = document.getElementById('leadSource');
  if (!sourceField) return;

  const params = new URLSearchParams(window.location.search);
  const utm_source  = params.get('utm_source')  || '';
  const utm_medium  = params.get('utm_medium')  || '';
  const utm_campaign= params.get('utm_campaign') || '';
  const referrer    = document.referrer ? new URL(document.referrer).hostname : 'Direct';

  let source = 'Landing Page — Direct';
  if (utm_source) {
    source = `${utm_source}${utm_medium ? ' / ' + utm_medium : ''}${utm_campaign ? ' / ' + utm_campaign : ''}`;
  } else if (document.referrer) {
    source = `Referral: ${referrer}`;
  } else if (window.location.search.includes('gclid')) {
    source = 'Google Ads';
  }

  sourceField.value = source;
}

// ── FORM SUBMISSION ─────────────────────────
function submitForm(e) {
  e.preventDefault();

  const form      = document.getElementById('bookingForm');
  const success   = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('formSubmit');
  const submitTxt = document.getElementById('submitText');
  const submitSpin= document.getElementById('submitSpinner');

  // Get values
  const name    = (document.getElementById('fname')?.value    || '').trim();
  const phone   = (document.getElementById('fphone')?.value   || '').trim();
  const service = (document.getElementById('fservice')?.value || '').trim();
  const source  = (document.getElementById('leadSource')?.value || 'Landing Page');

  // Basic validation
  if (!name || !phone || !service) {
    alert('Please fill in all 3 fields to book your consultation.');
    return;
  }

  // UI: loading state
  submitBtn.disabled = true;
  if (submitTxt) submitTxt.style.display = 'none';
  if (submitSpin) submitSpin.style.display = 'inline';

  // Build WhatsApp message
  const waMsg = encodeURIComponent(
    `🦷 *New Consultation Request — ${CLINIC_NAME}*\n\n` +
    `👤 *Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `🩺 *Treatment needed:* ${service}\n` +
    `📍 *Source:* ${source}\n\n` +
    `_Sent from the One Touch Dental website._`
  );
  const waURL = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  // Simulate brief processing delay, then show success + open WhatsApp
  setTimeout(() => {
    // Show success
    if (form) { form.style.display = 'none'; }
    if (success) { success.style.display = 'block'; }

    // Push to WhatsApp
    window.open(waURL, '_blank');

    // Track conversion (if Google Analytics / gtag present)
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', { event_category: 'Form', event_label: service, value: 1 });
    }
  }, 800);
}

// ── FAQ ACCORDION ───────────────────────────
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  if (!item) return;
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  // Open clicked (if wasn't open)
  if (!isOpen) item.classList.add('open');
}

// ── SCROLL ANIMATIONS ───────────────────────
function initAnimations() {
  const els = document.querySelectorAll('[data-anim]');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

// ── SMOOTH SCROLL for anchor links ──────────
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    e.preventDefault();
    const navH = 68 + 40; // nav + ribbon
    const top  = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  }
});

// ── PHONE NUMBER FORMATTING ─────────────────
const phoneInput = document.getElementById('fphone');
if (phoneInput) {
  phoneInput.addEventListener('input', () => {
    let val = phoneInput.value.replace(/\D/g, '');
    if (val.startsWith('254')) val = '0' + val.slice(3);
    phoneInput.value = val;
  });
}
