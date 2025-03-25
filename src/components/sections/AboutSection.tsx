
import React from 'react';
import { AboutCard } from './AboutCard';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-paper">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">About The Archive</h2>
          <p className="text-ink-light mb-8">
            The Lost Words Archive is dedicated to preserving the memory of books that have been lost, 
            censored, or forgotten throughout history. Our mission is to document these works, 
            understand their significance, and explore the circumstances of their disappearance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
            <AboutCard 
              title="Preservation" 
              description="Documenting and preserving information about lost works, including fragments, references, and historical context."
            />
            <AboutCard 
              title="Education" 
              description="Creating awareness about literary censorship and the fragility of knowledge throughout history."
            />
            <AboutCard 
              title="Research" 
              description="Supporting ongoing efforts to recover and reconstruct lost texts through archival research and new discoveries."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
