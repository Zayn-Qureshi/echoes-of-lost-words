
import React, { useState } from 'react';
import { Book } from 'lucide-react';

export interface BookType {
  id: number;
  title: string;
  author: string;
  year: string;
  description: string;
  reason: string;
  coverImage?: string;
}

interface BookCardProps {
  book: BookType;
  index: number;
}

const BookCard: React.FC<BookCardProps> = ({ book, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`relative group bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in`}
      style={{ animationDelay: `${0.1 * (index + 1)}s`, opacity: 0 }}
    >
      {/* Book cover image or placeholder */}
      <div className="relative aspect-[3/4] bg-paper-dark overflow-hidden">
        {book.coverImage ? (
          <img 
            src={book.coverImage} 
            alt={book.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-paper to-paper-dark">
            <Book className="w-16 h-16 text-ink-lightest" />
          </div>
        )}
      </div>
      
      {/* Book info */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-medium line-clamp-1">{book.title}</h3>
        <p className="text-ink-light text-sm">{book.author}, {book.year}</p>
        
        {/* Description with expand/collapse functionality */}
        <div className="mt-3">
          <p className={`text-sm text-ink ${isExpanded ? '' : 'line-clamp-3'}`}>
            {book.description}
          </p>
          {book.description.length > 150 && (
            <button 
              className="mt-2 text-xs text-navy hover:text-navy-dark focus:outline-none"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
        
        {/* Why it was lost/controversial - shown when expanded */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-border">
            <h4 className="text-xs uppercase tracking-wider text-ink-lightest mb-1">Why it was lost</h4>
            <p className="text-sm text-ink-light">{book.reason}</p>
          </div>
        )}
      </div>
      
      {/* Subtle hover effect decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-navy to-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
    </div>
  );
};

export default BookCard;
