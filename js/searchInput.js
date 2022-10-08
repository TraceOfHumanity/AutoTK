const headerLink = document.querySelector('.header__link');
const searchInput = document.querySelector('.input');
const searchIcon = document.querySelector('.button__search')
const coverSearh = document.querySelector('.search__input')
const inputIn = document.querySelector('.inputIn')

headerLink.addEventListener('click', function(e) {
    searchInput.classList.toggle('hidden')
})

document.addEventListener('click', function (event) {
  if (event.target !== inputIn && event.target !== headerLink) {
    searchInput.classList.add('hidden')
  }
})

 