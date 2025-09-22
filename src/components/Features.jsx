import React, { useState } from "react";
import { Button } from "./ui/button";
import { Bookmark, Layout, Zap, Download, ChevronRight } from "lucide-react";
import { mockData } from "../data/mock";

const Features = () => {
  const { features } = mockData;
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);

  // Image mapping for each feature
  const featureImages = {
    0: "/Flowkey_2_svg.svg", // Add any site to bookmarks
    1: "/Flowkey_3_svg.svg", // Open instant your workspace
    2: "/Flowkey_4.png", // Build your layout
  };

  // Default image when no feature is hovered
  const defaultImage = "/Flowkey_2.png";

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">One click. All your sites.</span>
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to go.
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Open Discord, Twitter, Telegram: no tabs, no noise.
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeFeature === index 
                    ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/50 shadow-xl shadow-purple-500/10' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                {/* Active indicator */}
                <div className={`absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-r-full transition-opacity duration-300 ${
                  activeFeature === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Feature Icon & Content */}
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/25' 
                      : 'bg-white/10 group-hover:bg-white/20'
                  }`}>
                    {feature.icon === 'bookmark' && <Bookmark className="w-6 h-6 text-white" />}
                    {feature.icon === 'layout' && <Layout className="w-6 h-6 text-white" />}
                    {feature.icon === 'zap' && <Zap className="w-6 h-6 text-white" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                    activeFeature === index 
                      ? 'text-purple-400 translate-x-1' 
                      : 'text-gray-500 group-hover:text-gray-400 group-hover:translate-x-0.5'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Right side - App Interface Mockup */}
          <div className="glass-effect rounded-xl p-6 hover-lift">
            <img 
              src={activeFeature !== null ? featureImages[activeFeature] : defaultImage}
              alt="FlowKey Browser Extension Preview" 
              className="w-3/4 h-auto mx-auto rounded-lg shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/25"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-lg btn-glow hover-lift transition-all duration-300 flex items-center space-x-3 mx-auto"
            onClick={() => window.open('https://chromewebstore.google.com/detail/flwkey/gnoldbjnnjpmomkeefiaihihaomegaok', '_blank')}
          >
            <Download className="w-5 h-5" />
            <span>Install FlowKey Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;