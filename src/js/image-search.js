// import { error } from './notifications';
// import './styles.css';
import galleryItemTpl from '../templates/gallery-item.hbs';  
import getRefs from './get-refs';
import apiService from'./apiService.js';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);
function onSearch(e) {
    e.preventDefault();
  
    apiService.query = e.currentTarget.elements.query.value;
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

  