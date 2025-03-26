import React from 'react';
import { Mail, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="paper-texture p-8 md:p-12">
        <h1 className="vintage-text text-4xl md:text-5xl mb-8 text-center">About Echoes of Lost Words</h1>
        
        <div className="space-y-8">
          <section className="prose prose-stone max-w-none">
            <p className="text-lg leading-relaxed">
              Echoes of Lost Words is a digital sanctuary dedicated to preserving and exploring the legacy of lost literary works 
              and controversial authors throughout history. Our mission is to illuminate the shadows of literary history, bringing 
              forgotten stories and voices back into the light of contemporary discourse.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="vintage-text text-2xl md:text-3xl mb-6">Project Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="literature-card p-6">
                <h3 className="vintage-text text-xl mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[var(--aged-gold)]" />
                  Lost Manuscripts
                </h3>
                <p className="text-[var(--rich-brown)]/80">
                  Explore an extensive collection of lost literary works, their historical context, and cultural significance.
                </p>
              </div>
              <div className="literature-card p-6">
                <h3 className="vintage-text text-xl mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[var(--aged-gold)]" />
                  Controversial Authors
                </h3>
                <p className="text-[var(--rich-brown)]/80">
                  Discover the stories of authors whose works challenged societal norms and sparked important discussions.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="vintage-text text-2xl md:text-3xl mb-6">Contact</h2>
            <div className="literature-card p-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--aged-gold)]" />
                <a href="mailto:emaanfatima142001@gmail.com" className="hover:text-[var(--aged-gold)] transition-colors">
                  emaanfatima142001@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About; 