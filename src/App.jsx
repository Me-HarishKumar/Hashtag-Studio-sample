import React, { useState, useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerBanner from './components/TickerBanner';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import PortfolioGallery from './components/PortfolioGallery';
import LightboxModal from './components/LightboxModal';
import Services from './components/Services';
import PriceEstimator from './components/PriceEstimator';
import StudioFeatures from './components/StudioFeatures';
import Testimonials from './components/Testimonials';
import LocationContact from './components/LocationContact';
import BookingModal from './components/BookingModal';
import QuickActionBar from './components/QuickActionBar';
import LiveNotificationToast from './components/LiveNotificationToast';
import Footer from './components/Footer';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  // Ambient Cursor Glow Tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#060709] text-slate-100 flex flex-col font-sans selection:bg-gold-500 selection:text-black overflow-x-hidden">
      
      {/* Top Gold Scroll Progress Line */}
      <ScrollProgress />

      {/* Dynamic Cursor Ambient Spotlight */}
      <div
        className="fixed pointer-events-none z-30 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[130px] transition-transform duration-75 ease-out hidden md:block"
        style={{
          left: `${cursorPos.x - 250}px`,
          top: `${cursorPos.y - 250}px`,
        }}
      />

      {/* Header Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Dynamic Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <TickerBanner />
        <BeforeAfterSlider />
        <PortfolioGallery onSelectImage={(img) => setSelectedImage(img)} />
        <Services onOpenBooking={() => setIsBookingOpen(true)} />
        <PriceEstimator />
        <StudioFeatures />
        <Testimonials />
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Social Proof Toast Notifications */}
      <LiveNotificationToast />

      {/* Interactive Lightbox Viewer */}
      {selectedImage && (
        <LightboxModal
          selectedImage={selectedImage}
          onClose={(nextImg) => setSelectedImage(nextImg)}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      )}

      {/* Call / WhatsApp Direct Prompt Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <QuickActionBar onOpenBooking={() => setIsBookingOpen(true)} />

    </div>
  );
}
