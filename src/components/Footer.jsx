import React from 'react';
import { Camera, MapPin, Phone, Mail, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';

export default function Footer() {
  const MAP_URL = "https://maps.app.goo.gl/pNy13o4djpTghdUj6";
  const PHONE_NUMBER = "+91 96000 78892";

  return (
    <footer className="bg-black text-slate-400 py-16 border-t border-white/10 relative pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-black font-bold shadow-gold-glow">
                <Camera className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold text-white">
                HASHTAG <span className="gold-gradient-text font-serif italic">Studio</span>
              </span>
            </div>
            <p className="text-xs font-light text-slate-400 leading-relaxed">
              Tambaram's premier luxury studio specializing in Weddings, Pre-Weddings, Maternity, Newborn, and Commercial Photography.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-xl glass-card text-slate-300 hover:text-gold-400 hover:border-gold-500/30 flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl glass-card text-slate-300 hover:text-gold-400 hover:border-gold-500/30 flex items-center justify-center transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl glass-card text-slate-300 hover:text-gold-400 hover:border-gold-500/30 flex items-center justify-center transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#retouching" className="hover:text-gold-400 transition-colors">Before/After Retouching</a></li>
              <li><a href="#portfolio" className="hover:text-gold-400 transition-colors">Portfolio Gallery</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Packages & Services</a></li>
              <li><a href="#calculator" className="hover:text-gold-400 transition-colors">Price Calculator</a></li>
              <li><a href="#reviews" className="hover:text-gold-400 transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Tambaram Studio</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-gold-400 transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>W45V+92, Near Bharath University, Tambaram, Chennai 600073 <ExternalLink className="w-3 h-3 inline ml-1" /></span>
                </a>
              </li>
              <li>
                <a href={`tel:+919600078892`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>info@hashtagphotography.in</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Studio Hours</h4>
            <div className="p-4 rounded-2xl glass-card text-xs space-y-2 border border-white/5">
              <div className="flex justify-between">
                <span>Mon – Fri:</span>
                <span className="text-white font-medium">9:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sat – Sun:</span>
                <span className="text-gold-400 font-bold">9:00 AM – 9:00 PM</span>
              </div>
              <div className="pt-2 text-[10px] text-slate-400 border-t border-white/10">
                Walk-ins & Appointments Welcome
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Hashtag Photography Studio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> for Tambaram & Chennai
          </p>
        </div>

      </div>
    </footer>
  );
}
