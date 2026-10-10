/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { DoctorProfile } from './components/DoctorProfile';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentForm } from './components/AppointmentForm';
import { LocationMap } from './components/LocationMap';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AssetUploadModal } from './components/AssetUploadModal';

export default function App() {
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>('');
  const [isAssetModalOpen, setIsAssetModalOpen] = useState<boolean>(false);

  const handleBookAppointmentClick = (treatmentTitle?: string) => {
    if (treatmentTitle) {
      setSelectedTreatmentForBooking(treatmentTitle);
    }
    const appointmentElement = document.getElementById('appointment');
    if (appointmentElement) {
      appointmentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreTreatmentsClick = () => {
    const treatmentsElement = document.getElementById('treatments');
    if (treatmentsElement) {
      treatmentsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-[#2798CC]/20 selection:text-[#193D70]">
      {/* Top Header / Sticky Navbar */}
      <Navbar
        onBookAppointmentClick={() => handleBookAppointmentClick()}
        onManageAssetsClick={() => setIsAssetModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* A. Hero Section */}
        <Hero
          onBookAppointmentClick={() => handleBookAppointmentClick()}
          onExploreTreatmentsClick={handleExploreTreatmentsClick}
        />

        {/* B. Verified Trust Section */}
        <TrustSection />

        {/* C. About The Clinic */}
        <AboutSection onBookAppointmentClick={() => handleBookAppointmentClick()} />

        {/* D. Dental Treatments (8 Treatments) */}
        <TreatmentsSection
          onSelectTreatmentForBooking={(title) => handleBookAppointmentClick(title)}
        />

        {/* E. Meet Our Doctor (Dr. Divya Rao, Pedodontist) */}
        <DoctorProfile onBookAppointmentClick={() => handleBookAppointmentClick()} />

        {/* F. Clinic Gallery */}
        <GallerySection />

        {/* G. Patient Reviews */}
        <ReviewsSection />

        {/* H. Appointment Booking (Form + QR Code Booking) */}
        <AppointmentForm initialTreatment={selectedTreatmentForBooking} />

        {/* I. Location & Google Maps */}
        <LocationMap />

        {/* J. Contact Section (with QR Code Booking) */}
        <ContactSection />

        {/* K. FAQ Section */}
        <FAQSection />
      </main>

      {/* L. Footer */}
      <Footer
        onBookAppointmentClick={() => handleBookAppointmentClick()}
        onManageAssetsClick={() => setIsAssetModalOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Clinic Asset & Photograph Manager Modal */}
      <AssetUploadModal
        isOpen={isAssetModalOpen}
        onClose={() => setIsAssetModalOpen(false)}
      />
    </div>
  );
}
