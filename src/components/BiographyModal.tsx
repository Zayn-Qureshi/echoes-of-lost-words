import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface BiographyModalProps {
  author: {
    name: string;
    period: string;
    location: string;
    description: string;
    biography?: string;
    contributions?: string;
    lostWorks?: string;
    influence?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const BiographyModal = ({ author, isOpen, onClose }: BiographyModalProps) => {
  if (!author) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-[#f8f5e6] p-0 overflow-hidden">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mb-2 vintage-text text-[#1a1a2e]">
              {author.name}
            </DialogTitle>
            <p className="text-lg text-[#4A4A4A] mb-4">{author.period} • {author.location}</p>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 vintage-text text-[#1a1a2e]">Overview</h3>
              <p className="text-[#4A4A4A] leading-relaxed">{author.description}</p>
            </div>

            {author.biography && (
              <div className="bg-white/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 vintage-text text-[#1a1a2e]">Life & Career</h3>
                <p className="text-[#4A4A4A] leading-relaxed">{author.biography}</p>
              </div>
            )}

            {author.contributions && (
              <div className="bg-white/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 vintage-text text-[#1a1a2e]">Literary Contributions</h3>
                <p className="text-[#4A4A4A] leading-relaxed">{author.contributions}</p>
              </div>
            )}

            {author.lostWorks && (
              <div className="bg-white/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 vintage-text text-[#1a1a2e]">Lost Works</h3>
                <p className="text-[#4A4A4A] leading-relaxed">{author.lostWorks}</p>
              </div>
            )}

            {author.influence && (
              <div className="bg-white/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 vintage-text text-[#1a1a2e]">Cultural Impact & Legacy</h3>
                <p className="text-[#4A4A4A] leading-relaxed">{author.influence}</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BiographyModal; 