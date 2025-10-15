# BeePee Furniture Works

A premium furniture e-commerce website for BeePee Furniture Works, handcrafted furniture in Abuja, Nigeria.

## Features

- **Modern Design System**: Rich color palette with Honey Gold accents, semantic design tokens, and consistent theming
- **GSAP Animations**: Smooth scroll-triggered animations and parallax effects
- **Responsive Layout**: Mobile-first design that scales beautifully across all devices
- **Product Showroom**: Browse furniture collections with advanced filtering
- **Custom Project Intake**: Multi-step form with WhatsApp integration for custom orders
- **Portfolio Showcase**: Case studies of completed projects
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **Animations**: GSAP with ScrollTrigger
- **Smooth Scroll**: Lenis
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation

## Environment Variables

Create a `.env` file with:

```env
# WhatsApp Integration
VITE_WHATSAPP_NUMBER=2348000000000

# Site Configuration
VITE_SITE_NAME="BeePee Furniture Works"
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Pages

- **Home** (`/`) - Hero section, featured collections, testimonials
- **Showroom** (`/showroom`) - Product catalog with filters
- **Custom Projects** (`/custom`) - Request quote form with WhatsApp integration
- **Portfolio** (`/portfolio`) - Showcase of completed projects
- **Process** (`/process`) - How custom furniture is made
- **About** (`/about`) - Company mission, values, and team
- **Contact** (`/contact`) - Contact form and business information

## Design System

The design system uses HSL color tokens defined in `src/index.css`:

- **Primary**: Honey Gold `#D6A72E` - Accent color for CTAs and highlights
- **Secondary**: Warm Oak `#C28D62` - Supporting color for surfaces
- **Background**: Deep Charcoal `#121212` - Main background
- **Foreground**: Off-White `#F7F5F2` - Primary text color

Custom utilities available:
- `.text-gradient-gold` - Gold gradient text
- `.hover-lift` - Lift on hover animation
- `.glow-gold` - Gold glow shadow effect

## Key Features

### WhatsApp Integration
All contact forms and custom project requests integrate with WhatsApp for seamless customer communication.

### GSAP Animations
Smooth animations throughout the site:
- Hero parallax effects
- Scroll-triggered card animations
- Staggered element reveals
- Interactive hover states

### Responsive Design
Mobile-first approach with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Deployment

This project is optimized for deployment on Vercel or Netlify.

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the `dist` folder
```

## Performance

- Lazy-loaded images
- Code splitting by route
- Optimized GSAP animations
- Minimal bundle size with tree-shaking

## License

© 2025 BeePee Furniture Works. All rights reserved.
