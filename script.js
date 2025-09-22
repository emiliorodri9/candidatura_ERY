// Scroll suave y animaciones con IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  // Scroll suave
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const target = document.querySelector(href);
      if (target) {
        const topNote = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--topnote-h')) || 40;
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-h')) || 56;
        const offset = (topNote + navH) + 18; // ajustar por el top-note + navbar
        const rect = target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPos = rect.top + scrollTop - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // IntersectionObserver para animar las cards al entrar en viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // opcional: dejar de observar una vez visible
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.card').forEach(card => observer.observe(card));
});


