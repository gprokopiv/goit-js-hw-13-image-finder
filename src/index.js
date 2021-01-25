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
      return alert('Введи что-то нормальное');
    }
    loadMoreBtn.show();
    apiService.resetPage();
  clearGalleryContainer();
  fetchImages();
}
function fetchImages() {
    loadMoreBtn.disable();
    apiService.fetchImages().then(images => {
        appendImageMarkup(images);
      loadMoreBtn.enable();
    });
  }
  
  function appendImageMarkup(images) {
    const markup = galleryItemTpl(images);
    refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}
  
  function clearGalleryContainer() {
    refs.galleryContainer.innerHTML = '';
  }

  galleryContainer.addEventListener('click', onClick);
  
  function onClick(event) {
    event.preventDefault()

    if (event.target.nodeName !=='IMG') {
      return;
    }

    modalImage.src = event.target.dataset.source;
    modalBox.classList.add('is-open');
    window.addEventListener('keydown', onEscapePress);

  };
 
  function onEscapePress(event) {
    if (event.code === 'Escape') {
      onCloseModalBtn();
    }
  }
   

  const closeModalBtn = document.querySelector(
    '[data-action="close-lightbox"]',
  );
  closeModalBtn.addEventListener('click', onCloseModalBtn);
  function onCloseModalBtn() {
    window.removeEventListener('keydown', onEscapePress);
    modalBox.classList.remove('is-open');
  };
   