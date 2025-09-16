import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

const OpenSource = () => {
  return (
    <section id="opensource" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Section Label */}
            <div className="text-purple-400 text-sm font-semibold mb-6 tracking-wider uppercase">
              Open-Source
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              All the code of FlowKey is
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Fully Open-Source
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              No hidden code. No black box. You see what you use.
            </p>
            <Button 
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg rounded-lg hover-lift transition-all duration-300 border border-gray-600 hover:border-gray-500"
              onClick={() => window.open('https://github.com/pasindupiumal03/flowkey', '_blank')}
            >
              <Github className="w-5 h-5 mr-3" />
              Open GitHub
            </Button>
          </div>
          {/* Right Side - Circular Graphic */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <img 
                src="/github-white-icon.webp" 
                alt="GitHub Open Source" 
                className="w-full h-full object-contain opacity-20 hover:opacity-30 transition-opacity duration-300 filter brightness-50 contrast-150"
                style={{
                  filter: 'brightness(0.3) contrast(1.5) drop-shadow(0 0 20px rgba(124, 58, 237, 0.2))'
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Bottom Border Line */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default OpenSource;