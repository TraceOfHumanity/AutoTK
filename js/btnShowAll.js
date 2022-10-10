let coll = document.getElementsByClassName('show__allBtn');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('hidden');
    this.classList.toggle('hidden');
  })
};

