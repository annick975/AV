"use client";
import React, { useState, useEffect } from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  primarySkill: string;
  email?: string;
}

const TeamMember = ({
  name,
  role,
  bio,
  primarySkill,
  email,
}: TeamMemberProps) => (
  <div className="py-8 border-b border-gray-200 last:border-b-0">
    <div className="flex items-start space-x-6">
      {/* Avatar */}
      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-white font-medium text-sm">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className="text-sm text-green-600 font-medium">
            {primarySkill}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{role}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">{bio}</p>
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-green-600 hover:text-green-700 text-sm transition-colors duration-200"
          >
            {email}
          </a>
        )}
      </div>
    </div>
  </div>
);

const teamMembers = [
  {
    name: "NIYUBAHWE U. Annick",
    role: "Project Lead & Founder",
    bio: "Visionary leader driving AirVolt's mission to revolutionize clean energy access for underserved communities.",
    primarySkill: "Leadership",

  },
  {
    name: "NIBEZA A. Nicole",
    role: "Research & Development",
    bio: "Passionate researcher focused on advancing graphene oxide technology and sustainable energy solutions.",
    primarySkill: "Materials Science",
   
  },
  {
    name: "MUHUMURE B. Christian",
    role: "Hardware Engineering",
    bio: "Technical specialist in Arduino development and prototype engineering for energy harvesting systems.",
    primarySkill: "Electronics",
    
  },
  {
    name: "ABAYO H. Jovin",
    role: "Community Outreach",
    bio: "Dedicated to connecting AirVolt with educational institutions and rural communities worldwide.",
    primarySkill: "Community Engagement",

  },
  {
    name: "RUTAGANIRA N. Yanis",
    role: "Documentation & Analysis",
    bio: "Ensures comprehensive documentation and supports data collection across all project phases.",
    primarySkill: "Technical Writing",
  
  },
];

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="team" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600">
            Young innovators dedicated to solving energy challenges through
            atmospheric innovation
          </p>
        </div>

        {/* Team List */}
        <div
          className={`transform transition-all duration-700 delay-200 ${
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
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>5 Team Members</span>
            <span>•</span>
            <span>Average Age: 17</span>
            <span>•</span>
            <span>Based in Kigali, Rwanda</span>
          </div>
        </div>
      </div>
    </section>
  );
}
