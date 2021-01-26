// import { error } from './notifications';
import galleryItemTpl from '../templates/gallery-item.hbs';  
import getRefs from './get-refs';
import apiService from'./apiService.js';
// import 'material-design-icons/iconfont/material-icons.css';


const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

function onSearch(e) {
    e.preventDefault();
    clearGalleryContainer();
    apiService.query = e.currentTarget.elements.query.value;
    apiService.resetPage();
    fetchImages();
    refs.loadMoreBtn.classList.add('is-hidden');

}

function fetchImages() {
  apiService
  .fetchImages()
  .then(images => {
    appendImageMarkup(images);
    refs.loadMoreBtn.classList.remove('is-hidden');
  })
 
}
function appendImageMarkup(images) {
  const markup = galleryItemTpl(images);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

function clearGalleryContainer() {
  refs.galleryContainer.innerHTML = '';
}

function onLoadMoreBtnClick() {
    apiService.incrementPage();
    fetchImages();

}







