import React from 'react';
import { Sparkles, Camera, Heart, Star, MapPin } from 'lucide-react';

export default function TickerBanner() {
  const items = [
    { text: 'TAMBARAM LUXURY STUDIO', icon: MapPin },
    { text: 'CANVAS & CANVERA ALBUMS', icon: Camera },
    { text: 'WEDDINGS & MUHURTHAM', icon: Heart },
    { text: 'MATERNITY & BABY SHOOTS', icon: Sparkles },
    { text: '4.9★ GOOGLE RATED', icon: Star },
    { text: 'AIR-CONDITIONED STUDIO FLOOR', icon: Camera },
    { text: 'PRE-WEDDING CINEMATIC REELS', icon: Sparkles }
  ];

  return (
    <div className="relative py-4 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 border-y border-gold-500/20 overflow-hidden shadow-2xl">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 mx-8 text-xs font-bold tracking-widest text-slate-300 uppercase">
              <Icon className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="hover:text-gold-400 transition-colors">{item.text}</span>
              <span className="text-gold-500/40 ml-4">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
