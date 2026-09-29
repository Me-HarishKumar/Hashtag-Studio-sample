import React, { useState } from 'react';
import { Calculator, Check, MessageSquare, Sparkles, Plus } from 'lucide-react';
import { CALCULATOR_OPTIONS } from '../data/servicesData';

export default function PriceEstimator() {
  const [selectedService, setSelectedService] = useState(CALCULATOR_OPTIONS.services[0]);
  const [days, setDays] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState(['drone', 'album']);

  const PHONE_NUMBER = "919600078892";

  const toggleAddOn = (id) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const calculateTotal = () => {
    let base = selectedService.basePrice * days;
    selectedAddOns.forEach((id) => {
      const addOn = CALCULATOR_OPTIONS.addOns.find((a) => a.id === id);
      if (addOn) base += addOn.price;
    });
    return base;
  };

  const totalEstimate = calculateTotal();

  const handleWhatsAppQuote = () => {
    const addOnNames = selectedAddOns
      .map((id) => CALCULATOR_OPTIONS.addOns.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Hi Hashtag Studio! I calculated an estimate on your website:%0A%0A` +
      `📸 Service: ${selectedService.name}%0A` +
      `📅 Days: ${days}%0A` +
      `✨ Add-ons: ${addOnNames || 'None'}%0A` +
      `💰 Estimated Price: ₹${totalEstimate.toLocaleString()}%0A%0A` +
      `Please let me know your availability for booking!`;

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 relative bg-[#060709] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" /> Instant Estimate Tool
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Customize Your <span className="gold-gradient-text font-serif italic">Package Estimate</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Select your shoot requirements below for an instant, transparent price estimate. No hidden fees.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Options Left Side */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Select Service */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
                  1. Select Photoshoot Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CALCULATOR_OPTIONS.services.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedService(srv)}
                      className={`p-3 rounded-2xl text-left text-xs font-semibold border transition-all ${
                        selectedService.id === srv.id
                          ? 'gold-gradient-bg text-black border-gold-400 shadow-gold-glow font-bold'
                          : 'glass-card text-slate-300 border-white/10 hover:border-gold-500/30'
                      }`}
                    >
                      <div>{srv.name}</div>
                      <div className={`text-[11px] font-normal mt-0.5 ${selectedService.id === srv.id ? 'text-black/80 font-semibold' : 'text-slate-400'}`}>
                        From ₹{srv.basePrice.toLocaleString()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Select Duration */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
                  2. Number of Days / Sessions
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDays(d)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                        days === d
                          ? 'bg-gold-500 text-black border-gold-400 shadow-md'
                          : 'glass-card text-slate-300 border-white/10 hover:border-gold-500/30'
                      }`}
                    >
                      {d} {d === 1 ? 'Day' : 'Days'}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Select Add-ons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
                  3. Select Optional Add-ons
                </label>
                <div className="space-y-2.5">
                  {CALCULATOR_OPTIONS.addOns.map((addon) => {
                    const isChecked = selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all text-xs ${
                          isChecked
                            ? 'bg-gold-500/10 border-gold-500/50 text-white'
                            : 'glass-card border-white/10 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                            isChecked ? 'bg-gold-500 border-gold-400 text-black' : 'border-slate-600'
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className="font-medium text-slate-200">{addon.name}</span>
                        </div>
                        <span className="font-bold text-gold-400">+₹{addon.price.toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Total Summary Right Side */}
            <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Shoot Estimate</div>
                <div className="text-4xl font-extrabold gold-gradient-text mt-2">
                  ₹{totalEstimate.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Includes color retouching & raw file delivery</div>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                  <div className="text-xs font-bold text-slate-300">Selected Breakdown:</div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>{selectedService.name} ({days}d)</span>
                    <span className="font-semibold text-slate-200">₹{(selectedService.basePrice * days).toLocaleString()}</span>
                  </div>
                  {selectedAddOns.map((id) => {
                    const item = CALCULATOR_OPTIONS.addOns.find((a) => a.id === id);
                    return item ? (
                      <div key={id} className="flex justify-between text-xs text-slate-400">
                        <span>+ {item.name}</span>
                        <span className="font-semibold text-slate-200">₹{item.price.toLocaleString()}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
