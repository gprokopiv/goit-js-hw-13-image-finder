const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(image) {
  return fetch(`${BASE_URL}${image}`).then(response =>
    response.json(),
  );
}
export default { fetchImages };
