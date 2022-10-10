fetch("product.json") //fetching our actual json file
.then((response) => response.json())//a promise is made. this grabs the objects
.then((data) => getProducts(data));

function getProducts(data){
   let output = ''; //setting it an empty array

   data.forEach((product) =>{ //basically looping through the json array
    output+= `             
    <div id= "product-img">
    <img src= ${product.photo} alt=${product.name}>
    </div>
    <div id = "card">
    <h2>${product.name}</h2>
    <h3>${product.price}</h3>
    <p>${product.description}</p>
    <button id="add"> Add to Cart </button>
    </div> 
    `; //output is what we named the div in html and this is just passing the products to html and += keeps adding onto the container
   });document.getElementById('output').innerHTML = output; //this is how we get the products to show up on the actual html/page
}
