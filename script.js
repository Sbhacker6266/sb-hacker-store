// You can add cart logic here later
console.log("SB HACKER STORE ready");
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + ' added to cart!');
  }
  <!-- Product 1 -->
<div class="product-card">
  <h2>Hackers USB Drive</h2>
  <p>8GB - 4000+ Tools</p>
  <p><strong>Price: ₹599</strong></p>
  <button onclick='addToCart({name: "Hackers USB Drive", price: 599})'>Add to Cart</button>
</div>

<!-- Product 2 -->
<div class="product-card">
  <h2>Hacker Hoodie</h2>
  <p>Black Glow Design</p>
  <p><strong>Price: ₹999</strong></p>
  <button onclick='addToCart({name: "Hacker Hoodie", price: 999})'>Add to Cart</button>
</div>