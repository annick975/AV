"use client";
import React, { useState, useEffect, useRef } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
  delay?: number;
  expertise?: string[];
  linkedin?: string;
  email?: string;
}

const TeamMemberRow = ({
  name,
  role,
  bio,
  imageSrc,
  expertise = [],
  linkedin,
  email,
}: TeamCardProps) => (
  <div className="flex flex-col sm:flex-row items-center gap-6 py-8 border-b border-green-100 last:border-b-0">
    <div className="flex-shrink-0">
      <div className="w-24 h-24 rounded-full overflow-hidden bg-green-100 flex items-center justify-center">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-2xl text-green-700 font-bold">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
        )}
      </div>
    </div>
    <div className="flex-1 text-center sm:text-left">
      <h3 className="text-lg font-bold text-green-800 mb-1">{name}</h3>
      <div className="text-green-600 text-sm mb-2">{role}</div>
      <p className="text-gray-700 text-sm mb-2">{bio}</p>
      {expertise.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-2">
          {expertise.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-2 justify-center sm:justify-start mt-2">
        {linkedin && (
          <a
            href={linkedin}
            className="text-blue-600 hover:underline"
            title="LinkedIn"
          >
            LinkedIn
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-green-700 hover:underline"
            title="Email"
          >
            Email
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
    bio: "Visionary leader driving AirVolt's mission to revolutionize clean energy access. Coordinates cross-functional teams and strategic partnerships to bring atmospheric energy harvesting to underserved communities.",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    expertise: [
      "Leadership",
      "Project Management",
      "Clean Energy",
      "Innovation",
    ],
    linkedin: "#",
    email: "annick@airvolt.rw",
  },
  {
    name: "NIBEZA A. Nicole",
    role: "Research & Development",
    bio: "Passionate researcher focused on advancing graphene oxide technology and sustainable energy solutions. Leads experimental design and data analysis for humidity-to-electricity conversion systems.",
    imageSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    expertise: [
      "Materials Science",
      "Research",
      "Sustainability",
      "Data Analysis",
    ],
    linkedin: "#",
    email: "nicole@airvolt.rw",
  },
  {
    name: "MUHUMURE B. Christian",
    role: "Hardware Engineering",
    bio: "Technical specialist in Arduino development and prototype engineering. Designs and builds the electronic systems that power AirVolt's innovative energy harvesting technology.",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    expertise: ["Arduino", "Electronics", "Prototyping", "IoT Systems"],
    linkedin: "#",
    email: "christian@airvolt.rw",
  },
  {
    name: "ABAYO H. Jovin",
    role: "Community Outreach",
    bio: "Dedicated to connecting AirVolt with educational institutions and rural communities. Develops engagement programs that inspire young innovators and demonstrate clean energy solutions.",
    imageSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    expertise: [
      "Community Engagement",
      "Education",
      "Public Speaking",
      "Partnerships",
    ],
    linkedin: "#",
    email: "jovin@airvolt.rw",
  },
  {
    name: "RUTAGANIRA N. Yanis",
    role: "Documentation & Analysis",
    bio: "Ensures comprehensive documentation of research findings and technical specifications. Supports data collection, analysis, and knowledge management across all project phases.",
    imageSrc:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    expertise: [
      "Technical Writing",
      "Data Analysis",
      "Research",
      "Documentation",
    ],
    linkedin: "#",
    email: "yanis@airvolt.rw",
  },
];

export default function TeamSection() {
  const [currentStat, setCurrentStat] = useState(0);

  const teamStats = [
    { label: "Average Age", value: "19", suffix: "years" },
    { label: "Combined Experience", value: "25+", suffix: "projects" },
    { label: "STEM Fields", value: "5", suffix: "disciplines" },
    { label: "Innovation Awards", value: "3", suffix: "recognitions" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % teamStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="team"
      className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-gray-50 to-green-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-100 mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            <span className="text-green-700 font-medium">Our Team</span>
          </div>

          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Meet the
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              {" "}
              Innovators{" "}
            </span>
            Behind AirVolt
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            A passionate team of young engineers and researchers dedicated to
            solving energy challenges through atmospheric innovation
          </p>

          {/* Team Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {teamStats.map((stat, index) => (
              <div
                key={index}
                className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 border-2 ${
                  currentStat === index
                    ? "border-green-400 shadow-lg scale-105"
                    : "border-gray-200 hover:border-green-300"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl transition-opacity duration-500 ${
                    currentStat === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="bg-white/60 rounded-3xl p-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberRow key={member.name} {...member} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our
              vision of sustainable energy innovation. Connect with us to
              explore collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg">
                <span className="flex items-center justify-center">
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Us
                </span>
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
