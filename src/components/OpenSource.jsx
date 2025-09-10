import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { mockData } from "../data/mock";

const OpenSource = () => {
  const { openSource } = mockData;

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="block">All the code of FlowKey is</span>
          <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Fully Open-Source
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12">
          {openSource.description}
        </p>

        {/* GitHub Button */}
        <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg rounded-lg hover-lift transition-all duration-300 border border-gray-600 hover:border-gray-500">
          <Github className="w-5 h-5 mr-3" />
          Open GitHub
        </Button>

        {/* Background decoration */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
          <div className="relative glass-effect rounded-xl p-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Open Source</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">MIT</div>
                <div className="text-gray-400">License</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <div className="text-gray-400">Contributions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;