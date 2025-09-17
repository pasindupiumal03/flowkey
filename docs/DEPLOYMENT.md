# 📦 FlowKey Deployment Guide

Complete guide for deploying FlowKey to various platforms.

## 🎯 Quick Deploy

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/[your-username]/flowkey)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/[your-username]/flowkey)

## 🚀 Production Build

### Build Process
```bash
# Install dependencies
npm install

# Create optimized production build
npm run build

# Preview build locally (optional)
npx serve -s build
```

### Build Output
```
build/
├── static/
│   ├── css/           # Minified CSS
│   ├── js/            # Minified JavaScript
│   └── media/         # Optimized images
├── index.html         # HTML template
└── manifest.json      # PWA manifest
```

## ☁️ Vercel Deployment

### Automatic Deployment
1. **Connect Repository:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings:**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "build",
     "installCommand": "npm install",
     "framework": "create-react-app"
   }
   ```

3. **Environment Variables:**
   ```bash
   # Add in Vercel dashboard if needed
   REACT_APP_API_URL=https://your-api-url.com
   ```

### Custom Domain
```bash
# Add custom domain in Vercel dashboard
# Configure DNS records:
# A record: @ -> 76.76.19.19
# CNAME record: www -> cname.vercel-dns.com
```

### `vercel.json` Configuration
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 🌐 Netlify Deployment

### Automatic Deployment
1. **Connect Repository:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Choose your repository

2. **Build Settings:**
   ```bash
   Build command: npm run build
   Publish directory: build
   ```

### `netlify.toml` Configuration
```toml
[build]
  publish = "build"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "8"

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
# Multi-stage build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";

    # Cache static assets
    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Docker Commands
```bash
# Build image
docker build -t flowkey .

# Run container
docker run -p 3000:80 flowkey

# Docker Compose
version: '3.8'
services:
  flowkey:
    build: .
    ports:
      - "3000:80"
    restart: unless-stopped
```

## 🌍 AWS Deployment

### AWS S3 + CloudFront
```bash
# Build project
npm run build

# Install AWS CLI
npm install -g aws-cli

# Configure AWS credentials
aws configure

# Create S3 bucket
aws s3 mb s3://flowkey-app

# Upload build files
aws s3 sync build/ s3://flowkey-app --delete

# Configure bucket for static website
aws s3 website s3://flowkey-app --index-document index.html --error-document index.html
```

### AWS Amplify
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

## 🔧 GitHub Actions CI/CD

### `.github/workflows/deploy.yml`
```yaml
name: Deploy FlowKey

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
      - uses: actions/checkout@v3

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test -- --coverage --watchAll=false

      - name: Build project
        run: npm run build

      - name: Deploy to Vercel
        if: github.ref == 'refs/heads/main'
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 📊 Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm install -g webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js

# Enable gzip compression
# Configure in server (nginx/apache)
```

### Performance Checklist
- [ ] Enable gzip compression
- [ ] Set proper cache headers
- [ ] Optimize images (WebP format)
- [ ] Minimize JavaScript bundles
- [ ] Use CDN for static assets
- [ ] Enable HTTP/2
- [ ] Implement service worker

### Lighthouse Optimization
```json
// Target scores
{
  "performance": "> 90",
  "accessibility": "> 95",
  "best-practices": "> 95",
  "seo": "> 90"
}
```

## 🔒 Security Configuration

### Content Security Policy
```html
<!-- In index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://script.google.com; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data: https:; 
               connect-src 'self' https://script.google.com;">
```

### Security Headers
```nginx
# In nginx.conf
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Frame-Options DENY always;
add_header X-Content-Type-Options nosniff always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

## 🔍 Monitoring & Analytics

### Error Tracking
```bash
# Install Sentry
npm install @sentry/react

# Configure in src/index.js
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_DSN_HERE",
  environment: process.env.NODE_ENV,
});
```

### Analytics
```bash
# Google Analytics 4
npm install gtag

# Configure tracking
gtag('config', 'GA_MEASUREMENT_ID');
```

## 📋 Deployment Checklist

### Pre-deployment
- [ ] All tests passing
- [ ] Build successful locally
- [ ] Environment variables configured
- [ ] Dependencies up to date
- [ ] Performance optimized
- [ ] Security headers configured

### Post-deployment
- [ ] Site accessible at domain
- [ ] All pages load correctly
- [ ] Forms working properly
- [ ] External links functional
- [ ] Mobile responsiveness verified
- [ ] Performance metrics acceptable
- [ ] Error monitoring active

## 🆘 Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be >= 18
```

**Routing Issues:**
```bash
# Ensure server redirects are configured
# Check _redirects file (Netlify) or vercel.json (Vercel)
```

**Environment Variables:**
```bash
# Verify variables are prefixed with REACT_APP_
# Check deployment platform settings
```

### Debug Commands
```bash
# Check build size
npm run build
du -sh build/

# Test production build locally
npx serve -s build -p 3000

# Check for unused dependencies
npm install -g depcheck
depcheck
```

## 📞 Support

For deployment issues:
- Check platform-specific documentation
- Review build logs carefully
- Test locally before deploying
- Use platform community forums
- Contact support if needed