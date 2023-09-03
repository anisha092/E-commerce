document.addEventListener('DOMContentLoaded', function() {
  let products = document.querySelector('.products');
  async function fetchProducts(url) {
      try {
          let data = await fetch(url);
          let response = await data.json();
          let i=0;

          response.forEach(function (product)
          {
              let description = product.description;
              let title = product.title;

              products.innerHTML += `
     <div class="product d-flex jutify-content-center">
     <div class="card">
      <div class="card-header d-flex justify-content-center align-items-center bg-white">
         <img src="${product.image}" alt="" class="product-img" width="150px" height="300px">
      </div>
      <div class="card-body">
         
         <h5 class="product-title ">${product.title.length > 11 ? product.title.substring(0, 11).concat(''): product.title}</h5>
         <span class="product-category ">${product.category}</span>
         <br><br>
         <span class="product-description">${description.length > 50 ? description.substring(0, 50).concat('...'): description}</span>
         
         <div>
        <br>
         <i class="fas fa-star star"></i>
         <i class="fas fa-star star"></i>
         <i class="fas fa-star star"></i>
         <i class="fas fa-star star"></i>
         <i class="fas fa-star star"></i>
         </div>
         <div class="product-price-container">
             <h3 class="product-price text-center">$${product.price}</h3>
             <div class="d-flex justify-content-between">
             <a href="#!" data-productid="${product.id}" class="add-to-cart">
             <i class="fal fa-shopping-cart"></i>
             </a>
             <a href="#" class="shop-now"></a>
         </div>
         </div>
         </div>
         </div>
        </div>`;
          })
      } catch (err) {
          console.log(err);
      }
  }
  fetchProducts('https://fakestoreapi.com/products');
});

