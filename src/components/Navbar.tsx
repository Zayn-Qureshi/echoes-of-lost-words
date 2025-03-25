
import React, { useState, useEffect } from 'react';
import { Book, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-paper/90 shadow-sm backdrop-blur-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 font-serif text-lg md:text-xl font-medium"
        >
          <Book className="h-5 w-5 md:h-6 md:w-6" />
          <span className="hidden sm:inline">Lost Words Archive</span>
          <span className="sm:hidden">L.W.A</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#books">Books</NavLink>
          <NavLink href="#authors">Authors</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-paper glass border-b border-border animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-4">
            <MobileNavLink href="#books" onClick={() => setIsMenuOpen(false)}>Books</MobileNavLink>
            <MobileNavLink href="#authors" onClick={() => setIsMenuOpen(false)}>Authors</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop nav link
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-ink/80 hover:text-ink transition-colors relative group py-1"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
  </a>
);

// Mobile nav link
const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <a 
    href={href}
    className="text-ink/80 hover:text-ink text-lg py-2"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
