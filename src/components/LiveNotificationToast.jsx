import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, MapPin, Heart } from 'lucide-react';

const NOTIFICATIONS = [
  {
    id: 1,
    title: 'New Booking Inquiry',
    detail: 'Selaiyur, Tambaram • Wedding Shoot',
    icon: Sparkles,
    time: '2 mins ago'
  },
  {
    id: 2,
    title: '5-Star Review Received',
    detail: 'Karthik & Deepa • "Best studio in Tambaram!"',
    icon: Star,
    time: '15 mins ago'
  },
  {
    id: 3,
    title: 'Dates Reserved',
    detail: 'Maternity & Baby Shoot booked for Oct 12',
    icon: Heart,
    time: '1 hour ago'
  }
];

export default function LiveNotificationToast() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show toast after 3 seconds, then cycle every 10 seconds
    const initialTimer = setTimeout(() => setVisible(true), 3000);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const notif = NOTIFICATIONS[currentIdx];
  const Icon = notif.icon;

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block max-w-xs pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-3.5 rounded-2xl border border-gold-500/40 shadow-gold-glow pointer-events-auto flex items-center gap-3 backdrop-blur-xl"
          >
            <div className="w-10 h-10 rounded-xl gold-gradient-bg text-black flex items-center justify-center shrink-0 shadow-md">
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-white truncate">{notif.title}</span>
                <span className="text-[10px] text-gold-400 font-semibold ml-2">{notif.time}</span>
              </div>
              <p className="text-[11px] text-slate-300 truncate mt-0.5">{notif.detail}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
