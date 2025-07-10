# Banza - Complete Website Clone with Premium Effects

A pixel-perfect recreation of the full Banza.xyz website featuring advanced animations, particle effects, and interactive elements using Next.js 15, Framer Motion, and Tailwind CSS.

## 🌟 Premium Features

### ✨ Advanced Animations
- **Loading Screen**: Animated Banza logo with flame effect and progress bar
- **Scroll Progress**: Top progress bar showing scroll position
- **Parallax Effects**: Smooth parallax scrolling on hero elements
- **Staggered Animations**: Sequential reveal of content sections
- **3D Transforms**: Perspective and rotation effects on interactive elements

### 🎨 Visual Effects
- **Particle Background**: Floating particles with connection lines
- **Glow Effects**: Dynamic glowing elements around key components
- **Gradient Animations**: Animated color transitions on text and backgrounds
- **Hover Interactions**: Scale, rotation, and shadow effects on hover
- **Ripple Effects**: Button click animations with expanding circles

### 📱 Interactive Elements
- **Mobile Mockup**: Fully interactive phone interface with animated rewards
- **Brand Logos**: Hover effects with glow and rotation animations
- **Coin Stack 3D**: Interactive 3D coin stacks with individual animations
- **Counter Animations**: Real-time updating reward counters
- **Smooth Transitions**: Fluid animations between states

### 🎯 Performance Optimized
- **Framer Motion**: Hardware-accelerated animations
- **Intersection Observer**: Animations trigger only when in view
- **Optimized Particles**: Efficient particle system with canvas rendering
- **Smooth Scrolling**: 60fps scroll-based animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. **Download the project files**
   \`\`\`bash
   # Use the "Download Code" button above or clone
   cd banza-clone
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # This will install:
   # - Next.js 15
   # - Framer Motion (animations)
   # - Lucide React (icons)
   # - Radix UI (components)
   # - Tailwind CSS (styling)
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🏗️ Project Structure

\`\`\`
banza-clone/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── try-now/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── brands-section.tsx
│   ├── data-asset-section.tsx
│   ├── particle-background.tsx
│   ├── loading-screen.tsx
│   └── scroll-progress.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── images/
├── package.json
├── tailwind.config.ts
└── README.md
\`\`\`

## 🎨 Animation Details

### Loading Screen
- Animated Banza logo with scaling and opacity transitions
- Flame icon with continuous rotation and scale animations
- Progress bar with smooth width transitions
- Fade out transition when loading completes

### Hero Section
- **Phone Mockup**: 3D rotation effects with multiple glow layers
- **Reward Counter**: Real-time animated counter with color changes
- **Reward Cards**: Individual hover animations with scale and shadow
- **Background**: Floating particles with fade in/out animations

### Features Section
- **Section Reveal**: Staggered animations for each feature card
- **Icon Animations**: Continuous rotation and glow effects
- **Text Gradients**: Animated color transitions on headlines
- **Hover Effects**: Scale and glow on feature cards

### Brands Section
- **Logo Animations**: Sequential reveal with 3D rotation
- **Hover Effects**: Scale, glow, and text shadow on brand names
- **Phone Preview**: Enhanced mobile interface with animated elements
- **Particle Effects**: Floating elements around the section

### Data Asset Section
- **3D Coin Stacks**: Individual coin animations with shine effects
- **Parallax Scrolling**: Smooth movement based on scroll position
- **Glow Effects**: Dynamic lighting around the 3D illustration
- **Text Animations**: Staggered reveal with hover interactions

## 🛠️ Technologies

### Core Framework
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

### Animation Libraries
- **Framer Motion**: Production-ready motion library
- **Canvas API**: Custom particle system
- **CSS Transforms**: Hardware-accelerated animations

### UI Components
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **Custom Components**: Tailored UI elements

## 🎯 Animation Performance

### Optimization Techniques
- **Hardware Acceleration**: Using transform3d and will-change
- **Intersection Observer**: Animations only when elements are visible
- **RequestAnimationFrame**: Smooth 60fps animations
- **Memory Management**: Proper cleanup of animation listeners

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Animation Frame Rate**: 60fps

## 🎨 Customization Guide

### Animation Timing
\`\`\`tsx
// Adjust animation durations in components
transition={{ duration: 0.8, delay: 0.2 }}
\`\`\`

### Particle System
\`\`\`tsx
// Modify particle count and behavior
const particleCount = 50 // Adjust number of particles
const particleSpeed = 0.5 // Adjust movement speed
\`\`\`

### Color Schemes
\`\`\`tsx
// Update gradient colors
className="bg-gradient-to-r from-orange-500 to-yellow-500"
\`\`\`

### 3D Effects
\`\`\`tsx
// Adjust 3D transformations
whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
\`\`\`

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px - Optimized touch interactions
- **Tablet**: 640px - 1024px - Adjusted spacing and layout
- **Desktop**: > 1024px - Full effects and animations

### Touch Interactions
- **Tap Animations**: Scale effects on mobile taps
- **Swipe Gestures**: Smooth transitions for mobile navigation
- **Reduced Motion**: Respects user's motion preferences

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically with optimizations

### Performance Optimizations
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic bundle splitting
- **Static Generation**: Pre-rendered pages for better performance

## 🔧 Development

### Adding New Animations
1. Import Framer Motion components
2. Define animation variants
3. Add intersection observers for performance
4. Test on different devices

### Custom Effects
- **Particle Systems**: Extend the particle background component
- **3D Animations**: Use CSS transforms and Framer Motion
- **Scroll Animations**: Implement useScroll and useTransform hooks

## 📞 Support

For questions about animations and effects:
1. Check Framer Motion documentation
2. Review component animation code
3. Test performance on target devices

## 📄 License

This project is for educational purposes. Please respect the original Banza brand and trademarks.

---

**Premium Experience**: This enhanced version includes professional-grade animations, particle effects, and interactive elements that create a truly immersive user experience matching modern web standards.
\`\`\`
