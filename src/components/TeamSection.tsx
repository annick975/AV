"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  primarySkill: string;
  email?: string;
  avatarIndex: number;
}

const TeamMember = ({
  name,
  role,
  bio,
  primarySkill,
  email,
  avatarIndex,
}: TeamMemberProps) => {
  const avatarColors = [
    'from-green-500 to-green-600',
    'from-blue-500 to-blue-600', 
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-indigo-500 to-indigo-600'
  ];

  const skillIcons = [
    // Leadership
    <svg key="leadership" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    // Materials Science
    <svg key="materials" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>,
    // Electronics
    <svg key="electronics" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>,
    // Community Engagement
    <svg key="community" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Technical Writing
    <svg key="writing" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ];

  return (
    <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200">
      <div className="flex flex-col items-center text-center">
        {/* Enhanced Avatar */}
        <div className="relative mb-6">
          <div className={`w-24 h-24 bg-gradient-to-br ${avatarColors[avatarIndex]} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
            <span className="text-white font-bold text-2xl">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </span>
          </div>
          {/* Skill Icon Badge */}
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100">
            <div className="text-gray-600">
              {skillIcons[avatarIndex]}
            </div>
          </div>
        </div>

        {/* Member Info */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">{name}</h3>
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm text-white bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 rounded-full font-medium shadow-md">
              {primarySkill}
            </span>
          </div>
          <p className="text-green-600 font-semibold text-sm mb-3">{role}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{bio}</p>
          
          {/* Contact Button */}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center w-full bg-gray-50 hover:bg-green-50 text-green-600 hover:text-green-700 px-4 py-3 rounded-xl transition-all duration-200 font-medium border border-gray-200 hover:border-green-200 group-hover:shadow-md"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "NIYUBAHWE U. Annick",
    role: "Project Lead & Founder",
    bio: "Visionary leader driving AirVolt's mission to revolutionize clean energy access for underserved communities.",
    primarySkill: "Leadership",
    avatarIndex: 0,
  },
  {
    name: "NIBEZA A. Nicole",
    role: "Research & Development",
    bio: "Passionate researcher focused on advancing graphene oxide technology and sustainable energy solutions.",
    primarySkill: "Materials Science",
    avatarIndex: 1,
  },
  {
    name: "MUHUMURE B. Christian",
    role: "Hardware Engineering",
    bio: "Technical specialist in Arduino development and prototype engineering for energy harvesting systems.",
    primarySkill: "Electronics",
    avatarIndex: 2,
  },
  {
    name: "ABAYO H. Jovin",
    role: "Community Outreach",
    bio: "Dedicated to connecting AirVolt with educational institutions and rural communities worldwide.",
    primarySkill: "Community Engagement",
    avatarIndex: 3,
  },
  {
    name: "RUTAGANIRA N. Yanis",
    role: "Documentation & Analysis",
    bio: "Ensures comprehensive documentation and supports data collection across all project phases.",
    primarySkill: "Technical Writing",
    avatarIndex: 4,
  },
];

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="team" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Young innovators from Rwanda dedicated to solving global energy challenges through
            groundbreaking atmospheric technology
          </p>
          
          {/* Team Photo Section */}
          <div className="mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Young African innovators working together on technology"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Innovation from Rwanda</h3>
                <p className="text-lg opacity-90">Empowering the next generation of clean energy leaders</p>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-blue-600 mb-2">17</div>
              <div className="text-gray-600 font-medium">Average Age</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-purple-600 mb-2">🇷🇼</div>
              <div className="text-gray-600 font-medium">Based in Kigali</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-orange-600 mb-2">2024</div>
              <div className="text-gray-600 font-medium">Founded</div>
            </div>
          </div>
        </div>

        {/* Enhanced Team Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`transform transition-all duration-500`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <TeamMember {...member} />
            </div>
          ))}
        </div>

        {/* Enhanced Team Values & Mission */}
        <div
          className={`transform transition-all duration-700 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-green-50 via-white to-blue-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                🌍 Our Mission & Values
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We believe in the power of youth innovation to solve global challenges. Our team combines
                technical expertise with deep understanding of rural energy needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/80 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pushing boundaries in atmospheric energy harvesting technology
                </p>
              </div>
              
              <div className="text-center p-6 bg-white/80 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Community</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Empowering rural communities with sustainable energy solutions
                </p>
              </div>
              
              <div className="text-center p-6 bg-white/80 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Creating environmentally responsible energy generation methods
                </p>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl">
                <h4 className="text-2xl font-bold mb-3">Join Our Mission</h4>
                <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                  Interested in collaborating with us or learning more about our work? 
                  We&apos;re always open to partnerships and educational opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#contact" className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200">
                    Get In Touch
                  </a>
                  <a href="#about" className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
