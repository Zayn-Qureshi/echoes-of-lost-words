import { BookOpen, Users, FileText, Library, Search } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useState } from "react";
import SubmissionForm from "../components/SubmissionForm";

const submissionTypes = [
  {
    title: "Lost Manuscript Information",
    icon: BookOpen,
    description: "Share information about a lost manuscript or work that you've discovered through research.",
    type: "manuscript" as const
  },
  {
    title: "Author Biography",
    icon: Users,
    description: "Contribute biographical information about forgotten or overlooked authors.",
    type: "author" as const
  },
  {
    title: "Historical Document",
    icon: FileText,
    description: "Submit historical documents that reference lost works or authors.",
    type: "document" as const
  },
  {
    title: "Personal Collection",
    icon: Library,
    description: "Share details about lost works from your personal or family collection.",
    type: "collection" as const
  },
  {
    title: "Research Findings",
    icon: Search,
    description: "Submit your research findings about lost works or forgotten authors.",
    type: "research" as const
  }
];

const periods = [
  "Ancient (before 500 CE)",
  "Medieval (500-1500)",
  "Renaissance (1300-1600)",
  "Early Modern (1500-1800)",
  "Modern (1800-1950)",
  "Contemporary (1950-present)"
];

const ShareStories = () => {
  const [selectedType, setSelectedType] = useState<typeof submissionTypes[0] | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 vintage-text">Share Your Discoveries</h1>
        <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
          Help us preserve literary history by sharing your knowledge about lost works and forgotten authors.
        </p>
      </div>

      {!selectedType ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {submissionTypes.map((type, index) => (
            <div 
              key={index}
              onClick={() => setSelectedType(type)}
              className={`cursor-pointer ${
                type.type === 'manuscript' ? 'bg-white/90 hover:bg-white border-gray-100' :
                type.type === 'author' ? 'bg-[#fff8e6] hover:bg-[#fff5d6] border-[#f5e1b6]' :
                type.type === 'document' ? 'bg-[#f0f7ff] hover:bg-[#e5f1ff] border-[#cce3ff]' :
                type.type === 'collection' ? 'bg-[#fff0f0] hover:bg-[#ffe6e6] border-[#ffd6d6]' :
                'bg-[#f3f0ff] hover:bg-[#ebe5ff] border-[#d9ccff]'
              } rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border`}
            >
              <div className="flex flex-col items-center text-center">
                <type.icon className={`w-12 h-12 mb-4 ${
                  type.type === 'manuscript' ? 'text-[#6366f1]' :
                  type.type === 'author' ? 'text-[#f59e0b]' :
                  type.type === 'document' ? 'text-[#3b82f6]' :
                  type.type === 'collection' ? 'text-[#ef4444]' :
                  'text-[#8b5cf6]'
                }`} />
                <h2 className="text-2xl font-bold mb-2 vintage-text">{type.title}</h2>
                <p className="text-[#4A4A4A]">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold vintage-text">Submit {selectedType.title}</h2>
            <button 
              onClick={() => setSelectedType(null)}
              className="text-[#4A4A4A] hover:text-[#1a1a2e] transition-colors"
            >
              ← Back to options
            </button>
          </div>
          <SubmissionForm type={selectedType.type} onClose={() => setSelectedType(null)} />
        </div>
      )}
    </div>
  );
};

export default ShareStories; 