# React Dashboard

A modern, responsive dashboard UI built with React and Tailwind CSS. Perfect for SaaS applications and portfolio projects.

## Features

- 🎨 Modern, clean UI design
- 📱 Fully responsive (desktop and mobile)
- 🧩 Reusable React components
- 🎯 Sidebar navigation with mobile menu
- 📊 Statistics cards with trend indicators
- 📈 Chart placeholder section
- ⚡ Built with Vite for fast development

## Tech Stack

- **React** 18.2.0
- **Vite** 5.0.8
- **Tailwind CSS** 3.3.6
- **JavaScript** (ES6+)

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
react-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx      # Navigation sidebar
│   │   ├── Header.jsx       # Top header with avatar
│   │   ├── StatCard.jsx     # Reusable statistics card
│   │   └── ChartPlaceholder.jsx  # Chart visualization
│   ├── pages/
│   │   ├── Dashboard.jsx    # Main dashboard page
│   │   ├── Analytics.jsx    # Analytics page
│   │   └── Settings.jsx     # Settings page
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Components

### Sidebar
Responsive sidebar navigation with mobile menu toggle. Includes Dashboard, Analytics, and Settings pages.

### Header
Top header with page title, notifications icon, and user avatar placeholder.

### StatCard
Reusable card component for displaying statistics with trend indicators.

### ChartPlaceholder
Visual chart representation using CSS gradients and animations.

## Customization

The dashboard uses Tailwind CSS for styling. You can customize:

- Colors: Edit `tailwind.config.js` to change the primary color scheme
- Components: Modify individual component files in `src/components/`
- Layout: Adjust spacing and grid layouts in component files

## License

MIT
