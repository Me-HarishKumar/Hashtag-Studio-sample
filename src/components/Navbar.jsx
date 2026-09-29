import React, { useState, useEffect } from 'react';
import { Camera, Phone, MessageSquare, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const PHONE_NUMBER = "+919600078892";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Retouching', href: '#retouching' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Studio', href: '#studio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 glass-panel shadow-2xl' : 'py-5 bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-black font-bold shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
            <Camera className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wider text-white flex items-center gap-1">
              HASHTAG <span className="gold-gradient-text font-serif italic text-lg font-bold">Studio</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">Tambaram • Chennai</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 glass-card px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-gold-400 hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=Hi%20Hashtag%20Studio,%20I%20would%20like%20to%20inquire%20about%20a%20photoshoot.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl gold-gradient-bg text-black font-semibold text-xs shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book / Inquire</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl glass-card text-slate-200 hover:text-gold-400"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-white/5 text-sm font-medium text-slate-200 hover:bg-gold-500/20 hover:text-gold-400 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex gap-2">
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=Hi%20Hashtag%20Studio`}
              className="flex-1 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="flex-1 py-3 gold-gradient-bg text-black rounded-xl text-xs font-bold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Book Shoot
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
