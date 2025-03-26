import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface LostWorkModalProps {
  work: {
    title: string;
    period: string;
    description: string;
    historicalContext?: string;
    culturalSignificance?: string;
    currentStatus?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const LostWorkModal = ({ work, isOpen, onClose }: LostWorkModalProps) => {
  if (!work) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-[#f8f5e6] p-0 overflow-hidden">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mb-2 vintage-text text-[#1a1a2e]">
              {work.title}
            </DialogTitle>
            <p className="text-lg text-[#4A4A4A] mb-4">{work.period}</p>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 vintage-text text-[#1a1a2e]">Overview</h3>
              <p className="text-[#4A4A4A] leading-relaxed">{work.description}</p>
            </div>

            {work.historicalContext && (
              <div className="bg-white/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 vintage-text text-[#1a1a2e]">Historical Context</h3>
                <p className="text-[#4A4A4A] leading-relaxed">{work.historicalContext}</p>
              </div>
            )}

            {work.culturalSignificance && (
              <div className="bg-white/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 vintage-text text-[#1a1a2e]">Cultural Significance</h3>
                <p className="text-[#4A4A4A] leading-relaxed">{work.culturalSignificance}</p>
              </div>
            )}

            {work.currentStatus && (
              <div className="bg-white/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 vintage-text text-[#1a1a2e]">Current Status</h3>
                <p className="text-[#4A4A4A] leading-relaxed">{work.currentStatus}</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LostWorkModal; 