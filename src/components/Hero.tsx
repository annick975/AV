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
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.svg"
          alt="AirVolt Technology Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 z-10"></div>
      
      <div className="text-center space-y-8 px-6 max-w-3xl mx-auto relative z-20">
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
          <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent tracking-tight">
            {title}
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transform transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
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
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-gray-600">Generation</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">Zero</div>
              <div className="text-sm text-gray-600">Emissions</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">Renewable</div>
              <div className="text-sm text-gray-600">Source</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30"
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
