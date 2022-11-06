console.log('hello!')


const imgDog = document.querySelector('.img-dogs');
const title = document.querySelector('.title');

imgDog.addEventListener('click', function(){
  imgDog.src = "https://placedog.net/300";
})

title.addEventListener('mouseover', function () {
  title.style.color = "blue";
})