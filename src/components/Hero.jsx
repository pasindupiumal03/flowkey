import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { mockData } from "../data/mock";

const Hero = () => {
  const { hero } = mockData;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Chinese characters for matrix effect
    const chars = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
    const charArray = chars.split("");

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track the y position of each column
    const drops = new Array(columns).fill(1);

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#7c3aed'; // Purple color
      ctx.font = `${fontSize}px monospace`;

      // Drawing the characters
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        style={{ background: 'transparent' }}
      />
      
      {/* Gradient overlay for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="block text-white">Connect with</span>
          <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Phantom to start
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-300 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {hero.subtitle}
        </p>

        {/* CTA Button */}
        <div className=" mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-lg btn-glow hover-lift transition-all duration-300 flex items-center space-x-3 mx-auto">
            <Download className="w-5 h-5" />
            <span>Install Extension</span>
          </Button>
        </div>

        {/* Browser Extension Mockup */}
        <div className="relative max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-effect rounded-xl p-6 hover-lift">
            <img 
              src="/Flowkey_1.png" 
              alt="FlowKey Browser Extension Preview" 
              className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-500/25"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;