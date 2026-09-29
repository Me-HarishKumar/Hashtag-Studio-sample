import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Star, MapPin, Sparkles, ArrowRight, ShieldCheck, Heart, Aperture } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=80',
    title: 'Muhurtham & Candid Weddings'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80',
    title: 'Pre-Wedding Cinematic Stories'
  },
  {
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1920&q=80',
    title: 'Gentle Maternity & Baby Portraits'
  }
];

export default function Hero({ onOpenBooking }) {
  const MAP_URL = "https://maps.app.goo.gl/pNy13o4djpTghdUj6";
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-[#060709]">
      
      {/* Background Slideshow with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.15]"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-[#060709]/75 to-[#060709]/90" />
      </div>

      {/* Rotating Background Camera Aperture Graphical Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-10">
        <Aperture className="w-[700px] h-[700px] text-gold-500 animate-spin-slow" />
      </div>

      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gold-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Location & Google Rating Badge */}
        <motion.a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-gold-500/40 text-xs font-semibold text-slate-200 mb-8 shadow-gold-glow hover:scale-105 transition-all"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-gold-400 animate-ping" />
          <MapPin className="w-4 h-4 text-gold-400" />
          <span>Tambaram, Chennai</span>
          <span className="text-slate-500">•</span>
          <div className="flex items-center text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="ml-1 text-white font-extrabold">4.9</span>
            <span className="ml-1 text-slate-400 font-normal">(180+ Google Reviews)</span>
          </div>
        </motion.a>

        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto"
        >
          Capturing Timeless <br />
          <span className="gold-gradient-text font-serif italic font-normal">Emotions & Masterpieces</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Hashtag Photography is Tambaram's luxury studio for Weddings, Pre-Weddings, Maternity, and Baby Portraits near Bharath University.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl gold-gradient-bg text-black font-extrabold text-sm shadow-gold-glow hover:brightness-110 flex items-center justify-center gap-2.5 group"
          >
            <Sparkles className="w-5 h-5" />
            <span>Inquire / Call / WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel text-white font-semibold text-sm border border-white/15 hover:border-gold-500/50 transition-all flex items-center justify-center gap-2"
          >
            <Camera className="w-5 h-5 text-gold-400" />
            <span>Explore Portfolio</span>
          </motion.a>
        </motion.div>

        {/* Dynamic Animated Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {[
            { value: '1,200+', label: 'Happy Clients & Shoots', icon: Heart, color: 'text-red-500' },
            { value: '4.9 ★★★★★', label: 'Google Maps Rating', gold: true },
            { value: 'AC Studio', label: 'Climate Controlled Floor', icon: ShieldCheck, color: 'text-emerald-400' },
            { value: '48 Hours', label: 'Fast Edited Delivery' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
              className="glass-card p-5 rounded-2xl text-left border border-white/10 hover:border-gold-500/40 transition-all shadow-xl"
            >
              <div className={`text-2xl font-extrabold flex items-center gap-1 ${stat.gold ? 'gold-gradient-text' : 'text-white'}`}>
                <span>{stat.value}</span>
                {stat.icon && <stat.icon className={`w-4 h-4 ${stat.color} fill-current`} />}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === i ? 'w-10 gold-gradient-bg' : 'w-2.5 bg-white/20'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
