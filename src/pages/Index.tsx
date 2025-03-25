
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BooksSection from '../components/sections/BooksSection';
import AuthorsSection from '../components/sections/AuthorsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import { books } from '../data/booksData';
import { authors } from '../data/authorsData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Books Section */}
      <BooksSection books={books} />
      
      {/* Authors Section */}
      <AuthorsSection authors={authors} />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
