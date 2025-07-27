import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ProjectSection from "../components/ProjectSection";
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
          
          cta={{ label: "Learn More", href: "#about" }}
        />
      </section>
      <AboutSection />
      <HowItWorksSection />
      <ProjectSection />
      <TeamSection />
      
      <ContactSection />
    </main>
  );
}
