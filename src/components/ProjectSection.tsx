"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ProjectSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    {
      phase: "Research & Development",
      status: "Completed",
      progress: 100,
      description: "Core technology validated with 82% efficiency rate",
      color: "green"
    },
    {
      phase: "Prototype Testing", 
      status: "In Progress",
      progress: 75,
      description: "Field testing across multiple environments",
      color: "blue"
    },
    {
      phase: "Community Deployment",
      status: "Planning",
      progress: 25,
      description: "Preparing for rural Rwanda installations",
      color: "yellow"
    },
    {
      phase: "Scale Production",
      status: "Future",
      progress: 10,
      description: "Mass production for widespread adoption",
      color: "gray"
    }
  ];

  const applications = [
    {
      title: "LED Lighting Systems",
      description: "Powers efficient LED lights for homes and community spaces",
      power: "5W continuous",
      duration: "8+ hours",
      icon: "💡"
    },
    {
      title: "Mobile Device Charging",
      description: "Emergency power for phones and small electronics",
      power: "2-5W output",
      duration: "Device dependent",
      icon: "📱"
    },
    {
      title: "IoT Sensor Networks",
      description: "Continuous power for environmental monitoring",
      power: "0.5-1W",
      duration: "24/7 operation",
      icon: "🌐"
    },
    {
      title: "Medical Devices",
      description: "Reliable power for critical health monitoring equipment",
      power: "1-3W",
      duration: "Continuous",
      icon: "🏥"
    }
  ];

  return (
    <section id="project" className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Project Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to community deployment - see how AirVolt technology is progressing
            toward real-world impact
          </p>
        </div>

        {/* Project Showcase Image */}
        <div
          className={`mb-16 transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/project-showcase.svg"
              alt="AirVolt project development showcase showing prototypes and applications"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Development Timeline */}
        <div
          className={`mb-16 transform transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Development Timeline
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    milestone.color === 'green' ? 'bg-green-100 text-green-800' :
                    milestone.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    milestone.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {milestone.status}
                  </span>
                  <span className="text-2xl font-bold text-gray-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {milestone.phase}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {milestone.description}
                </p>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      milestone.color === 'green' ? 'bg-green-500' :
                      milestone.color === 'blue' ? 'bg-blue-500' :
                      milestone.color === 'yellow' ? 'bg-yellow-500' :
                      'bg-gray-400'
                    }`}
                    style={{ width: `${milestone.progress}%` }}
                  ></div>
                </div>
                
                <div className="text-right mt-2">
                  <span className="text-sm font-semibold text-gray-700">
                    {milestone.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Grid */}
        <div
          className={`mb-16 transform transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Real-World Applications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{app.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {app.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {app.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                        <div className="text-sm font-semibold text-green-800">Power Output</div>
                        <div className="text-lg font-bold text-green-600">{app.power}</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <div className="text-sm font-semibold text-blue-800">Duration</div>
                        <div className="text-lg font-bold text-blue-600">{app.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Projections */}
        <div
          className={`text-center transform transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-6">Projected Impact by 2025</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1,000+</div>
                <div className="text-green-100">Households Powered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="text-green-100">Lives Improved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-green-100">Communities Served</div>
              </div>
            </div>
            
            <p className="text-green-100 text-lg max-w-3xl mx-auto leading-relaxed">
              Our goal is to bring sustainable, reliable energy access to rural communities
              across Rwanda and beyond, creating opportunities for education, healthcare, and economic development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
