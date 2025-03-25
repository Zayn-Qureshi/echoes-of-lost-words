
import React from 'react';
import AuthorCard, { AuthorType } from '../AuthorCard';
import { ArrowRight } from 'lucide-react';

interface AuthorsSectionProps {
  authors: AuthorType[];
}

const AuthorsSection: React.FC<AuthorsSectionProps> = ({ authors }) => {
  return (
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
  );
};

export default AuthorsSection;
