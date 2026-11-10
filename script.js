// SHOPPING CART

let cart = [];

const addToCartButtons = document.querySelectorAll(".store-card-price");

const cartToggle = document.getElementById("cartToggle");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");


// ADD TO CART

addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const existingProduct = cart.find(function(item) {
            return item.name === name;
        });

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });

        }

        updateCart();

    });

});


// UPDATE CART

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let totalQuantity = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    }

    cart.forEach(function(item) {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;
        totalQuantity += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>RM ${item.price.toFixed(2)}</p>
                </div>

                <div class="cart-item-quantity">
                    <span>Qty: ${item.quantity}</span>
                </div>

                <div class="cart-item-total">
                    RM ${itemTotal.toFixed(2)}
                </div>

            </div>
        `;

    });

    cartCount.textContent = totalQuantity;

    cartTotal.textContent = total.toFixed(2);

}


// OPEN CART

cartToggle.addEventListener("click", function() {

    cartPanel.classList.toggle("active");

});


// CLOSE CART

closeCart.addEventListener("click", function() {

    cartPanel.classList.remove("active");

});

// ==========================================
// DARK MODE
// ==========================================

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    const icon = darkModeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.setAttribute("data-feather", "sun");

    } else {

        icon.setAttribute("data-feather", "moon");

    }

    feather.replace();

});