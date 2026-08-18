const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// Load a small visual/accessibility enhancement layer without adding a build step.
const enhancementStyles = document.createElement('link');
enhancementStyles.rel = 'stylesheet';
enhancementStyles.href = 'styles-overrides.css';
document.head.appendChild(enhancementStyles);

const themeToggle = $('#themeToggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') document.body.classList.add('light');
const syncThemeButton = () => {
  const light = document.body.classList.contains('light');
  if (!themeToggle) return;
  themeToggle.textContent = light ? '☀' : '◐';
  themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  themeToggle.setAttribute('title', light ? 'Switch to dark theme' : 'Switch to light theme');
};
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  syncThemeButton();
});
syncThemeButton();

const menuBtn = $('#menuBtn');
const mobileNav = $('#mobileNav');
const closeMobileNav = () => {
  mobileNav?.classList.remove('open');
  mobileNav?.setAttribute('aria-hidden', 'true');
  menuBtn?.setAttribute('aria-expanded', 'false');
};
menuBtn?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  mobileNav.setAttribute('aria-hidden', String(!open));
  menuBtn.setAttribute('aria-expanded', String(open));
});
$$('.mobile-nav a').forEach((a) => a.addEventListener('click', closeMobileNav));

const modal = $('#credentialModal');
function openModal() {
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close')?.focus();
}
function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Resume CTA: the one-page PDF is now present in the repository.
const resumePath = 'assets/Tejal_Ubale_Resume.pdf';
const credentialBtn = $('#credentialBtn');
const resumeModalList = modal?.querySelector('.pending-list');
const resumeModalAction = modal?.querySelector('.modal-panel a.btn-primary');
if (resumeModalList) {
  const last = resumeModalList.querySelector('span:last-child');
  if (last) last.textContent = '✓ One-page resume PDF is available in the portfolio assets.';
}
if (resumeModalAction) {
  resumeModalAction.href = resumePath;
  resumeModalAction.target = '_blank';
  resumeModalAction.rel = 'noreferrer';
  resumeModalAction.textContent = 'Open one-page resume ↗';
}
credentialBtn?.addEventListener('click', async () => {
  try {
    const response = await fetch(resumePath, { method: 'HEAD', cache: 'no-store' });
    if (response.ok) {
      window.open(resumePath, '_blank', 'noopener,noreferrer');
      return;
    }
  } catch (_) {
    // Fall back to the modal if a static host blocks HEAD requests.
  }
  openModal();
});
$$('[data-close="credentialModal"]').forEach((b) => b.addEventListener('click', closeModal));
modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeMobileNav(); closeModal(); }
});

const year = $('#year');
if (year) year.textContent = new Date().getFullYear();

// Remove only exact duplicate credential records (same title + issuer/date line), preserving distinct records.
const seenCredentials = new Set();
$$('.credential-list > div').forEach((item) => {
  const key = item.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
  if (seenCredentials.has(key)) item.remove();
  else seenCredentials.add(key);
});
$$('.credential-groups details').forEach((group) => {
  const items = group.querySelectorAll('.credential-list > div').length;
  const count = group.querySelector('summary b');
  if (count) count.textContent = `${items} records`;
});

// Reveal-on-scroll, disabled for users who request reduced motion.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }), { threshold: 0.08 });
  $$('.reveal').forEach((el) => observer.observe(el));
} else {
  $$('.reveal').forEach((el) => el.classList.add('visible'));
}

window.addEventListener('load', () => {
  if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ block: 'start' }), 80);
});
