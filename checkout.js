// Example item descriptions (should match your menu items)
const itemDescriptions = {
    "Pani Puri": "Crispy shells filled with tangy spiced water.",
    "Sev Puri": "Crispy puris layered with chutneys and sev.",
    "Dahi Puri": "Mini puris stuffed with yogurt and spices.",
    "Bhel Puri": "Puffed rice tossed with chutneys and crunch.",
    "Dahi Papdi Chaat": "Crunchy papdi topped with yogurt & chutneys.",
    "Samosa Chaat": "Crushed samosa topped with chutneys, chickpea gravy, curd, onions, and our bold chaat magic.",
    "Peanut Salad": "Soaked peanuts tossed with fresh veggies, tangy chutneys, chaat masala, and our secret magic.",
    "Green Sandwich": "Fresh veggies layered with zesty spreads, herbs, and our signature coriander-mint magic.",
    "Lime-Mint Soda": "Zesty lime soda with fresh mint twist.",
    "Masala Soda": "Spiced fizzy drink with tangy kick.",
    "Blueberry Soda": "Bubbly soda infused with sweet blueberry burst.",
    "Pineapple Soda": "Tropical pineapple fizz with a tangy splash.",
    "Sprite": "Refreshing fizz bubbles to charge you up."
};

const itemPrices = {
    "Pani Puri": 35,
    "Sev Puri": 40,
    "Dahi Puri": 40,
    "Bhel Puri": 40,
    "Dahi Papdi Chaat": 35,
    "Samosa Chaat": 45,
    "Peanut Salad": 25,
    "Green Sandwich": 35,
    "Lime-Mint Soda": 40,
    "Masala Soda": 35,
    "Blueberry Soda": 45,
    "Pineapple Soda": 45,
    "Sprite": 30
};

function renderCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const checkoutItems = document.getElementById('checkout-items');
    checkoutItems.innerHTML = '';
    let totalQty = 0;
    let totalPrice = 0;

    for (const [item, qty] of Object.entries(cart)) {
        const price = itemPrices[item] || 0;
        totalQty += qty;
        totalPrice += price * qty;
        checkoutItems.innerHTML += `
            <div class="checkout-item">
                <div class="item-info">
                    <div class="item-title">${item}</div>
                    <div class="item-desc">${itemDescriptions[item] || ""}</div>
                </div>
                <div>
                    <span class="item-qty">Qty: ${qty}</span>
                    <span class="item-price">₹${price * qty}</span>
                </div>
            </div>
        `;
    }

    document.getElementById('total-qty').textContent = totalQty;
    document.getElementById('total-price').textContent = totalPrice;
}

function enableOrderBtn() {
    document.getElementById('orderBtn').disabled = false;
    document.getElementById('orderBtn').classList.add('active');
}

document.getElementById('orderBtn').onclick = function() {
    alert('Order placed! Your coupon will be generated.');
    // Optionally clear cart and redirect
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
};

window.onload = renderCheckout;
