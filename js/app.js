document.getElementById("currentYear").textContent = "© " + new Date().getFullYear() + " Web Site Clothes By Yeison Perea. Todos los derechos son reservados.";
async function getProducts() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products?limit=12"
    );
    const products = await response.json();
    console.log(products);


    products.forEach((product) => {
      container = document.getElementById("cards-container");
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "d-flex");

      colDiv.innerHTML = `<div class="py-3">
    <div class="card h-100 d-flex flex-column w-100" style="width: 18rem">
                  <img src="${product.image}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="img-${product.title}" />
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">
                      ${product.description.split(" ").slice(0, 10).join(" ")}
                    </p>
                     <p class="card-text fw-bold">
                      $${product.price}
                    </p>
                    <button class="btn btn-primary">add to cart</button>
                  </div>
                </div>
            </div>`;

      container.appendChild(colDiv);
    });
  } catch (error) {
    console.log("Error", error);
  }
}

getProducts();
