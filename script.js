// Interactividad: permite plegar/desplegar secciones sin ocultar videos por defecto
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card h2");

  cards.forEach(h2 => {
    h2.style.cursor = "pointer";

    h2.addEventListener("click", () => {
      const parent = h2.parentElement;
      const content = Array.from(parent.children).filter(
        el => el.tagName !== "H2"
      );

      content.forEach(el => {
        el.style.display = (el.style.display === "none") ? "block" : "none";
      });
    });
  });
});
