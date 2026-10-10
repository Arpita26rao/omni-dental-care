export interface Treatment {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  icon: string;
  isPediatric?: boolean;
}

export interface AppointmentFormData {
  patientName: string;
  phoneNumber: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pediatric' | 'appointments' | 'location';
}
