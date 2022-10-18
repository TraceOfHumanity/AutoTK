// document.querySelectorAll('.card__years').forEach(function (showYears) {
//   const showMoreYears = showYears.querySelector('.showMore__years');
//   // const headerDropdown = showTable.querySelector('.headerDropdown');
//   // const arrowHideTable = showTable.querySelector('.arrowHideTable');

//   showMoreYears.addEventListener('click', function (e) {
//     // this.nextElementSibling.classList.toggle('active');
//     this.classList.toggle('hidden');
//     // this.classList.toggle('zPlus');
//     // arrowHideTable.classList.toggle('arrow180')
//      this.classList.toggle('showMore__years');


//   })
// })

let coll3 = document.getElementsByClassName('showMore__years');
for (let i = 0; i < coll3.length; i++) {
  coll3[i].addEventListener('click', function () {
    this.classList.add('hidden');
    this.classList.remove('showMore__years');
  })
};