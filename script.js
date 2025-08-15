let selectedItem = '';
let cart = {};

window.onload = function () {
  // 🌙 Theme setup
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  // 🖋️ Typewriter effect
  const dishes = [
    "Pani Puri", "Sev Puri", "Dahi Puri", "Bhel Puri", "Dahi Papdi Chaat",
    "Samosa Chaat", "Peanut Salad", "Green Sandwich", "Lime-Mint Soda",
    "Masala Soda", "Blueberry Soda", "Pineapple Soda", "Sprite"
  ];
  const typewriter = document.getElementById("typewriter");
  if (!typewriter) {
    console.warn("Typewriter element not found.");
  } else {
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
  }

  // 📝 Booking form logic
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const qty = document.getElementById('quantity').value;
      alert(`Thank you ${name}! Your coupon for ${qty} x ${selectedItem} is booked.`);
      closePopup();
    });
  }

  // 🍽️ Menu category switching
  document.querySelectorAll('.menu-category-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.menu-category-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      document.querySelectorAll('.menu-category-content').forEach(c => c.style.display = 'none');
      document.getElementById(btn.getAttribute('data-category')).style.display = '';
    });
  });

  // 🛒 Cart button click
  document.getElementById('cartBtn').onclick = function () {
    showCartModal();
  };

  // 🌗 Theme toggle
  document.getElementById('themeBtn').onclick = function () {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };
};

// 🎟️ Coupon booking popup
function bookItem(itemName) {
  selectedItem = itemName;
  document.getElementById('popup-title').innerText = `Book Coupon: ${itemName}`;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// 🛒 Cart modal logic (no checkout button)
function showCartModal() {
  const modal = document.getElementById('cartModal');
  const cartItemsDiv = document.getElementById('cartItems');

  while (cartItemsDiv.firstChild) {
    cartItemsDiv.removeChild(cartItemsDiv.firstChild);
  }

  if (Object.keys(cart).length === 0) {
    const emptyMsg = document.createElement('p');
    emptyMsg.textContent = 'Your cart is empty.';
    cartItemsDiv.appendChild(emptyMsg);
  } else {
    for (const [item, qty] of Object.entries(cart)) {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `${item} <span style="font-weight:bold;">x${qty}</span>`;
      cartItemsDiv.appendChild(itemDiv);
    }

    // ✅ Only Clear Cart button
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear Cart';
    clearBtn.className = 'checkout-btn';
    clearBtn.style.marginTop = '12px';
    clearBtn.onclick = clearCart;
    cartItemsDiv.appendChild(clearBtn);
  }

  modal.style.display = 'block';
}

function closeCartModal() {
  document.getElementById('cartModal').style.display = 'none';
}

// ✅ Checkout redirection (used by static button)
function goToCheckout() {
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'checkout.html'; // Make sure this file exists
}

// 🧹 Clear cart
function clearCart() {
  cart = {};
  updateCartCount();
  showCartModal();
}

// 🛒 Cart controls
function showCartControls(btn) {
  btn.style.display = 'none';
  const controls = btn.nextElementSibling;
  controls.style.display = 'flex';
  controls.querySelector('.qty-value').textContent = '1';
  const card = btn.closest('.menu-card');
  const item = card.getAttribute('data-item');
  cart[item] = 1;
  updateCartCount();
}

function updateQty(btn, delta) {
  const controls = btn.parentElement;
  let qty = parseInt(controls.querySelector('.qty-value').textContent);
  qty += delta;
  const card = btn.closest('.menu-card');
  const item = card.getAttribute('data-item');
  if (qty < 1) {
    qty = 0;
    controls.style.display = 'none';
    controls.previousElementSibling.style.display = 'inline-block';
    delete cart[item];
  } else {
    controls.querySelector('.qty-value').textContent = qty;
    cart[item] = qty;
  }
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cartCount').textContent = Object.values(cart).reduce((a, b) => a + b, 0);
}

// 🔄 Infinite scroll logic
function scrollMenu(btn, dir) {
  const grid = btn.parentElement.querySelector('.menu-grid');
  const cards = grid.querySelectorAll('.menu-card');
  if (dir === 1) {
    grid.appendChild(cards[0]);
  } else {
    grid.insertBefore(cards[cards.length - 1], cards[0]);
  }
}