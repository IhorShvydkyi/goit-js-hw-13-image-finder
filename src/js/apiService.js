const API_KEY = '24190163-4fef3af5a8c9fb39e43dd5d2d';
const BASE_URL = 'https://pixabay.com/api/';

export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch (url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.incrementPage();
        
        return data.hits;
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

