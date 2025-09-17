# 🔒 Security Policy

## 🛡️ Reporting Security Vulnerabilities

FlowKey takes security seriously. We appreciate your efforts to responsibly disclose security vulnerabilities.

### 📧 How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities via:

- **Email**: [contact@flowkey.sh](mailto:contact@flowkey.sh)
- **Subject Line**: "Security Vulnerability Report - [Brief Description]"

### 📋 What to Include

When reporting a security vulnerability, please include:

1. **Type of vulnerability** (e.g., XSS, CSRF, injection, etc.)
2. **Full paths** of source file(s) related to the vulnerability
3. **Location** of the affected source code (tag/branch/commit/URL)
4. **Configuration** required to reproduce the issue
5. **Step-by-step instructions** to reproduce the vulnerability
6. **Impact** of the vulnerability and how an attacker might exploit it
7. **Any special configuration** required to reproduce the issue

### ⏰ Response Timeline

We aim to respond to security vulnerability reports within:

- **24 hours**: Initial acknowledgment of the report
- **72 hours**: Initial assessment and triage
- **7 days**: Regular updates on our progress
- **30 days**: Resolution or detailed status update

### 🎯 Scope

This security policy applies to:

- **FlowKey Website** (flowkey.sh)
- **FlowKey Chrome Extension**
- **Related infrastructure** and services
- **Third-party integrations** used in FlowKey

## 🔐 Supported Versions

We currently support security updates for:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | ✅ Yes             |
| < 1.0   | ❌ No              |

## 🛡️ Security Measures

### Website Security
- **HTTPS Everywhere**: All traffic encrypted with TLS 1.3
- **Security Headers**: CSP, HSTS, X-Frame-Options, etc.
- **Input Validation**: All user inputs validated and sanitized
- **XSS Protection**: Content Security Policy and output encoding
- **CSRF Protection**: Token-based CSRF protection

### Chrome Extension Security
- **Minimal Permissions**: Only necessary permissions requested
- **Content Security Policy**: Strict CSP for extension pages
- **Secure Communication**: HTTPS-only external requests
- **Local Storage**: Sensitive data encrypted before storage
- **No Remote Code Execution**: No eval() or similar functions

### Data Protection
- **Privacy by Design**: Minimal data collection
- **Local Storage**: User data stored locally when possible
- **Encryption**: Sensitive data encrypted at rest
- **No Tracking**: No unnecessary tracking or analytics
- **Transparent Policies**: Clear privacy policy and data practices

### Infrastructure Security
- **Secure Hosting**: Vercel with security best practices
- **Regular Updates**: Dependencies updated regularly
- **Monitoring**: Automated security scanning
- **Access Control**: Limited access to production systems

## 🚨 Known Security Considerations

### Current Limitations
1. **Client-Side Storage**: Some data stored in browser localStorage
2. **Third-Party APIs**: Dependencies on external services
3. **Browser Security**: Relies on browser security model

### Mitigation Strategies
1. **Data Minimization**: Only store essential data locally
2. **API Security**: Secure communication with third-party services
3. **Regular Audits**: Periodic security reviews and updates

## 🔍 Security Best Practices for Users

### For Website Users
- **Keep Browser Updated**: Use the latest browser version
- **Enable Security Features**: Allow security warnings and updates
- **Verify URLs**: Always check you're on the correct domain
- **Report Issues**: Contact us if you notice anything suspicious

### For Extension Users
- **Official Installation**: Only install from Chrome Web Store
- **Review Permissions**: Understand what permissions are requested
- **Keep Updated**: Install extension updates promptly
- **Secure Wallet**: Use secure wallet practices with Phantom

## 🔗 External Security Resources

### Security Tools We Use
- **ESLint Security Plugin**: Automated code security analysis
- **Dependabot**: Automated dependency vulnerability scanning
- **Vercel Security**: Platform-level security monitoring
- **Browser Security APIs**: Leveraging built-in browser security

### Recommended Reading
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Chrome Extension Security](https://developer.chrome.com/docs/extensions/mv3/security/)
- [Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [React Security Best Practices](https://snyk.io/blog/10-react-security-best-practices/)

## 🏆 Responsible Disclosure

We follow responsible disclosure practices:

### Our Commitments
- **Acknowledge** receipt of vulnerability reports within 24 hours
- **Provide regular updates** on investigation and resolution progress
- **Credit researchers** (with permission) in security advisories
- **No legal action** against good faith security research
- **Coordinate disclosure** timing with researchers

### Recognition
We appreciate security researchers and will:
- **Credit you** in our security advisories (if desired)
- **Mention you** in our Hall of Fame section
- **Provide updates** on how your report helped improve FlowKey

## 📚 Security Documentation

### For Developers
- Review our [Contributing Guide](CONTRIBUTING.md) for secure coding practices
- Follow secure development lifecycle procedures
- Use security-focused linting and testing tools
- Keep dependencies updated and review security advisories

### For Users
- Read our [Privacy Policy](https://flowkey.sh/privacy) for data practices
- Understand Chrome extension permissions and implications
- Use strong, unique passwords for associated accounts
- Enable two-factor authentication where available

## 🆘 Emergency Response

In case of active security incidents:

1. **Immediate Response**: Contact us immediately at [contact@flowkey.sh](mailto:contact@flowkey.sh)
2. **Severity Assessment**: We'll assess and prioritize based on impact
3. **Rapid Deployment**: Critical fixes deployed within hours if needed
4. **User Notification**: Users notified through appropriate channels
5. **Post-Incident Review**: Analysis and improvements implemented

## 🔄 Security Updates

Security updates are:
- **Prioritized**: Treated with highest priority
- **Fast-Tracked**: Bypass normal release cycles if critical
- **Well-Tested**: Thoroughly tested but released quickly
- **Communicated**: Users notified through multiple channels

## 📞 Contact Information

**Security Team**: [contact@flowkey.sh](mailto:contact@flowkey.sh)
**Twitter**: [@flowkeydotsh](https://x.com/flowkeydotsh)
**GitHub**: [github.com/pasindupiumal03/flowkey](https://github.com/pasindupiumal03/flowkey)

---

**Thank you for helping keep FlowKey and our users safe! 🙏**

*This security policy is reviewed and updated regularly to reflect current best practices and emerging threats.*