import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative bg-[#0a0b0e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-current" /> Verified Client Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved By <span className="gold-gradient-text font-serif italic">1,200+ Families</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Read authentic Google feedback from couples and parents who trusted Hashtag Photography with their special moments.
          </p>

          {/* Rating Badge */}
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-card border border-gold-500/30 shadow-gold-glow">
            <span className="text-2xl font-black text-white">4.9</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-xs text-slate-300 font-bold border-l border-white/10 pl-3">
              Google Maps Rating (180+ Reviews)
            </span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between relative group shadow-xl"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-gold-500/20 transition-colors" />

              <div>
                {/* Rating stars */}
                <div className="flex text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-slate-200 font-light leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-gold-500 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{review.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <p className="text-[11px] text-slate-400">{review.role} • {review.location}</p>
                  </div>
                </div>

                <span className="text-[11px] text-slate-500 font-medium">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
