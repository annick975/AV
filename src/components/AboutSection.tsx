"use client";
import React from "react";
import Image from "next/image";

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
      <div className="max-w-6xl mx-auto">
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

        {/* Community Impact Section */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Real Community Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Rural African community with solar panels and clean energy"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Empowering Communities</h3>
              <p className="text-lg opacity-90">Bringing clean energy to rural Rwanda</p>
            </div>
          </div>
          
          
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          {impactStats.map((stat, index) => (
            <div key={index} className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-green-600 mb-3">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What is AirVolt?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                AirVolt represents a breakthrough in sustainable energy
                technology, harnessing the abundant moisture in our atmosphere
                to generate clean electricity.
              </p>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 008.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 008.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21-.899-.455-1.79-.755-2.676a.75.75 0 00-.373-.84zm9 0a.75.75 0 00-.373.84c-.3.886-.545 1.777-.755 2.676.508-.29 1.026-.564 1.554-.82a.75.75 0 00.419-.74 41.029 41.029 0 00-.39-3.114A29.848 29.848 0 0015 11.459z" clipRule="evenodd" />
                  </svg>
                  Key Innovation
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our patented graphene oxide technology captures water
                  molecules from ambient air humidity and converts them directly
                  into electrical energy.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h3>
              <div className="space-y-4">
                {techSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-gray-700 font-medium">{spec.label}</span>
                    <span className="font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-lg">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why It Matters
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-red-50 rounded-xl border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Energy Crisis in Rwanda
                  </h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Over 2.5 million Rwandans lack access to reliable
                    electricity, limiting economic opportunities and quality of
                    life in rural communities.
                  </p>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Youth-Led Climate Action
                  </h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Empowering young innovators to develop sustainable solutions
                    that address both local energy needs and global climate
                    challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Vision
              </h3>
              <div className="space-y-4">
                {visionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors duration-200"
                  >
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Technology Overview */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Technology Deep Dive
            </h3>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Explore the science behind our revolutionary atmospheric energy harvesting system
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Technology Image */}
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Advanced technology and molecular structure visualization"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
            </div>
            
            {/* Technical Specifications Visualization */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Core Components</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>Graphene Oxide Membrane:</strong> Ultra-thin conductive layer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>Humidity Sensors:</strong> Real-time moisture detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>Energy Converter:</strong> DC power optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>Storage System:</strong> Battery integration ready</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-xs text-gray-600">Efficiency Rate</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-600">Operation</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">2.0V</div>
                    <div className="text-xs text-gray-600">Max Output</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">10+</div>
                    <div className="text-xs text-gray-600">Years Life</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
}
