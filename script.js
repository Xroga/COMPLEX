// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

function toggleNav() {
  nav.classList.toggle('open');
  overlay.classList.toggle('show');
}

hamburger.addEventListener('click', toggleNav);
overlay.addEventListener('click', toggleNav);

// Close nav on link click (mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      toggleNav();
    }
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form validation — order form
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const projectType = document.getElementById('projectType').value;
  const description = document.getElementById('description').value.trim();
  
  if (!projectType) {
    alert('Please select a project type.');
    return;
  }
  if (!description) {
    alert('Please describe what you need.');
    return;
  }
  
  alert('✅ Request submitted! We\'ll get back to you within 24 hours.');
  this.reset();
});

// Form validation — contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!name) {
    alert('Please enter your name.');
    return;
  }
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  if (!message) {
    alert('Please write a message.');
    return;
  }
  
  alert('✉️ Message sent! We\'ll reply soon.');
  this.reset();
});