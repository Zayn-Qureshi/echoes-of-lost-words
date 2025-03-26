import React, { useState, useEffect } from 'react';
import { Book, Menu, X, Feather } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-[var(--parchment)]/95 shadow-md backdrop-blur-lg border-b border-[var(--rich-brown)]/10' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 vintage-text text-lg md:text-xl font-medium text-[var(--rich-brown)] transition-all duration-300 hover:text-[var(--aged-gold)]"
        >
          <Feather className={`transition-all duration-300 ${isScrolled ? 'h-5 w-5' : 'h-6 w-6'} text-[var(--aged-gold)]`} />
          <span className="hidden sm:inline">Echoes of Lost Words</span>
          <span className="sm:hidden">E.L.W</span>
          
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--aged-gold)]/30 to-transparent"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/lost-manuscripts" active={location.pathname === '/lost-manuscripts'}>Lost Manuscripts</NavLink>
          <NavLink to="/forgotten-authors" active={location.pathname === '/forgotten-authors'}>Forgotten Authors</NavLink>
          <NavLink to="/share-stories" active={location.pathname === '/share-stories'}>Share Stories</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-[var(--rich-brown)]/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? 
            <X className="text-[var(--rich-brown)] h-5 w-5" /> : 
            <Menu className="text-[var(--rich-brown)] h-5 w-5" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--parchment)]/98 border-b border-[var(--rich-brown)]/10 shadow-lg animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col py-6 px-8 gap-5 max-w-7xl mx-auto">
            <MobileNavLink to="/lost-manuscripts" onClick={() => setIsMenuOpen(false)} active={location.pathname === '/lost-manuscripts'}>
              Lost Manuscripts
            </MobileNavLink>
            <MobileNavLink to="/forgotten-authors" onClick={() => setIsMenuOpen(false)} active={location.pathname === '/forgotten-authors'}>
              Forgotten Authors
            </MobileNavLink>
            <MobileNavLink to="/share-stories" onClick={() => setIsMenuOpen(false)} active={location.pathname === '/share-stories'}>
              Share Stories
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop nav link
const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link 
    to={to}
    className={`vintage-text text-[var(--rich-brown)]/80 hover:text-[var(--rich-brown)] transition-colors relative group py-1 ${
      active ? 'text-[var(--rich-brown)] font-medium' : ''
    }`}
  >
    {children}
    <span className={`absolute bottom-0 left-0 h-0.5 bg-[var(--aged-gold)] transition-all duration-300 ${
      active ? 'w-full' : 'w-0 group-hover:w-full'
    }`}></span>
  </Link>
);

// Mobile nav link
const MobileNavLink = ({ 
  to, 
  onClick, 
  active,
  children 
}: { 
  to: string; 
  onClick: () => void;
  active: boolean;
  children: React.ReactNode 
}) => (
  <Link 
    to={to}
    className={`vintage-text text-[var(--rich-brown)]/80 hover:text-[var(--rich-brown)] text-lg py-2 relative group ${
      active ? 'text-[var(--rich-brown)] font-medium pl-4 border-l-2 border-[var(--aged-gold)]' : 'pl-0'
    }`}
    onClick={onClick}
  >
    {children}
    {!active && (
      <span className="absolute left-0 top-0 bottom-0 w-0 border-l-2 border-[var(--aged-gold)]/0 group-hover:border-[var(--aged-gold)]/50 group-hover:w-1 transition-all duration-300"></span>
    )}
  </Link>
);

export default Navbar;
