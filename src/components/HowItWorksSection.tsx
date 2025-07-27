"use client";
import React, { useState, useEffect } from "react";

const ProcessStep = ({
  number,
  title,
  description,
  icon,
  isActive,
  onClick,
}: {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`cursor-pointer p-8 rounded-xl transition-all duration-300 border-2 ${
        isActive 
          ? "bg-green-50 border-green-200 shadow-lg transform scale-105" 
          : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-md"
      }`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-6">
        <div
          className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 ${
            isActive 
              ? "bg-gradient-to-br from-green-600 to-green-700 text-white scale-110" 
              : "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600"
          }`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                isActive ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              Step {number}
            </span>
            {isActive && (
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            )}
          </div>
          <h3
            className={`text-xl font-bold mb-3 ${
              isActive ? "text-green-900" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      number: 1,
      title: "Capture Humidity",
      description:
        "Advanced graphene oxide materials collect water molecules from ambient air humidity, even in low-humidity environments. The specialized surface attracts moisture through van der Waals forces.",
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
            strokeWidth={2.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Convert Energy",
      description:
        "Water molecules interact with graphene oxide layers through ionic dissociation. The unique electronic properties of graphene oxide facilitate efficient energy conversion from chemical to electrical.",
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
            strokeWidth={2.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Smart Control",
      description:
        "Arduino-based microcontroller with advanced algorithms optimizes electrical output in real-time. Smart power management ensures stable voltage delivery and efficient energy storage.",
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
            strokeWidth={2.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Power Devices",
      description:
        "Generated clean electricity powers LED lights, sensors, mobile devices, and small electronics. Integrated battery storage provides continuous power even in low-humidity conditions.",
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
            strokeWidth={2.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-br from-white via-green-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four innovative steps transform atmospheric humidity into clean, renewable electricity
          </p>
        </div>

        {/* Process Steps */}
        <div
          className={`space-y-6 transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isActive={activeStep === index}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>

        {/* Performance Metrics */}
        <div
          className={`mt-16 transform transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Performance Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">82%</div>
                <div className="text-sm text-gray-600 font-medium">Efficiency</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">&lt;5s</div>
                <div className="text-sm text-gray-600 font-medium">Response</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-sm text-gray-600 font-medium">Years</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Operation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-12 transform transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Discover how AirVolt technology can bring sustainable energy solutions to your community
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Explore Technology Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

