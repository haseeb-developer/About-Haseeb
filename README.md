# Personal Profile Hub

A modern, responsive personal profile website that keeps all your important links and online accounts in one place.

## Features

- Hero section with avatar, bio, and tags
- Account cards with platform icon, name, username, and visit button
- Category filters and live search
- Fully responsive (mobile, tablet, desktop)
- Built with HTML, CSS, JavaScript, and Tailwind CSS

## Customize Your Profile

Edit **`js/accounts.js`** to update:

1. **`profileData`** — your name, title, bio, avatar, email, location, and about text
2. **`accountsData`** — add, remove, or edit platform cards

Each account entry:

```js
{
  platform: "GitHub",
  username: "@yourusername",
  url: "https://github.com/yourusername",
  category: "Development",
  color: "#f0f6fc",
  bgColor: "rgba(36, 41, 47, 0.8)",
  icon: `<svg>...</svg>`,
}
```

## Run Locally

Open `index.html` in your browser, or use a local server:

```bash
npx serve .
```

## File Structure

```
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── accounts.js   ← your data
│   └── app.js        ← rendering logic
└── README.md
```
