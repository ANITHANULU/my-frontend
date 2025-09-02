let products = [];

// Fetch products from API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Display products on the page
function displayProducts(filteredProducts) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.category}</p>
                <span>$${product.price}</span>
            </div>
        `;
    });
}

// Filter products
function filterProducts() {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    const selectedCategory = document.getElementById("categoryFilter").value;
    const maxPrice = document.getElementById("priceRange").value;

    const filtered = products.filter(product => {
        return (
            product.title.toLowerCase().includes(searchQuery) &&
            (selectedCategory === "" || product.category === selectedCategory) &&
            product.price <= maxPrice
        );
    });

    displayProducts(filtered);
}

// Update price range display
function updatePrice() {
    const priceRange = document.getElementById("priceRange").value;
    document.getElementById("priceValue").innerText = `Max Price: $${priceRange}`;
    filterProducts();
}

// Load products on page load
window.onload = fetchProducts;
