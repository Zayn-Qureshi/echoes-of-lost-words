import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import BiographyModal from "../components/BiographyModal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

// Import existing author images
import dostoevsky from "../assets/authors/dostoevsky.jpg";
import kafka from "../assets/authors/kafka.jpg";
import camus from "../assets/authors/camus.jpg";

const authors = [
  {
    name: "Fyodor Dostoevsky",
    period: "19th Century",
    location: "Russia",
    description: "A literary giant whose works explored the depths of human psychology and existentialism. His novels like 'Crime and Punishment' and 'The Brothers Karamazov' revolutionized literature.",
    lostWorks: "Several early works and unpublished manuscripts were lost during his imprisonment in Siberia.",
    image: dostoevsky,
    biography: "Fyodor Mikhailovich Dostoevsky (1821-1881) was born in Moscow to a family of Russian Orthodox Christians. His early life was marked by tragedy when his mother died of tuberculosis in 1837. He studied engineering but found his true passion in literature. His first novel, 'Poor Folk,' was published in 1846 to critical acclaim. In 1849, he was arrested for his involvement in a political group and sentenced to death, but the sentence was commuted to four years of hard labor in Siberia. This experience profoundly influenced his writing."
  },
  {
    name: "Franz Kafka",
    period: "Early 20th Century",
    location: "Czech Republic",
    description: "A pioneer of existential literature whose works were largely unpublished during his lifetime. His unique style influenced generations of writers.",
    lostWorks: "Many of his early works were burned at his request, and some manuscripts were lost during World War II.",
    image: kafka,
    biography: "Franz Kafka (1883-1924) was born in Prague to a German-speaking Jewish family. He studied law and worked as an insurance officer while writing in his spare time. Despite his literary talent, he published very little during his lifetime and asked his friend Max Brod to burn his unpublished works after his death. Brod ignored this request and published many of Kafka's works posthumously."
  },
  {
    name: "Albert Camus",
    period: "20th Century",
    location: "France/Algeria",
    description: "A Nobel Prize-winning author and philosopher who explored themes of absurdism and existentialism. His works continue to influence modern thought.",
    lostWorks: "Several early manuscripts were lost in a fire, and some unpublished works were destroyed during the Algerian War.",
    image: camus,
    biography: "Albert Camus (1913-1960) was born in French Algeria to a poor family. His father died in World War I when Camus was less than a year old. Despite financial hardships, he excelled in school and studied philosophy at the University of Algiers. He worked as a journalist and playwright before publishing his first novel, 'The Stranger,' in 1942. His philosophical essay 'The Myth of Sisyphus' established him as a leading figure in existentialism and absurdism."
  }
];

const periods = ["All Periods", "19th Century", "20th Century", "Contemporary"];
const locations = ["All Locations", "Russia", "Czech Republic", "France", "Algeria"];

const ForgottenAuthorsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("All Periods");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedAuthor, setSelectedAuthor] = useState<typeof authors[0] | null>(null);

  const filteredAuthors = authors.filter(author => {
    const matchesSearch = author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         author.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPeriod = selectedPeriod === "All Periods" || author.period === selectedPeriod;
    const matchesLocation = selectedLocation === "All Locations" || author.location.includes(selectedLocation);
    return matchesSearch && matchesPeriod && matchesLocation;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">Forgotten Authors</h1>
      
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search authors..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              {periods.map((period) => (
                <SelectItem key={period} value={period}>
                  {period}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAuthors.map((author, index) => (
          <Card key={index} className="bg-card hover:bg-accent/5 transition-colors duration-300">
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">{author.name}</CardTitle>
              <p className="text-muted-foreground">{author.period} • {author.location}</p>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">{author.description}</p>
              <Button 
                className="w-full"
                onClick={() => setSelectedAuthor(author)}
              >
                View Biography
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedAuthor && (
        <BiographyModal
          isOpen={!!selectedAuthor}
          onClose={() => setSelectedAuthor(null)}
          author={selectedAuthor}
        />
      )}
    </div>
  );
};

export default ForgottenAuthorsPage; 