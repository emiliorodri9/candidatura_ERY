document.addEventListener("DOMContentLoaded", () => {
  // Scroll suave + active link
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        const offset = 110; // altura menú+nota
        const top = target.offsetTop - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  // Observer para animar secciones
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".card").forEach(card => observer.observe(card));

  // Highlight menú activo
  const sections = document.querySelectorAll("main section");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 150;
      if (scrollY >= secTop) current = "#" + sec.id;
    });
    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  });

  // Modal cine
  const modal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".video-preview").forEach(v => {
    v.addEventListener("click", () => {
      modal.style.display = "flex";
      modalVideo.src = v.querySelector("source").src;
      modalVideo.play();
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalVideo.pause();
      modalVideo.src = "";
    }
  });
});
