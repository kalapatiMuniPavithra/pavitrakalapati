// script.js
const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 500, rating: 4.5, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRnp31KdB_RK8IXLpulysfLJLBdH1MiPo-GZWB63xgl4xxJwmiHv1Y5Xk4ZDiJTVYY0u-9rbhSyd695DCBqJQc_E8XR5Qb2pjC9xjZ1_dzqNNpWfmxXNCYJ9FoZEg_QaI1sbdBrLNo&usqp=CAc" },
    { id: 2, name: "T-Shirt", category: "clothing", price: 20, rating: 4.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7AZFVas-v9f2TKvdT7PtkqaWNNbk7I_k6w&s" },
    { id: 3, name: "Laptop", category: "electronics", price: 1000, rating: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOsLc1Fby5oRkehBjtk1FfFtknBxTf3DJOQ&s" },
    { id: 4, name: "Novel", category: "books", price: 15, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s" },
    { id: 5, name: "Headphones", category: "electronics", price: 100, rating: 4.1, image: "https://png.pngtree.com/png-clipart/20200416/ourmid/pngtree-3d-matte-black-headphones-png-image_2187589.jpg" },
  ];
  
  const productList = document.getElementById("productList");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortFilter = document.getElementById("sortFilter");
  
  // Function to display products
  function displayProducts(filteredProducts) {
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ${product.rating} ★</p>
      `;
      productList.appendChild(productElement);
    });
  }
  
  // Function to filter and sort products
  function filterAndSortProducts() {
    let filteredProducts = [...products];
  
    // Filter by category
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
  
    // Sort products
    const selectedSort = sortFilter.value;
    if (selectedSort === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "rating-desc") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }
  
    displayProducts(filteredProducts);
  }
  
  // Event listeners
  categoryFilter.addEventListener("change", filterAndSortProducts);
  sortFilter.addEventListener("change", filterAndSortProducts);
  
  // Initial display
  displayProducts(products);
  