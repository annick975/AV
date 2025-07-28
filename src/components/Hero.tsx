"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
}

export default function Hero({
  title = "AirVolt",
  subtitle = "Turning humidity into electricity to power rural communities.",
  cta = { label: "Learn More", href: "#about" },
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Clean energy technology - solar panels and wind turbines in a green field"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-blue-900/60 to-green-800/80"></div>
      </div>
      
      {/* Animated SVG Background Overlay */}
      <div className="absolute inset-0 z-10 opacity-30">
        <Image
          src="/images/hero-bg.svg"
          alt="AirVolt Technology Animation"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Background Particles */}
      <div className="absolute inset-0 z-15">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <style jsx>{`
              div {
                animation: twinkle 3s ease-in-out infinite;
              }
              @keyframes twinkle {
                0%, 100% { opacity: 0.2; transform: scale(1); }
                50% { opacity: 0.8; transform: scale(1.2); }
              }
            `}</style>
          </div>
        ))}
      </div>
      
      <div className="text-center space-y-8 px-6 max-w-4xl mx-auto relative z-20">
        {/* Logo/Icon with enhanced design */}
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-sm">
            <svg
              className="w-12 h-12 text-white drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        {/* Main Title with enhanced styling */}
        <div
          className={`transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-green-300 via-green-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
              {title}
            </span>
          </h1>
          <div className="mt-4 h-1 w-32 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Subtitle with better contrast */}
        <div
          className={`transform transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            {subtitle}
          </p>
        </div>

        {/* Enhanced CTA Button */}
        <div
          className={`transform transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link href={cta.href}>
            <button className="group relative bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-green-600 hover:via-green-700 hover:to-green-800 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 border-2 border-white/20 backdrop-blur-sm">
              <span className="relative z-10">{cta.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
            </button>
          </Link>
        </div>

        {/* Enhanced Statistics with glassmorphism */}
        <div
          className={`transform transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-3xl font-bold text-green-300 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-white/90 font-medium">Continuous Generation</div>
              <div className="text-green-200/70 text-sm mt-1">Even at night</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-3xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">Zero</div>
              <div className="text-white/90 font-medium">Carbon Emissions</div>
              <div className="text-blue-200/70 text-sm mt-1">100% clean energy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-3xl font-bold text-purple-300 mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
              <div className="text-white/90 font-medium">Renewable Source</div>
              <div className="text-purple-200/70 text-sm mt-1">Atmospheric humidity</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`transform transition-all duration-700 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mt-16 flex flex-col items-center text-white/60">
            <span className="text-sm font-medium mb-3">Discover More</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy flow visualization */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="energyFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
              <stop offset="50%" stopColor="rgba(34, 197, 94, 0.6)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
            </linearGradient>
          </defs>
          
          {[...Array(5)].map((_, i) => (
            <path
              key={i}
              d={`M${200 + i * 200},${400 + i * 50} Q${400 + i * 150},${300 + i * 30} ${600 + i * 100},${400 + i * 20}`}
              stroke="url(#energyFlow)"
              strokeWidth="3"
              fill="none"
              opacity="0.4"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,100;50,50;100,0;0,100"
                dur={`${4 + i}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}
        </svg>
      </div>
    </section>
  );
}
