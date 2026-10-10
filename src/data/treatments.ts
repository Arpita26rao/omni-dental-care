import { Treatment } from '../types';

export const CLINIC_CONTACT = {
  name: 'Omni Dental Care',
  doctorName: 'Dr. Divya Rao',
  qualifications: 'B.D.S., M.D.S.',
  specialization: 'Consultant Pedodontist (Pediatric Dentist)',
  phone: '8528043685',
  phoneFormatted: '+91 85280 43685',
  email: 'theomnidentalcare@gmail.com',
  instagram: '@dentalcare_omni',
  instagramUrl: 'https://www.instagram.com/dentalcare_omni/',
  address: 'Borkhera Labour Chauraha, Opposite Sanjay Gandhi School, Kota, Rajasthan, India.',
  city: 'Kota, Rajasthan',
  whatsappUrl: 'https://wa.me/918528043685',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Omni+Dental+Care+Borkhera+Labour+Chauraha+Opposite+Sanjay+Gandhi+School+Kota+Rajasthan',
  googleReviewsUrl: 'https://www.google.com/search?q=Omni+Dental+Care+Borkhera+Kota+Rajasthan+reviews',
  defaultQrMessage: 'Hello Omni Dental Care, I would like to book a dental appointment. Please share the available slots.'
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    tagline: 'Specialized gentle oral care for infants, children & teens',
    description: 'Led by Consultant Pedodontist Dr. Divya Rao (M.D.S.), our child-friendly care focuses on early prevention, pain-free cavity management, habit counseling, and creating a fearless dental experience.',
    benefits: [
      'Child-psychology based gentle approach',
      'Early cavity detection & tooth fillings',
      'Habit correction (thumb-sucking, tongue thrusting)',
      'Pit & fissure sealants and fluoride protection'
    ],
    icon: 'Baby',
    isPediatric: true
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    tagline: 'Preserve your natural tooth with painless endodontic therapy',
    description: 'Relieve deep toothache and infection without extraction. We use advanced rotary endodontics and apex locators to clean, sanitize, and seal the infected root canal smoothly.',
    benefits: [
      'Alleviates acute toothache and infection',
      'Saves natural tooth structure and jaw alignment',
      'Precision rotary instrumentation for comfort',
      'Finished with durable protective dental crowns'
    ],
    icon: 'Activity'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    tagline: 'Permanent, lifelike replacement for missing teeth',
    description: 'Restore natural chewing function, facial structure, and smile confidence with biocompatible titanium implants designed to integrate seamlessly with your jawbone.',
    benefits: [
      'Permanent foundation for crowns and bridges',
      'Prevents bone loss and facial sagging',
      'Looks, feels, and functions like natural teeth',
      'No trimming or alteration of adjacent teeth'
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 'braces-orthodontics',
    title: 'Braces & Orthodontics',
    tagline: 'Straighten crooked teeth and correct bite alignment',
    description: 'Customized orthodontic solutions for children, adolescents, and adults to align misaligned teeth, close unwanted gaps, and achieve balanced facial harmony.',
    benefits: [
      'Metal and aesthetic ceramic braces options',
      'Clear aligner solutions for discreet straightening',
      'Corrects overbites, underbites, and crowded teeth',
      'Improves bite function and ease of cleaning'
    ],
    icon: 'Smile'
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    tagline: 'Safe, professional brightening for a radiant smile',
    description: 'Clinically administered bleaching procedures to effectively lift stubborn coffee, tea, and tobacco stains while preserving enamel integrity and preventing tooth sensitivity.',
    benefits: [
      'Visibly brighter shade in a single clinical session',
      'Safe on enamel under professional dentist supervision',
      'Removes deep surface and lifestyle discolorations',
      'Customized post-whitening sensitivity protection'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'preventive-dental-care',
    title: 'Preventive Dental Care',
    tagline: 'Proactive oral health preservation and hygiene',
    description: 'Routine scaling, tartar removal, professional polishing, and thorough oral screening to catch decay and gum issues before they cause pain or complex complications.',
    benefits: [
      'Professional ultrasonic scaling & polishing',
      'Comprehensive gum and periodontal check',
      'Personalized brushing & flossing technique guidance',
      'Preventive fluoride applications for high-decay risk'
    ],
    icon: 'Shield'
  },
  {
    id: 'tooth-extraction',
    title: 'Tooth Extraction',
    tagline: 'Gentle, safe removal of damaged or impacted teeth',
    description: 'Careful removal of severely decayed, unrestorable teeth or symptomatic impacted wisdom teeth under local anesthesia with post-extraction recovery guidance.',
    benefits: [
      'Comfort-focused local anesthesia management',
      'Specialized care for impacted third molars (wisdom teeth)',
      'Clear, step-by-step post-operative care advice',
      'Timely consultation for future tooth replacement'
    ],
    icon: 'Scissors'
  },
  {
    id: 'general-dental-consultation',
    title: 'General Dental Consultation',
    tagline: 'Comprehensive oral examination & diagnostic planning',
    description: 'Thorough evaluation of your teeth, gums, jaw joints, and oral mucosa followed by an honest, personalized treatment plan explained in clear, transparent terms.',
    benefits: [
      'Detailed clinical inspection & diagnostic assessment',
      'Clear discussion of treatment options and priorities',
      'Second opinions on complex dental concerns',
      'Transparent explanations with zero pressure'
    ],
    icon: 'FileText'
  }
];
