// Scroll suave para la navegación del menú
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // ajusta por el navbar
          behavior: "smooth"
        });
      }
    });
  });
});
