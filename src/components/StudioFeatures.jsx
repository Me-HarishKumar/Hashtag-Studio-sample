import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, ShieldCheck, Sparkles, Wind, Cpu, Image } from 'lucide-react';

export default function StudioFeatures() {
  const features = [
    {
      icon: Wind,
      title: 'AC Studio Floor',
      desc: '100% climate-controlled, comfortable environment for newborns, toddlers, and long bridal dress sessions.'
    },
    {
      icon: Cpu,
      title: 'Sony Full-Frame Gear',
      desc: 'Latest Sony Alpha full-frame cameras, G-Master prime lenses, and Godox professional studio lighting setups.'
    },
    {
      icon: Image,
      title: 'Themed Backgrounds & Props',
      desc: 'Rich variety of baby props, flower setups, maternity gowns, and multi-color paper backdrop rolls.'
    },
    {
      icon: MapPin,
      title: 'Prime Tambaram Location',
      desc: 'Conveniently situated near Bharath University, Tambaram with dedicated customer parking.'
    }
  ];

  return (
    <section id="studio" className="py-24 relative bg-dark-900 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> High-End Studio Infrastructure
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Choose <span className="gold-gradient-text font-serif italic">Hashtag Studio</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Equipped with state-of-the-art camera tech, luxury props, and a peaceful studio setting right here in Tambaram.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-gold-500/40 transition-all duration-300 group shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl gold-gradient-bg text-black flex items-center justify-center shadow-gold-glow mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">{feat.title}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
