import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import OpenSource from "./components/OpenSource";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-black text-white overflow-hidden relative">
              {/* Matrix background effect */}
              <div className="matrix-bg"></div>
              
              <Header />
              <Hero />
              <Features />
              <OpenSource />
              <FAQ />
              <Footer />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;