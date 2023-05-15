let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () =>{
    cart.classList.add('active');
}
closeCart.onclick = () =>{
    cart.classList.remove('active');
}

if(document.readyState == 'loading'){
   document.addEventListener('DOMContentLoaded' , ready); 
}else{
    ready();
}

function ready(){
    //Remove Items From Cart

    var removeCartButton = document.getElementsByClassName('cart-remove');
    console.log(removeCartButton)
    for(var i = 0; i < removeCartButton.length; i++){
        var button = removeCartButton[i]
        button.addEventListener('click', removeCartItem)
    }

}

function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.parentElement.remove()
}