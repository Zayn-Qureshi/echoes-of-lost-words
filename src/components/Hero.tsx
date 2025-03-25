
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const handleScrollDown = () => {
    const booksSection = document.getElementById('books');
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-navy/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="page-container flex flex-col items-center justify-center text-center space-y-8 md:space-y-10">
        {/* Subtle badge */}
        <div 
          className="px-4 py-1.5 rounded-full bg-paper-dark text-ink-light text-sm tracking-wide uppercase animate-fade-in"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Preserving literary history
        </div>
        
        {/* Main heading */}
        <h1 
          className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-4xl leading-tight md:leading-tight animate-fade-in"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          Rediscovering the <span className="text-navy-dark">Lost</span> and <span className="text-gold">Controversial</span> Books of History
        </h1>
        
        {/* Description */}
        <p 
          className="text-lg md:text-xl text-ink-light max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          An archive dedicated to preserving the memory of books that have been lost, 
          censored, or forgotten, and the authors whose voices were silenced.
        </p>
        
        {/* CTA button */}
        <div 
          className="pt-4 animate-fade-in"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <button
            onClick={handleScrollDown}
            className="px-8 py-3 bg-navy text-white rounded-md hover:bg-navy-dark transition-colors duration-300 shadow-sm"
          >
            Explore Collection
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-pulse-slow"
          onClick={handleScrollDown}
        >
          <ChevronDown className="w-8 h-8 text-ink-light cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
