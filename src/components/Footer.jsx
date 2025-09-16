import React from "react";
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/flowkey_icon.jpeg" 
              alt="FlowKey Logo" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-white font-semibold text-xl">FlowKey</span>
          </div>

          {/* Center Icons */}
          <div className="flex items-center justify-center space-x-4">
            <a 
              href="https://x.com/flowkeydotsh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center justify-center"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/pasindupiumal03/flowkey" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Right side - Privacy and Copyright */}
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a 
              href="#privacy" 
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span>© 2025 FlowKey. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;