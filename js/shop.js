const shopContiner = document.querySelector(".shop-main-container");
const futuedProudacts = document.querySelector(".featuerd-proudacts-container");
const pageNumber = document.querySelector(".page-number");

let page = 1;
const productsPerPage = 6;
const futuedProudact = 5;
let allProudacts = [];

async function loadProducts() {
  try {
    const response = await fetch("../DB/proudact.json");
    allProudacts = await response.json();
    renderPage();
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

function editTitle() {
  pageNumber.textContent = `${page}`;
}

function addToFutuedProudacts(proudacts) {
  futuedProudacts.innerHTML = "";
  const start = (page - 1) * futuedProudact;
  const end = start + futuedProudact;
  const currentProudacts = proudacts.slice(start, end);

  currentProudacts.forEach((proudact) => {
    if (!proudact) return;
    futuedProudacts.innerHTML += `
      <div class="featuerd-proudacts-card d-flex">
        <figure class="featuerd-proudacts-card-img shop-${page}">
          <img src="${proudact.image}" alt="" />
        </figure>
        <div class="featuerd-proudacts-card-info">
          <h4 class="featuerd-proudacts-card-title">${proudact.title}</h4>
          <div class="featuerd-proudacts-card-price">
            <span class="featuerd-proudacts-card-price-old">${proudact.oldPrice}$</span>
            <span class="featuerd-proudacts-card-price-new">${proudact.newPrice}$</span>
          </div>
        </div>
      </div>
    `;
  });
}

function addToShop(proudacts) {
  shopContiner.innerHTML = "";
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const currentProudacts = proudacts.slice(start, end);

  currentProudacts.forEach((proudact) => {
    if (!proudact) return;

    if (page === 1) {
      shopContiner.innerHTML += `
      <article class="cart-card archivo-font col-6 col-md-4">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div class="cart-card-img d-flex justify-content-center align-items-center">
            <img src="${proudact.image}" alt="cart-card-img" />
            <div class="cart-card-heart d-flex justify-content-center align-items-center">
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
          <div class="cart-card-body">
            <div class="cart-card-title-rating d-flex justify-content-between">
              <h3 class="cart-card-title">${proudact.title}</h3>
              <p class="cart-card-rating d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-star"></i> <span>${proudact.rating}</span>
              </p>
            </div>
            <p class="cart-card-text">${proudact.description}</p>
            <div class="cart-card-price-cart d-flex justify-content-between align-items-center">
              <div class="cart-card-price d-flex">
                <span class="cart-card-new-price">${proudact.newPrice}$</span>
              </div>
              <div class="cart-card-cart d-flex justify-content-center align-items-center">
                <i class="bi bi-cart3"></i>
              </div>
            </div>
          </div>
        </div>
      </article>
      `;
    } else if (page === 2) {
      shopContiner.innerHTML += `
      <article class="cart-card-shop2 archivo-font col-6 col-md-4">
        <figure class="cart-card-img-shop2">
          <img src="${proudact.image}" alt="cart-card-img" />
        </figure>
        <div class="cart-card-body-shop2 d-flex flex-column justify-content-center align-items-center text-center">
          <h3 class="cart-card-title-shop2">${proudact.title}</h3>
          <div class="cart-card-rating-shop2 d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(${proudact.rating})</span>
          </div>
          <p class="cart-card-price-shop2">${proudact.newPrice}$</p>
          <button class="cart-card-btn-shop2">
            <span>add to cart</span><span><i class="bi bi-arrow-right"></i></span>
          </button>
        </div>
      </article>
      `;
    } else if (page === 3) {
      shopContiner.innerHTML += `
      <article class="cart-card-shop2 archivo-font col-6 col-md-4">
        <figure class="cart-card-img-shop3">
          <img src="${proudact.image}" alt="cart-card-img" />
        </figure>
        <div class="cart-card-body-shop2 d-flex flex-column justify-content-center align-items-center text-center">
          <h3 class="cart-card-title-shop2">${proudact.title}</h3>
          <div class="cart-card-rating-shop2 d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(${proudact.rating})</span>
          </div>
          <p class="cart-card-price-shop2">${proudact.newPrice}$</p>
          <button class="cart-card-btn-shop2">
            <span>add to cart</span><span><i class="bi bi-arrow-right"></i></span>
          </button>
        </div>
      </article>
      `;
    }
  });
}

function renderPage() {
  addToFutuedProudacts(allProudacts);
  addToShop(allProudacts);
  editTitle();
}

// Event listener
const pagination = document.querySelector(".pagination-shops");
pagination.addEventListener("click", (e) => {
  const target = e.target.closest(".pagination-shop");
  if (!target) return;

  if (target.classList.contains("next")) {
    if (page * productsPerPage < allProudacts.length && page < 3) {
      page++;
      renderPage();
    }
  } else if (target.dataset.page) {
    page = Number(target.dataset.page);
    renderPage();
  }
});

// Start
loadProducts();
