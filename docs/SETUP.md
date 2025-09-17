# 🚀 FlowKey Development Setup

This guide will help you set up FlowKey for local development.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **Git**
- **Chrome** (for extension testing)

## ⚙️ Installation

1. **Clone the repository:**
```bash
git clone https://github.com/[your-username]/flowkey.git
cd flowkey
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🛠️ Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## 🏗️ Project Structure

```
FlowKey/
├── public/                 # Static assets
│   ├── index.html         # HTML template
│   ├── flowkey_logo.png   # Main logo
│   └── icons/             # Favicon and app icons
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Main hero section
│   │   ├── Features.jsx   # Features showcase
│   │   ├── FAQ.jsx        # Frequently asked questions
│   │   ├── Footer.jsx     # Site footer
│   │   └── pages/         # Page components
│   ├── data/              # Static data and configurations
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.js             # Main app component
│   └── index.js           # Application entry point
├── docs/                  # Documentation
└── .github/               # GitHub templates and workflows
```

## 🎨 Design System

FlowKey uses a **glassmorphism design** with the following key elements:

### Colors
- **Primary**: Purple gradient (`from-purple-600 to-blue-600`)
- **Background**: Dark (`bg-gray-900`, `bg-black`)
- **Glass Effects**: Semi-transparent with backdrop blur

### Typography
- **Font**: System fonts with fallbacks
- **Sizes**: Responsive text sizing with Tailwind classes

### Components
- **Glass Cards**: `backdrop-blur-sm bg-white/10 border border-white/20`
- **Buttons**: Gradient backgrounds with hover effects
- **Animations**: Smooth transitions and micro-interactions

## 🔌 API Integration

### Contract Address Display
FlowKey fetches real-time contract address data from Google Apps Script:

```javascript
// API endpoint
const API_URL = 'https://script.google.com/macros/s/[SCRIPT_ID]/exec';

// Polling every 30 seconds
useEffect(() => {
  const interval = setInterval(fetchContractAddress, 30000);
  return () => clearInterval(interval);
}, []);
```

### External Integrations
- **Solscan**: Blockchain explorer links
- **Chrome Web Store**: Extension installation
- **Social Media**: Twitter, GitHub, Gmail integration

## 🧪 Testing

### Component Testing
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Manual Testing Checklist
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Cross-browser compatibility
- [ ] Performance (loading times, animations)
- [ ] Accessibility (keyboard navigation, screen readers)
- [ ] External links (social media, extension store)

## 🚀 Deployment

### Vercel Deployment
1. **Connect to Vercel:**
   - Import project from GitHub
   - Configure build settings

2. **Environment Variables:**
   - Set any required API keys
   - Configure domain settings

3. **Build Configuration:**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "build",
     "framework": "create-react-app"
   }
   ```

### Manual Deployment
```bash
# Build for production
npm run build

# Deploy the build folder to your hosting service
```

## 🔧 Development Tips

### Hot Reload Issues
If hot reload stops working:
```bash
# Restart the development server
npm start
```

### Styling Changes
- Use Tailwind utility classes
- Follow the glassmorphism design patterns
- Test responsive behavior

### Performance Optimization
- Lazy load images
- Use React.memo for expensive components
- Minimize bundle size

## 🐛 Troubleshooting

### Common Issues

**Issue: Dependencies conflict**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Build fails**
```bash
# Check for linting errors
npm run lint

# Fix auto-fixable issues
npm run lint:fix
```

**Issue: Favicon not updating**
- Clear browser cache
- Add cache-busting parameter to favicon link

## 📝 Contributing

1. Read our [Contributing Guidelines](../CONTRIBUTING.md)
2. Follow the [Code of Conduct](../CODE_OF_CONDUCT.md)
3. Create feature branches from `main`
4. Write tests for new features
5. Update documentation as needed

## 🆘 Getting Help

- **Issues**: [GitHub Issues](https://github.com/[your-username]/flowkey/issues)
- **Discussions**: [GitHub Discussions](https://github.com/[your-username]/flowkey/discussions)
- **Email**: [your-email@example.com]

## 📚 Additional Resources

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CRACO Configuration](https://craco.js.org/)
- [Vercel Deployment](https://vercel.com/docs)