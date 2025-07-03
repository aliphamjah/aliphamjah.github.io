# Personal landing page

This repository contains the source for **Alip Hamjah's** personal landing page. The site is built with plain HTML, CSS and a small amount of JavaScript and is served through [GitHub Pages](https://pages.github.com/).

## Project overview

The landing page presents contact information and links to Alip's various social profiles. Styling is provided by Bootstrap and custom CSS located in the `assets` directory. Everything is static so no build step is required.

## Local setup

1. Clone this repository.
2. Change into the project directory:
   ```bash
   git clone https://github.com/aliphamjah/aliphamjah.github.io.git
   cd aliphamjah.github.io
   ```
3. Open `index.html` directly in your browser or start a simple HTTP server:
   ```bash
   python3 -m http.server
   ```
   Then visit `http://localhost:8000`.

## Deployment via GitHub Pages

1. Commit and push your changes to the branch configured for GitHub Pages (usually `master` or `main`).
2. In the repository settings on GitHub, enable **GitHub Pages** and select the same branch as the source.
3. If a `CNAME` file is present, GitHub Pages will automatically serve your site using that custom domain. Otherwise it will be available at `https://<username>.github.io`.

That's all! Any pushed changes will be automatically published by GitHub Pages.
