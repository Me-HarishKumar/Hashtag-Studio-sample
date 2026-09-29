import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Smile, Sliders, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

const iconMap = {
  Camera: Camera,
  Heart: Heart,
  Smile: Smile,
  Sliders: Sliders
};

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-24 relative bg-dark-900 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Studio Packages & Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tailored Photography <span className="gold-gradient-text font-serif italic">Experiences</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            From extravagant traditional weddings to intimate studio maternity shoots, we deliver high-end imagery customized for your needs.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Camera;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative rounded-3xl overflow-hidden glass-card border transition-all duration-300 flex flex-col justify-between group ${
                  service.popular
                    ? 'border-gold-500/40 shadow-gold-glow bg-gradient-to-b from-dark-800 to-dark-900'
                    : 'border-white/10 hover:border-gold-500/30'
                }`}
              >
                {/* Popular Ribbon */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10 px-3.5 py-1 rounded-full gold-gradient-bg text-black text-xs font-extrabold shadow-md flex items-center gap-1 animate-pulse-glow">
                    <Sparkles className="w-3.5 h-3.5" /> Most Booked
                  </div>
                )}

                {/* Top Image Banner */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={service.coverImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 rounded-2xl gold-gradient-bg text-black flex items-center justify-center shadow-gold-glow group-hover:rotate-6 transition-transform">
                    <IconComponent className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-gold-300 transition-colors">{service.title}</h3>
                    <p className="text-xs text-gold-400 font-medium mt-1">{service.subtitle}</p>

                    {/* Features List */}
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Starting From</span>
                      <span className="text-2xl font-extrabold text-white">₹{service.priceStarting.toLocaleString()}</span>
                    </div>

                    <button
                      onClick={onOpenBooking}
                      className="px-5 py-2.5 rounded-xl gold-gradient-bg text-black font-bold text-xs shadow-gold-glow hover:brightness-110 flex items-center gap-1.5 transition-all group-hover:scale-105"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
