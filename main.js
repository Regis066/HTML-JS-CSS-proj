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

//update total

function updateTotal(){
    var cartContent= document.querySelector('.cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');

    for (var i = 0; i< cartBoxes.length; i++){
        var cartBox= cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElmt = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElmt.value;
        total = total + (price * quantity);

        document.getElementsByClassName('total-price').innerText = "$" + total;
    }
}