'use client';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral-offWhite">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent-pink/20 to-transparent rounded-bl-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent-cyan/10 to-transparent rounded-tr-[100px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-semibold text-primary tracking-wide">
            Creative Studio & Print Shop
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-neutral-slate leading-tight">
            Custom Prints & <br />
            <span className="text-primary">Creative Crafts</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-lg leading-relaxed">
            Stickers, printed materials, and handmade crafts designed to bring your ideas to life. Perfect for businesses and personal gifts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" href="#contact" className="shadow-lg shadow-primary/20">
              Order Now
            </Button>
            <Button variant="outline" size="lg" href="#products" className="group">
              View Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full"
        >
          {/* Abstract Composition Placeholder */}
          <div className="w-full h-full relative">
             <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
                <circle cx="200" cy="200" r="180" fill="#6A5ACD" opacity="0.1" />
                <rect x="50" y="50" width="200" height="250" rx="20" fill="#4B0082" className="animate-float-slow" />
                <circle cx="280" cy="280" r="80" fill="#FFC0CB" className="animate-float-medium" />
                <rect x="220" y="100" width="120" height="120" rx="60" fill="#00FFFF" opacity="0.8" className="animate-float-fast" />
             </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
