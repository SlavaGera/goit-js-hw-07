import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
    <a class='gallery__link' href = '${original}'>
    <img class='gallery__image' src='${preview}' data-source='${original}' alt ='${description}'/>
    </a>
    </div>`).join('');

galleryRef.insertAdjacentHTML('beforeend', markup);

function onImgClick(event) {
    event.preventDefault();
    console.log(event.target);
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const instance = basicLightbox.create(
        `<img src = '${event.target.dataset.source}' width='800' height='auto'/>`,
        {
            onShow: () => window.addEventListener('keydown', onEsc),
            onClose: () => window.addEventListener('keydown', onEsc),
        }
        
    );
    
    function onEsc(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
    instance.show();
}

galleryRef.addEventListener('click', onImgClick);