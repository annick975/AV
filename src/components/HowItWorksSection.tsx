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
      className={`cursor-pointer p-6 rounded-lg transition-all duration-300 ${
        isActive ? "bg-green-50 border border-green-200" : "hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isActive ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600"
          }`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span
              className={`text-sm font-medium ${
                isActive ? "text-green-600" : "text-gray-500"
              }`}
            >
              Step {number}
            </span>
          </div>
          <h3
            className={`text-lg font-semibold mb-2 ${
              isActive ? "text-green-900" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
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
        "Advanced materials collect water molecules from ambient air humidity, even in low-humidity environments.",
      icon: (
        <svg
          className="w-6 h-6"
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
      title: "Convert Energy",
      description:
        "Water molecules interact with graphene oxide layers, converting chemical potential energy into electrical current.",
      icon: (
        <svg
          className="w-6 h-6"
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
      title: "Smart Control",
      description:
        "Arduino-based microcontroller optimizes electrical output and manages power distribution efficiently.",
      icon: (
        <svg
          className="w-6 h-6"
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
      title: "Power Devices",
      description:
        "Generated electricity powers LED lights, sensors, and small electronics with battery storage options.",
      icon: (
        <svg
          className="w-6 h-6"
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
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps transform humidity into clean electricity
          </p>
        </div>

        {/* Process Steps */}
        <div
          className={`space-y-4 transform transition-all duration-700 delay-200 ${
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

        {/* Key Features */}
        <div
          className={`mt-16 transform transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="text-center py-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span>82% Efficiency</span>
              <span>•</span>
              <span>5 Second Response</span>
              <span>•</span>
              <span>10+ Year Lifespan</span>
              <span>•</span>
              <span>Minimal Maintenance</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-12 transform transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
            Learn More Details
          </button>
        </div>
      </div>
    </section>
  );
}

