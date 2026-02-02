'use client';
import { motion } from 'framer-motion';

const items = [
  { color: '#FFC0CB', h: 'h-64' },
  { color: '#6A5ACD', h: 'h-80' },
  { color: '#00FFFF', h: 'h-64' },
  { color: '#4B0082', h: 'h-72' },
  { color: '#2F4F4F', h: 'h-64' },
  { color: '#F8F8FF', h: 'h-80' }, // Offwhite might be too light, maybe border
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-slate mb-4">
            Recent Creations
          </h2>
          <p className="text-neutral-600 max-w-xl">
            A glimpse into the projects we've brought to life for our amazing clients.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-full ${item.h} rounded-2xl overflow-hidden shadow-sm break-inside-avoid bg-neutral-100 group`}
                >
                    {/* Placeholder SVG */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: item.color + '20' }}>
                        <svg className="w-1/3 h-1/3 opacity-20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                        </svg>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-medium">Project Name {i + 1}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
