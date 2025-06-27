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
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
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
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent</h3>
        <p className="text-gray-600">
          Thank you for reaching out. We &apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-lg mx-auto">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
          value={form.subject}
          onChange={handleChange}
        >
          <option value="">Select a topic</option>
          <option value="partnership">Partnership Opportunities</option>
          <option value="investment">Investment Inquiry</option>
          <option value="collaboration">Research Collaboration</option>
          <option value="media">Media & Press</option>
          <option value="education">Educational Programs</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
        onClick={handleSubmit}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
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
      title: "Email",
      value: "airvolt.project@gmail.com",
      link: "mailto:airvolt.project@gmail.com",
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
      title: "Location",
      value: "Kigali, Rwanda",
      link: "#",
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
    },
  ];

  return (
    <div className="max-w-lg mx-auto">
      <div className="grid grid-cols-1 gap-6">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.link}
            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="text-green-600">{method.icon}</div>
            <div>
              <h3 className="font-medium text-gray-900">{method.title}</h3>
              <p className="text-gray-600">{method.value}</p>
            </div>
          </a>
        ))}
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
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to join the atmospheric energy revolution? We &apos;d love to hear
            from you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Send Message
            </h3>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Contact Info
            </h3>
            <ContactInfo />
          </div>
        </div>

        {/* Simple CTA */}
        <div
          className={`mt-16 text-center transform transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
        
        </div>
      </div>
    </section>
  );
}
