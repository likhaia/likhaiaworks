'use client';
import { Button } from './ui/Button';

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden text-center">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
          Ready to bring your ideas to life?
        </h2>
        <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
          Whether it's a small personal project or bulk business orders, we are here to make it happen.
        </p>
        <Button 
            size="lg" 
            href="#contact" 
            className="bg-white text-primary hover:bg-neutral-offWhite shadow-xl"
        >
          Message Us Now
        </Button>
      </div>
    </section>
  );
}
