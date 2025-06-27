import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home">
        <Hero
          title="AirVolt"
          subtitle="Turning humidity into electricity to power rural communities."
          backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          cta={{ label: "Learn More", href: "#about" }}
        />
      </section>
      <AboutSection />
      <HowItWorksSection />
      <TeamSection />
      
      <ContactSection />
    </main>
  );
}
