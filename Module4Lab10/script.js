let allProducts = []; 

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json()) 
  .then((data) => {
    allProducts = data; 
    populateProducts(allProducts); 
    populateCategories(data);
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
    displayErrorMessage("Products cannot be obtained.");
  });

document
  .getElementById("categorySelect")
  .addEventListener("change", handleCategoryChange);
document.getElementById("searchBar").addEventListener("keyup", handleSearch); 

function populateProducts(products) {
  const grid = document.getElementById("productsGrid"); 

  products.forEach((product) => {
    cardsHtml += `
      <div class="col-md-3 mb-4">
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${
      product.title
    }">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><small class="text-muted">$${
              product.price
            }</small></p>
            <span class="custom-icon">${getIconForCategory(
              product.category
            )}</span>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = cardsHtml; 
}
function populateCategories(products) {
  const categorySelect = document.getElementById("categorySelect");
  const categories = new Set(); 

  products.forEach((product) => {
    categories.add(product.category);
  });

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function handleCategoryChange() {
  const selectedCategory = document.getElementById("categorySelect").value;
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);
  populateProducts(filteredProducts);  
}

function handleSearch() {
  const searchText = document.getElementById("searchBar").value.toLowerCase();
  const filteredProducts = allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText)
  );
  populateProducts(filteredProducts);   
}

function displayErrorMessage(message) {
  const container = document.getElementById("productsGrid");
  container.innerHTML = `<p class="error-message">${message}</p>`; 

function getIconForCategory(category) {
  switch (category) {
    case "electronics":
      return "📱"; 
    case "men's clothing":
      return "👔"; 
    case "women's clothing":
      return "👗";
    case "jewelery":
      return "💍"; 
    default:
      return "🛍️"; 
  }
}
}