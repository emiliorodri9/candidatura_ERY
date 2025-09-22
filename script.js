// Pequeña mejora: abrir/cerrar secciones
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section h2");
  sections.forEach(h2 => {
    h2.style.cursor = "pointer";
    h2.addEventListener("click", () => {
      const content = h2.nextElementSibling;
      if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
