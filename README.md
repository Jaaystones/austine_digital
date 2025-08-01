# Austyne Digitals Landing Page

A modern, responsive landing page recreating the Austyne Digitals website using TypeScript, HTML, and CSS. This project showcases content strategy and copywriting services with a focus on conversion optimization and professional service presentation.

## Features

- **Modern TypeScript Architecture**: Built with TypeScript for type safety and better developer experience
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Interactive Navigation**: Smart navigation bar with active section highlighting and smooth scrolling
- **Scroll Animations**: Intersection Observer API for smooth scroll-triggered animations
- **Professional Pricing Section**: Three-tier pricing display with detailed package information
- **Calendly Integration**: Direct booking functionality through integrated Calendly links
- **Professional Styling**: Clean, modern design with gradient backgrounds and smooth transitions
- **SEO Optimized**: Semantic HTML structure with proper meta tags and accessibility features
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Mobile-First Design**: Hamburger menu and responsive layouts for optimal mobile experience

## Project Structure

```
austine_digital/
├── src/
│   ├── components/
│   │   └── landingPage.ts     # Main landing page component with all sections
│   ├── styles.css             # Complete CSS with pricing, navigation, and responsive design
│   └── main.ts               # Entry point with navigation, scroll detection, and Calendly integration
├── public/
│   └── images/               # Directory for brand logos and profile images
├── index.html                # HTML template with proper meta tags and fonts
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
└── README.md                 # Project documentation
```

## Technology Stack

- **Vite 5.4.19**: Fast build tool and development server
- **TypeScript ~5.8.3**: Type-safe JavaScript with modern ES features
- **CSS3**: Modern CSS with Grid, Flexbox, custom properties, and animations
- **HTML5**: Semantic markup with accessibility considerations
- **Intersection Observer API**: For scroll-triggered animations and navigation highlighting

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start development server
npm run dev
```

The development server will start at `http://localhost:5173` with hot module replacement.

### Build for Production

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview production build locally
npm run preview
```

## Sections Included

1. **Navigation Bar**: Fixed header with active section highlighting and mobile hamburger menu
2. **Hero Section**: Eye-catching headline with primary CTA button
3. **Problem Section**: Identifies customer pain points with compelling copy
4. **Brand Showcase**: Display of client brand logos with hover effects
5. **Solution Section**: Services and value propositions with clear benefits
6. **Testimonials**: Customer success stories with professional formatting
7. **About Section**: Personal introduction and credentials with profile image
8. **Services Section**: Detailed service offerings with benefits list
9. **Pricing Section**: Three-tier pricing structure (Starter, Premium, Ultimate) with:
   - Detailed package information
   - Monthly pricing with progression
   - Feature lists for each tier
   - "Most Popular" highlighting
10. **Offers Section**: Signature service offerings with additional pricing options
11. **About Detail**: Extended personal story and business philosophy
12. **Final CTA**: Strong closing call-to-action with urgency
13. **Footer**: Contact information and social media links

## Key Features

### Navigation & User Experience
- **Smart Navigation**: Active section highlighting as user scrolls
- **Mobile-Responsive Menu**: Hamburger menu with smooth animations
- **Smooth Scrolling**: Seamless navigation between sections
- **Scroll Animations**: Elements animate into view using Intersection Observer

### Conversion Optimization
- **Calendly Integration**: Direct booking through https://calendly.com/austinedigitals-net/20min
- **Multiple CTAs**: Strategic placement of call-to-action buttons throughout
- **Professional Pricing Display**: Clear three-tier pricing structure
- **Social Proof**: Testimonials and brand showcase sections

### Design & Performance
- **Conversion-Focused Design**: Layout optimized for lead generation
- **Professional Typography**: Clean, readable font hierarchy with Inter font family
- **Interactive Elements**: Hover effects without vertical movement (user preference)
- **Mobile-First Approach**: Responsive design starting from mobile breakpoints
- **Fast Loading**: Optimized images and minimal dependencies
- **Accessibility**: Semantic HTML and proper ARIA labels

### Technical Features
- **TypeScript Integration**: Type-safe development with modern tooling
- **CSS Custom Properties**: Centralized theming system
- **Modular Architecture**: Clean separation of components and styles
- **Hot Module Replacement**: Fast development with Vite

## Customization

### Colors
The color scheme can be customized by modifying CSS custom properties in `src/styles.css`:

```css
:root {
  --primary-color: #ff6b35;      /* Main brand color */
  --secondary-color: #2c3e50;    /* Secondary elements */
  --accent-color: #f39c12;       /* Accent highlights */
  --text-dark: #2c3e50;          /* Primary text */
  --text-light: #7f8c8d;         /* Secondary text */
  --bg-light: #ecf0f1;           /* Light backgrounds */
  --bg-dark: #34495e;            /* Dark backgrounds */
  /* ... */
}
```

### Content
Update the content by modifying the `createLandingPage()` function in `src/components/landingPage.ts`. Each section is clearly commented and organized.

### Pricing
Modify pricing tiers in the pricing section of `landingPage.ts`. Current structure includes:
- **Starter**: $1000/month, then $1500/month
- **Premium**: $1400/month, then $2000/month  
- **Ultimate**: $2000/month, then $2500/month

### Images
Place brand logos and profile images in the `public/images/` directory:
- Brand logos: Logo 1.jpg, Logo 2.jpg, logo 3.jpg, Logo 5.jpg
- Profile image: workwithme.jpg

### Styling
All styles are contained in `src/styles.css` and organized by component sections with clear comments.

## Browser Support

- Chrome/Edge (latest) - Full support
- Firefox (latest) - Full support  
- Safari (latest) - Full support
- Mobile browsers (iOS Safari, Chrome Mobile) - Optimized experience

## Development Notes

### Project Setup
This project was built using Vite's vanilla TypeScript template and includes:
- Custom navigation system with scroll detection
- Intersection Observer for animations and section highlighting
- Calendly integration for booking functionality
- Professional pricing section with three tiers
- Responsive design with mobile-first approach

### Image Assets
Remember to add your brand assets to the `public/images/` directory:
- Brand logo files for the showcase section
- Personal profile image (workwithme.jpg) for the About section

### Booking Integration
All "BOOK NOW" buttons are integrated with Calendly using the URL:
`https://calendly.com/austinedigitals-net/20min`

## License

This project is for educational and portfolio purposes.
