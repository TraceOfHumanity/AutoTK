document.querySelectorAll('.header__menuItem').forEach(function (dropD) {
  const btnDropDown = dropD.querySelector('.btnDropDown');
  const headerDropdown = dropD.querySelector('.headerDropdown');
  const arrow = dropD.querySelector('.arrow');

  btnDropDown.addEventListener('click', function (e) {
    this.nextElementSibling.classList.toggle('active');
    this.nextElementSibling.classList.toggle('hidden');
    this.classList.toggle('zPlus');
    arrow.classList.toggle('arrow180')


  })

  document.addEventListener('click', function (event) {
    if (event.target !== headerDropdown && event.target !== btnDropDown) {
      headerDropdown.classList.remove('active')
      btnDropDown.classList.remove('zPlus')
      headerDropdown.classList.add('hidden')
      arrow.classList.remove('arrow180')
    }
  })

})
