"use client";
import React from "react";

export default function AboutSection() {
  const impactStats = [
    { number: "2.5M", label: "People without electricity in Rwanda" },
    { number: "60%", label: "Renewable energy potential" },
    { number: "70%", label: "Youth population ready for innovation" },
  ];

  const techSpecs = [
    { label: "Power Output", value: "0.5-2.0V DC" },
    { label: "Optimal Humidity", value: "60-80% RH" },
    { label: "Operating Temp", value: "15-35°C" },
    { label: "Lifespan", value: "10+ years" },
  ];

  const visionPoints = [
    "Empower Youth Innovation",
    "Scale Clean Energy Solutions",
    "Educational Outreach",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About AirVolt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming atmospheric humidity into clean, sustainable
            electricity through cutting-edge graphene oxide technology
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          {impactStats.map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What is AirVolt?
              </h3>
              <p className="text-gray-700 mb-4">
                AirVolt represents a breakthrough in sustainable energy
                technology, harnessing the abundant moisture in our atmosphere
                to generate clean electricity.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <h4 className="font-semibold text-green-800 mb-2">
                  Key Innovation
                </h4>
                <p className="text-gray-700 text-sm">
                  Our patented graphene oxide technology captures water
                  molecules from ambient air humidity and converts them directly
                  into electrical energy.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h3>
              <div className="space-y-3">
                {techSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-b border-gray-200"
                  >
                    <span className="text-gray-700">{spec.label}</span>
                    <span className="font-medium text-green-600">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why It Matters
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">
                    Energy Crisis in Rwanda
                  </h4>
                  <p className="text-red-700 text-sm">
                    Over 2.5 million Rwandans lack access to reliable
                    electricity, limiting economic opportunities and quality of
                    life in rural communities.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Youth-Led Climate Action
                  </h4>
                  <p className="text-blue-700 text-sm">
                    Empowering young innovators to develop sustainable solutions
                    that address both local energy needs and global climate
                    challenges.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <div className="space-y-3">
                {visionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-green-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
