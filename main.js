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

    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(var i = 0; i < quantityInputs.length; i++){
        var input= quantityInputs[i];
        input.addEventListener("change" , quantityChanged)
    } 

}

function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.parentElement.remove();
  updateTotal();
}

function quantityChanged(event){
var input = event.target
if(isNaN(input.value) || input.value <= 0 ){
    input.value = 1
}
updateTotal();
}

//update total

function updateTotal(){
    var cartContent= document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0; 

    for (var i = 0; i< cartBoxes.length; i++){
        var cartBox= cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElmt = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElmt.value;
        total +=(price * quantity);

        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
}