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

//this if statement basically makes the images run in a loop
  if (i < images.length-1){  //-1 bc its an index of 3 but theres really 4
    i++;
  }else{
    i = 0;//if at last index set to 0
  }
  setTimeout("changePhoto()", 2500); //timer  to run it every 2.5sec
}

window.onload = changePhoto; //When page is loaded we want function to work