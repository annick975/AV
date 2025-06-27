"use client";
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/team", label: "Team" },

  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur border-b border-green-100 fixed top-0 left-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-green-700 font-extrabold text-2xl tracking-tight"
        >
          AirVolt
        </Link>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-green-800 font-medium hover:text-green-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden flex items-center text-green-700 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-green-100 px-4 pb-4 pt-2 flex flex-col gap-2 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-green-800 font-medium py-2 px-2 rounded hover:bg-green-50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
