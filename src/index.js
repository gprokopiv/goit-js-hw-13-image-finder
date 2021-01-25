import './styles.css';
import galleryItemTpl from './templates/gallery-item.hbs';  
import getRefs from './js/get-refs';

const refs = getRefs();

import apiService from'./js/apiService.js';

refs.searchForm.addEventListener('submit', onSearch);
function onSearch(e) {
    e.preventDefault();
  
    apiService.query = e.currentTarget.elements.query.value;
  
    if (apiService.query === '') {
      return alert('sorry');
    }
    // loadMoreBtn.show();
    apiService.resetPage();
  clearGalleryContainer();
  fetchImages();
}
function fetchImages() {
    // loadMoreBtn.disable();
    apiService.fetchImages().then(images => {
        appendImageMarkup(images);
    //   loadMoreBtn.enable();
    });
  }
  function appendImageMarkup(images) {
    const markup = galleryItemTpl(images);
    refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}
 
  
  function clearGalleryContainer() {
    refs.galleryContainer.innerHTML = '';
  }

  