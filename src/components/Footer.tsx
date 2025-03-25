
import React from 'react';
import { Book, Mail, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-paper-dark border-t border-border">
      <div className="page-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand and description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-serif text-lg font-medium mb-4">
              <Book className="h-5 w-5" />
              <span>Lost Words Archive</span>
            </Link>
            <p className="text-sm text-ink-light mb-6 max-w-md">
              Rediscovering the literary treasures that have been lost, 
              censored, or forgotten throughout history, preserving their 
              memory for future generations.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Github size={18} />} label="GitHub" />
              <SocialLink href="#" icon={<Mail size={18} />} label="Email" />
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-base font-medium mb-4">Explore</h3>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="#books">Lost Books</FooterLink>
              <FooterLink href="#authors">Controversial Authors</FooterLink>
              <FooterLink href="#about">About the Archive</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </nav>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-base font-medium mb-4">Stay Updated</h3>
            <p className="text-sm text-ink-light mb-4">
              Subscribe to our newsletter to receive updates on new discoveries and additions to our archive.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-white border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-navy text-sm flex-grow"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-navy hover:bg-navy-dark text-white rounded-md transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright and legal */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ink-light">
            © {currentYear} Lost Words Archive. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-ink-light hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-ink-light hover:text-ink transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer specific components
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm text-ink-light hover:text-ink transition-colors">
    {children}
  </a>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    className="w-8 h-8 rounded-full bg-white/50 hover:bg-white flex items-center justify-center text-ink-light hover:text-ink transition-all"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;
