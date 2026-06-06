# 🍽️ theTaste.io

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-thetasteio.shop-blue?style=flat-square)](https://thetasteio.shop/)
[![License](https://img.shields.io/badge/License-Open%20Source-green?style=flat-square)](#)
[![Built With](https://img.shields.io/badge/Built%20With-HTML%20%7C%20CSS%20%7C%20JavaScript-orange?style=flat-square)](#-technology-stack)

*A simple website designed to look around the menu and order coupons online for the food fest in your college*

</div>

---

## 📖 Overview

**theTaste.io** is a modern, responsive website designed to simplify the coupon ordering experience for college food festivals. With an elegant user interface, intuitive navigation, and smooth interactions, browsing and booking has never been easier!

Whether you're craving Indian street food like Pani Puri and Samosa Chaat, or refreshing beverages, this platform makes ordering quick and easy!

---

## ✨ Key Features

### 🎨 **Modern & Responsive Design**
- **Clean, minimalist UI** that adapts perfectly to all device sizes (mobile, tablet, desktop)
- **Dark/Light theme toggle** with persistent user preference storage
- Smooth animations and transitions for enhanced user experience

### 🛒 **Interactive Shopping Cart**
- **Add/Remove items** with intuitive quantity controls
- **Real-time cart count** display in the header
- **Clear cart functionality** to start fresh
- Cart state persists during session

### 📱 **Seamless Menu Navigation**
- **Category-based filtering** for organized menu browsing
- **Quick category switching** between Chaat, Beverages, and more
- **Infinite scroll functionality** for smooth menu browsing

### 🎟️ **Coupon Booking System**
- **Pop-up booking interface** for hassle-free coupon reservations
- **Personalized booking form** capturing customer name and quantity
- **Instant confirmation messages** for successful bookings
- Multiple dish selections with individual quantity controls

### ✍️ **Eye-Catching Animations**
- **Typewriter effect** displaying popular dishes automatically
- **Smooth transitions** between different menu sections
- **Interactive buttons** with visual feedback

### 🌙 **User Preferences**
- **Theme persistence** using browser localStorage
- **Remember cart contents** for checkout flow
- **Responsive form handling** with data validation

---

## 🚀 Technology Stack

| Technology | Usage | Percentage |
|-----------|-------|-----------|
| **HTML5** | Semantic markup & page structure | 57.4% |
| **CSS3** | Styling, animations & responsive design | 25.7% |
| **JavaScript** | Interactivity, state management & DOM manipulation | 16.9% |
| **Firebase** | Backend & hosting infrastructure | - |
| **SendGrid** | Email notifications for coupons | - |
| **Vercel** | Production deployment | - |

---

## 📁 Project Structure

```
theTaste.io/
├── public/                    # Static assets & deployed files
│   ├── index.html            # Main landing page
│   ├── checkout.html         # Checkout page
│   ├── script.js             # Frontend JavaScript
│   └── style.css             # Styling
├── functions/                # Firebase Cloud Functions
│   ├── index.js              # Backend logic
│   └── package.json          # Function dependencies
├── Files_theTaste.io/        # Project documentation & assets
├── firebase.json             # Firebase configuration
├── .firebaserc               # Firebase project settings
├── package.json              # Project dependencies
└── README.md                 # This file
```

---

## 🎯 Features in Detail

### 1️⃣ **Menu Categories**
The platform organizes items into intuitive categories:
- 🥘 **Chaat Items** - Traditional Indian street food (Pani Puri, Sev Puri, Bhel Puri, etc.)
- 🥤 **Beverages** - Refreshing drinks (Masala Soda, Blueberry Soda, Lime-Mint Soda, etc.)

### 2️⃣ **Smart Cart Management**
```javascript
// Add items to cart
showCartControls(button)
  ↓
// Adjust quantities
updateQty(button, delta)
  ↓
// View cart details
showCartModal()
  ↓
// Clear when ready to start over
clearCart()
```

### 3️⃣ **Coupon Booking Workflow**
1. Browse menu items
2. Click "Book Coupon" button
3. Fill out booking form (name, quantity)
4. Receive confirmation message
5. Items appear in cart for checkout

### 4️⃣ **Dark Mode**
- Click the theme toggle button in the header
- Your preference is automatically saved
- Applies instantly across all pages

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v22 or higher)
- Firebase CLI
- Modern web browser

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CaptainAnant/theTaste.io.git
   cd theTaste.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   cd functions && npm install
   cd ..
   ```

3. **Set up Firebase:**
   ```bash
   firebase init
   # Select the existing project or create a new one
   ```

4. **Start local Firebase emulator:**
   ```bash
   firebase emulators:start --only functions
   ```

5. **Serve the application:**
   ```bash
   # Using Firebase Hosting emulator
   firebase serve
   
   # Or use a simple Python server
   python -m http.server 8000
   ```

6. **Open in browser:**
   ```
   http://localhost:8000
   ```

---

## 📦 Dependencies

### Frontend
- No external frontend libraries (vanilla JavaScript)
- Pure CSS for styling and animations

### Backend (Firebase Functions)
```json
{
  "firebase-admin": "^12.6.0",
  "firebase-functions": "^6.0.1",
  "@sendgrid/mail": "^8.1.5"
}
```

---

## 🌐 Deployment

The project is configured for Firebase Hosting and currently deployed on **Vercel**:

### Deploy to Firebase:
```bash
firebase deploy
```

### Current Live URL:
📍 [https://thetasteio.shop](https://thetasteio.shop/)

---

## 💡 Usage Guide

### For Customers:

**1. Browse the Menu:**
- Explore different categories using category buttons
- Use infinite scroll for smooth browsing

**2. Add Items to Cart:**
- Click "Book Coupon" on any item
- Select quantity
- Item appears in your cart

**3. View Cart:**
- Click the shopping cart icon in the header
- See all selected items with quantities

**4. Complete Your Order:**
- Proceed to checkout from cart modal
- Confirm your reservation

**5. Customize Experience:**
- Toggle dark/light theme using the moon icon
- Your preferences are saved automatically

---

## 🔧 Available Scripts

### Development
```bash
npm run start    # Start local development server
npm run serve    # Start Firebase emulator
```

### Deployment
```bash
npm run deploy   # Deploy functions to Firebase
firebase deploy  # Deploy everything to Firebase Hosting
```

### Functions
```bash
npm run logs     # View Firebase function logs
npm run shell    # Open Firebase functions shell
```

---

## 📱 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| Mobile Browsers | Latest | ✅ Fully Supported |

---

## 🎨 Customization

### Add New Menu Items
Edit the HTML to add new items with proper data attributes:
```html
<div class="menu-card" data-item="Your Item Name">
  <!-- Card content -->
</div>
```

### Change Theme Colors
Modify the CSS variables in `style.css`:
```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-color;
}
```

### Update Typewriter Effect
Edit the dishes array in `script.js`:
```javascript
const dishes = [
  "Your Dish 1",
  "Your Dish 2",
  // Add more...
];
```

---

## 🐛 Troubleshooting

### Cart not persisting
- Check if localStorage is enabled in your browser
- Clear browser cache and try again

### Dark mode not working
- Ensure JavaScript is enabled
- Check browser console for errors

### Email notifications not sending
- Verify SendGrid API key in Firebase environment variables
- Check Firebase function logs: `npm run logs`

### Page not loading
- Clear browser cache
- Try incognito/private mode
- Check internet connection

---

## 📞 Support & Feedback

Have questions or suggestions? Feel free to:
- 📧 Open an issue on GitHub
- 💬 Check existing discussions
- 🔗 Visit the live site: [thetasteio.shop](https://thetasteio.shop/)

---

## 📄 License

This project is open-source and available for educational and commercial use. 

---

## 🙏 Credits

Created by **CaptainAnant** for college food festival management.

---

## 🚀 Future Enhancements

- [ ] Payment gateway integration
- [ ] User authentication & profiles
- [ ] Order history tracking
- [ ] Admin dashboard for menu management
- [ ] Real-time order status updates
- [ ] Customer reviews & ratings
- [ ] Email receipt generation
- [ ] Multiple language support
- [ ] QR code for quick ordering
- [ ] Analytics dashboard

---

## 📊 Statistics

- **Total Size:** 2.146 MB
- **Created:** August 15, 2025
- **Last Updated:** September 2, 2025
- **Stars:** ⭐ (Add a star if you find this helpful!)

---

<div align="center">

**Made with ❤️ by CaptainAnant**

[⬆ Back to Top](#-thetasteio)

</div>
