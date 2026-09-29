import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';

export default function QuickActionBar({ onOpenBooking }) {
  const PHONE_NUMBER = "919600078892";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 glass-panel border-t border-white/10 shadow-2xl flex items-center justify-between gap-2">
      <a
        href={`tel:+919600078892`}
        className="flex-1 py-3 rounded-xl bg-dark-800 border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-gold-400" />
        <span>Call Studio</span>
      </a>

      <a
        href={`https://wa.me/${PHONE_NUMBER}?text=Hi%20Hashtag%20Studio`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-lg"
      >
        <MessageSquare className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 py-3 rounded-xl gold-gradient-bg text-black font-extrabold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-gold-glow"
      >
        <Sparkles className="w-4 h-4" />
        <span>Book</span>
      </button>
    </div>
  );
}
