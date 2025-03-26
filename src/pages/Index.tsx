import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Search, BookOpen, Users, Mail, ArrowRight, BookText, Feather } from "lucide-react";
import dostoevsky from "../assets/authors/dostoevsky.jpg";
import kafka from "../assets/authors/kafka.jpg";
import camus from "../assets/authors/camus.jpg";
import BiographyModal from "../components/BiographyModal";
import LostWorkModal from "../components/LostWorkModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const lostWorks = [
  {
    title: "Sappho's Poetry Collection",
    period: "Ancient Greece (c. 630-570 BCE)",
    description: "The lost works of the first known female poet, whose verses influenced generations. Only fragments of her nine books of poetry survive, with her most famous work being the 'Ode to Aphrodite'.",
    historicalContext: "Sappho lived during a period of great cultural and artistic development in Ancient Greece. She was born on the island of Lesbos and was highly respected in her time. Her poetry was collected into nine books by scholars in Alexandria, but most of her work was lost during the medieval period.",
    significance: "Sappho's poetry was revolutionary for its time, focusing on personal experiences and emotions rather than epic tales of gods and heroes. Her work influenced countless poets throughout history and helped establish lyric poetry as a major literary form. The survival of even fragments of her work has had an enormous impact on our understanding of ancient Greek literature and culture.",
    fullDescription: "Sappho's complete works originally consisted of nine books of poetry, but today only one complete poem remains - the 'Ode to Aphrodite.' The rest of her surviving work exists only in fragments, some as small as a single word. Her poetry was deeply personal, often dealing with themes of love, desire, and the relationships between women. The loss of her complete works represents one of the greatest tragedies in literary history. Recent discoveries, such as the 'Brothers Poem' found in 2014, continue to provide new insights into her work. Scholars estimate that we have less than 10% of her original writings."
  },
  {
    title: "Homer's Lost Epics",
    period: "Ancient Greece (c. 8th century BCE)",
    description: "The Margites and other lost works of the legendary epic poet. While the Iliad and Odyssey survive, his other works including the Margites (a comic epic) and the Little Iliad are lost to time.",
    historicalContext: "Homer's works were composed during the Greek Dark Ages and were initially passed down through oral tradition. The lost epics were known to exist through references in other ancient texts and were still being read during the Hellenistic period.",
    significance: "The lost epics would have provided crucial insights into Homer's range as a poet, particularly in comedy and shorter narrative forms. The Margites was especially significant as it would have shown Homer's skill in comic writing, a completely different style from his surviving epic works.",
    fullDescription: "Among Homer's lost works, the Margites was perhaps the most intriguing - a comic epic about a man who 'knew many things, but knew them all badly.' Other lost works included the Little Iliad, which covered events of the Trojan War not included in the Iliad, and various hymns and shorter poems. These works were known to ancient writers and scholars, who quoted from them and discussed their content. The loss of these works has left a significant gap in our understanding of both Homer's complete artistic vision and the development of ancient Greek literature."
  },
  {
    title: "Aristotle's Second Book of Poetics",
    period: "Ancient Greece (384-322 BCE)",
    description: "The lost treatise on comedy that would have complemented his surviving work on tragedy. This missing volume could have provided crucial insights into ancient Greek comedy.",
    historicalContext: "The Second Book of Poetics was written during Aristotle's time at the Lyceum in Athens. It was part of his larger project to systematically analyze and document all forms of knowledge, including the arts.",
    significance: "The loss of this work has left a massive gap in our understanding of how ancient Greeks theorized about comedy. Just as the surviving Poetics has been fundamental to literary theory and the understanding of tragedy, the lost book would likely have provided equally valuable insights into comic drama.",
    fullDescription: "The Second Book of Poetics is known to have contained Aristotle's analysis of comedy, parallel to his analysis of tragedy in the surviving first book. Medieval sources suggest it included discussions of the nature of comedy, its elements, and its effects on the audience. The loss of this work has left scholars to piece together Aristotle's theory of comedy from brief references in his other works. Some scholars believe that if this book had survived, it would have had as profound an influence on the development of comedy as the first book had on tragedy. The mysterious disappearance of this text has even inspired works of fiction, most notably Umberto Eco's 'The Name of the Rose.'"
  },
  {
    title: "The Epic of Gilgamesh",
    period: "Ancient Mesopotamia (c. 2100 BCE)",
    description: "While fragments exist, the complete version of this ancient epic remains lost. The most complete version we have is from the library of Ashurbanipal, but scholars believe there are more stories.",
    historicalContext: "The Epic of Gilgamesh evolved over nearly two thousand years of Mesopotamian history. The earliest versions were written in Sumerian, while later versions were written in Akkadian. The story was continuously modified and expanded throughout its history.",
    significance: "As one of the earliest surviving works of literature, the Epic of Gilgamesh has influenced countless stories throughout history. Its themes of friendship, mortality, and the quest for immortality resonate across cultures and time periods. The lost portions might contain additional insights into these universal themes.",
    fullDescription: "The Epic of Gilgamesh as we know it today is assembled from multiple fragmentary versions found at various archaeological sites. The most complete version, the Standard Babylonian Version, was discovered in the library of Ashurbanipal at Nineveh. However, scholars believe that significant portions of the epic remain lost, including potential additional adventures and deeper explorations of the relationship between Gilgamesh and Enkidu. The gaps in the existing tablets and references in other texts suggest the existence of additional episodes and perhaps alternative versions of known stories. Recent archaeological discoveries continue to add new pieces to this ancient puzzle, though much remains lost to time."
  }
];

