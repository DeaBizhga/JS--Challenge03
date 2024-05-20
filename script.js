document.addEventListener('DOMContentLoaded', (event) => {

  const images = [
    '/img/image1.jpg',
    '/img/image2.jpg',
    '/img/image3.jpg',
    '/img/image4.jpg',
  ];
  
  
  const image = document.getElementById("imageDisplay");
  const button1 = document.getElementById("prev");
  const button2 = document.getElementById("next");
  let imageindex = 0;
  
  
  function updateImage(i){
  image.src=images[i];
  }
  
  button1.addEventListener('click', () => {
    imageindex = (imageindex === 0) ? images.length - 1 : imageindex - 1;
    updateImage(imageindex);
  });
  
  button2.addEventListener('click',()=>{
    imageindex=(imageindex===images.length-1)? 0:imageindex+1;
    updateImage(imageindex);
  });
  
  updateImage(imageindex);
  
  });