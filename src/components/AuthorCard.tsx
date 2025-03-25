
import React from 'react';
import { User } from 'lucide-react';

export interface AuthorType {
  id: number;
  name: string;
  lifespan: string;
  biography: string;
  contribution: string;
  image?: string;
}

interface AuthorCardProps {
  author: AuthorType;
  index: number;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author, index }) => {
  return (
    <div 
      className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg border border-border shadow-sm animate-fade-in-left"
      style={{ animationDelay: `${0.2 * (index + 1)}s`, opacity: 0 }}
    >
      {/* Author image or placeholder */}
      <div className="flex-shrink-0">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-paper-dark">
          {author.image ? (
            <img 
              src={author.image} 
              alt={author.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-paper to-paper-dark">
              <User className="w-12 h-12 text-ink-lightest" />
            </div>
          )}
        </div>
      </div>
      
      {/* Author info */}
      <div className="flex-grow">
        <div className="mb-3">
          <h3 className="font-serif text-xl font-medium">{author.name}</h3>
          <p className="text-ink-light text-sm">{author.lifespan}</p>
        </div>
        
        <p className="text-ink text-sm mb-4 line-clamp-3">{author.biography}</p>
        
        <div className="pt-3 border-t border-border">
          <h4 className="text-xs uppercase tracking-wider text-ink-lightest mb-1">Literary Contribution</h4>
          <p className="text-sm text-ink-light line-clamp-2">{author.contribution}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
