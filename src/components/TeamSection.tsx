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
    'from-yellow-500 to-yellow-600',
    'from-red-500 to-red-600'
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start space-x-6">
        {/* Professional Avatar */}
        <div className="flex-shrink-0">
          <div className={`w-16 h-16 bg-gradient-to-br ${avatarColors[avatarIndex]} rounded-xl flex items-center justify-center shadow-lg`}>
            <span className="text-white font-bold text-lg">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <span className="text-sm text-white bg-gradient-to-r from-green-500 to-green-600 px-3 py-1 rounded-full font-medium mt-2 sm:mt-0">
              {primarySkill}
            </span>
          </div>
          <p className="text-green-600 font-semibold text-sm mb-2">{role}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center text-green-600 hover:text-green-700 text-sm transition-colors duration-200 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {email}
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
    <section id="team" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Young innovators dedicated to solving energy challenges through
            atmospheric innovation
          </p>
          
          {/* Team Avatar Strip */}
          <div className="mt-8 mb-8">
            <div className="relative w-full max-w-2xl mx-auto">
              <Image
                src="/images/team-avatars.svg"
                alt="AirVolt Team Member Avatars"
                width={500}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`transform transition-all duration-500`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <TeamMember {...member} />
            </div>
          ))}
        </div>

        {/* Team Summary */}
        <div
          className={`text-center mt-16 pt-8 border-t border-gray-200 transform transition-all duration-700 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">17</div>
              <div className="text-gray-600 font-medium">Average Age</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">Kigali</div>
              <div className="text-gray-600 font-medium">Based in Rwanda</div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              🌍 Global Impact, Local Innovation
            </h3>
            <p className="text-green-700 text-sm leading-relaxed">
              Our diverse team combines technical expertise with deep understanding of rural energy challenges,
              positioning AirVolt to create sustainable solutions that work for real communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
