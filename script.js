let selectedItem = '';

function bookItem(itemName) {
    selectedItem = itemName;
    document.getElementById('popup-title').innerText = `Book Coupon: ${itemName}`;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const qty = document.getElementById('quantity').value;

    alert(`Thank you ${name}! Your coupon for ${qty} x ${selectedItem} is booked.`);
    closePopup();
});

 // Typewriter effect for hero section
        const dishes = ["Pani Puri", "Sev Puri", "Dahi Puri", "Bhel Puri", "Dahi Papdi Chaat", "Samosa Chaat", "Peanut Salad", "Green Sandwich", "Lime-Mint Soda", "Masala Soda", "Blueberry Soda", "Pineapple Soda", "Sprite"];
        const typewriter = document.getElementById("typewriter");
        let dishIndex = 0, charIndex = 0, isDeleting = false;

        function type() {
            const currentDish = dishes[dishIndex];
            if (isDeleting) {
                typewriter.textContent = currentDish.substring(0, charIndex--);
                if (charIndex < 0) {
                    isDeleting = false;
                    dishIndex = (dishIndex + 1) % dishes.length;
                    setTimeout(type, 500);
                } else {
                    setTimeout(type, 50);
                }
            } else {
                typewriter.textContent = currentDish.substring(0, charIndex++);
                if (charIndex > currentDish.length) {
                    isDeleting = true;
                    setTimeout(type, 1000);
                } else {
                    setTimeout(type, 120);
                }
            }
        }
        type();

function showCartModal() {
    const modal = document.getElementById('cartModal');
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    if (Object.keys(cart).length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        for (const [item, qty] of Object.entries(cart)) {
            cartItemsDiv.innerHTML += `<div>${item} <span style="font-weight:bold;">x${qty}</span></div>`;
        }
        cartItemsDiv.innerHTML += `<button onclick="goToCheckout()" class="checkout-btn">Go to Checkout</button>`;
    }
    modal.style.display = 'block';
}

function goToCheckout() {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
}

document.getElementById('themeBtn').onclick = function() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

window.onload = function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    // ...other onload logic...
};