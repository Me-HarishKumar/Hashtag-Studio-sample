import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';

export default function LightboxModal({ selectedImage, onClose, onOpenBooking }) {
  if (!selectedImage) return null;

  const currentIndex = GALLERY_ITEMS.findIndex(item => item.id === selectedImage.id);

  const handlePrev = (e) => {
    e?.stopPropagation();
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    onClose(GALLERY_ITEMS[prevIndex]);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    onClose(GALLERY_ITEMS[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
        
        {/* Close Button */}
        <button
          onClick={() => onClose(null)}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-black transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev & Next Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-black transition-all hidden sm:flex"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-black transition-all hidden sm:flex"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-5xl w-full max-h-[90vh] glass-panel rounded-3xl overflow-hidden flex flex-col lg:flex-row border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Container */}
          <div className="lg:w-2/3 bg-black flex items-center justify-center relative overflow-hidden min-h-[300px] sm:min-h-[450px]">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain max-h-[75vh]"
            />
          </div>

          {/* Details Sidebar */}
          <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between bg-dark-800/90 border-t lg:border-t-0 lg:border-l border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold mb-4">
                {selectedImage.tag}
              </div>
              
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                {selectedImage.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2 font-medium">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>{selectedImage.location}</span>
              </div>

              <p className="mt-4 text-sm text-slate-300 font-light leading-relaxed">
                {selectedImage.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  onClose(null);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl gold-gradient-bg text-black font-bold text-xs shadow-gold-glow flex items-center justify-center gap-2 hover:brightness-110 transition-all"
              >
                <Sparkles className="w-4 h-4" /> Book Shoot Like This
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
