document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");

  // Scroll suave
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        const offset = 120;
        const top = target.offsetTop - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  // Animaciones con observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".card").forEach(card => observer.observe(card));

  // Highlight menú activo
  const sections = document.querySelectorAll("main section");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop - 150) current = "#" + sec.id;
    });
    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === current) link.classList.add("active");
    });
  });
});
