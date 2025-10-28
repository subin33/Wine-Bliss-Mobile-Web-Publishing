# Wine Mobile Web

Mobile-first storefront for browsing, searching, and purchasing wines. This repository contains static HTML/CSS/JS pages and mockups to preview the mobile UI.

## Pages

| Page            | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| Main Home       | Product showcase with badges for New/Popular, category navigation        |
| Product Detail  | Wine information, price, discount, buy CTA, related items                |
| Cart            | Selected items list, quantity controls, total calculation, checkout flow |
| My Page         | Order history, shipping status, profile management, wishlist             |
| Search          | Wine search, filtering options, sorting, results display                 |
| Login / Sign Up | User authentication, account management, password recovery               |
| Category        | Browse by wine type, price filters, sort options                         |

## Screenshots / UI Preview

### Loading

<img src="./images/readme-img/loading.png" alt="Loading" width="350" />

---

### Login / Sign Up

<img src="./images/readme-img/login-screen.png" alt="Login & Sign Up" width="350" />

---

### Main Home & Product Detail

<img src="./images/readme-img/home-detail.png" alt="Main Home & Product Detail" width="350" />

---

### Profile & Search

<img src="./images/readme-img/profile-search.png" alt="Profile & Search" width="350" />

---

### Cart & Category

<img src="./images/readme-img/cart-category.png" alt="Cart & Category" width="350" />

---

## Live Mockups

- Multi-view mockup: `mobile-mockup/multi-view.html`
- Single-view mockup: `mobile-mockup/single-view.html`
- Without mockup frame: `mobile-mockup/without-mockup.html`

Open the files directly in a browser or via a simple static server.

## Getting Started

1. Clone the repository.
2. Open `index.html` in your browser, or run a static server:

```bash
# Python 3
python -m http.server 3000
# Or Node
npx serve . -l 3000 --no-clipboard --single
```

Then visit `http://localhost:3000`.

## Tech Stack

- HTML5, CSS3 (vanilla + `css/` styles)
- JavaScript (vanilla) in `js/`

## Project Structure

```text
Wine_Mobile_Web/
├─ index.html
├─ style.css
├─ css/
├─ js/
├─ images/
├─ include/
├─ html/
└─ mobile-mockup/
```

## Roadmap (Next Implementations)

- Implement category browsing with filter and sort interactions
- Complete product detail pricing logic (discount/strike-through)
- Cart quantity sync and total recalculation edge cases
- Search filters (type, price range, country, sweetness) and result sorting
- Authentication flows (validation, error states, password recovery)
- My Page: order tracking states and wishlist management

## Contributing

1. Create a feature branch.
2. Commit with clear messages.
3. Open a Pull Request.
