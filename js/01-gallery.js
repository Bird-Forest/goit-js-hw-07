import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const pictures = document.querySelector('.gallery');

const markup = galleryItems.map((elem) =>
`<li class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"/>
  </a>
</li>`).join('');

pictures.insertAdjacentHTML("beforeend", markup);

pictures.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault()
    if (evt.target.classList.value !== 'gallery__image') {
        return;
    }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">`);
  
  instance.show();

  document.addEventListener('keydown', onKey);

  function onKey(evt) {
      if (evt.code !== 'Escape') {
      return
    }
  instance.close()  
  };  
};