var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100);
  let itemConstructor = {itemName: item, itemPrice: price};
  console.log(itemConstructor)
  cart.push(itemConstructor);
  keys.push(item);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0){
  return "Your shopping cart is empty."
} else if(cart.length === 1) {
var singleItem = cart[0];
return `In your cart, you have ${singleItem.itemName} at $${singleItem.itemPrice}`
} else if (cart.length === 2){
var singleItem1 = cart[0];
var singleItem2 = cart[1];
return `In your cart, you have ${singleItem1.itemName} at $${singleItem1.itemPrice}, and ${singleItem2.itemName} at $${singleItem2.itemPrice}.`;
} else {
  var itemObj = {};
  var itemObjLast = cart[cart.length-1];
  var sentence = "In your cart, you have ";
  for (var i = 0; i < keys.length-1; i++){
    itemObj = cart[i];
    sentence = `${sentence} ${itemObj.itemName} at $${itemObj.itemPrice},`
  } return `${sentence} and ${itemObjLast.itemName} at $${itemObjLast.itemPrice}.`
 }
}

function total() {
  var totalPrice = 0;
  var individualItem = {};
  for(var i = 0; i < keys.length; i++){
    individualItem = cart[i];
    totalPrice = totalPrice + individualItem[keys[i]];
  } return totalPrice;

}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
