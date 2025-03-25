document.getElementById("currentYear").textContent = "© " + new Date().getFullYear() + " Web Site Clothes. Todos los derechos reservados";
async function getProducts() {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=12"
    );
    const products = await response.json();

    products.forEach((product) => {
      container = document.getElementById("cards-container");
      const colDiv = document.createElement("div");
      colDiv.classList.add("col");

      colDiv.innerHTML = `<div class="py-3">
    <div class="card" style="width: 18rem">
                  <img src="${product.images[2]}" class="card-img-top" alt="img-${product.title}" />
                  <div class="card-body">
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
