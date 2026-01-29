
import React from 'react';
import { Location, Job } from './types';
import { Search, Users, ShieldCheck, UserCheck, Heart, Scale, Target, Eye, Globe, BookOpen, FileCheck, Info, AlertTriangle, Lightbulb, FileText, Activity, Fingerprint, Plane } from 'lucide-react';

export const COMPANY_INFO = {
  name: 'Pneuma Nikos Group Ltd',
  slogan: 'Feeding the Universe',
  license: 'E24050028',
  licenseValidityStart: 'May 31, 2024',
  licenseValidityEnd: 'May 30, 2026',
  eemisRegistration: 'EEMIS-PN-2024-UG',
  phone1: '+256 702 772 221',
  phone2: '+256 705 034 097',
  phone3: '+256 701 613 895',
  whatsapp: '256702772221',
  email: 'info@pneumanikosgroupltd.com',
  address: 'P.O. BOX 273, Kigoowa Road, Kampala Rubaga (Ntinda area)',
  bank: 'Diamond Trust Bank Uganda Ltd',
  social: {
    facebook: 'https://facebook.com/pneumanikosgroupltd',
    instagram: 'https://instagram.com/pneumanikosgroupltd'
  },
  mission: 'To connect Ugandan talent with verified international opportunities in the Middle East through a platform of absolute transparency, ethical recruitment, and family-based trust.',
  vision: 'To be the Recruitment Consultancy of choice for both candidates and international partners, known for unmatched transparency, reliability, and human capital excellence.'
};

export const COUNTRY_GUIDES = [
  {
    country: Location.SAUDI_ARABIA,
    image: 'https://images.unsplash.com/photo-1586724230413-88229b1979b0?q=80&w=600&auto=format&fit=crop',
    highlights: ['Rich cultural heritage', 'Tax-free income', 'Free accommodation often included'],
    culture: 'Conservative Islamic values; strict dress code in public.',
    rights: 'Protection under Saudi Labor Law; workers must keep their passports.'
  },
  {
    country: Location.DUBAI,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
    highlights: ['Global trade hub', 'Modern infrastructure', 'Rapid career growth'],
    culture: 'Fast-paced, high-standard hospitality, and multi-lingual.',
    rights: 'MOHRE regulated contracts; electronic wage payment systems.'
  }
];

export const GALLERY_IMAGES = [
  { url: 'https://i.postimg.cc/R0rV6yMx/IMG-0028-JPG.jpg', title: 'Professional Reception Area' },
  { url: 'https://i.postimg.cc/pL5LdRM4/IMG-0029-JPG.jpg', title: 'Consultation & Registration' },
  { url: 'https://i.postimg.cc/MTq6tBfK/IMG-0030-JPG.jpg', title: 'Verified Documentation' },
  { url: 'https://i.postimg.cc/7LvYGdxx/IMG-0031-JPG.jpg', title: 'Candidate Briefing Session' },
  { url: 'https://i.postimg.cc/nz2HWLq2/IMG-0032-JPG.jpg', title: 'Agency Licensing Display' },
  { url: 'https://i.postimg.cc/Nf5gNBFq/IMG-0033-JPG.jpg', title: 'Team Collaboration' },
  { url: 'https://i.postimg.cc/SQZS7JyH/IMG-0034-JPG.jpg', title: 'Official Recruitment Portal' },
  { url: 'https://i.postimg.cc/VNjsjg69/IMG-0035-JPG.jpg', title: 'Pre-Departure Orientation' },
  { url: 'https://i.postimg.cc/jdLs8t2z/IMG-0036-JPG.jpg', title: 'Success Milestones' },
  { url: 'https://i.postimg.cc/KjY1BzHj/IMG-0064-JPG.jpg', title: 'Official Operations Office' },
];

export const RECRUITMENT_TIPS = [
  {
    title: 'Document Checklist',
    icon: <FileCheck className="w-5 h-5" />,
    items: [
      'Valid Passport (at least 1 year validity)',
      'Academic Certificates (Originals)',
      'Birth Certificate',
      'Recent Passport Photos (White background)',
      'Medical Fitness Certificate (GHC approved)'
    ]
  },
  {
    title: 'Interview Preparation',
    icon: <Users className="w-5 h-5" />,
    items: [
      'Research the company/employer',
      'Dress professionally and neatly',
      'Be honest about your experience',
      'Speak clearly in English',
      'Arrive 15 minutes early'
    ]
  },
  {
    title: 'Anti-Fraud Awareness',
    icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
    items: [
      'Never pay un-receipted fees',
      'Pneuma Nikos Group is ONLY in Rubaga',
      'Check License E24050028 online',
      'Avoid agents asking for cash on streets',
      'Verify all visa details through EEMIS'
    ]
  }
];

