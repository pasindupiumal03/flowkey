import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionNavigation = (sectionId) => {
    if (location.pathname === '/') {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
          <img 
            src="/flowkey_icon.jpeg" 
            alt="FlowKey Logo" 
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span className="text-white font-semibold text-xl">FlowKey</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleSectionNavigation('features')}
            className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => handleSectionNavigation('opensource')}
            className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            GitHub
          </button>
          <button 
            onClick={() => handleSectionNavigation('faq')}
            className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            FAQ
          </button>
          <Link to="/extension" className="text-gray-300 hover:text-white transition-colors duration-200">
            Our Extension
          </Link>
        </nav>

        {/* CTA Section */}
        <div className="flex items-center space-x-4">
          {/* Twitter Button */}
          <a
            href="https://x.com/flowkeydotsh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group"
            aria-label="Follow on Twitter"
          >
            <FaXTwitter className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
          </a>

          {/* Open Extension Button */}
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full btn-glow transition-all duration-300 flex items-center space-x-2"
            onClick={() => window.open('https://chromewebstore.google.com/detail/flwkey/gnoldbjnnjpmomkeefiaihihaomegaok', '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open Extension</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;