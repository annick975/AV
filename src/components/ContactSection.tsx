"use client";
import React, { useState, useEffect, useRef } from "react";

interface ContactFormProps {
  onSubmit?: (data: {
    name: string;
    email: string;
    message: string;
    subject: string;
  }) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      if (onSubmit) onSubmit(form);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: "", email: "", message: "", subject: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  }

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Message Sent!
        </h3>
        <p className="text-green-700">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-green-200 transition-all duration-500">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label
            htmlFor="name"
            className={`absolute left-3 transition-all duration-300 pointer-events-none ${
              focusedField === "name" || form.name
                ? "text-xs text-green-600 -top-2 bg-white px-2"
                : "text-gray-500 top-3"
            }`}
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full pt-4 pb-2 px-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-white/50"
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
          />
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className={`absolute left-3 transition-all duration-300 pointer-events-none ${
              focusedField === "email" || form.email
                ? "text-xs text-green-600 -top-2 bg-white px-2"
                : "text-gray-500 top-3"
            }`}
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full pt-4 pb-2 px-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-white/50"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
          />
        </div>
      </div>

      {/* Subject */}
      <div className="relative">
        <label
          htmlFor="subject"
          className={`absolute left-3 transition-all duration-300 pointer-events-none ${
            focusedField === "subject" || form.subject
              ? "text-xs text-green-600 -top-2 bg-white px-2"
              : "text-gray-500 top-3"
          }`}
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full pt-4 pb-2 px-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-white/50 appearance-none"
          value={form.subject}
          onChange={handleChange}
          onFocus={() => setFocusedField("subject")}
          onBlur={() => setFocusedField(null)}
        >
          <option value="">Select a topic</option>
          <option value="partnership">Partnership Opportunities</option>
          <option value="investment">Investment Inquiry</option>
          <option value="collaboration">Research Collaboration</option>
          <option value="media">Media & Press</option>
          <option value="education">Educational Programs</option>
          <option value="general">General Inquiry</option>
        </select>
        <div className="absolute right-3 top-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <label
          htmlFor="message"
          className={`absolute left-3 transition-all duration-300 pointer-events-none ${
            focusedField === "message" || form.message
              ? "text-xs text-green-600 -top-2 bg-white px-2"
              : "text-gray-500 top-3"
          }`}
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full pt-4 pb-2 px-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-white/50 resize-none"
          value={form.message}
          onChange={handleChange}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 flex items-center justify-center transition-all duration-300"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                className="opacity-25"
              />
              <path
                fill="currentColor"
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending Message...
          </span>
        ) : (
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
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            Send Message
          </span>
        )}
      </button>
    </div>
  );
};

const ContactInfo = () => {
  const contactMethods = [
    {
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
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      value: "airvolt.project@gmail.com",
      link: "mailto:airvolt.project@gmail.com",
      description: "Get in touch for partnerships and inquiries",
    },
    {
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Visit Us",
      value: "Kigali, Rwanda",
      link: "#",
      description: "Innovation hub in the heart of East Africa",
    },
    {
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Response Time",
      value: "24 Hours",
      link: "#",
      description: "We typically respond within one business day",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      url: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      color: "hover:bg-blue-400",
    },
    {
      name: "Instagram",
      url: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.link}
            className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-green-200 hover:-translate-y-2"
          >
            <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              {method.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
            <p className="text-green-700 font-medium mb-2">{method.value}</p>
            <p className="text-gray-600 text-sm">{method.description}</p>
          </a>
        ))}
      </div>

      {/* Social Links */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Follow Our Journey
        </h3>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className={`w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg ${social.color}`}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-gray-50 to-green-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-100 mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            <span className="text-green-700 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Let's
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              {" "}
              Collaborate{" "}
            </span>
            on Clean Energy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to join the atmospheric energy revolution? We'd love to hear
            from you. Whether you're interested in partnerships, investments, or
            just want to learn more about AirVolt.
          </p>
        </div>
        {/* Main Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h3>
            <div className="bg-green-50/60 rounded-xl p-0 border-b-2 border-green-100">
              <ContactForm />
            </div>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Connect with us
            </h3>
            <div className="bg-green-50/60 rounded-xl p-0 border-b-2 border-green-100">
              <ContactInfo />
            </div>
          </div>
        </div>
        {/* Call to Action Banner */}
        <div
          className={`mt-20 transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 shadow-xl text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Power the Future?
            </h3>
            <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
              Join us in revolutionizing clean energy access across Africa and
              beyond. Every partnership brings us closer to a sustainable energy
              future.
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Download Whitepaper
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Schedule Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
