import { galleryItems } from "./gallery-items.js";

// Refs
const galleryRef = document.querySelector(".gallery");
const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}"/></a></div>`;
  })
  .join("");
galleryRef.insertAdjacentHTML("beforeend", markup);

// Functions
const onClick = (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }

  const imgLink = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imgLink}"> 
`);
  instance.show();

  galleryRef.addEventListener("keydown", (event) => {
    if (event.key === "Escape") instance.close();
  });
};

// Listeners
galleryRef.addEventListener("click", onClick);
