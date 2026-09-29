import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ExternalLink, Sparkles } from 'lucide-react';

export default function LocationContact() {
  const MAP_URL = "https://maps.app.goo.gl/pNy13o4djpTghdUj6";
  const PHONE_NUMBER = "+91 96000 78892";
  const WHATSAPP_LINK = "https://wa.me/919600078892?text=Hi%20Hashtag%20Studio,%20I%20would%20like%20to%20inquire%20about%20a%20photoshoot.";

  return (
    <section id="contact" className="py-24 relative bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" /> Direct Contact & Location
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Visit & Contact <span className="gold-gradient-text font-serif italic">Hashtag Studio</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Conveniently located in Tambaram, Chennai near Bharath University. Contact us directly via WhatsApp or Phone call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Direct Call & WhatsApp Action Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* WhatsApp Card */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-8 rounded-3xl border border-emerald-500/40 hover:border-emerald-400 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Instant Chat</div>
                  <div className="text-xl font-extrabold text-white mt-1">Connect on WhatsApp</div>
                  <div className="text-xs text-slate-300 mt-0.5">Quick replies for quotes & shoot slots</div>
                </div>
              </div>
              <span className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md">
                Chat Now
              </span>
            </a>

            {/* Direct Phone Call Card */}
            <a
              href={`tel:+919600078892`}
              className="glass-panel p-8 rounded-3xl border border-gold-500/40 hover:border-gold-400 transition-all flex items-center justify-between group shadow-gold-glow"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl gold-gradient-bg text-black flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs text-gold-400 font-bold uppercase tracking-wider">Direct Call</div>
                  <div className="text-xl font-extrabold text-white mt-1">{PHONE_NUMBER}</div>
                  <div className="text-xs text-slate-300 mt-0.5">Speak with our studio lead photographer</div>
                </div>
              </div>
              <span className="hidden sm:inline-flex px-4 py-2 rounded-xl gold-gradient-bg text-black text-xs font-bold shadow-md">
                Call Now
              </span>
            </a>

            {/* Address & Hours */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Studio Address</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    W45V+92, Near Bharath University, Tambaram, Chennai, Tamil Nadu 600073
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Studio Hours</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Monday – Sunday: <span className="text-emerald-400 font-semibold">9:00 AM – 9:00 PM</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Location Container */}
          <div className="lg:col-span-6 glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-400" /> Studio Location Map
                </h3>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-gold-400 hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Interactive Embed with map URL link */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] sm:aspect-[16/10] bg-slate-900 group">
                <iframe
                  title="Hashtag Photography Official Google Maps Location"
                  src="https://maps.google.com/maps?q=Hashtag+Photography,Tambaram,Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />

                {/* Direct Google Maps Badge Overlay */}
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 z-10 px-4 py-2 rounded-xl gold-gradient-bg text-black text-xs font-bold shadow-gold-glow flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Navigate on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
