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
          
          {/* Coin Image */}
          <div className="flex justify-center mb-8 relative">
            <div className="relative">
              <img 
                src="/coin.png" 
                alt="FlowKey Token" 
                className="w-full h-full"
              />
              {/* Dark vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40"></div>
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