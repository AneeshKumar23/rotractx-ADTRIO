const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const product = products.find(p => p.id === productId);

const detailDiv = document.getElementById("product-detail");

if (product) {
  detailDiv.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-info">
      <h1>${product.name}</h1>
      <p class="description">${product.description}</p>
      <p class="price">₹${product.price}</p>
      <button class="add-btn" onclick="addToCart(${product.id})">🛒 Add to Cart</button>
    </div>
  `;
} else {
  detailDiv.innerHTML = `<p>Product not found.</p>`;
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const prod = products.find(p => p.id === id);
    cart.push({ ...prod, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("✅ Product added to cart!");
}
