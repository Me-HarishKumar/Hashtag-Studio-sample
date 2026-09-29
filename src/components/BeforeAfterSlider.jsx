import React, { useState, useRef } from 'react';
import { Sliders, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="retouching" className="py-20 relative bg-dark-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Signature Retouching Magic
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See The <span className="gold-gradient-text font-serif italic">Hashtag Studio</span> Difference
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Drag the interactive slider below to see how our master color grading & skin retouching elevates raw camera captures into luxury gallery masterpieces.
          </p>
        </div>

        {/* Interactive Comparison Canvas */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative max-w-4xl mx-auto aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden select-none cursor-ew-resize glass-panel shadow-2xl border border-white/10"
        >
          {/* AFTER Image (Master Retouched - Full Background) */}
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80"
            alt="Hashtag Master Edit"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Master Edit Badge */}
          <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-xl bg-gold-500 text-black text-xs font-bold shadow-lg flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Edited</span>
          </div>

          {/* BEFORE Image (Raw Unedited - Clipped) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden z-10 border-r-2 border-gold-400"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80"
              alt="Raw Unedited Camera Shot"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[0.8] saturate-[0.6] grayscale-[0.2]"
              style={{
                width: containerRef.current ? `${containerRef.current.getBoundingClientRect().width}px` : '100%',
                maxWidth: 'none'
              }}
            />
            {/* Raw Unedited Badge */}
            <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
              Raw Camera Capture
            </div>
          </div>

          {/* Draggable Divider Control Handle */}
          <div
            className="absolute top-0 bottom-0 z-30 w-1 bg-gold-400 shadow-gold-glow flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 rounded-full gold-gradient-bg text-black flex items-center justify-center shadow-gold-glow border-2 border-black transform -translate-x-1/2">
              <Sliders className="w-5 h-5 rotate-90" />
            </div>
          </div>

        </div>

        {/* Footer instruction note */}
        <div className="text-center mt-4 text-xs text-slate-400 font-medium">
          ↔ Drag slider left or right to compare Raw vs Studio Master Edit
        </div>

      </div>
    </section>
  );
}
