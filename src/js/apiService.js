import getRefs from '../js/get-refs';
import galleryItemTpl from '../templates/gallery-item.hbs';

const refs = getRefs();
const API_KEY = '20009503-42c59acfee619c94b9f5dbeeb';
const BASE_URL = 'https://pixabay.com/api/';

export default {
  searchQuery: '',
  page: 1,

  fetchImages() {
    const url = `${BASE_URL}/image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    return fetch(url)
      .then(response => response.json())
      .then(( images ) => {
        const markup = galleryItemTpl(images);
        refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
        this.incrementPage();
        return images;
      });
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(newQuery) {
    this.searchQuery = newQuery;
  },
};
