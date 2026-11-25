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
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>('');

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

        {/* C. Our Clinic / About Section */}
        <AboutSection onBookAppointmentClick={() => handleBookAppointmentClick()} />

        {/* D. Dental Treatments (8 Treatments) */}
        <TreatmentsSection
          onSelectTreatmentForBooking={(title) => handleBookAppointmentClick(title)}
        />

        {/* E. Our Doctors (Dr. Divya Rao, Pedodontist) */}
        <DoctorProfile onBookAppointmentClick={() => handleBookAppointmentClick()} />

        {/* F. Clinic Gallery */}
        <GallerySection />

        {/* G. Patient Reviews */}
        <ReviewsSection />

        {/* 7. Book Appointment */}
        <AppointmentForm initialTreatment={selectedTreatmentForBooking} />

        {/* 8. Location & Contact (with Google Maps) */}
        <ContactSection />

        {/* 9. FAQ */}
        <FAQSection />
      </main>

      {/* L. Footer */}
      <Footer
        onBookAppointmentClick={() => handleBookAppointmentClick()}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

