// Build nav dots
const total = 17;
const nav = document.getElementById('navDots');
for (let i = 1; i <= total; i++) {
  const btn = document.createElement('button');
  btn.className = 'nav-dot';
  btn.textContent = i;
  btn.onclick = () => document.getElementById('slide-' + i).scrollIntoView({ behavior: 'smooth' });
  nav.appendChild(btn);
}

// Scroll progress + active dot
const bar = document.getElementById('progress');
const dots = document.querySelectorAll('.nav-dot');
const slides = document.querySelectorAll('.slide');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total_h = document.body.scrollHeight - window.innerHeight;
  bar.style.width = (scrolled / total_h * 100) + '%';

  // active dot
  slides.forEach((slide, i) => {
    const rect = slide.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      dots.forEach(d => d.classList.remove('active'));
      if (dots[i]) dots[i].classList.add('active');
    }
  });
});
