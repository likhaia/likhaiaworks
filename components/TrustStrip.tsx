import { ShieldCheck, Star, Zap, Heart } from 'lucide-react';

const benefits = [
  { icon: Star, text: "Custom Made" },
  { icon: ShieldCheck, text: "Quality Materials" },
  { icon: Heart, text: "Handmade w/ Love" },
  { icon: Zap, text: "Fast Response" },
];

export default function TrustStrip() {
  return (
    <div className="bg-white border-y border-neutral-100 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2 text-neutral-600 hover:text-primary transition-colors">
              <item.icon size={28} strokeWidth={1.5} />
              <span className="font-medium text-sm md:text-base uppercase tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