const featuredAuthors = [
  {
    name: "Fyodor Dostoevsky",
    period: "19th Century",
    location: "Russia",
    description: "A literary giant whose works explored the depths of human psychology and existentialism. His novels like 'Crime and Punishment' and 'The Brothers Karamazov' revolutionized literature.",
    lostWorks: "Several early works and unpublished manuscripts were lost during his imprisonment in Siberia.",
    image: dostoevsky,
    biography: "Fyodor Mikhailovich Dostoevsky (1821-1881) was born in Moscow to a family of Russian Orthodox Christians. His early life was marked by tragedy when his mother died of tuberculosis in 1837. He studied engineering but found his true passion in literature. His first novel, 'Poor Folk,' was published in 1846 to critical acclaim. In 1849, he was arrested for his involvement in a political group and sentenced to death, but the sentence was commuted to four years of hard labor in Siberia. This experience profoundly influenced his writing. After his release, he published several masterpieces including 'Notes from Underground,' 'Crime and Punishment,' and 'The Brothers Karamazov.' His works are known for their psychological depth and exploration of existential themes."
  },
  {
    name: "Franz Kafka",
    period: "Early 20th Century",
    location: "Czech Republic",
    description: "A pioneer of existential literature whose works were largely unpublished during his lifetime. His unique style influenced generations of writers.",
    lostWorks: "Many of his early works were burned at his request, and some manuscripts were lost during World War II.",
    image: kafka,
    biography: "Franz Kafka (1883-1924) was born in Prague to a German-speaking Jewish family. He studied law and worked as an insurance officer while writing in his spare time. Despite his literary talent, he published very little during his lifetime and asked his friend Max Brod to burn his unpublished works after his death. Brod ignored this request and published many of Kafka's works posthumously. His most famous works include 'The Metamorphosis,' 'The Trial,' and 'The Castle.' Kafka's writing style, characterized by surreal situations and existential themes, has become known as 'Kafkaesque.' He died of tuberculosis at the age of 40, leaving behind a legacy that would profoundly influence 20th-century literature."
  },
  {
    name: "Albert Camus",
    period: "20th Century",
    location: "France/Algeria",
    description: "A Nobel Prize-winning author and philosopher who explored themes of absurdism and existentialism. His works continue to influence modern thought.",
    lostWorks: "Several early manuscripts were lost in a fire, and some unpublished works were destroyed during the Algerian War.",
    image: camus,
    biography: "Albert Camus (1913-1960) was born in French Algeria to a poor family. His father died in World War I when Camus was less than a year old. Despite financial hardships, he excelled in school and studied philosophy at the University of Algiers. He worked as a journalist and playwright before publishing his first novel, 'The Stranger,' in 1942. His philosophical essay 'The Myth of Sisyphus' established him as a leading figure in existentialism and absurdism. He won the Nobel Prize in Literature in 1957. His works, including 'The Plague' and 'The Fall,' explore themes of human existence, morality, and the search for meaning. Camus died in a car accident at the age of 46, leaving behind an unfinished novel, 'The First Man.'"
  }
];

