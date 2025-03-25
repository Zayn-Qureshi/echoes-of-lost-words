
import React from 'react';

interface AboutCardProps {
  title: string;
  description: string;
}

export const AboutCard: React.FC<AboutCardProps> = ({ title, description }) => (
  <div className="p-6 bg-white border border-border rounded-lg">
    <h3 className="font-serif text-lg font-medium mb-3">{title}</h3>
    <p className="text-ink-light text-sm">{description}</p>
  </div>
);
