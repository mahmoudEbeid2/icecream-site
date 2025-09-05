# IcyTales – Responsive Vegan Ice‑Cream Store 27 page

A responsive, multi‑page static website template for a vegan ice‑cream store. It showcases marketing sections, shop listings, special offers, and common informational pages. Built with semantic HTML, custom CSS, Bootstrap 5, and minimal JavaScript for dynamic product rendering in some pages.

## Demo Pages

Main entry points are in the project root and `pages/` directory:
- `index.html`: Home (variant 2 in navigation) – hero, featured vegan treats, options, limited offer, testimonials, newsletter, and footer.
- `pages/home1.html`, `pages/home-3.html`: Alternate homepage layouts.
- `pages/shop.html`: Shop grid with pagination and featured products.
- `pages/singleproduct.html`: Single product showcase.
- `pages/special-offers.html`: Special offers carousel fed from JSON.
- `pages/cart.html`, `pages/cheackout.html`, `pages/thankyou.html`: Cart → checkout → thank you flow (UI only).
- `pages/about.html`, `pages/team.html`, `pages/faq.html`: Company, team, and FAQ.
- `pages/privacyPolicy.html`, `pages/TermsConditions.html`: Legal pages.
- `pages/error.html`, `pages/coming-soon.html`.
- Blog layouts: `pages/onecolumn.html`, `twocolumn.html`, `threecolumn.html`, `fourcolumn.html`.

Note: Some filenames intentionally preserve original casing and spelling (e.g., `cheackout.html`, `TermsConditions.html`).

## Tech Stack

- HTML5 + CSS3
- Bootstrap 5 (CDN)
- Google Fonts: Berkshire Swash, Archivo, Rubik
- Font Awesome 6 (CDN)
- Optional Swiper (CDN) – included but not required on all pages
- Vanilla JavaScript for small dynamic sections

## Project Structure

```
New folder/
  index.html                      # Home page (links to other variants via nav)
  pages/                          # All sub‑pages (shop, blog, legal, etc.)
  css/
    style.css                     # Main styling for home variant and common blocks
    nav.css                       # Navigation/header styles
    global.css                    # Global variables, utilities, responsive helpers
    bootstrap*.css                # Local copy (if needed); CDN used in HTML
    *.css                         # Page‑specific styles (about, shop, checkout, ...)
  js/
    shop.js                       # Renders shop and featured products from JSON
    special-offers.js             # Builds special offers carousel from JSON
    bootstrap.js                  # Optional local Bootstrap helper (CDN used)
  db/
    proudact.json                 # Product seed data (titles, prices, images, ratings)
    imge/                         # Product images referenced in JSON
  assets/                         # Design assets used by pages (png/jpg/svg)
  imge/                           # Additional images used by some pages
```

## Running Locally

Because some pages load JSON via `fetch`, you should serve the site with a local HTTP server (opening files directly with `file://` will block fetch due to CORS).

- Quick options:
  - Python 3: `python -m http.server 5500` then open `http://localhost:5500/`.
  - Node (http-server): `npx http-server -p 5500 --silent` then open `http://localhost:5500/`.
  - VS Code Live Server / any static server.

Once served, navigate to `http://localhost:5500/index.html` and use the navbar to access other pages.

## Data and Dynamic Sections

- `db/proudact.json`
  - Consumed by `js/shop.js` and `js/special-offers.js`.
  - Provides fields like: `title`, `description`, `image`, `oldPrice`, `newPrice`, `rating`.

- `js/shop.js`
  - Targets containers: `.shop-main-container`, `.featuerd-proudacts-container`, `.page-number`, and `.pagination-shops` on `pages/shop.html`.
  - Pagination: 6 products per page; supports up to 3 pages by design.
  - Also renders a “featured products” strip (`futuedProudact` = 5 per page).

- `js/special-offers.js`
  - Targets `.carousel-inner` and `.carousel-indicators` on `pages/special-offers.html`.
  - Builds up to 3 slides, 4 products per slide, and computes the discount badge from `oldPrice → newPrice`.

Note: Class names and some spellings follow the original markup (e.g., `featuerd-proudacts`, `proudact`). Do not rename unless you also update all references.

## Styling

- Core variables and utility classes live in `css/global.css` and `css/style.css` (e.g., color variables, `binkColor`, `whiteColor`, font sizes).
- Page‑specific CSS exists for many pages (e.g., `about.css`, `shop.css`, `singleproduct.css`, `team.css`, etc.).
- The layout is responsive with media queries at common breakpoints (1200/992/768/576).

## Assets

- `assets/` contains images for hero sections, cards, footers, icons, and decorative shapes.
- `db/imge/` and root `imge/` include product/gallery images used across the site.

## Navigation

The header/navbar is defined in `index.html` and repeated in sub‑pages. It links to:
- Home variants, About, Shop, Single Product, Checkout, Terms & Conditions, Team, Special Offers, Thank You, Privacy Policy, Load More, Review, Error, Coming Soon.
- Blog layouts (1–4 columns).

If you duplicate the navbar/footer across pages manually, keep URLs relative to the page location.

## Customization Tips

- Update brand: Replace `assets/f-logo.png` and the logo text in the footer; update favicon via `<link rel="icon" href="assets/icon.png" />`.
- Colors/Fonts: Adjust CSS variables in `css/style.css` and `css/global.css`.
- Products: Edit `db/proudact.json` and ensure referenced images exist in `db/imge/` or `assets/`.
- Sections: Modify or remove home sections in `index.html` as needed.

## Known Notes

- Filenames and class names intentionally retain original spelling to match existing selectors and JS queries.
- Ensure your static server serves the `db/` directory; otherwise, product lists and carousels will not populate.
- Bootstrap and Font Awesome are included via CDN; network access is required unless you self‑host.

## License

This project is provided as a static template for learning and demonstration purposes. Replace branding and content before production use. Licensing for third‑party assets (fonts, icons, images) follows their respective providers.
