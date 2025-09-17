# 🔑 FlowKey - Browser Extension & Web Platform

<div align="center">
  <img src="public/flowkey_icon.png" alt="FlowKey Logo" width="120" height="120" style="border-radius: 20px"/>
  
  ### Connect with Phantom to Start
  
  *The ultimate browser extension for managing your favorite sites with style*
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://reactjs.org/)
  [![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?logo=googlechrome)](https://chromewebstore.google.com/detail/flwkey/gnoldbjnnjpmomkeefiaihihaomegaok)
  [![Website](https://img.shields.io/badge/Website-flowkey.sh-7c3aed)](https://flowkey.sh)
  
  [🚀 Live Demo](https://flowkey.sh) • [📥 Install Extension](https://chromewebstore.google.com/detail/flwkey/gnoldbjnnjpmomkeefiaihihaomegaok) • [📖 Documentation](docs/README.md)
</div>

---

## ✨ Features

### 🌐 **Modern Web Platform**
- **Glassmorphism Design** - Beautiful transparent UI elements with backdrop blur effects
- **Matrix Background Animation** - Dynamic Chinese character rain effect
- **Responsive Design** - Perfect experience across all devices
- **Real-time Contract Address** - Live updates from Google Apps Script integration
- **Interactive Components** - Smooth animations and hover effects

### 🔌 **Browser Extension**
- **One-Click Bookmarking** - Add any site to your workspace instantly
- **Custom Layouts** - Build and organize your perfect browsing setup
- **Phantom Wallet Integration** - Secure wallet-based authentication
- **No Data Sharing** - All data stored locally on your device

### 📱 **User Experience**
- **Fast Loading** - Optimized React 19 with CRACO build system
- **Privacy-Focused** - Comprehensive privacy policy with transparent data practices
- **Contact Integration** - Multiple ways to reach support (form, email, social)
- **SEO Optimized** - Open Graph tags and meta descriptions

---

## 🎯 Live Demo

Experience FlowKey in action:

- **🌐 Website**: [flowkey.sh](https://flowkey.sh)
- **📥 Chrome Extension**: [Chrome Web Store](https://chromewebstore.google.com/detail/flwkey/gnoldbjnnjpmomkeefiaihihaomegaok)
- **🐦 Twitter**: [@flowkeydotsh](https://x.com/flowkeydotsh)

---

## 📸 Screenshots

<div align="center">
  
### 🏠 Homepage
![Homepage](docs/screenshots/homepage.png)
*Beautiful glassmorphism design with matrix background animation*

### 🔧 Extension Features
![Extension Features](docs/screenshots/features.png)
*Interactive feature cards with dynamic image switching*

### 📧 Contact Form
![Contact Form](docs/screenshots/contact.png)
*Professional contact form with loading animations*

</div>

---

## 🛠️ Tech Stack

### **Frontend**
- **React 19.0.0** - Latest React with concurrent features
- **React Router 7.5.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **CRACO 7.1.0** - Custom React build configuration
- **Lucide React** - Beautiful icon library
- **React Icons** - Additional icon sets (FontAwesome 6)

### **Build & Deploy**
- **Vercel** - Serverless deployment platform
- **PostCSS** - CSS processing with autoprefixer
- **ESLint** - Code quality and consistency
- **Axios** - HTTP client for API calls

### **External Integrations**
- **Google Apps Script** - Real-time contract address updates
- **Chrome Web Store** - Extension distribution
- **Gmail Integration** - Direct email composition
- **Solscan API** - Blockchain explorer integration

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/pasindupiumal03/flowkey.git

# Navigate to project directory
cd flowkey

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts

```bash
# Development
npm start          # Start dev server (localhost:3000)
npm test           # Run test suite
npm run build      # Create production build

# Deployment
vercel --prod      # Deploy to Vercel
```

---

## 📁 Project Structure

```
flowkey/
├── 📁 public/              # Static assets
│   ├── 🖼️ flowkey_icon.png  # Main logo/icon
│   ├── 🖼️ Flowkey_*.png     # Feature screenshots
│   ├── 📄 index.html       # HTML template
│   └── 📄 manifest.json    # PWA manifest
├── 📁 src/
│   ├── 📁 components/      # React components
│   │   ├── 🏠 Hero.jsx      # Homepage hero section
│   │   ├── ⭐ Features.jsx  # Interactive features
│   │   ├── 📧 ContactUs.jsx # Contact form
│   │   ├── 🔒 PrivacyPolicy.jsx # Privacy page
│   │   └── 📁 ui/          # Reusable UI components
│   ├── 📁 pages/           # Route components
│   ├── 📁 data/            # Static data and mocks
│   ├── 📁 hooks/           # Custom React hooks
│   └── 📄 App.js           # Main app component
├── 📄 README.md           # This file
├── 📄 vercel.json         # Vercel deployment config
└── 📄 package.json        # Dependencies and scripts
```

---

## 🔧 Configuration

### Environment Variables
```env
# Optional: Add custom environment variables
REACT_APP_API_URL=your_api_url
REACT_APP_CONTRACT_ADDRESS_API=your_google_script_url
```

### Vercel Deployment
The project includes optimized `vercel.json` configuration:
- Static build optimization
- Client-side routing support
- Security headers
- Asset caching strategies

---

## 🎨 Design System

### **Color Palette**
- **Primary**: Purple (#7c3aed) to Blue (#3b82f6) gradients
- **Background**: Pure black (#000000) for matrix effect
- **Glass Elements**: White with 10% opacity + backdrop blur
- **Text**: White (#ffffff) and Gray shades (#gray-300, #gray-400)

### **Typography**
- **Headings**: Bold, large scale (text-6xl, text-7xl)
- **Body**: Clean, readable (text-xl, text-lg)
- **Monospace**: Contract addresses and code

### **Animations**
- **Matrix Rain**: Custom canvas-based Chinese character animation
- **Fade-in**: Staggered entrance animations
- **Hover Effects**: Smooth transitions with lift and glow effects
- **Loading States**: Spinning indicators and skeleton screens

---

## 🔒 Privacy & Security

FlowKey is built with privacy as a core principle:

- **🔐 Local Data Storage** - All user data stays on your device
- **🚫 No Third-Party Sharing** - We never share your information
- **🛡️ Secure Wallet Integration** - Phantom wallet for authentication
- **📋 Transparent Policies** - Clear privacy policy and terms

Read our full [Privacy Policy](https://flowkey.sh/privacy) for details.

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- ESLint configuration for consistent code style
- Prettier for automatic formatting
- Conventional Commits for clear commit messages

---

## 📋 Changelog

### v1.0.0 (September 2025)
- ✅ Initial release with full website and extension
- ✅ Matrix background animation
- ✅ Glassmorphism design system
- ✅ Real-time contract address integration
- ✅ Contact form with loading animations
- ✅ Privacy policy and legal pages
- ✅ Chrome Web Store integration
- ✅ Responsive design for all devices

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

---

## 🆘 Support

Need help? We've got you covered:

- **📧 Email**: [contact@flowkey.sh](mailto:contact@flowkey.sh)
- **📝 Contact Form**: [flowkey.sh/contact](https://flowkey.sh/contact)
- **🐛 Issues**: [GitHub Issues](https://github.com/pasindupiumal03/flowkey/issues)
- **🐦 Twitter**: [@flowkeydotsh](https://x.com/flowkeydotsh)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React 19 framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For beautiful, consistent icons
- **Vercel** - For seamless deployment platform
- **Chrome Extension Team** - For extension platform and APIs

---

<div align="center">
  
### 🌟 Show Your Support

If you like FlowKey, please consider:
- ⭐ **Starring this repository**
- 🐦 **Following us on [Twitter](https://x.com/flowkeydotsh)**
- 📥 **Installing our [Chrome Extension](https://chromewebstore.google.com/detail/flwkey/gnoldbjnnjpmomkeefiaihihaomegaok)**
- 🤝 **Contributing to the project**

**Made with ❤️ by the FlowKey Team**

[Website](https://flowkey.sh) • [Extension](https://chromewebstore.google.com/detail/flwkey/gnoldbjnnjpmomkeefiaihihaomegaok) • [Twitter](https://x.com/flowkeydotsh) • [Contact](mailto:contact@flowkey.sh)

</div>