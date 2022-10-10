var i = 0; //start point
var images = []; //array for the images

//image List in array values

images [0] = 'images/greenstore.jpg';
images [1] = 'images/Record-store.webp';
images [2] = 'images/store.jpg';
images [3] = 'images/heart.webp';

//change image funtion
function changePhoto(){
  document.slide.src = images[i]; // its pulling the class from html (slide.src) set it equal to first image

  if (i < images.length-1){  //this if statement basically makes the images run in a loop
    i++;
  }else{
    i = 0;
  }
  setTimeout("changePhoto()", 2500); //timer  to run it every 2.5sec
}

window.onload = changePhoto; //When page is loaded we want function to work