async function getProducts() {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=12"
    );
    const products = await response.json();

    products.forEach((product) => {
      container = document.getElementById("cards-container");
      console.log(products);
      console.log(product.images[0]);
      const colDiv = document.createElement("div");
      colDiv.classList.add("col");

      colDiv.innerHTML = `<div class="py-3">
    <div class="card" style="width: 18rem">
                  <img src="${product.images[2]}" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
