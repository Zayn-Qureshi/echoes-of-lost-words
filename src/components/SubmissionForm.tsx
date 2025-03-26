import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const periods = [
  "Ancient (before 500 CE)",
  "Medieval (500-1500)",
  "Renaissance (1300-1600)",
  "Early Modern (1500-1800)",
  "Modern (1800-1950)",
  "Contemporary (1950-present)"
];

interface SubmissionFormProps {
  type: 'manuscript' | 'author' | 'document' | 'collection' | 'research';
  onClose: () => void;
}

const SubmissionForm = ({ type, onClose }: SubmissionFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    period: '',
    description: '',
    source: '',
    contact: '',
    location: '',
    significance: '',
    condition: '',
    references: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      title: '',
      author: '',
      period: '',
      description: '',
      source: '',
      contact: '',
      location: '',
      significance: '',
      condition: '',
      references: '',
      additionalInfo: ''
    });
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm shadow-xl border border-gray-100">
      <CardHeader className="pb-4 pt-6">
        <CardTitle className="text-2xl font-bold text-center vintage-text text-[#1a1a2e]">
          {type === 'manuscript' && 'Submit Lost Manuscript Information'}
          {type === 'author' && 'Submit Author Biography'}
          {type === 'document' && 'Submit Historical Document'}
          {type === 'collection' && 'Submit Personal Collection Details'}
          {type === 'research' && 'Submit Research Findings'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-[#1a1a2e] font-medium">
              {type === 'manuscript' && 'Manuscript Title'}
              {type === 'author' && 'Author Name'}
              {type === 'document' && 'Document Title'}
              {type === 'collection' && 'Collection Name'}
              {type === 'research' && 'Research Title'}
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              required
              className="bg-white border-gray-200 focus:border-[#1a1a2e] focus:ring-1 focus:ring-[#1a1a2e] transition-colors"
            />
          </div>

          {type !== 'author' && (
            <div className="space-y-2">
              <Label htmlFor="author" className="text-[#1a1a2e] font-medium">Author (if known)</Label>
              <Input
                id="author"
                value={formData.author}
                onChange={(e) => handleChange('author', e.target.value)}
                className="bg-white border-gray-200 focus:border-[#1a1a2e] focus:ring-1 focus:ring-[#1a1a2e] transition-colors"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="period" className="text-[#1a1a2e] font-medium">Historical Period</Label>
            <Select value={formData.period} onValueChange={(value) => handleChange('period', value)}>
              <SelectTrigger className="bg-white border-gray-200 focus:border-[#1a1a2e] focus:ring-1 focus:ring-[#1a1a2e] transition-colors">
                <SelectValue placeholder="Select a period" />
              </SelectTrigger>
              <SelectContent>
                {periods.map((period) => (
                  <SelectItem key={period} value={period}>
                    {period}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {(type === 'author' || type === 'manuscript') && (
            <div className="space-y-2">
              <Label htmlFor="location" className="text-[#1a1a2e] font-medium">Location/Origin</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="bg-white border-gray-200 focus:border-[#1a1a2e] focus:ring-1 focus:ring-[#1a1a2e] transition-colors"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="description" className="text-[#1a1a2e] font-medium">
              {type === 'manuscript' && 'Manuscript Description'}
              {type === 'author' && 'Biographical Information'}
              {type === 'document' && 'Document Description'}
              {type === 'collection' && 'Collection Description'}
              {type === 'research' && 'Research Summary'}
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              required
              className="min-h-[100px] bg-white border-gray-200 focus:border-[#1a1a2e] focus:ring-1 focus:ring-[#1a1a2e] transition-colors"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="significance" className="text-[#1a1a2e] font-medium">Historical Significance</Label>
            <Textarea
              id="significance"
              value={formData.significance}
              onChange={(e) => handleChange('significance', e.target.value)}
              className="min-h-[100px] bg-white border-gray-200 focus:border-[#1a1a2e] focus:ring-1 focus:ring-[#1a1a2e] transition-colors"
            />
          </div>

          {(type === 'document' || type === 'collection') && (
            <div className="space-y-2">
              <Label htmlFor="condition" className="text-[#1a1a2e] font-medium">Current Condition/State</Label>
              <Input
                id="condition"
                value={formData.condition}
                onChange={(e) => handleChange('condition', e.target.value)}
                className="bg-white border-gray-200 focus:border-[#1a1a2e] focus:ring-1 focus:ring-[#1a1a2e] transition-colors"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="source" className="text-[#1a1a2e] font-medium">Sources/References</Label>
            <Textarea
              id="source"
              value={formData.source}
              onChange={(e) => handleChange('source', e.target.value)}
              placeholder="Please provide any relevant sources, references, or documentation"
              className="min-h-[100px] bg-white border-gray-200 focus:border-[#1a1a2e] focus:ring-1 focus:ring-[#1a1a2e] transition-colors"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact" className="text-[#1a1a2e] font-medium">Contact Information</Label>
            <Input
              id="contact"
              type="email"
              value={formData.contact}
              onChange={(e) => handleChange('contact', e.target.value)}
              placeholder="Your email address"
              required
              className="bg-white border-gray-200 focus:border-[#1a1a2e] focus:ring-1 focus:ring-[#1a1a2e] transition-colors"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo" className="text-[#1a1a2e] font-medium">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={(e) => handleChange('additionalInfo', e.target.value)}
              className="min-h-[100px] bg-white border-gray-200 focus:border-[#1a1a2e] focus:ring-1 focus:ring-[#1a1a2e] transition-colors"
            />
          </div>

          <div className="flex gap-4 justify-end pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-[#1a1a2e] text-[#1a1a2e] hover:bg-[#1a1a2e]/5"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-[#1a1a2e] hover:bg-[#1a1a2e]/90 text-white"
            >
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SubmissionForm; 