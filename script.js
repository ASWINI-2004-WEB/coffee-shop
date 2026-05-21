const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Scroll to Menu
const orderNowBtn = document.getElementById("order-now-btn");

orderNowBtn.addEventListener("click", () => {
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth",
  });
});

// Cart Functionality
const addCartButtons = document.querySelectorAll(".add-cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let total = 0;

addCartButtons.forEach((button) => {
  button.addEventListener("click", () => {

    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    // Create Cart Item
    const item = document.createElement("div");

    item.classList.add(
      "flex",
      "justify-between",
      "bg-gray-100",
      "p-4",
      "rounded-lg"
    );

    item.innerHTML = `
      <span>${name}</span>
      <span>₹${price}</span>
    `;

    // Remove default text
    if (cartItems.innerText.includes("No items added")) {
      cartItems.innerHTML = "";
    }

    cartItems.appendChild(item);

    // Update Total
    total += price;
    cartTotal.innerText = total;

    alert(`${name} added to cart!`);
  });
});

// Checkout
const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", () => {

  if (total === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert(`Order placed successfully!\nTotal Amount: ₹${total}`);

  cartItems.innerHTML = `
    <p class="text-gray-500">
      No items added.
    </p>
  `;

  total = 0;
  cartTotal.innerText = total;
});

// Contact Form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return;
  }

  alert("Message sent successfully!");

  contactForm.reset();
});