// Task 1: Create an Array
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Write a Function to Display Product Information
function displayProducts() {
    let productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';

        let productName = document.createElement('h2');
        productName.textContent = product.name;

        let productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;

        let productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        productContainer.appendChild(productDiv);
    });
}

// Task 3: Implement an Event Listener
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});
