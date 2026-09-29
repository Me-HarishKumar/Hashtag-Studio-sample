import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, MapPin, Sparkles } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const MAP_URL = "https://maps.app.goo.gl/pNy13o4djpTghdUj6";
  const PHONE_NUMBER = "+91 96000 78892";
  const WHATSAPP_LINK = "https://wa.me/919600078892?text=Hi%20Hashtag%20Studio,%20I%20would%20like%20to%20inquire%20about%20a%20photoshoot.";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative max-w-md w-full glass-panel rounded-3xl p-6 sm:p-8 border border-gold-500/40 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl gold-gradient-bg text-black flex items-center justify-center shadow-gold-glow mx-auto mb-4">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Contact Hashtag Studio</h3>
            <p className="text-xs text-slate-300 mt-1">Connect with us directly for instant pricing & availability</p>
          </div>

          {/* Prompt Action Buttons: WhatsApp & Call ONLY */}
          <div className="space-y-4">
            
            {/* WhatsApp Option */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full p-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-white flex items-center justify-between group transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold text-white">Chat on WhatsApp</div>
                  <div className="text-xs text-emerald-400 font-medium">Instant Response • {PHONE_NUMBER}</div>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1.5 rounded-full border border-emerald-500/30">
                Chat Now →
              </span>
            </a>

            {/* Direct Phone Call Option */}
            <a
              href={`tel:+919600078892`}
              onClick={onClose}
              className="w-full p-4 rounded-2xl bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/40 text-white flex items-center justify-between group transition-all duration-300 shadow-gold-glow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gold-gradient-bg text-black flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold text-white">Call Studio Directly</div>
                  <div className="text-xs text-gold-400 font-medium">{PHONE_NUMBER}</div>
                </div>
              </div>
              <span className="text-xs font-bold text-black gold-gradient-bg px-3 py-1.5 rounded-full shadow-md">
                Call Now →
              </span>
            </a>

          </div>

          {/* Studio Location Link */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-gold-400 transition-colors font-medium"
            >
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>Open Google Maps Location</span>
            </a>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
