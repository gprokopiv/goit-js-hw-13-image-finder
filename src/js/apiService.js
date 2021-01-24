const BASE_URL = 'https://pixabay.com/api/?key=20009503-42c59acfee619c94b9f5dbeeb&q=yellow+flowers&image_type=photo';

function fetchImages(imageId) {
  return fetch(`${BASE_URL}${imageId}`).then(response =>
    response.json(),
  );
}
export default { fetchImages };
