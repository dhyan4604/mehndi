(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".navbar nav");
  const overlay = document.querySelector(".nav-overlay");

  if (!menuToggle || !nav || !overlay) return;

  const setMenuState = (open) => {
    document.body.classList.toggle("nav-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.contains("nav-open");
    setMenuState(!isOpen);
  });

  overlay.addEventListener("click", () => setMenuState(false));

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setMenuState(false);
  });
})();
