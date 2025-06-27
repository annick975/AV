"use client";
import React, { useState, useEffect, useRef } from "react";

const ProjectSection = ({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay: number;
}) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
      <span className="w-2 h-8 bg-gradient-to-b from-green-600 to-green-800 rounded-full mr-4" />
      {title}
    </h3>
    <div>{children}</div>
  </div>
);

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const impactStats = [
    {
      number: "2.5M",
      label: "People without electricity in Rwanda",
      icon: "⚡",
    },
    { number: "60%", label: "Renewable energy potential", icon: "🌱" },
    {
      number: "70%",
      label: "Youth population ready for innovation",
      icon: "👥",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-gray-50 to-green-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-100 mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            <span className="text-green-700 font-medium">About AirVolt</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Revolutionizing
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              {" "}
              Energy{" "}
            </span>
            Generation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming atmospheric humidity into clean, sustainable
            electricity through cutting-edge graphene oxide technology
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center px-6">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-green-700 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-center text-sm mb-1">
                {stat.label}
              </div>
              {index < impactStats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-green-100 mx-6" />
              )}
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - What is AirVolt */}
          <div className="space-y-8">
            <ProjectSection title="What is AirVolt?" delay={0}>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  AirVolt represents a breakthrough in sustainable energy
                  technology, harnessing the abundant moisture in our atmosphere
                  to generate clean electricity. Our innovative system combines
                  advanced graphene oxide materials with Arduino-powered
                  microcontrollers to create a reliable, eco-friendly power
                  source.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
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
                    Key Innovation
                  </h4>
                  <p className="text-gray-700">
                    Our patented graphene oxide technology captures water
                    molecules from ambient air humidity and converts them
                    directly into electrical energy through a process of
                    molecular interaction and electron transfer.
                  </p>
                </div>
              </div>
            </ProjectSection>

            <ProjectSection title="Technical Specifications" delay={200}>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-800">
                    Power Output
                  </span>
                  <span className="text-green-700 font-semibold">
                    0.5-2.0V DC
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-800">
                    Optimal Humidity
                  </span>
                  <span className="text-green-700 font-semibold">
                    60-80% RH
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-800">
                    Operating Temp
                  </span>
                  <span className="text-green-700 font-semibold">15-35°C</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-gray-800">Lifespan</span>
                  <span className="text-green-700 font-semibold">
                    10+ years
                  </span>
                </div>
              </div>
            </ProjectSection>
          </div>

          {/* Right Column - Why It Matters & Vision */}
          <div className="space-y-8">
            <ProjectSection title="Why It Matters" delay={400}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">
                      Energy Crisis in Rwanda
                    </h4>
                    <p className="text-red-700">
                      Over 2.5 million Rwandans lack access to reliable
                      electricity, limiting economic opportunities and quality
                      of life in rural communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Youth-Led Climate Action
                    </h4>
                    <p className="text-blue-700">
                      Empowering young innovators to develop sustainable
                      solutions that address both local energy needs and global
                      climate challenges.
                    </p>
                  </div>
                </div>
              </div>
            </ProjectSection>

            <ProjectSection title="Our Vision" delay={600}>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors duration-300">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
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
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">
                      Empower Youth Innovation
                    </h4>
                    <p className="text-green-700 text-sm">
                      Foster the next generation of clean energy pioneers
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors duration-300">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">
                      Scale Clean Energy Solutions
                    </h4>
                    <p className="text-green-700 text-sm">
                      Deploy humidity-powered systems across underserved
                      communities
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors duration-300">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">
                      Educational Outreach
                    </h4>
                    <p className="text-green-700 text-sm">
                      Inspire students through hands-on STEM learning
                      experiences
                    </p>
                  </div>
                </div>
              </div>
            </ProjectSection>
          </div>
        </div>
      </div>
    </section>
  );
}
