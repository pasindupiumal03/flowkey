import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { mockData } from "../data/mock";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { faq } = mockData;

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-purple-400 text-sm font-semibold mb-4 tracking-wider uppercase">
            FAQ
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Need help? We've</span>
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              got answers.
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Your control center is in the extension bar
          </p>
          <p className="text-lg text-gray-400">
            No dashboards. No switching tabs.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div key={index} className="glass-effect rounded-lg border border-blue-800 hover:border-blue-600 transition-colors duration-300">
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white text-lg font-medium">{item.question}</span>
                {openFAQ === index ? (
                  <Minus className="w-5 h-5 text-blue-400 transition-all duration-300" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-400 transition-all duration-300" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-5">
                  <div className="pt-4 border-t border-blue-800">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;