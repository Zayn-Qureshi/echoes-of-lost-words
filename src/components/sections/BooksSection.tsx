
import React from 'react';
import BookCard, { BookType } from '../BookCard';
import { ArrowRight } from 'lucide-react';

interface BooksSectionProps {
  books: BookType[];
}

const BooksSection: React.FC<BooksSectionProps> = ({ books }) => {
  return (
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
  );
};

export default BooksSection;
