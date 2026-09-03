import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustValue } from './components/TrustValue';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { OffersPromotions } from './components/OffersPromotions';
import { CommunityApartment } from './components/CommunityApartment';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { FestivalPromotions } from './components/FestivalPromotions';
import { StoreGallery } from './components/StoreGallery';
import { Testimonials } from './components/Testimonials';
import { LoyaltyMembership } from './components/LoyaltyMembership';
import { LeadGenContact } from './components/LeadGenContact';
import { StoreLocationHours } from './components/StoreLocationHours';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { MembershipModal } from './components/modals/MembershipModal';
import { SuccessModal } from './components/modals/SuccessModal';
import { STORE_INFO } from './data/supermarketData';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMembershipOpen, setIsMembershipOpen] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVisitStore = () => {
    window.open(STORE_INFO.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-surface-cream text-slate-800 flex flex-col font-sans">
      {/* Sticky Header Nav */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenMembership={() => setIsMembershipOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onNavigate={scrollToSection} />

        {/* Trust & Value Cards */}
        <TrustValue />

        {/* Product Categories (12 Categories) */}
        <Categories onVisitStore={handleVisitStore} />

        {/* Featured Products Showcase */}
        <FeaturedProducts onVisitStore={handleVisitStore} />

        {/* Offers & Promotions */}
        <OffersPromotions onVisitStore={handleVisitStore} />

        {/* Community & Apartment Focus */}
        <CommunityApartment onOpenContact={() => scrollToSection('contact')} />

        {/* Why Choose Vijay Supermarket */}
        <WhyChooseUs />

        {/* About Vijay Supermarket */}
        <AboutUs />

        {/* Festival & Seasonal Campaigns */}
        <FestivalPromotions onNavigateOffers={() => scrollToSection('offers')} />

        {/* Store Photo Gallery */}
        <StoreGallery />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Loyalty & Family Savings Card */}
        <LoyaltyMembership onOpenMembershipModal={() => setIsMembershipOpen(true)} />

        {/* Lead Gen Contact Form */}
        <LeadGenContact onSubmitSuccess={(msg) => setSuccessMessage(msg)} />

        {/* Store Location & Hours Map */}
        <StoreLocationHours />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenMembership={() => setIsMembershipOpen(true)}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Membership Inquiry Modal */}
      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
        onSubmitSuccess={(msg) => setSuccessMessage(msg)}
      />

      {/* Confirmation Toast/Modal */}
      <SuccessModal
        message={successMessage}
        onClose={() => setSuccessMessage(null)}
        onVisitStore={handleVisitStore}
      />
    </div>
  );
}

export default App;
