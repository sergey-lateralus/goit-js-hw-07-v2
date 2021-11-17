import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

function createMarkup(array) {
    return array.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`
    }).join('');
};
