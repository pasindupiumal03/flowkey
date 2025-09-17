# 🎨 FlowKey Design System

This document outlines the design system and UI guidelines for FlowKey.

## 🎭 Design Philosophy

FlowKey embraces **glassmorphism design** - a modern UI trend that creates depth and hierarchy through the use of translucent backgrounds, blur effects, and subtle borders.

### Core Principles
- **Transparency & Depth**: Layered glass-like elements
- **Minimalism**: Clean, uncluttered interfaces
- **Interactivity**: Smooth animations and micro-interactions
- **Accessibility**: Inclusive design for all users

## 🌈 Color Palette

### Primary Colors
```css
/* Purple to Blue Gradient */
.gradient-primary {
  background: linear-gradient(135deg, #9333ea 0%, #2563eb 100%);
}

/* Color Variables */
--purple-600: #9333ea;
--purple-500: #a855f7;
--blue-600: #2563eb;
--blue-500: #3b82f6;
```

### Neutral Colors
```css
/* Background Colors */
--gray-900: #111827;    /* Primary dark background */
--gray-800: #1f2937;    /* Secondary dark background */
--gray-700: #374151;    /* Tertiary dark background */
--black: #000000;       /* Pure black for contrast */

/* Text Colors */
--white: #ffffff;       /* Primary text */
--gray-300: #d1d5db;    /* Secondary text */
--gray-400: #9ca3af;    /* Tertiary text */
```

### Glass Effects
```css
/* Glass Morphism Base */
.glass-base {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Glass Variations */
.glass-light {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 📝 Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

### Text Sizes
```css
/* Headings */
.text-6xl { font-size: 3.75rem; }  /* Hero titles */
.text-5xl { font-size: 3rem; }     /* Section titles */
.text-4xl { font-size: 2.25rem; }  /* Subsection titles */
.text-3xl { font-size: 1.875rem; } /* Card titles */
.text-2xl { font-size: 1.5rem; }   /* Component titles */
.text-xl { font-size: 1.25rem; }   /* Large text */

/* Body Text */
.text-lg { font-size: 1.125rem; }  /* Large body */
.text-base { font-size: 1rem; }    /* Regular body */
.text-sm { font-size: 0.875rem; }  /* Small text */
.text-xs { font-size: 0.75rem; }   /* Extra small */
```

### Font Weights
```css
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
```

## 🧩 Components

### Buttons

#### Primary Button
```jsx
<button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 
                   text-white font-semibold rounded-lg shadow-lg 
                   hover:from-purple-700 hover:to-blue-700 
                   transform hover:scale-105 transition-all duration-200">
  Primary Action
</button>
```

#### Glass Button
```jsx
<button className="px-6 py-2 backdrop-blur-sm bg-white/10 
                   border border-white/20 text-white font-medium 
                   rounded-lg hover:bg-white/20 
                   transition-all duration-200">
  Glass Button
</button>
```

#### Icon Button
```jsx
<button className="p-3 backdrop-blur-sm bg-white/10 border border-white/20 
                   text-white rounded-lg hover:bg-white/20 
                   transition-all duration-200">
  <Icon size={20} />
</button>
```

### Cards

#### Glass Card
```jsx
<div className="backdrop-blur-sm bg-white/10 border border-white/20 
                rounded-xl p-6 shadow-2xl">
  <h3 className="text-xl font-semibold text-white mb-4">Card Title</h3>
  <p className="text-gray-300">Card content...</p>
</div>
```

#### Feature Card
```jsx
<div className="group backdrop-blur-sm bg-white/10 border border-white/20 
                rounded-xl p-6 shadow-2xl hover:bg-white/20 
                hover:border-purple-400/30 transition-all duration-300">
  <div className="text-purple-400 mb-4 group-hover:text-purple-300 
                  transition-colors duration-300">
    <Icon size={32} />
  </div>
  <h3 className="text-xl font-semibold text-white mb-2">Feature Title</h3>
  <p className="text-gray-300">Feature description...</p>
</div>
```

### Forms

#### Input Field
```jsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-300">
    Label
  </label>
  <input 
    className="w-full px-4 py-3 backdrop-blur-sm bg-white/10 
               border border-white/20 rounded-lg text-white 
               placeholder-gray-400 focus:outline-none 
               focus:border-purple-400 focus:bg-white/20 
               transition-all duration-200"
    placeholder="Enter text..."
  />
</div>
```

#### Textarea
```jsx
<textarea 
  className="w-full px-4 py-3 backdrop-blur-sm bg-white/10 
             border border-white/20 rounded-lg text-white 
             placeholder-gray-400 focus:outline-none 
             focus:border-purple-400 focus:bg-white/20 
             transition-all duration-200 resize-none"
  rows={4}
  placeholder="Enter message..."
/>
```

## 🎬 Animations

### Transitions
```css
/* Standard transition */
.transition-standard {
  transition: all 0.2s ease-in-out;
}

/* Slow transition */
.transition-slow {
  transition: all 0.3s ease-in-out;
}

/* Scale on hover */
.scale-hover:hover {
  transform: scale(1.05);
}

/* Glow effect */
.glow-hover:hover {
  box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
}
```

### Loading States
```jsx
// Loading spinner
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>

// Pulse animation
<div className="animate-pulse">
  <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-gray-700 rounded w-1/2"></div>
</div>
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile first approach */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

### Grid Systems
```jsx
// 12-column grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

// Flexible layout
<div className="flex flex-col lg:flex-row gap-6">
  <div className="flex-1">Content 1</div>
  <div className="flex-1">Content 2</div>
</div>
```

## ♿ Accessibility

### Color Contrast
- Ensure minimum 4.5:1 contrast ratio for normal text
- Ensure minimum 3:1 contrast ratio for large text
- Test with tools like WebAIM Contrast Checker

### Keyboard Navigation
```jsx
// Focus states
<button className="focus:outline-none focus:ring-2 focus:ring-purple-400 
                   focus:ring-offset-2 focus:ring-offset-gray-900">
  Accessible Button
</button>
```

### Screen Reader Support
```jsx
// ARIA labels
<button aria-label="Close dialog">
  <X size={20} />
</button>

// Hidden text for screen readers
<span className="sr-only">Close</span>
```

## 🎯 Best Practices

### Performance
- Use `backdrop-filter` sparingly for better performance
- Optimize images and use appropriate formats
- Lazy load non-critical components

### Maintainability
- Use consistent spacing (4px grid: 1, 2, 3, 4, 6, 8, 12, 16, 20, 24)
- Group related styles together
- Use semantic class names

### Browser Support
- Test glassmorphism effects across browsers
- Provide fallbacks for unsupported features
- Use autoprefixer for CSS compatibility

## 🔧 Customization

### Tailwind Configuration
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
    },
  },
};
```

### CSS Custom Properties
```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-blur: 16px;
}
```

## 📋 Component Checklist

When creating new components, ensure:

- [ ] Responsive design implemented
- [ ] Glassmorphism effects applied consistently
- [ ] Hover states and transitions included
- [ ] Accessibility attributes added
- [ ] Loading states considered
- [ ] Error states handled
- [ ] Cross-browser tested
- [ ] Performance optimized