import React, { useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Mail, User, MessageSquare, Send, CheckCircle, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Start loading animation
    setIsLoading(true);
    
    // Simulate form submission (4 seconds loading)
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      
      // Show success message for 2 seconds then redirect
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 4000);
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

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
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with the FlowKey team
            </p>
            <p className="text-gray-400 mt-2">
              We'd love to hear from you!
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            {!showSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={!isFormValid || isLoading}
                    className={`w-full py-4 text-lg rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                      isFormValid && !isLoading
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white hover-lift btn-glow'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              /* Success Message */
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-green-400 mb-2">Message Sent Successfully!</h2>
                  <p className="text-xl text-gray-300 mb-4">
                    Thank you for contacting us. We'll get back to you soon!
                  </p>
                  <p className="text-gray-400">
                    Redirecting to home page...
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          {!showSuccess && (
            <div className="mt-16 text-center">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Other Ways to Reach Us
                </h3>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a 
                    href="mailto:contact@flowkey.sh" 
                    className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
                  >
                    contact@flowkey.sh
                  </a>
                </div>
                <p className="text-gray-400 mt-4">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          )}

          {/* Back to Home Button (when not in success state) */}
          {!showSuccess && (
            <div className="text-center mt-12">
              <Link to="/">
                <Button 
                  variant="ghost"
                  className="text-gray-400 hover:text-white border border-gray-600 hover:border-gray-500 px-8 py-3"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/flowkey_icon.jpeg" 
                alt="FlowKey Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-white font-semibold text-xl">FlowKey</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;