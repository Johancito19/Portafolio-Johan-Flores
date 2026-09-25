const hmbButton = document.getElementById('hmbButton');
const mainNav = document.getElementById('mainNav');

function toggleMenu() {
  const isOpen = !mainNav.classList.contains('hidden');

  mainNav.classList.toggle('hidden');
  hmbButton.classList.toggle('is-active');
  hmbButton.setAttribute('aria-expanded', String(!isOpen));
  hmbButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
}

hmbButton.addEventListener('click', toggleMenu);

hmbButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleMenu();
  }
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (!mainNav.classList.contains('hidden')) {
      toggleMenu();
    }
  });
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  let hasError = false;

  contactForm.querySelectorAll('input, textarea').forEach((field) => {
    const formField = field.closest('.form-field');

    if (field.value.trim() === '') {
      formField.classList.add('error');
      hasError = true;
    } else {
      formField.classList.remove('error');
    }
  });

  if (hasError) {
    event.preventDefault();
  }
});

contactForm.querySelectorAll('input, textarea').forEach((field) => {
  field.addEventListener('input', () => {
    if (field.value.trim() !== '') {
      field.closest('.form-field').classList.remove('error');
    }
  });
});