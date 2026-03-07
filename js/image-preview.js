(() => {
  const images = Array.from(document.querySelectorAll("img"));

  if (!images.length) return;

  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.setAttribute("aria-hidden", "true");

  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close image preview">&times;</button>
    <img class="lightbox-image" src="" alt="Image preview">
  `;

  document.body.appendChild(lightbox);

  const previewImage = lightbox.querySelector(".lightbox-image");
  const closeButton = lightbox.querySelector(".lightbox-close");

  const openLightbox = (sourceImage) => {
    previewImage.src = sourceImage.currentSrc || sourceImage.src;
    previewImage.alt = sourceImage.alt || "Image preview";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  };

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    previewImage.src = "";
  };

  images.forEach((image) => {
    image.classList.add("previewable-image");
    image.addEventListener("click", () => openLightbox(image));
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
})();
