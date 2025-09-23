import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-6 px-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/flowkey_icon.jpeg" 
              alt="FlowKey Logo" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-white font-semibold text-xl">FlowKey</span>
          </Link>
          
          <Link to="/">
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-white flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              FlowKey - Bookmark & Layout Manager
            </p>
            <p className="text-gray-400 mt-2">
              Effective Date: September 17, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                FlowKey - Bookmark & Layout Manager ("the Extension") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you use 
                the Extension. By using the Extension, you agree to the terms of this Privacy Policy.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Collection</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Extension collects the following data:
              </p>
              <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong className="text-purple-400">Wallet Address:</strong> If you connect your Phantom wallet, 
                  the Extension stores your wallet address locally in your browser's storage. This data is used 
                  solely for enabling wallet-related features within the Extension.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Usage</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The data collected is used for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>To enable wallet integration and provide a seamless user experience.</li>
                <li>To allow users to save and restore browser layouts and bookmarks.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Sharing</h2>
              <div className="bg-green-600/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-gray-300">
                  The Extension does <strong className="text-green-400">not</strong> share, sell, or transfer 
                  your data to any third parties. All data remains stored locally on your device and is not 
                  transmitted to external servers.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We take reasonable measures to protect your data from unauthorized access or disclosure. 
                However, no method of electronic storage is completely secure, and we cannot guarantee 
                absolute security.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Choices</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can manage or delete the data stored by the Extension at any time by:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Clearing your browser's local storage.</li>
                <li>Uninstalling the Extension.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted within 
                the Extension or on our official website. Your continued use of the Extension after any 
                changes indicates your acceptance of the updated Privacy Policy.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="flex items-center space-x-3 bg-blue-600/10 border border-blue-500/20 rounded-lg p-4">
                <Mail className="w-5 h-5 text-blue-400" />
                <a 
                  href="mailto: hello@flowkey.sh" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                   hello@flowkey.sh
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl p-8 text-center">
              <p className="text-gray-300 text-lg">
                By using the Extension, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link to="/">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-lg hover-lift transition-all duration-300"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;