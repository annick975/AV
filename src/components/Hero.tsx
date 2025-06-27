"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  cta?: { label: string; href: string };
}

export default function Hero({
  title = "AirVolt",
  subtitle = "Turning humidity into electricity to power rural communities.",
  backgroundImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80",
  cta = { label: "Learn More", href: "#about" },
}: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Nature, clean energy, clouds"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-green-100/60" />
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-300 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-200 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 px-6 max-w-4xl mx-auto">
        {/* Logo/Icon */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${
              mousePosition.y * 0.1
            }px)`,
          }}
        >
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-blue-300 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20">
              <svg
                className="w-12 h-12 text-white"
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
            <div className="absolute -inset-4 bg-gradient-to-r from-green-300 to-blue-200 rounded-3xl opacity-20 blur-xl animate-pulse" />
          </div>
        </div>

        {/* Main Title */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-green-700 via-blue-600 to-green-400 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight">
            {title}
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-xl sm:text-2xl text-green-900 max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-4 flex items-center justify-center space-x-4 text-green-700">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              <span className="text-sm font-medium">Sustainable</span>
            </div>
            <div className="w-1 h-1 bg-blue-300 rounded-full" />
            <div className="flex items-center space-x-2">
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              />
              <span className="text-sm font-medium">Innovative</span>
            </div>
            <div className="w-1 h-1 bg-green-300 rounded-full" />
            <div className="flex items-center space-x-2">
              <div
                className="w-2 h-2 bg-green-300 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              />
              <span className="text-sm font-medium">Accessible</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link href={cta.href}>
            <div className="group relative inline-flex items-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <button className="relative inline-flex items-center space-x-3 bg-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl backdrop-blur-sm border border-white/20">
                <span>{cta.label}</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </Link>
        </div>

        {/* Statistics */}
        <div
          className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mt-16 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <span className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-base">
              24/7{" "}
              <span className="ml-2 text-xs font-normal">
                Continuous Generation
              </span>
            </span>
            <span className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-base">
              Zero{" "}
              <span className="ml-2 text-xs font-normal">Carbon Emissions</span>
            </span>
            <span className="inline-flex items-center bg-green-50 text-green-600 px-4 py-2 rounded-full font-semibold text-base">
              ∞{" "}
              <span className="ml-2 text-xs font-normal">Renewable Source</span>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
