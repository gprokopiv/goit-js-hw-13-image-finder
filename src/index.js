import './styles.css';
// import './js/fetchCountries';
// import './js/countries';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
import galleryItemTpl from './templates/galleryItemTpl.hbs';  
console.log(galleryItemTpl);
import getRefs from './js/get-refs';
const refs = getRefs();

import API from'./js/apiService.js';


// function onClick(event) {
//     event.preventDefault()

//     if (event.target.nodeName !=='IMG') {
//       return;
//     }
// }
//   const makeGallery = galleryItems.map(makeGalleryRowMarkUp).join('');
// galleryContainer.insertAdjacentHTML('afterbegin', makeGallery); 

// galleryContainer.addEventListener('click', onClick);

function makeGalleryItemMarkup(image) {
    refs.galleryItem.insertAdjacentHTML('beforeend', galleryItemTpl(image));
  }



