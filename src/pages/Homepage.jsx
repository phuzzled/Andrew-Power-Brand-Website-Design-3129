import React from 'react';
import HeroSection from '../components/HeroSection';
import WhatIDoSection from '../components/WhatIDoSection';
import FeaturedProjects from '../components/FeaturedProjects';
import InsightsSection from '../components/InsightsSection';
import NewsletterSection from '../components/NewsletterSection';
import ContactSection from '../components/ContactSection';

const Homepage = () => {
  return (
    <main className="pt-16">
      <HeroSection />
      <WhatIDoSection />
      <FeaturedProjects />
      <InsightsSection />
      <NewsletterSection />
      <ContactSection />
    </main>
  );
};

export default Homepage;