const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click',toogleDesktopMenu);
menuHamIcon.addEventListener('click',toogleMobileMenu);
menuCarritoIcon.addEventListener('click',toogleCarritoAside);


function toogleDesktopMenu(){
    const isAsideClosed=aside.classList.contains('innactive');  
    if(!isAsideClosed){
        aside.classList.add('innactive');
     }  

    desktopMenu.classList.toggle('innactive');
}


function toogleMobileMenu(){
    
    const isAsideClosed=aside.classList.contains('innactive');
    

    if(!isAsideClosed){
        aside.classList.add('innactive');
     }
     mobileMenu.classList.toggle('innactive');

}

function toogleCarritoAside(){
    
    const isMobileMenuClosed=mobileMenu.classList.contains('innactive');
    //const isAsideClosed=aside.classList.contains('innactive');
    
    
     //si mobile esta open, hay que cerrarlo
    if(!isMobileMenuClosed){
       mobileMenu.classList.add('innactive');
    }
    aside.classList.toggle('innactive');
    

   

}


const productList=[];
productList.push({
    name:'bike',
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name:'television',
    price:520,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name:'laptop',
    price:900,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name:'laptop',
    price:900,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

//for-of permite conocer las key de los elementos del array
//for (product of productList){ //considero cada uno de los objetoss del array y lo denomino temporalmente como product
//    console.log(product.name);
//}
//for-in permite conocer el indice de los elementos del array
/* for (product in productList){
    console.log(product);
} */


//Creacion de los elementos HTML CON JS
/* for (product of productList){
    const productCard=document.createElement('div')
    productCard.classList.add('product-card');
    
    const productImg=document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv=document.createElement('div');

    const productPrice=document.createElement('p')
    productPrice.innerText='$' + product.price;

    const productName=document.createElement('p');
    productName.innerText = product.name;


    //introducir los elementos hijos dentro de los elementos padres
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    //introducir los elementos hijos dentro de los elementos padres
    productInfoFigure.appendChild(productImgCart);


    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);


    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
} */


function renderProducts(arr){
    for (product of arr){
        const productCard=document.createElement('div')
        productCard.classList.add('product-card');
        
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p')
        productPrice.innerText='$' + product.price;
    
        const productName=document.createElement('p');
        productName.innerText = product.name;
    
    
        //introducir los elementos hijos dentro de los elementos padres
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //introducir los elementos hijos dentro de los elementos padres
        productInfoFigure.appendChild(productImgCart);
    
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);}

}

renderProducts(productList)