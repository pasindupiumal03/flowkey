import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Download, Copy, ExternalLink } from "lucide-react";
import { mockData } from "../data/mock";
import axios from "axios";

const Hero = () => {
  const { hero } = mockData;
  const canvasRef = useRef(null);
  const [contractAddress, setContractAddress] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Fetch contract address from Google Apps Script
  useEffect(() => {
    const fetchContractAddress = async () => {
      try {
        const response = await axios.get(
          'https://script.google.com/macros/s/AKfycbzIHODiy6jiQNTj_qvtfZKMwERui43JPs985JZ_8-Z-w3gPx0txIKwhTR7GhZb-O5YbUg/exec'
        );
        
        // Handle different response formats
        if (response.data) {
          const data = typeof response.data === 'string' ? response.data.trim() : response.data;
          
          // If response has contractAddress property
          if (data.contractAddress) {
            setContractAddress(data.contractAddress);
          }
          // If response is directly the contract address string
          else if (typeof data === 'string' && data.length > 10 && data !== "Coming soon...") {
            setContractAddress(data);
          }
          // Handle "Coming soon..." or similar messages
          else if (typeof data === 'string') {
            setContractAddress(data);
          }
          else {
            setContractAddress("No CA available");
          }
        } else {
          setContractAddress("Unable to fetch CA");
        }
      } catch (error) {
        console.error('Error fetching contract address:', error);
        setContractAddress("Error loading CA");
      } finally {
        setIsLoading(false);
        setLastUpdated(new Date());
      }
    };

    fetchContractAddress();

    // Set up polling to check for updates every 30 seconds
    const interval = setInterval(fetchContractAddress, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Copy contract address to clipboard
  const copyToClipboard = async () => {
    if (contractAddress && 
        contractAddress !== "Loading..." && 
        contractAddress !== "Error loading CA" && 
        contractAddress !== "No CA available" &&
        contractAddress !== "Coming soon..." &&
        contractAddress !== "Unable to fetch CA") {
      try {
        await navigator.clipboard.writeText(contractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }
  };

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

        {/* Contract Address Display - Glassmorphism Oval */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-purple-500/20">
            <span className="text-purple-400 font-semibold text-lg">CA:</span>
            
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-400"></div>
                <span className="text-gray-300 font-mono text-sm">Loading...</span>
              </div>
            ) : (
              <>
                <span 
                  className="text-white font-mono text-sm md:text-base bg-black/20 px-3 py-1 rounded-lg border border-white/10 max-w-xs md:max-w-md truncate cursor-pointer hover:bg-black/30 transition-colors"
                  title={contractAddress}
                >
                  {contractAddress}
                </span>
                
                {contractAddress !== "Error loading CA" && 
                 contractAddress !== "Unable to fetch CA" && 
                 contractAddress !== "No CA available" &&
                 contractAddress !== "Coming soon..." && (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={copyToClipboard}
                      className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group"
                      title="Copy to clipboard"
                    >
                      <Copy className={`w-4 h-4 transition-colors ${copied ? 'text-green-400' : 'text-purple-400 group-hover:text-purple-300'}`} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          
          {copied && (
            <div className="mt-2 animate-fade-in-up">
              <span className="text-green-400 text-sm font-medium">✓ Copied to clipboard!</span>
            </div>
          )}
        </div>

        {/* Subtitle */}
        <p className="text-xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {hero.subtitle}
        </p>

        {/* CTA Button */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-lg btn-glow hover-lift transition-all duration-300 flex items-center space-x-3 mx-auto"
            onClick={() => window.open('https://chromewebstore.google.com/detail/flwkey/gnoldbjnnjpmomkeefiaihihaomegaok', '_blank')}
          >
            <Download className="w-5 h-5" />
            <span>Install Extension</span>
          </Button>
        </div>

        {/* Browser Extension Mockup */}
        <img 
          src="/hero.svg" 
          alt="FlowKey Browser Extension Preview" 
          className="max-w-4xl mx-auto w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;