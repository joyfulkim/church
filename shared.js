// Mobile menu
const mobBtn = document.getElementById('mob-btn');
const mobMenu = document.getElementById('mob-menu');
if (mobBtn && mobMenu) {
  mobBtn.addEventListener('click', () => mobMenu.classList.toggle('hidden'));
  mobMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobMenu.classList.add('hidden')));
}

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Registration form
function handleReg(e) {
  e.preventDefault();
  const input = document.getElementById('reg-name');
  const success = document.getElementById('reg-success');
  if (!input || !input.value.trim()) return;
  input.closest('form').style.display = 'none';
  success.classList.remove('hidden');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
