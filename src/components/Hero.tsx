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
      {/* Main Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Atmospheric energy and lightning in nature"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Gradient overlay for brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-transparent to-blue-900/30 z-15"></div>
      
      <div className="text-center space-y-8 px-6 max-w-4xl mx-auto relative z-20">
      
        {/* Logo/Icon */}
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-xl">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        {/* Main Title */}
        <div
          className={`transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-green-400 via-green-300 to-green-200 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
            {title}
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transform transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
            {subtitle}
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`transform transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link href={cta.href}>
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              {cta.label}
            </button>
          </Link>
        </div>

        {/* Enhanced Statistics */}
        <div
          className={`transform transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20">
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-gray-700">Generation</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20">
              <div className="text-2xl font-bold text-green-600">Zero</div>
              <div className="text-sm text-gray-700">Emissions</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20">
              <div className="text-2xl font-bold text-green-600">Renewable</div>
              <div className="text-sm text-gray-700">Source</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-300 rounded-full opacity-60 shadow-lg"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <style jsx>{`
              div {
                animation: float 4s ease-in-out infinite;
              }
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
}