export const CORE_VALUES = [
  {
    title: 'Service Quality',
    description: 'We maintain rigorous standards throughout our recruitment cycle to ensure only the best talent is placed.',
    icon: <Target className="w-6 h-6" />
  },
  {
    title: 'Ethics & Integrity',
    description: 'Operating with unwavering moral principles in every contract and interaction.',
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: 'Honesty',
    description: 'Full transparency regarding working conditions, salaries, and legal obligations.',
    icon: <Scale className="w-6 h-6" />
  },
  {
    title: 'Human Dignity',
    description: 'Treating every candidate as a valued professional, ensuring their rights and safety abroad.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: 'Regulatory Compliance',
    description: 'Strict adherence to the Ministry of Gender, Labour and Social Development guidelines.',
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const LEADERSHIP = [
  {
    name: 'Janet Tumusiime',
    role: 'Managing Director',
    image: 'https://i.postimg.cc/1XvLB83c/mrs_tumusime.jpg',
    bio: 'Janet leads with compassion and over a decade of experience in HR, focusing on ethical recruitment and family-centric business values.'
  },
  {
    name: 'Brian Tumusiime',
    role: 'Director / CEO',
    image: 'https://i.postimg.cc/sDN2y1q7/Q4A9233-jpg.jpg',
    bio: 'Brian oversees international partnerships and strategic operations, ensuring Pneuma remains a trusted name globally.'
  },
  {
    name: 'Nakiwala Sanyu Stella',
    role: 'Operations Assistant',
    image: 'https://i.postimg.cc/wTGBH3Zb/IMG-0063-JPG.jpg',
    bio: 'Stella ensures the smooth daily operations of our candidate processing and logistics teams.'
  },
  {
    name: 'Cate Musiime',
    role: 'Leads Operations Analyst',
    image: 'https://i.postimg.cc/PrRqhN94/IMG-0065-JPG.jpg',
    bio: 'Cate specializes in data-driven recruitment analysis and streamlining the candidate pipeline.'
  },
  {
    name: 'Namusu Zubeda',
    role: 'Admin Assistant',
    image: 'https://i.postimg.cc/XYBYv46x/IMG-0066-JPG.jpg',
    bio: 'Zubeda provides essential administrative support, managing candidate records and office communications.'
  }
];

export const RECRUITMENT_PROCESS = [
  {
    step: 1,
    title: 'Apply',
    description: 'Submit your comprehensive profiling form through our secure digital portal.',
    icon: <FileText className="w-8 h-8" />
  },
  {
    step: 2,
    title: 'Contract',
    description: 'Upon acceptance, candidates receive and sign their employment contracts.',
    icon: <FileCheck className="w-8 h-8" />
  },
  {
    step: 3,
    title: 'Medicals',
    description: 'Undergo thorough medical examinations as required by the destination country.',
    icon: <Activity className="w-8 h-8" />
  },
  {
    step: 4,
    title: 'Interpol Clearance',
    description: 'Security vetting and background checks to obtain legal clearance for travel.',
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    step: 5,
    title: 'Visa & Fingerprints',
    description: 'Completion of biometric data capture and official visa processing.',
    icon: <Fingerprint className="w-8 h-8" />
  },
  {
    step: 6,
    title: 'Travel',
    description: 'Pre-departure orientation and safe deployment to your new international career.',
    icon: <Plane className="w-8 h-8" />
  }
];

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: '300 Male Cleaners',
    location: Location.DUBAI,
    category: 'Service',
    vacancies: 300,
    description: 'Professional cleaning duties for high-end commercial properties and facilities in Dubai.',
    postedDate: '2024-05-15',
    salary: 'UGX 1,200,000 - 1,500,000 (~AED 1,200)',
    contractDuration: '2 Years (Renewable)',
    requirements: [
      'Physically fit and active',
      'Basic English communication',
      'Age: 21 - 35 years',
      'Willingness to work in shifts'
    ],
    deadline: 'September 2025'
  },
  {
    id: '2',
    title: 'House Maids',
    location: Location.SAUDI_ARABIA,
    category: 'Domestic',
    vacancies: 200,
    description: 'Home management, childcare, and general domestic support for prestigious families.',
    postedDate: '2024-05-18',
    salary: 'UGX 1,000,000 - 1,300,000 (~SAR 1,100)',
    contractDuration: '2-year contracts',
    requirements: [
      'Female candidates only',
      'Age: 21 - 40 years',
      'Medical fitness certificate',
      'Respectful and honest character'
    ],
    deadline: 'December 2025'
  },
  {
    id: '3',
    title: 'Professional Security Guards',
    location: Location.DUBAI,
    category: 'Security',
    vacancies: 100,
    description: 'Safeguarding premises and providing customer service in various corporate and retail locations.',
    postedDate: '2024-06-05',
    salary: 'UGX 2,000,000 - 2,600,000 (~AED 2,100)',
    contractDuration: '2 Years',
    requirements: [
      'Good physical stature',
      'Clear criminal record',
      'Fluent in English'
    ],
    deadline: 'November 2025'
  }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Namubiru",
    role: "Domestic Worker (Saudi Arabia)",
    content: "Pneuma Nikos Group changed my life. They were transparent from day one, and now I can support my family back in Uganda comfortably."
  },
  {
    name: "John Katende",
    role: "Male Cleaner (Dubai)",
    content: "The recruitment process was smooth. Being a licensed agency gave me the confidence to trust them with my documents."
  },
  {
    name: "Aisha Nabakooza",
    role: "Service Staff (Dubai)",
    content: "I'm grateful for the professional team at Pneuma. They helped me with everything from interviews to travel documents to Dubai."
  }
];
