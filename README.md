# CPAN1440NC Ecommerce Website

Live Demo: https://cpan1440nc.errixed.com

A simple ecommerce website built with Next.js, React, TypeScript, Tailwind CSS, and DummyJSON.

* Home page with featured products and categories
* Products page with search and category filters
* Product details page with images, tags, and reviews
* Shopping cart with add/remove functionality
* Checkout form with validation
* Responsive layout with shared header and footer

---

# Routes

## `/`

Home page

Displays:

* Hero section
* Featured products
* Browse by category section
* Cart shortcut button

## `/products`

Products page

Displays:

* All products
* Search input
* Category filter
* Product cards

## `/product-details/[id]`

Dynamic product details page

Displays:

* Product image gallery
* Product information
* Tags
* Reviews
* Cart button

## `/cart`

Cart page

Displays:

* Products added to cart
* Quantity per product
* Total price per product
* Cart total
* Checkout button

## `/checkout`

Checkout page

Displays:

* Customer information form
* Validation errors
* Order success modal

## `/404`

Custom not found page

---

# Components

## Layout Components

### Header

Displays the website logo, website title, and navigation links.

### HeaderNav

Contains navigation links for:

* Home
* Products
* Cart

### Footer

Displays the website footer information, contact details, and footer navigation.

### FooterNav

Contains footer navigation links.

---

## Home Components

### TopRatedProducts

Displays the highest-rated products on the homepage.

### ShopByCategory

Displays available product categories and links to filtered product pages.

---

## Product Components

### ProductsList

Loops through products and displays product cards.

### ProductCard

Displays:

* Product image
* Product title
* Product price
* Product rating
* Cart button

### ProductSearch

Search input used to filter products.

### CategoryFilter

Dropdown/select input used to filter products by category.

### ProductImages

Displays multiple product images on the product details page.

### ProductTags

Displays product tags.

### ProductReviews

Displays product reviews and reviewer information.

---

## Cart Components

### CartButton

Handles adding and removing products from the cart.

### CartItemsList

Displays all grouped cart products.

### CartItemSummary

Displays:

* Quantity of each product
* Total price for each product

---

## Checkout Components

### CheckoutForm

Displays the checkout form fields and validation errors.

### OrderSuccessModal

Displays a success message after placing an order.

---

# State Management

## Global State

Global cart state is managed with React Context in `CartContext`.

The cart context stores:

* `cartProducts`
* `setCartProducts`
* `handleCartAdd`
* `handleCartRemove`
* `handleClearCart`
* `cartGrandTotal`

The cart stores duplicate products in an array to track quantity. Quantity is calculated by counting how many times the same product ID appears in the cart.

---

## Local State

Local state is used for page-specific data.

Examples:

* Product search term
* Selected category
* Single product details
* Loading states
* Checkout form fields
* Validation errors
* Modal visibility

---

# Hooks

## useProducts

Custom hook used to fetch all products from the API route.

Returns:

* `products`
* `loading`

---

# Utils

## getFilterProducts

Filters products by category and search term.

## getGroupedProducts

Groups duplicate cart products into unique product rows for the cart page.

## validateCheckoutForm

Validates checkout form inputs.

---

# Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* Axios
* React Modal
* DummyJSON API

---

# Notes

This project was created for learning purposes.

Although hooks and utility helper files were not covered in class, I decided to use them because of my previous experience and because they helped keep the code cleaner and more organized.

AI disclosure:

* Most Tailwind CSS classes were generated with help from OpenAI ChatGPT
* Some website text content was generated with help from OpenAI ChatGPT
* Minor formatting such as spacing, indentation, and structure was also assisted by OpenAI ChatGPT
