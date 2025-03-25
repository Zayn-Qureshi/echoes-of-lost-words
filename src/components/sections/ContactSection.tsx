
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-navy text-white">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Join Our Effort</h2>
          <p className="text-white/80 mb-8">
            Are you a scholar, historian, or enthusiast interested in lost literary works? 
            Contact us to contribute to our archive or collaborate on research projects.
          </p>
          
          <div className="max-w-md mx-auto mt-8">
            <button
              className="w-full py-3 px-6 bg-white text-navy hover:bg-paper-light transition-colors rounded-md shadow-sm"
            >
              Contact The Archive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
