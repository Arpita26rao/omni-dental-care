import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  MessageSquare,
  Send,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Info
} from 'lucide-react';
import { TREATMENTS, CLINIC_CONTACT } from '../data/treatments';
import { AppointmentFormData } from '../types';
import { QRCodeBooking } from './QRCodeBooking';

interface AppointmentFormProps {
  initialTreatment?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialTreatment = ''
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 2:00 PM)',
    treatment: initialTreatment || TREATMENTS[0].title,
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [preparedWhatsappUrl, setPreparedWhatsappUrl] = useState<string>('');

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  // Compute local calendar date (YYYY-MM-DD) accurately regardless of UTC offset
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
    now.getDate()
  ).padStart(2, '0')}`;

  const validate = () => {
    const newErrors: Partial<Record<keyof AppointmentFormData, string>> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Please enter patient name';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Name must be at least 2 characters';
    }

    // Validate 10-digit phone number (Indian format)
    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phoneNumber = 'Please enter phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    if (!formData.treatment) {
      newErrors.treatment = 'Please select treatment';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Format WhatsApp message with URL encoding
    const messageLines = [
      `*Omni Dental Care - Appointment Request*`,
      `---------------------------------------`,
      `*Patient Name:* ${formData.patientName.trim()}`,
      `*Phone Number:* ${formData.phoneNumber.trim()}`,
      `*Treatment Required:* ${formData.treatment}`,
      `*Preferred Date:* ${formData.preferredDate}`,
      `*Preferred Time Slot:* ${formData.preferredTime}`,
      formData.message.trim() ? `*Additional Notes:* ${formData.message.trim()}` : null,
      `---------------------------------------`,
      `_Sent via Omni Dental Care Website_`
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `${CLINIC_CONTACT.whatsappUrl}?text=${encodedMessage}`;

    setPreparedWhatsappUrl(whatsappUrl);
    setSubmitted(true);

    // Trigger direct link navigation in a new tab (safe fallback link also displayed below)
    const tempLink = document.createElement('a');
    tempLink.href = whatsappUrl;
    tempLink.target = '_blank';
    tempLink.rel = 'noopener noreferrer';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  return (
    <section id="appointment" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2F9FC] text-[#2798CC] rounded-full text-xs font-semibold mb-2 border border-[#2798CC]/20">
            <Calendar className="w-3.5 h-3.5" />
            <span>Fast & Convenient Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading">
            Book an Appointment
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Complete the form below or scan the WhatsApp QR code to request a visit.
          </p>
        </div>

        {/* 2-Column Layout: Form on Left, QR Code on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 md:p-10 relative">
            <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#193D70]">
                Appointment Request Form
              </h3>
              <Sparkles className="w-5 h-5 text-[#168D3D]" />
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#F2FAF4] border border-[#168D3D]/30 text-left" role="status">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#168D3D] shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#193D70]">
                      Request Prepared for WhatsApp!
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Your appointment details are ready to send directly to Omni Dental Care ({CLINIC_CONTACT.phoneFormatted}). If WhatsApp did not open automatically, tap the button below.
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      {preparedWhatsappUrl && (
                        <a
                          href={preparedWhatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#168D3D] hover:bg-[#127733] text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-2xs transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Open WhatsApp Chat</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-semibold text-[#168D3D] underline cursor-pointer"
                      >
                        Edit / New request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
              {/* Patient Name */}
              <div>
                <label
                  htmlFor="appointment-patient-name"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Patient Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="appointment-patient-name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.patientName)}
                    value={formData.patientName}
                    onChange={(e) => {
                      setFormData({ ...formData, patientName: e.target.value });
                      if (errors.patientName) setErrors({ ...errors, patientName: undefined });
                    }}
                    placeholder="e.g. Ramesh Sharma / Master Aarav"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 transition-colors focus:outline-none ${
                      errors.patientName
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-slate-200 focus:border-[#2798CC] focus:ring-1 focus:ring-[#2798CC]'
                    }`}
                    required
                  />
                </div>
                {errors.patientName && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.patientName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="appointment-phone"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Phone Number (WhatsApp) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="appointment-phone"
                    type="tel"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phoneNumber)}
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                    }}
                    placeholder="e.g. 9876543210"
                    maxLength={14}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 transition-colors focus:outline-none ${
                      errors.phoneNumber
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-slate-200 focus:border-[#2798CC] focus:ring-1 focus:ring-[#2798CC]'
                    }`}
                    required
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>

              {/* Treatment of Interest */}
              <div>
                <label
                  htmlFor="appointment-treatment"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Treatment of Interest <span className="text-rose-500">*</span>
                </label>
                <select
                  id="appointment-treatment"
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#2798CC] focus:ring-1 focus:ring-[#2798CC]"
                  required
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} {t.isPediatric ? '(Pediatric Speciality)' : ''}
                    </option>
                  ))}
                  <option value="Other / General Query">Other / General Query</option>
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="appointment-date"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      id="appointment-date"
                      type="date"
                      min={today}
                      aria-invalid={Boolean(errors.preferredDate)}
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                        errors.preferredDate
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-slate-200 focus:border-[#2798CC]'
                      }`}
                      required
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-rose-500">{errors.preferredDate}</p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label
                    htmlFor="appointment-time"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="appointment-time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#2798CC]"
                    >
                      <option value="Morning (10:00 AM - 2:00 PM)">Morning (10:00 AM - 2:00 PM)</option>
                      <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Optional Message */}
              <div>
                <label
                  htmlFor="appointment-message"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Optional Message / Dental Symptoms
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    id="appointment-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your tooth issue, child's age, or specific concern..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:border-[#2798CC] focus:ring-1 focus:ring-[#2798CC]"
                  />
                </div>
              </div>

              {/* Explicit Mandatory Requirement Disclaimer */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-500">
                <Info className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
                <span>
                  <strong>Please note:</strong> Sending this request forwards your appointment details directly to our clinic WhatsApp team. An appointment is officially confirmed once acknowledged by clinic staff.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-base font-semibold py-3.5 px-6 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Appointment Request via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right Column: QR Code Appointment Booking */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <QRCodeBooking />

            {/* Compact direct call option */}
            <div className="px-5 py-3.5 rounded-2xl bg-[#F2F9FC] border border-[#2798CC]/20 flex items-center justify-between gap-3 text-left">
              <span className="text-xs font-semibold text-[#193D70]">
                Need to call reception directly?
              </span>
              <a
                href={`tel:+91${CLINIC_CONTACT.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-[#193D70] shadow-2xs hover:border-[#2798CC]/40 hover:text-[#2798CC] transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#2798CC]" />
                <span>{CLINIC_CONTACT.phone}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
