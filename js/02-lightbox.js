import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

// Refs
const galleryRef = document.querySelector(".gallery");
const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join("");
galleryRef.insertAdjacentHTML("beforeend", markup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
