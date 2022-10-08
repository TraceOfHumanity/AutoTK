const headerLink = document.querySelector('.header__link');
const searchInput = document.querySelector('.input');
const searchIcon = document.querySelector('.button__search')

headerLink.addEventListener('click', function(e) {
    searchInput.classList.toggle('hidden')
})

document.addEventListener('click', function (event) {
  if (event.target !== headerLink && event.target !== searchInput || event.target == searchIcon) {
    searchInput.classList.add('hidden')
  }
})

 