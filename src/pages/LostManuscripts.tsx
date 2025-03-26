import { useState } from "react";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Search, Feather } from "lucide-react";
import LostWorkModal from "../components/LostWorkModal";

const periods = [
  { label: "All Periods", value: "all" },
  { label: "Ancient (before 500 CE)", value: "ancient" },
  { label: "Medieval (500-1500 CE)", value: "medieval" },
  { label: "Renaissance (1400-1600 CE)", value: "renaissance" },
  { label: "Modern (1600-1900 CE)", value: "modern" },
  { label: "Contemporary (1900-present)", value: "contemporary" }
];

const lostWorks = [
  {
    title: "Sappho's Poetry Collection",
    period: "Ancient Greece (c. 630-570 BCE)",
    description: "The lost works of the first known female poet, whose verses influenced generations. Only fragments of her nine books of poetry survive.",
    currentStatus: "Fragments",
    significance: "Pioneered personal lyric poetry"
  },
  {
    title: "Books of the Mayas",
    period: "Mayan (pre-Columbus)",
    description: "Countless codices destroyed during Spanish conquest. Only four codices remain intact, revealing sophisticated astronomy, mathematics, and religion.",
    currentStatus: "Mostly destroyed",
    significance: "Record of pre-Columbian civilization"
  },
  {
    title: "Homer's Margites",
    period: "Ancient Greece (c. 8th century BCE)",
    description: "Comic epic by Homer that Aristotle claimed was the forerunner to comedy, similar to how the Iliad was to tragedy. Only fragments survive.",
    currentStatus: "Fragments",
    significance: "Origin of comedy in Western literature"
  },
  {
    title: "Aristotle's Second Book of Poetics",
    period: "Ancient Greece (384-322 BCE)",
    description: "The lost treatise on comedy that would have complemented his surviving work on tragedy. This missing volume could have provided crucial insights into ancient Greek comedy.",
    currentStatus: "Lost",
    significance: "Critical theory of comedy"
  },
  {
    title: "The Hermetic Corpus",
    period: "Hellenistic (3rd century BCE - 3rd century CE)",
    description: "A vast collection of writings attributed to Hermes Trismegistus, containing mystical, philosophical, and alchemical texts. Many volumes lost over time.",
    currentStatus: "Partially preserved",
    significance: "Influenced Western esoteric tradition"
  },
  {
    title: "Cardenio",
    period: "Renaissance (1613)",
    description: "A lost play by William Shakespeare and John Fletcher, based on an episode in Cervantes' Don Quixote. Known to have been performed but the text was never published.",
    currentStatus: "Lost",
    significance: "Shakespeare's lost work"
  },
  {
    title: "Library of Alexandria Texts",
    period: "Ancient (3rd century BCE - 5th century CE)",
    description: "Countless manuscripts lost in the burning of the Great Library of Alexandria, representing an immeasurable loss of ancient knowledge and literature.",
    currentStatus: "Destroyed",
    significance: "Repository of ancient knowledge"
  },
  {
    title: "Tale of Gamelyn",
    period: "Medieval (14th century)",
    description: "A narrative poem once attributed to Chaucer and included in some manuscripts of The Canterbury Tales, but now considered a separate work.",
    currentStatus: "Preserved but attribution uncertain",
    significance: "Outlaw literature influencing Robin Hood"
  }
];

const LostManuscripts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [selectedWork, setSelectedWork] = useState(null);

  const filteredWorks = lostWorks.filter(work => {
    const matchesSearch = work.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          work.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          work.period.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPeriod = selectedPeriod === "all" || work.period.toLowerCase().includes(selectedPeriod.toLowerCase());
    return matchesSearch && matchesPeriod;
  });

  return (
    <div className="container mx-auto px-4 py-12 pt-24 min-h-screen bg-[var(--parchment)]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Feather className="h-6 w-6 text-[var(--aged-gold)]" />
            <h1 className="text-4xl font-bold text-[var(--deep-navy)] vintage-text">Lost Manuscripts</h1>
          </div>
          <p className="text-[var(--rich-brown)] max-w-2xl mx-auto">
            Explore our collection of literature's greatest losses—works that have vanished through time 
            but continue to influence our understanding of literary history.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12 paper-texture p-6 rounded-lg">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--rich-brown)] h-5 w-5" />
            <Input
              placeholder="Search for lost works, authors, or periods..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-white border-[var(--aged-gold)]/30 focus:border-[var(--aged-gold)] focus:ring-1 focus:ring-[var(--aged-gold)] h-12 text-base"
            />
          </div>
          <div className="w-full md:w-64">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="bg-white border-[var(--aged-gold)]/30 focus:border-[var(--aged-gold)] focus:ring-1 focus:ring-[var(--aged-gold)] h-12">
                <SelectValue placeholder="All Periods" />
              </SelectTrigger>
              <SelectContent>
                {periods.map((period) => (
                  <SelectItem key={period.value} value={period.value}>
                    {period.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-6">
          {filteredWorks.map((work, index) => (
            <div 
              key={index} 
              className="literature-card p-6 cursor-pointer transition-all hover:shadow-lg"
              onClick={() => setSelectedWork(work)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold mb-1 text-[var(--deep-navy)] vintage-text">{work.title}</h2>
                  <p className="text-[var(--rich-brown)]/70 mb-3">{work.period}</p>
                  <p className="text-[var(--deep-navy)]/80 mb-3">{work.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[var(--aged-gold)]/10 text-[var(--rich-brown)] border border-[var(--aged-gold)]/20">
                      {work.currentStatus}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[var(--deep-navy)]/5 text-[var(--deep-navy)] border border-[var(--deep-navy)]/10">
                      {work.significance}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="w-10 h-10 rounded-full bg-[var(--parchment)] flex items-center justify-center border border-[var(--aged-gold)]/20 text-[var(--aged-gold)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {filteredWorks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[var(--rich-brown)]/70">No manuscripts found matching your search criteria.</p>
              <p className="mt-2 text-[var(--rich-brown)]/50">Try adjusting your search terms or selecting a different period.</p>
            </div>
          )}
        </div>
      </div>

      <footer className="mt-24 py-12 bg-[var(--deep-navy)] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 vintage-text">About Lost Manuscripts</h3>
              <p className="text-gray-300 leading-relaxed">
                Dedicated to preserving and sharing the knowledge of lost literary works throughout history. 
                Our archive helps scholars and enthusiasts explore the rich tapestry of forgotten texts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 vintage-text">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/controversial-authors" className="hover:text-white transition-colors">Controversial Authors</a></li>
                <li><a href="/share-stories" className="hover:text-white transition-colors">Share Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 vintage-text">Contact</h3>
              <p className="text-gray-300 leading-relaxed">
                Have information about lost manuscripts? <br />
                Want to contribute to our archive? <br />
                Email us at: contact@echosoflostwords.com
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Echoes of Lost Words. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <LostWorkModal
        work={selectedWork || lostWorks[0]}
        isOpen={!!selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </div>
  );
};

export default LostManuscripts; 