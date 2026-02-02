import React from "react";
import "./index.css";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import SupportedDevices from "./components/SupportedDevice";
import { Products } from "./components/Products";

const App = () => {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">AP</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ARF PART</span>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div id="hero">
          <Hero />
        </div>

        <div id="why-choose-us">
          <WhyChooseUs />
        </div>

        <HowItWorks />

        <div id="testimonials">
          <Testimonials />
        </div>

        <SupportedDevices />

        <div id="products">
          <Products />
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© {year} Loakin. Layanan jual beli HP bekas dan rusak terpercaya.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;