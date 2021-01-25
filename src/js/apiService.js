const API_KEY = '20009503-42c59acfee619c94b9f5dbeeb';
const BASE_URL = 'https://pixabay.com/api/';
// function fetchImages(imageId) {
//   return fetch(`${BASE_URL}${imageId}`).then(response =>
//     response.json(),
//   );
// }
// export default { fetchImages };

export default class apiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    const url = `${BASE_URL}/image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ imageId }) => {
        this.incrementPage();
        return imageId;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
