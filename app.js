const container =
document.getElementById("product-container");

function displayProducts(){

container.innerHTML="";

products.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<img
src="${product.image}"
alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.description}</p>

<p><strong>${product.package}</strong></p>

<a href="#contact"
class="btn">

Order Now

</a>

</div>

</div>

`;

});

}

displayProducts();
const menu =
document.querySelector(".menu-btn");

const nav =
document.querySelector(".nav-links");

menu.onclick=function(){

if(nav.style.display==="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";

nav.style.flexDirection="column";

}

};
document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

document.querySelector(href)
.scrollIntoView({

behavior:"smooth"

});

}

});

});