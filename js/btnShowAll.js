let coll = document.getElementsByClassName('show__allBtn');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('hidden');
    this.classList.toggle('hidden');
  })
};
// let coll2 = document.getElementsByClassName('table__header');
// for (let i = 0; i < coll2.length; i++) {
//   coll2[i].addEventListener('click', function () {
//     this.nextElementSibling.classList.toggle('hidden');
//     // this.classList.toggle('hidden');
//   })
// };
document.querySelectorAll('.table__cover').forEach(function (showTable) {
  const tableHeader = showTable.querySelector('.table__header');
  const headerDropdown = showTable.querySelector('.headerDropdown');
  const arrowHideTable = showTable.querySelector('.arrowHideTable');

  tableHeader.addEventListener('click', function (e) {
    // this.nextElementSibling.classList.toggle('active');
    this.nextElementSibling.classList.toggle('hidden');
    // this.classList.toggle('zPlus');
    arrowHideTable.classList.toggle('arrow180')


  })

  // document.addEventListener('click', function (event) {
  //   if (event.target !== headerDropdown && event.target !== btnDropDown) {
  //     headerDropdown.classList.remove('active')
  //     btnDropDown.classList.remove('zPlus')
  //     headerDropdown.classList.add('hidden')
  //     arrowHideTable.classList.remove('arrow180')
  //   }
  // })

})

