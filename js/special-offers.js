const carouselInner = document.querySelector(".carousel-inner");
const carouselIndicators = document.querySelector(".carousel-indicators");

async function loadProducts() {
  try {
    const response = await fetch("../DB/proudact.json");
    const allProudacts = await response.json();
    creatCarsoul(allProudacts);
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

function creatCarsoul(allProudacts) {
  let i = 0;
  let slideIndex = 0;
  let totalSlides = 0;

  while (i < allProudacts.length && totalSlides < 3) {
    let proudactHtml = "";
    const isActive = slideIndex === 0 ? "active" : "";

    for (let j = i; j < i + 4; j++) {
      const proudact = allProudacts[j];
      if (!proudact) continue;

      const discount = Math.round(
        ((proudact.oldPrice - proudact.newPrice) / proudact.oldPrice) * 100
      );

      proudactHtml += `
          <article class="spacial-offers-discaunt-card archivo-font col-6 col-lg-3 ">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="spacial-offers-discaunt-card-img d-flex justify-content-center align-items-center">
              <img src="${proudact.image}" alt="spacial-offers-discaunt-card-img" />
              <div class="spacial-offers-discaunt-card-heart d-flex justify-content-center align-items-center">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div class="spacial-offers-discaunt-card-discount">
                <p>${discount}% OFF</p>
              </div>
            </div>
            <div class="spacial-offers-discaunt-card-body">
              <div class="spacial-offers-discaunt-card-title-rating d-flex justify-content-between">
                <h3 class="spacial-offers-discaunt-card-title">${proudact.title}</h3>
                <p class="spacial-offers-discaunt-card-rating d-flex justify-content-center align-items-center">
                  <i class="fa-solid fa-star"></i> <span>${proudact.rating}</span>
                </p>
              </div>
              <p class="spacial-offers-discaunt-card-text">${proudact.description}</p>
              <div class="spacial-offers-discaunt-card-price-cart d-flex justify-content-between align-items-center">
                <div class="spacial-offers-discaunt-card-price d-flex">
                  <span class="spacial-offers-discaunt-card-old-price">$${proudact.oldPrice}</span>
                  <span class="spacial-offers-discaunt-card-new-price">$${proudact.newPrice}</span>
                </div>
                <div class="spacial-offers-discaunt-card-cart d-flex justify-content-center align-items-center">
                  <i class="bi bi-cart3"></i>
                </div>
              </div>
            </div>
            </div>
          </article>
        `;
    }

    carouselInner.innerHTML += `
        <div class="carousel-item ${isActive}">
          <div class="spacial-offers-discaunt-card-row spacial-offers-discaunt-container row  justify-content-center align-items-center">
            ${proudactHtml}
          </div>
        </div>
      `;

    carouselIndicators.innerHTML += `
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${slideIndex}" class="${
      isActive ? "active" : ""
    }" aria-label="Slide ${slideIndex + 1}"></button>
      `;

    slideIndex++;
    i += 4;
    totalSlides++;
  }

  while (totalSlides < 3) {
    carouselIndicators.innerHTML += `
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${totalSlides}" class="" aria-label="Slide ${
      totalSlides + 1
    }"></button>
      `;
    totalSlides++;
  }
}

loadProducts();
