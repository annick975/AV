"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-8 px-6 max-w-3xl mx-auto">
        {/* Logo/Icon */}
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="w-16 h-16 mx-auto mb-8 bg-green-600 rounded-lg flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
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
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight">
            {title}
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transform transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
              {cta.label}
            </button>
          </Link>
        </div>

        {/* Simple Statistics */}
        <div
          className={`transform transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>24/7 Generation</span>
            <span>•</span>
            <span>Zero Emissions</span>
            <span>•</span>
            <span>Renewable Source</span>
          </div>
        </div>
      </div>
    </section>
  );
}
