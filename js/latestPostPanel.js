document.querySelectorAll('.latest__posts').forEach(function (typeWrapper){
  const typeBtn = typeWrapper.getElementsByTagName('li');
  const arrayTypeBtn = Array.from(typeBtn);
  arrayTypeBtn.forEach((el) => {
  el.addEventListener('click', function(){
    $(arrayTypeBtn).removeClass('selectedPost')
     this.classList.add('selectedPost')
  })
  })
})
