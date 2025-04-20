# Tour & Travel Website

A modern travel website built with Next.js and Ant Design. This website showcases various travel destinations, tours, and travel-related content.

## Features

- Responsive design
- Modern UI with Ant Design components
- Multiple pages including:
  - Home
  - Tours
  - Destinations
  - About Us
  - Contact
  - Blog
  - Gallery
- Search and filter functionality
- Image gallery with modal view
- Contact form
- Blog section with categories and tags

## Prerequisites

- Node.js (v14 or later)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tour-travel.git
cd tour-travel
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## Deployment to GitHub Pages

1. Update the `next.config.js` file with your repository name:
```javascript
basePath: process.env.NODE_ENV === 'production' ? '/tour-travel' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/tour-travel/' : '',
```

2. Build and export the project:
```bash
npm run export
# or
yarn export
```

3. Push the contents of the `out` directory to the `gh-pages` branch of your repository.

4. Enable GitHub Pages in your repository settings and select the `gh-pages` branch as the source.

## Project Structure

```
tour-travel/
├── app/
│   ├── components/
│   │   └── Navbar.js
│   ├── about/
│   │   └── page.js
│   ├── blog/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── destinations/
│   │   └── page.js
│   ├── gallery/
│   │   └── page.js
│   ├── tours/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
├── next.config.js
├── package.json
└── README.md
```

## Technologies Used

- Next.js
- React
- Ant Design
- CSS Modules

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 