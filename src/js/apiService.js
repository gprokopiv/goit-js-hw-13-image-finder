import { error } from './notifications';

const API_KEY = '20009503-42c59acfee619c94b9f5dbeeb';
const BASE_URL = 'https://pixabay.com/api/';

export default {
  searchQuery: '',
  page: 1,

  fetchImages() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        if (hits.length > 0) {
          this.incrementPage();
          return hits;
        }
        error({
          text: 'You must enter query parameters!',
        });
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
