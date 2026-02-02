'use client';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Sticker, Printer, Scissors, Gift, Briefcase, PenTool } from 'lucide-react';

const services = [
  {
    title: "Custom Stickers",
    desc: "Die-cut, kiss-cut, and sheets for brands or personal use.",
    icon: Sticker,
    color: "bg-accent-pink/20 text-accent-pink-dark",
  },
  {
    title: "Printed Materials",
    desc: "Business cards, flyers, brochures, and invitations.",
    icon: Printer,
    color: "bg-accent-cyan/20 text-accent-cyan-dark",
  },
  {
    title: "Handmade Crafts",
    desc: "Unique, handcrafted items made with attention to detail.",
    icon: Scissors,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Personalized Gifts",
    desc: "Mugs, keychains, and photo prints for special occasions.",
    icon: Gift,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Business Prints",
    desc: "Branding essentials to make your business stand out.",
    icon: Briefcase,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Design Services",
    desc: "Let us help you visualize your ideas before printing.",
    icon: PenTool,
    color: "bg-green-100 text-green-600",
  },
];

export default function Services() {
  return (
    <section id="products" className="py-20 bg-neutral-gray/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-slate mb-4">
            Our Products & Services
          </h2>
          <p className="text-neutral-600">
            From essential business prints to lovely handmade gifts, we craft everything with passion and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-none bg-white">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{service.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
