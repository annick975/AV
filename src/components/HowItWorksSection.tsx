"use client";
import React, { useState, useEffect, useRef } from "react";

const StepCard = ({
  number,
  title,
  description,
  icon,
  delay = 0,
  isActive,
  onClick,
}: {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 cursor-pointer ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      onClick={onClick}
    >
      <div
        className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
          isActive
            ? "border-green-600 bg-gradient-to-br from-green-50 to-emerald-50"
            : "border-gray-200 hover:border-green-300"
        }`}
      >
        {/* Step Number Badge */}
        <div
          className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg ${
            isActive
              ? "bg-gradient-to-br from-green-600 to-green-700"
              : "bg-gradient-to-br from-gray-400 to-gray-500 group-hover:from-green-500 group-hover:to-green-600"
          } transition-all duration-500`}
        >
          {number}
        </div>

        <div className="relative p-8 pt-12">
          {/* Icon */}
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
              isActive
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600 group-hover:bg-green-100 group-hover:text-green-700"
            }`}
          >
            {icon}
          </div>

          {/* Content */}
          <h3
            className={`text-xl font-bold mb-4 transition-colors duration-500 ${
              isActive
                ? "text-green-800"
                : "text-gray-900 group-hover:text-green-800"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-gray-700 leading-relaxed ${
              isActive ? "text-green-700" : ""
            }`}
          >
            {description}
          </p>

          {/* Active Indicator */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 rounded-3xl transition-opacity duration-500 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

const AnimatedFlow = ({ activeStep }: { activeStep: number }) => {
  const steps = [
    { x: 20, y: 20, label: "H₂O Molecules" },
    { x: 180, y: 50, label: "Graphene Oxide" },
    { x: 340, y: 30, label: "Electron Flow" },
    { x: 500, y: 40, label: "Power Output" },
  ];

  return (
    <div className="relative w-full h-32 bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50 rounded-2xl overflow-hidden border border-gray-200">
      <svg className="absolute inset-0 w-full h-full">
        {/* Flow Lines */}
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        <path
          d="M 50 40 Q 150 20 250 45 Q 350 60 450 35 Q 500 30 520 40"
          stroke="url(#flowGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          className="animate-pulse"
        />
      </svg>

      {/* Animated Particles */}
      {steps.map((step, index) => (
        <div
          key={index}
          className={`absolute w-4 h-4 rounded-full transition-all duration-1000 ${
            activeStep >= index ? "bg-green-500 animate-pulse" : "bg-gray-300"
          }`}
          style={{
            left: `${step.x}px`,
            top: `${step.y}px`,
            transform: activeStep >= index ? "scale(1.2)" : "scale(1)",
          }}
        />
      ))}

      {/* Labels */}
      {steps.map((step, index) => (
        <div
          key={`label-${index}`}
          className={`absolute text-xs font-medium transition-all duration-500 ${
            activeStep >= index ? "text-green-700" : "text-gray-500"
          }`}
          style={{
            left: `${step.x - 20}px`,
            top: `${step.y + 25}px`,
          }}
        >
          {step.label}
        </div>
      ))}
    </div>
  );
};

const StepTimeline = ({
  steps,
  activeStep,
  setActiveStep,
}: {
  steps: any[];
  activeStep: number;
  setActiveStep: (i: number) => void;
}) => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
    {steps.map((step, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setActiveStep(idx)}
      >
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full border-4 ${
            activeStep === idx
              ? "border-green-600 bg-green-100"
              : "border-gray-200 bg-white"
          } transition-all duration-300 mb-2`}
        >
          {step.icon}
        </div>
        <div
          className={`text-sm font-semibold ${
            activeStep === idx ? "text-green-700" : "text-gray-700"
          }`}
        >
          {step.title}
        </div>
        {idx < steps.length - 1 && (
          <div className="hidden md:block w-24 h-1 bg-green-100 my-2" />
        )}
      </div>
    ))}
  </div>
);

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Humidity Collection",
      description:
        "Our advanced collection system captures water molecules from ambient air humidity using specialized hygroscopic materials that attract and concentrate moisture even in low-humidity environments.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Graphene Oxide Conversion",
      description:
        "Captured water molecules interact with our engineered graphene oxide layer, where molecular-level processes convert the chemical potential energy of water into electrical current through ion migration and electron transfer.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Microcontroller Integration",
      description:
        "An Arduino-based microcontroller system regulates and optimizes the electrical output, managing power distribution and enabling smart features like automated switching and energy storage management.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Power Distribution",
      description:
        "The generated electricity powers connected devices such as LED lights, sensors, or small electronics, with options for battery storage and grid integration for larger installations.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section
      id="how-it-works"
      className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-100 mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            <span className="text-green-700 font-medium">How It Works</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            From
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {" "}
              Humidity{" "}
            </span>
            to
            <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
              {" "}
              Electricity
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the innovative four-step process that transforms invisible
            water vapor into clean, usable electrical energy
          </p>
        </div>

        {/* Process Visualization */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Energy Conversion Process
            </h3>
            <AnimatedFlow activeStep={activeStep} />
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold text-green-700">
                  Step {activeStep + 1}:
                </span>{" "}
                {steps[activeStep].title}
              </p>
            </div>
          </div>
        </div>

        {/* Steps Timeline */}
        <StepTimeline
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 mb-2">
            {steps[activeStep].title}
          </h3>
          <p className="text-gray-700 text-lg">
            {steps[activeStep].description}
          </p>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg border border-green-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">
                Technical Innovation
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">
                      Graphene Oxide Matrix
                    </h4>
                    <p className="text-green-700">
                      Engineered 2D carbon structure with optimal surface area
                      for maximum water molecule interaction and electron
                      mobility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">
                      Smart Control System
                    </h4>
                    <p className="text-green-700">
                      Arduino-based microcontroller with real-time optimization
                      algorithms for maximum energy harvesting efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">
                      Eco-Friendly Design
                    </h4>
                    <p className="text-green-700">
                      100% sustainable materials with zero emissions and minimal
                      environmental impact throughout the lifecycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Performance Metrics
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-800">
                    Efficiency Rate
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                    </div>
                    <span className="text-green-700 font-semibold">82%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-800">
                    Response Time
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-blue-700 font-semibold"> 5s</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Durability</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-purple-700 font-semibold">
                      10+ years
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-800">Maintenance</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-1/5 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                    </div>
                    <span className="text-green-700 font-semibold">
                      Minimal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Learn More?</h3>
            <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
              Discover how AirVolt can revolutionize energy access in your
              community and contribute to a sustainable future.
            </p>
            <button className="bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
