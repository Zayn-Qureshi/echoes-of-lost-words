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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 bg-[var(--parchment)]/95 shadow-md backdrop-blur-lg border-b border-[var(--rich-brown)]/10' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 vintage-text text-lg font-medium text-[var(--rich-brown)] transition-all duration-300 hover:text-[var(--aged-gold)] relative"
        >
          <Feather className={`transition-all duration-300 ${isScrolled ? 'h-5 w-5' : 'h-6 w-6'} text-[var(--aged-gold)]`} />
          <span className="hidden sm:inline">Echoes of Lost Words</span>
          <span className="sm:hidden">E.L.W</span>
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--aged-gold)]/30 to-transparent"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/lost-manuscripts" active={location.pathname === '/lost-manuscripts'}>Lost Manuscripts</NavLink>
          <NavLink to="/controversial-authors" active={location.pathname === '/controversial-authors'}>Controversial Authors</NavLink>
          <NavLink to="/share-stories" active={location.pathname === '/share-stories'}>Share Stories</NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
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
        <div className="md:hidden fixed top-[calc(var(--navbar-height,3.5rem)+1px)] left-0 right-0 bg-[var(--parchment)]/98 border-b border-[var(--rich-brown)]/10 shadow-lg animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="container mx-auto py-4 px-4">
            <div className="flex flex-col gap-4">
              <MobileNavLink to="/lost-manuscripts" onClick={() => setIsMenuOpen(false)} active={location.pathname === '/lost-manuscripts'}>
                Lost Manuscripts
              </MobileNavLink>
              <MobileNavLink to="/controversial-authors" onClick={() => setIsMenuOpen(false)} active={location.pathname === '/controversial-authors'}>
                Controversial Authors
              </MobileNavLink>
              <MobileNavLink to="/share-stories" onClick={() => setIsMenuOpen(false)} active={location.pathname === '/share-stories'}>
                Share Stories
              </MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)} active={location.pathname === '/about'}>
                About
              </MobileNavLink>
            </div>
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
    className={`vintage-text text-[var(--rich-brown)]/80 hover:text-[var(--rich-brown)] text-lg py-3 px-4 relative group rounded-lg transition-all ${
      active ? 'text-[var(--rich-brown)] font-medium bg-[var(--rich-brown)]/5' : 'hover:bg-[var(--rich-brown)]/5'
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
