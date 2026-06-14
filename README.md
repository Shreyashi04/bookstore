# Pustak — E-Book Store

Pustak is a responsive front-end e-book store built using **HTML, CSS, and JavaScript**. It allows users to browse books, search and filter titles, manage a shopping cart, maintain a wishlist, switch between light and dark themes, and complete a simulated checkout process.

---

## 🚀 Features

### 📖 Book Catalog

* Browse a collection of e-books
* View book details in a modal popup
* Responsive card-based layout
* Category-based organization

### 🔍 Search & Filtering

* Search books by:

  * Title
  * Author
  * Category
* Filter books by category
* Sort books by:

  * Price (Low → High)
  * Price (High → Low)
  * Rating
  * Alphabetical Order

### ❤️ Wishlist

* Add books to wishlist
* Remove books from wishlist
* Wishlist state stored in Local Storage

### 🛒 Shopping Cart

* Add books to cart
* Increase/decrease quantity
* Remove items from cart
* Calculate subtotal, tax, and total
* Cart data persists using Local Storage

### 💳 Checkout

* Customer information form
* Form validation
* Order confirmation screen
* Auto-generated order number

### 🌙 Theme Toggle

* Light Mode
* Dark Mode
* Theme preference saved in Local Storage

### 📱 Responsive Design

* Desktop Layout
* Tablet Layout
* Mobile Layout
* Hamburger Navigation Menu

---

## 🏗️ Project Structure

```text
ebook-store/
│
├── index.html          # Home Page
├── books.html          # Book Listing Page
├── cart.html           # Cart & Checkout Page
├── about.html          # About Page
│
├── css/
│   └── style.css       # Main Stylesheet
│
├── js/
│   ├── app.js          # Shared functionality
│   ├── books.js        # Book filtering, sorting, searching
│   └── cart.js         # Cart and checkout logic
│
├── assets/
│   └── books/          # Book cover images
│
└── README.md
```

---

## ⚙️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Browser APIs

* Local Storage
* DOM Manipulation
* Event Listeners

### Design Techniques

* CSS Variables
* Flexbox
* CSS Grid
* Media Queries
* CSS Animations
* Responsive Design

---

## 🧠 Core JavaScript Concepts Used

### DOM Manipulation

```javascript
document.getElementById()
document.querySelector()
document.createElement()
```

### Event Handling

```javascript
addEventListener()
```

### Array Methods

```javascript
filter()
map()
find()
reduce()
sort()
```

### Local Storage

```javascript
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
```

### Template Literals

```javascript
`<div>${book.title}</div>`
```

---

## 🛒 Cart Workflow

1. User clicks **Add to Cart**
2. Book is stored in Local Storage
3. Cart badge updates automatically
4. Cart page reads data from Local Storage
5. User can update quantity or remove items
6. Checkout form validates input
7. Order success screen is displayed
8. Cart is cleared after successful order

---

## 🔍 Search Workflow

1. User enters text in search bar
2. Search term is stored
3. Books are filtered using:

```javascript
books.filter(...)
```

4. Matching books are rendered dynamically

---

## 🌙 Theme Workflow

1. User clicks theme toggle button
2. Theme attribute changes:

```html
data-theme="dark"
```

3. CSS variables update automatically
4. Theme preference is saved in Local Storage

---

## 📱 Responsive Features

### Desktop

* Full navigation menu
* Multi-column book grid

### Tablet

* Reduced grid columns
* Flexible layout adjustments

### Mobile

* Hamburger navigation
* Optimized card layout
* Single-column sections where necessary

---

## 🎯 Future Improvements

* User Authentication
* Backend Integration
* Payment Gateway Integration
* Book Reviews & Ratings
* Order History
* User Profiles
* Book Recommendations API
* Pagination
* Admin Dashboard

---

## 📷 Screens Included

* Home Page
* Books Listing Page
* Book Details Modal
* Shopping Cart
* Checkout Form
* About Page
* Order Success Screen

---

## 👨‍💻 Author

Developed as a front-end web development project to demonstrate:

* HTML Structure
* CSS Architecture
* Responsive Design
* JavaScript Fundamentals
* DOM Manipulation
* Local Storage Management
* UI/UX Development

---

## 📄 License

This project is created for educational and portfolio purposes.
