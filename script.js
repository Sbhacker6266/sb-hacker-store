// You can add cart logic here later
console.log("SB HACKER STORE ready");
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + ' added to cart!');
  }