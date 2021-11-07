import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onGalleryClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  evt.preventDefault();

  const instance = basicLightbox.create(`<img src="${evt.target.dataset.src}" alt="" />`);

  instance.show();
}

export { onGalleryClick };
