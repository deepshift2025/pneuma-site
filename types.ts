
export enum Location {
  SAUDI_ARABIA = 'Saudi Arabia',
  DUBAI = 'Dubai (UAE)'
}

export interface Job {
  id: string;
  title: string;
  location: Location;
  category: string;
  vacancies: number;
  description: string;
  postedDate: string;
  salary?: string;
  contractDuration?: string;
  requirements?: string[];
  deadline?: string;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  religion: string;
  dob: string;
  placeOfBirth: string;
  maritalStatus: string;
  dependents: number;
  weight: string;
  educationLevel: string;
  passportNo: string;
  dateOfIssue: string;
  dateOfExpiry: string;
  countryOfIssue: string;
  nokName: string;
  nokRelationship: string;
  nokContact: string;
  nokAddress: string;
  fatherName: string;
  fatherAddress: string;
  fatherContact: string;
  motherName: string;
  motherAddress: string;
  motherContact: string;
  englishProficiency: 'Poor' | 'Fair' | 'Fluent';
  canRead: boolean;
  canWrite: boolean;
  workHistoryAbroad: string;
  cv: File | null;
  passportScan: File | null;
  declarationConfirmed: boolean;
}

export type View = 'home' | 'about' | 'jobs' | 'process' | 'contact' | 'portal' | 'resources' | 'legal';
