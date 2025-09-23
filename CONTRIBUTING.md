# 🤝 Contributing to FlowKey

Thank you for your interest in contributing to FlowKey! We welcome contributions from developers of all skill levels.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Feature Requests](#feature-requests)

## 📜 Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git
- Basic knowledge of React and JavaScript
- Familiarity with Tailwind CSS (helpful)

### Setup Development Environment

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/flowkey.git
   cd flowkey
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open Browser**
   Navigate to `http://localhost:3000`

## 🔄 Development Workflow

### Branch Naming Convention
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test additions/updates

### Example Workflow
```bash
# Create and switch to feature branch
git checkout -b feature/add-dark-mode

# Make your changes
# ... code, code, code ...

# Add and commit changes
git add .
git commit -m "feat: add dark mode toggle functionality"

# Push to your fork
git push origin feature/add-dark-mode

# Create Pull Request on GitHub
```

## 💻 Coding Standards

### JavaScript/React
- Use functional components with hooks
- Follow React best practices
- Use TypeScript where beneficial
- Implement proper error boundaries

### CSS/Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain glassmorphism design consistency
- Use CSS variables for theme values

### File Organization
```
src/
├── components/          # Reusable UI components
├── pages/              # Route-level components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── data/               # Static data and constants
└── styles/             # Global styles and themes
```

### Code Style Examples

**✅ Good Component Structure**
```jsx
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const FeatureCard = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-effect rounded-xl p-6 hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Component content */}
    </div>
  );
};

export default FeatureCard;
```

**✅ Good Hook Usage**
```jsx
const useContractAddress = () => {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch logic here
  }, []);

  return { address, loading };
};
```

## 📝 Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for clear commit messages.

### Commit Types
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Examples
```bash
feat: add contract address display with glassmorphism
fix: resolve mobile navigation menu overflow
docs: update installation instructions
style: improve button hover animations
refactor: extract reusable modal component
test: add unit tests for Hero component
chore: update dependencies to latest versions
```

## 🔍 Pull Request Process

### Before Submitting
1. **Test your changes** - Ensure everything works locally
2. **Run linting** - Fix any ESLint errors
3. **Check responsive design** - Test on different screen sizes
4. **Update documentation** - If you've changed APIs or features
5. **Add/update tests** - Maintain test coverage

### PR Template
When creating a pull request, please include:

```markdown
## 📝 Description
Brief description of changes

## 🔄 Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## 📸 Screenshots (if applicable)
Before/after screenshots for UI changes

## ✅ Testing
- [ ] Manual testing completed
- [ ] Tests pass locally
- [ ] Cross-browser testing done

## 📋 Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors or warnings
```

### Review Process
1. **Automated Checks** - CI/CD pipeline runs tests
2. **Code Review** - At least one maintainer reviews
3. **Testing** - Changes tested in staging environment
4. **Approval** - Maintainer approves and merges

## 🐛 Issue Reporting

### Bug Reports
Use the bug report template and include:

- **Environment**: OS, browser, version
- **Steps to reproduce**: Clear step-by-step instructions
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Console errors**: Any error messages

### Bug Report Template
```markdown
**Environment:**
- OS: [e.g., Windows 11, macOS 13]
- Browser: [e.g., Chrome 118, Firefox 119]
- FlowKey Version: [e.g., 1.0.0]

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. Scroll to '...'
4. See error

**Expected Behavior:**
Clear description of expected behavior

**Actual Behavior:**
Clear description of what actually happens

**Screenshots:**
If applicable, add screenshots

**Additional Context:**
Any other context about the problem
```

## 💡 Feature Requests

### Before Requesting
1. **Search existing issues** - Avoid duplicates
2. **Consider the scope** - Does it fit FlowKey's vision?
3. **Think about implementation** - Is it technically feasible?

### Feature Request Template
```markdown
**Is your feature request related to a problem?**
Clear description of the problem

**Describe the solution you'd like**
Clear description of desired feature

**Describe alternatives you've considered**
Alternative solutions or features

**Additional context**
Mockups, examples, or other context
```

## 🏷️ Labels and Tags

### Issue Labels
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `priority: high` - High priority issue
- `priority: low` - Low priority issue

### PR Labels
- `needs review` - PR needs code review
- `needs testing` - PR needs testing
- `work in progress` - PR is not ready for review
- `ready to merge` - PR is approved and ready

## 🎯 Areas for Contribution

We especially welcome contributions in these areas:

### 🔧 **Technical Improvements**
- Performance optimizations
- Accessibility enhancements
- Cross-browser compatibility
- Mobile responsiveness
- SEO improvements

### 🎨 **Design & UX**
- Animation improvements
- Visual design refinements
- User experience enhancements
- Responsive design improvements

### 📚 **Documentation**
- Code comments and documentation
- User guides and tutorials
- API documentation
- Translation to other languages

### 🧪 **Testing**
- Unit tests for components
- Integration tests
- E2E testing scenarios
- Performance testing

### 🔌 **Extension Features**
- New bookmark management features
- Layout customization options
- Integration with other wallets
- Performance optimizations

## 🏆 Recognition

Contributors will be:
- Listed in our [Contributors](CONTRIBUTORS.md) file
- Mentioned in release notes
- Given credit in documentation
- Invited to our Discord community (when available)

## 📞 Getting Help

Need help contributing? Reach out:

- **💬 Discussions**: Use GitHub Discussions for questions
- **📧 Email**: [ hello@flowkey.sh](mailto: hello@flowkey.sh)
- **🐦 Twitter**: [@flowkeydotsh](https://x.com/flowkeydotsh)

## 📚 Resources

### Learning Resources
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Conventional Commits](https://www.conventionalcommits.org/)

### Tools & Extensions
- [React Developer Tools](https://react-dev-tools.netlify.app/)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

Thank you for contributing to FlowKey! 🙏

Every contribution, no matter how small, helps make FlowKey better for everyone.