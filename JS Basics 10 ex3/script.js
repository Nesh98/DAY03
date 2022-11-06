console.log('hello!')

const bearsPictures = [
  "https://placebear.com/500/279",
  "https://placebear.com/500/280",
  "https://placebear.com/500/300",
  "https://placebear.com/500/302",
  "https://placebear.com/500/305"
];

const images = document.querySelectorAll('img');

for(let i = 0; i < images.length; i++){

  images[i].src = bearsPictures[i];

}