const Index = () => {
  const [selectedAuthor, setSelectedAuthor] = useState<typeof featuredAuthors[0] | null>(null);
  const [selectedWork, setSelectedWork] = useState<typeof lostWorks[0] | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="hero-section text-center py-32 rounded-lg mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(248, 245, 230, 0.85), rgba(248, 245, 230, 0.9)), 
              repeating-linear-gradient(rgba(89, 68, 47, 0.08) 0px, rgba(89, 68, 47, 0.08) 1px, transparent 1px, transparent 50px), 
              repeating-linear-gradient(90deg, rgba(89, 68, 47, 0.08) 0px, rgba(89, 68, 47, 0.08) 1px, transparent 1px, transparent 50px)`,
            boxShadow: 'inset 0 0 200px rgba(89, 68, 47, 0.1)'
          }}></div>
          
          <div className="relative z-10">
            <div className="inline-block px-5 py-2 bg-[#f4f1ea]/80 backdrop-blur-sm rounded-full mb-8 shadow-sm border border-[#8b4513]/10 animate-fade-in">
              <span className="text-[var(--rich-brown)] text-sm font-medium tracking-wider">
                PRESERVING LITERARY HISTORY
              </span>
            </div>
            
            <div className="quill-decoration"></div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight vintage-text animate-fade-in-1">
              <span className="text-[var(--deep-navy)]">Rediscovering the </span>
              <span className="highlight-text highlight-blue">Lost</span>
              <span className="text-[var(--deep-navy)]"> and </span>
              <br />
              <span className="highlight-text highlight-orange">Controversial</span>
              <span className="text-[var(--deep-navy)]"> Books of </span>
              <br />
              <span className="text-[var(--deep-navy)]">History</span>
            </h1>
            
            <p className="text-xl text-[#4A4A4A] mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-2">
              An archive dedicated to preserving the memory of books that have been lost, censored, 
              or forgotten, and the authors whose voices were silenced through time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-3">
              <Button size="lg" className="bg-[var(--rich-brown)] hover:bg-[var(--rich-brown)]/90 text-white px-8 py-6 text-lg shadow-md transition-transform hover:translate-y-[-2px]">
                Explore Archive
              </Button>
              <Button size="lg" variant="outline" className="border-[var(--rich-brown)] text-[var(--rich-brown)] hover:bg-[var(--rich-brown)]/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="ink-splatter absolute bottom-10 right-10"></div>
          <div className="ink-splatter absolute top-20 left-10"></div>
        </section>

        {/* Search Section */}
        <section className="max-w-2xl mx-auto mb-16 relative">
          <div className="paper-texture p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4 text-center vintage-text text-[var(--rich-brown)]">
              Uncover Lost Literary Treasures
            </h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--rich-brown)] h-5 w-5" />
              <Input
                placeholder="Search for lost works, authors, or periods..."
                className="pl-10 bg-white/90 backdrop-blur-sm border-[var(--aged-gold)]/50 focus:border-[var(--aged-gold)] h-12 text-base shadow-sm"
              />
            </div>
            <div className="mt-4 text-center text-sm text-[var(--rich-brown)]/70">
              Popular searches: Sappho, Maya Literature, Shakespeare's Lost Plays, Library of Alexandria
            </div>
          </div>
        </section>

        {/* Featured Works */}
        <section className="mb-16">
          <div className="flex items-center mb-8 gap-3">
            <Feather className="h-6 w-6 text-[var(--aged-gold)]" />
            <h2 className="text-3xl font-bold text-[var(--deep-navy)] vintage-text">Featured Lost Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {lostWorks.map((work, index) => (
              <Card key={index} className="literature-card book-border flex flex-col h-full transform transition-all duration-300 hover:translate-y-[-5px]">
                <CardHeader>
                  <CardTitle className="text-2xl text-[var(--deep-navy)] vintage-text">{work.title}</CardTitle>
                  <CardDescription className="text-lg text-[var(--rich-brown)]/70">{work.period}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <div className="flex-grow">
                    <p className="text-[var(--deep-navy)]/80 mb-4 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                  <Button 
                    variant="default" 
                    className="w-full bg-[var(--aged-gold)] hover:bg-[var(--aged-gold)]/90 text-[var(--deep-navy)] mt-auto font-medium"
                    onClick={() => setSelectedWork(work)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16 py-16 paper-texture rounded-lg relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6 text-[var(--deep-navy)] vintage-text">About the Archive</h2>
            <p className="text-[var(--rich-brown)] mb-10 text-lg leading-relaxed">
              The Echoes of Lost Words Archive is dedicated to preserving and sharing the stories of literary works 
              that were never published or have been lost to time. Our mission is to keep these voices alive and 
              ensure that their stories continue to resonate with future generations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="literature-card shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]">
                <CardContent className="pt-8 px-6 pb-6 text-center cursor-pointer" onClick={() => navigate("/lost-manuscripts")}>
                  <BookOpen className="w-12 h-12 text-[var(--aged-gold)] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[var(--deep-navy)] mb-3 vintage-text">Lost Manuscripts</h3>
                  <p className="text-[var(--rich-brown)]/80">Discover works that were never published or have been lost through history</p>
                </CardContent>
              </Card>
              <Card className="literature-card shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]">
                <CardContent className="pt-8 px-6 pb-6 text-center cursor-pointer" onClick={() => navigate("/controversial-authors")}>
                  <Users className="w-12 h-12 text-[var(--aged-gold)] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[var(--deep-navy)] mb-3 vintage-text">Controversial Authors</h3>
                  <p className="text-[var(--rich-brown)]/80">Learn about writers whose works challenged the status quo of their time</p>
                </CardContent>
              </Card>
              <Card className="literature-card shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]">
                <CardContent className="pt-8 px-6 pb-6 text-center cursor-pointer" onClick={() => navigate("/share-stories")}>
                  <Mail className="w-12 h-12 text-[var(--aged-gold)] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[var(--deep-navy)] mb-3 vintage-text">Share Stories</h3>
                  <p className="text-[var(--rich-brown)]/80">Contribute to preserving literary history by sharing your knowledge</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Authors */}
        <section className="mb-16">
          <div className="flex items-center mb-8 gap-3">
            <Feather className="h-6 w-6 text-[var(--aged-gold)]" />
            <h2 className="text-3xl font-bold text-[var(--deep-navy)] vintage-text">Controversial Authors</h2>
          </div>
          <p className="text-xl text-[var(--rich-brown)]/80 mb-8 max-w-3xl">
            The lives and stories of writers whose works challenged the status quo of their time.
          </p>
          <div className="grid grid-cols-1 gap-8">
            {featuredAuthors.map((author, index) => (
              <Card 
                key={index} 
                className="literature-card overflow-hidden transform transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 relative">
                    <img 
                      src={author.image} 
                      alt={author.name} 
                      className="w-full h-full object-cover aspect-square md:aspect-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:bg-gradient-to-t"></div>
                  </div>
                  <div className="p-6 md:w-3/4 flex flex-col">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-[var(--deep-navy)] vintage-text">{author.name}</h3>
                      <p className="text-[var(--rich-brown)]/70 mb-4">{author.period}, {author.location}</p>
                      <p className="text-[var(--deep-navy)]/80 mb-4">{author.description}</p>
                      <p className="text-[var(--rich-brown)] text-sm italic mb-4">{author.lostWorks}</p>
                    </div>
                    <Button 
                      className="mt-auto self-start bg-[var(--aged-gold)] hover:bg-[var(--aged-gold)]/90 text-[var(--deep-navy)] font-medium"
                      onClick={() => setSelectedAuthor(author)}
                    >
                      Read Biography
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              className="border-[var(--rich-brown)] text-[var(--rich-brown)] hover:bg-[var(--rich-brown)]/10 px-8 text-lg"
              onClick={() => navigate("/controversial-authors")}
            >
              View All Authors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="paper-texture rounded-lg overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[var(--deep-navy)] vintage-text">Join Our Mission</h2>
            <p className="text-[var(--rich-brown)] mb-8 max-w-2xl mx-auto text-lg">
              Help us preserve literary history by contributing information about lost works, 
              forgotten authors, or sharing your own stories.
            </p>
            <Button 
              className="bg-[var(--rich-brown)] hover:bg-[var(--rich-brown)]/90 text-white px-8 py-6 text-lg shadow-md transition-transform hover:translate-y-[-2px]"
              onClick={() => navigate("/share-stories")}
            >
              Share Your Knowledge
            </Button>
          </div>
        </section>
      </div>

      {/* Modals */}
      {selectedAuthor && (
        <BiographyModal
          author={selectedAuthor}
          isOpen={!!selectedAuthor}
          onClose={() => setSelectedAuthor(null)}
        />
      )}
      
      {selectedWork && (
        <LostWorkModal
          work={selectedWork}
          isOpen={!!selectedWork}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </div>
  );
};

export default Index; 