import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { 
  Download, 
  Bookmark, 
  Wallet, 
  Palette, 
  Code, 
  Zap, 
  Smartphone,
  Target,
  Settings,
  Shield,
  Layers,
  CheckCircle,
  Clock,
  Search,
  BarChart,
  Cloud
} from "lucide-react";

const Extension = () => {
  const features = [
    {
      icon: <Bookmark className="w-6 h-6" />,
      title: "Smart Bookmark Management",
      description: "Organize and access your bookmarks efficiently with intelligent categorization and quick access."
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Phantom Wallet Integration",
      description: "Seamless crypto wallet connectivity with secure authentication and transaction capabilities."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Modern UI/UX",
      description: "Beautiful purple gradient design with Poppins typography for an exceptional user experience."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "React 18",
      description: "Built with the latest React features and hooks for optimal performance and development experience."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Webpack 5",
      description: "Optimized bundling and hot reloading for fast development and efficient resource loading."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Manifest V3",
      description: "Latest Chrome extension standards for enhanced security, performance, and future compatibility."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Layout Organization",
      description: "Manage different bookmark layouts and organize your workspace exactly how you want it."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Component-Based Architecture",
      description: "Clean, maintainable code structure built with modern development best practices."
    }
  ];

  const walletFeatures = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Modern wallet connection UI",
      description: "Intuitive interface for connecting your Phantom wallet"
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Secure authentication flow",
      description: "Industry-standard security protocols for safe wallet access"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Wallet state management",
      description: "Persistent and reliable wallet connection status"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Transaction capabilities",
      description: "Expandable framework for future transaction features"
    }
  ];

  const roadmapItems = [
    { icon: <Bookmark className="w-5 h-5" />, title: "Advanced bookmark categorization", completed: false },
    { icon: <Cloud className="w-5 h-5" />, title: "Cloud sync capabilities", completed: false },
    { icon: <Wallet className="w-5 h-5" />, title: "Multiple wallet support", completed: false },
    { icon: <Download className="w-5 h-5" />, title: "Import/export functionality", completed: false },
    { icon: <Palette className="w-5 h-5" />, title: "Custom themes", completed: false },
    { icon: <Zap className="w-5 h-5" />, title: "Keyboard shortcuts", completed: false },
    { icon: <Search className="w-5 h-5" />, title: "Search and filtering", completed: false },
    { icon: <BarChart className="w-5 h-5" />, title: "Bookmark analytics", completed: false }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                FlowKey Chrome Extension
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A powerful bookmark and layout management Chrome extension with Phantom wallet integration, 
              built with React 18 and modern web technologies.
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-lg btn-glow hover-lift transition-all duration-300 flex items-center space-x-3 mx-auto"
              onClick={() => window.open('https://chromewebstore.google.com/detail/flowkey-bookmark-layout-m/lpgjlhajnhhdbaleigdkeloeeniedpnj', '_blank')}
            >
              <Download className="w-5 h-5" />
              <span>Install Extension</span>
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                🚀 <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need for efficient bookmark and layout management
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 hover-lift">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phantom Wallet Integration */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Phantom Wallet Integration
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  The extension includes seamless integration with Phantom wallet for secure crypto operations.
                </p>
                
                <div className="space-y-6">
                  {walletFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-effect rounded-xl p-8 text-center">
                <Wallet className="w-24 h-24 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Secure Wallet Connection</h3>
                <p className="text-gray-300 mb-6">
                  Connect your Phantom wallet securely and manage your crypto assets alongside your bookmarks.
                </p>
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-4 border border-purple-500/30">
                  <p className="text-sm text-purple-300">
                    ✨ Enhanced security with Manifest V3 compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Roadmap */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                🚀 <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Features Roadmap
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Exciting features coming soon to enhance your FlowKey experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {roadmapItems.map((item, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 hover-lift">
                  <div className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.completed 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {item.completed ? <CheckCircle className="w-5 h-5" /> : item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold ${
                        item.completed ? 'text-green-400' : 'text-white'
                      }`}>
                        {item.title}
                      </h4>
                      {!item.completed && (
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">Coming Soon</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-effect rounded-xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Browsing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Install FlowKey now and experience the future of bookmark management with crypto wallet integration.
              </p>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-xl rounded-lg btn-glow hover-lift transition-all duration-300 flex items-center space-x-3 mx-auto"
                onClick={() => window.open('https://chromewebstore.google.com/detail/flowkey-bookmark-layout-m/lpgjlhajnhhdbaleigdkeloeeniedpnj', '_blank')}
              >
                <Download className="w-6 h-6" />
                <span>Get FlowKey Extension</span>
              </Button>
              <p className="text-sm text-gray-400 mt-4">
                Free • Chrome Web Store • Manifest V3 Compliant
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Extension;