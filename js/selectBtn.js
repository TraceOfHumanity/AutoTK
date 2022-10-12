document.querySelectorAll('.type').forEach(function (typeWrapper){
  const typeBtn = typeWrapper.getElementsByTagName('P');
  const arrayTypeBtn = Array.from(typeBtn);
  arrayTypeBtn.forEach((el) => {
  el.addEventListener('click', function(){
    $(arrayTypeBtn).removeClass('selectedView')
     this.classList.add('selectedView')
  })
  })
})
