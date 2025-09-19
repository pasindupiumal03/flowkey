import React, { useState } from "react";
import { CheckCircle, XCircle, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const TokenAccess = () => {
  const [activeCard, setActiveCard] = useState(1); // Start with Access Granted active

  return (
    <section id="token-access" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-purple-400 text-sm font-medium mb-4 tracking-wider uppercase">
            Token-Gated Access
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Hold 0.2% of the tokens</span>
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Unlock Full Access Forever
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Hold at least 0.2% of the $FLK supply to unlock the app.<br />
            Your wallet is your license — nothing else needed
          </p>
          
          {/* Token Visualization with Cards */}
          <div className="flex justify-center mb-8 relative">
            <div className="relative w-full max-w-4xl h-96">
              {/* Card 1 - Access Denied (Left) */}
              <div className="absolute left-[14%] top-[15%] w-64" style={{ animation: 'bounce 3s infinite' }}>
                <img 
                  src="/card-1.svg" 
                  alt="Access Denied Card" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Central Coin - Larger and More Prominent */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl scale-150"></div>
                  <img 
                    src="/Coin-only.png" 
                    alt="FlowKey Token" 
                    className="relative w-[100%] h-[100%] object-contain transform hover:rotate-12 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Card 2 - Access Granted (Right Center) */}
              <div className="absolute right-[12%] top-1/2 transform -translate-y-1/2 w-64 z-30" style={{ animation: 'pulse 4s infinite' }}>
                <img 
                  src="/card-2.svg" 
                  alt="Access Granted Card" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Card 3 - Additional Info (Left Bottom) */}
              <div className="absolute left-[19%] bottom-8 w-64" style={{ animation: 'bounce 3s infinite', animationDelay: '1s' }}>
                <img 
                  src="/card-3.svg" 
                  alt="Token Info Card" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* CTA Buttons - Similar to Features */}
        <div className="flex justify-center space-x-4 mt-16">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-lg btn-glow hover-lift transition-all duration-300 flex items-center space-x-3 mx-auto"
          >
            <span>Buy $FLK</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TokenAccess;