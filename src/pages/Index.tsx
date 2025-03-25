
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BookCard, { BookType } from '../components/BookCard';
import AuthorCard, { AuthorType } from '../components/AuthorCard';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

// Mock data for books
const books: BookType[] = [
  {
    id: 1,
    title: "On Sphere-Making",
    author: "Archimedes",
    year: "c. 220 BCE",
    description: "A groundbreaking work on the construction of mechanical models of the universe. This text was believed to contain Archimedes' detailed instructions for building astronomical devices, including his famous celestial sphere that demonstrated the movements of the planets.",
    reason: "Lost during the burning of the Library of Alexandria, with only fragments and references in other classical texts surviving.",
  },
  {
    id: 2,
    title: "Hermetic Books of Thoth",
    author: "Unknown",
    year: "c. 300 BCE",
    description: "A collection of ancient Egyptian texts attributed to the god Thoth, containing philosophical and magical knowledge. These texts were said to hold the secrets of alchemy, astrology, and ancient wisdom that influenced early scientific thought.",
    reason: "Destroyed during religious purges; only referenced in other ancient texts.",
  },
  {
    id: 3,
    title: "Cardenio",
    author: "William Shakespeare & John Fletcher",
    year: "1613",
    description: "A play based on a character from Cervantes' Don Quixote, believed to be a collaboration between Shakespeare and Fletcher. Literary scholars consider it one of the greatest losses in theatrical history.",
    reason: "Lost after its initial performances; the manuscript disappeared during the Great Fire of London in 1666.",
  },
  {
    id: 4,
    title: "120 Days of Sodom",
    author: "Marquis de Sade",
    year: "1785",
    description: "One of de Sade's most controversial works, exploring themes of extreme human depravity. Written while imprisoned in the Bastille, the manuscript was a detailed account of various perversions, intended as a critique of aristocratic excess.",
    reason: "Nearly destroyed during the storming of the Bastille; recovered but subsequently banned and censored for centuries.",
  },
  {
    id: 5,
    title: "Wealth of Nations",
    author: "Adam Smith",
    year: "1776",
    description: "The foundational text of classical economics, establishing the theory of market competition, free trade, and the division of labor that would shape modern capitalism. The complete manuscript contained additional chapters not included in the published version.",
    reason: "Original complete manuscript was partially burned by Smith shortly before his death, with only the published edition surviving.",
  },
  {
    id: 6,
    title: "The Memoir of Byron",
    author: "Lord Byron",
    year: "1824",
    description: "Lord Byron's personal memoirs, containing candid accounts of his scandalous life, literary reflections, and political opinions. These were expected to be one of the most revealing literary autobiographies in English history.",
    reason: "Burned by Byron's publisher and friends after his death to protect his reputation and the privacy of those mentioned.",
  },
];

// Mock data for authors
const authors: AuthorType[] = [
  {
    id: 1,
    name: "Hypatia of Alexandria",
    lifespan: "c. 360–415 CE",
    biography: "A Hellenistic Neoplatonist philosopher, astronomer, and mathematician who lived in Alexandria, Egypt. She was the head of the Neoplatonic school in Alexandria, where she taught philosophy and astronomy.",
    contribution: "Her works on mathematics and astronomy were largely destroyed. She edited Ptolemy's Almagest and wrote commentaries on geometry and early astronomical works.",
  },
  {
    id: 2,
    name: "Marquis de Sade",
    lifespan: "1740–1814",
    biography: "A French nobleman, revolutionary, philosopher, and writer famous for his libertine sexuality and lifestyle. He spent 32 years of his life in prisons and insane asylums.",
    contribution: "His works combined philosophical discourse with pornography, depicting sexual fantasies with an emphasis on violence and criminality. Many of his works were written while imprisoned.",
  },
  {
    id: 3,
    name: "Etienne Dolet",
    lifespan: "1509–1546",
    biography: "A French scholar, translator, and printer. Known for his anticlerical views and promotion of Classical literature, Dolet became a symbol of Renaissance free thought.",
    contribution: "Published controversial religious and humanist texts, including his own writings on linguistics and translations of Plato and Erasmus, most of which were banned and destroyed.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Books Section */}
      <section id="books" className="section bg-paper-light">
        <div className="page-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Lost Literary Treasures</h2>
              <p className="text-ink-light max-w-xl">Exploring books that have been lost, destroyed, or censored throughout history.</p>
            </div>
            <a href="#" className="mt-4 md:mt-0 group flex items-center text-navy hover:text-navy-dark transition-colors">
              <span>View all books</span>
              <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {books.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Authors Section */}
      <section id="authors" className="section bg-white">
        <div className="page-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Controversial Authors</h2>
              <p className="text-ink-light max-w-xl">The lives and stories of writers whose works challenged the status quo of their time.</p>
            </div>
            <a href="#" className="mt-4 md:mt-0 group flex items-center text-navy hover:text-navy-dark transition-colors">
              <span>View all authors</span>
              <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="space-y-6">
            {authors.map((author, index) => (
              <AuthorCard key={author.id} author={author} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
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
      
      {/* Contact Section */}
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
      
      <Footer />
    </div>
  );
};

// Helper component for the About section
const AboutCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-6 bg-white border border-border rounded-lg">
    <h3 className="font-serif text-lg font-medium mb-3">{title}</h3>
    <p className="text-ink-light text-sm">{description}</p>
  </div>
);

export default Index;
