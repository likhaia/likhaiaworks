'use client';
import { motion } from 'framer-motion';
import { Send, Settings, Printer, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: Send,
    title: "1. Send Your Idea",
    desc: "Message us your design, concept, or inspiration.",
  },
  {
    icon: Settings,
    title: "2. We Customize",
    desc: "We'll refine the details and confirm the specs with you.",
  },
  {
    icon: Printer,
    title: "3. Production",
    desc: "Our team prints and crafts your order with care.",
  },
  {
    icon: PackageCheck,
    title: "4. Delivery",
    desc: "Your custom goods are packed and shipped/ready for pickup.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-neutral-offWhite">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-slate mb-4">
            How It Works
          </h2>
          <p className="text-neutral-600">
            Simple, transparent, and hassle-free process.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-neutral-200 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-sm text-center md:bg-transparent md:shadow-none md:text-left relative"
            >
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 shadow-lg shadow-primary/30 text-xl font-bold relative z-10">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-neutral-slate mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
