import React, { useState } from "react";
import { Button } from "./ui/button";
import { Bookmark, Layout, Zap, Download } from "lucide-react";
import { mockData } from "../data/mock";

const Features = () => {
  const { features } = mockData;
  const [hoveredFeature, setHoveredFeature] = useState(null);

  // Image mapping for each feature
  const featureImages = {
    0: "/Flowkey_2.png", // Add any site to bookmarks
    1: "/Flowkey_3.png", // Open instant your workspace
    2: "/Flowkey_4.png", // Build your layout
  };

  // Default image when no feature is hovered
  const defaultImage = "/Flowkey_2.png";

  return (
    <section className="py-20 px-6">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 hover-lift cursor-pointer"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  {feature.icon === 'bookmark' && <Bookmark className="w-6 h-6 text-white" />}
                  {feature.icon === 'layout' && <Layout className="w-6 h-6 text-white" />}
                  {feature.icon === 'zap' && <Zap className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - App Interface Mockup */}
          <div className="glass-effect rounded-xl p-6 hover-lift">
            <img 
              src={hoveredFeature !== null ? featureImages[hoveredFeature] : defaultImage}
              alt="FlowKey Browser Extension Preview" 
              className="w-full h-auto rounded-lg shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/25"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-lg btn-glow hover-lift transition-all duration-300 flex items-center space-x-3 mx-auto">
            <Download className="w-5 h-5" />
            <span>Install FlowKey Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;