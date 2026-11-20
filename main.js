/* Optional enhancement; all content and navigation remain usable without JavaScript. */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function closeMenu() {
  nav?.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
}
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelector('[data-copy-email]')?.addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  const email = 'xyx18011603999@gmail.com';
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(email);
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = email;
  }
});
const lightbox = document.querySelector('.lightbox');
document.querySelectorAll('[data-zoom]').forEach(button => {
  button.addEventListener('click', () => {
    const source = button.querySelector('img');
    if (!lightbox?.showModal) { window.open(source.src, '_blank', 'noopener'); return; }
    const image = lightbox.querySelector('img');
    image.src = source.src;
    image.alt = source.alt;
    lightbox.querySelector('.lightbox-original')?.setAttribute('href', source.src);
    lightbox.querySelector('.lightbox-caption').textContent = button.closest('figure').querySelector('figcaption')?.textContent || '';
    lightbox.showModal();
  });
});
lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
