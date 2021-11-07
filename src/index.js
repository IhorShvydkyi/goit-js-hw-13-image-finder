// 1. подправить название перемнных
// 2. вынесети отдельно рефы
// 3. добавить кнопку загрузить больше в хтмл, добавить стили ей и подключить её функционал в джс
// 4. подготовить стиль для карточек
// 5. распредилить всё по модулям
// 6. названия классов в хбс


import ApiService from './apiService';
import cardTmpl from '../template/card.hbs'

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', onSearch)

const apiService = new ApiService();

function onSearch(evt) {
	evt.preventDefault();

	apiService.query = evt.currentTarget.elements.query.value;
	 if (apiService.query === '') {
     return alert('We need more information');
   }

	apiService.resetPage()
	apiService.fetchImages().then(hits => {
    clearGallery();
    appendMarkup(hits);
  });
}

function appendMarkup(hits) {
  refs.gallery.insertAdjacentHTML('beforeend', cardTmpl(hits));
  scrollPage();
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


