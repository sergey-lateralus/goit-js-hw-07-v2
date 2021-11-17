import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

gallery.addEventListener('click', onGalleryClick)

function createMarkup(array) {
    return array.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>`
    }).join('');
};

function onGalleryClick(event) {
    if(!event.target.classList.contains(`gallery__image`)) {
        return;
    }
    
    event.preventDefault();
    
    basicLightbox.create(`<img src="${event.target.dataset.source}">`).show();
};
