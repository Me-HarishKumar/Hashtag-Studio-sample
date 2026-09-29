import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';

export default function PortfolioGallery({ onSelectImage }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Luxury Photography Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Featured <span className="gold-gradient-text font-serif italic">Gallery</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Explore our handcrafted photography sessions captured across Tambaram, Chennai, and scenic locations in Tamil Nadu.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'gold-gradient-bg text-black shadow-gold-glow scale-105'
                  : 'glass-card text-slate-300 hover:text-white hover:border-gold-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Animated Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => onSelectImage(item)}
                className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer border border-white/5 hover:border-gold-500/40 transition-all duration-500 shadow-xl"
              >
                {/* Image Aspect Box */}
                <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Tag Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md text-gold-400 text-xs font-bold border border-white/10">
                  {item.tag}
                </div>

                {/* Hover Overlay with Glass Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>
                    <div className="flex items-center gap-1 text-slate-300 text-xs mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      <span>{item.location}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gold-400">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to view full photo</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
