import ImageApiService from '../js/apiService';
import cardTmpl from '../template/card.hbs';
import getRefs from '../js/get-refs';




const refs = getRefs();
const apiService = new ImageApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(evt) {
	evt.preventDefault();

	apiService.query = evt.currentTarget.elements.query.value;
	 if (apiService.query === '') {
     return alert('We need more information');
   }

	apiService.resetPage()
	apiService.fetchImages().then(hits => {
    clearGallery();
    appendImageMarkup(hits);
  });
	showLoadMoreBtn()
}

function onLoadMore(evt) {
	apiService.fetchImages().then(appendImageMarkup)
}

function appendImageMarkup(hits) {
  refs.gallery.insertAdjacentHTML('beforeend', cardTmpl(hits));
  scrollPage();
}

function showLoadMoreBtn() {
	refs.loadMoreBtn.classList.remove('is-hidden');
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}

function scrollPage() {
  setTimeout(() => {
    refs.loadMoreBtn.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, 500);
}