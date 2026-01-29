
import React, { useState } from 'react';
import { X, Upload, CheckCircle, User, Shield, Users, Globe, Lock, ShieldCheck, FileText, Heart, MapPin, Languages, Briefcase, ArrowRight, ArrowLeft, Award, Check } from 'lucide-react';
import { Job } from '../types';
import { COMPANY_INFO } from '../constants';

interface ApplicationModalProps {
  job: Job;
  onClose: () => void;
}

interface FileState {
  file: File | null;
  error: string | null;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ job, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Security Challenge
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaTask] = useState({ a: Math.floor(Math.random() * 10), b: Math.floor(Math.random() * 10) });

  // File states
  const [passportFile, setPassportFile] = useState<FileState>({ file: null, error: null });
  const [cvFile, setCvFile] = useState<FileState>({ file: null, error: null });

  const validateFile = (file: File) => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    
    if (file.size > maxSize) return 'File size exceeds 5MB limit.';
    if (!allowedTypes.includes(file.type)) return 'Invalid file type. Please upload PDF or Image.';
    return null;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'passport' | 'cv') => {
    const file = e.target.files?.[0];
    if (file) {
      const error = validateFile(file);
      const setter = type === 'passport' ? setPassportFile : setCvFile;
      setter({ file: error ? null : file, error });
    }
  };

  const nextStep = () => {
    // Basic validation could be added here
    setStep(prev => Math.min(prev + 1, 3));
    const modalContent = document.getElementById('modal-scroll-area');
    if (modalContent) modalContent.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    const modalContent = document.getElementById('modal-scroll-area');
    if (modalContent) modalContent.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (parseInt(captchaAnswer) !== captchaTask.a + captchaTask.b) {
      alert('Security verification failed. Please check the sum.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8 px-4 w-full">
      {[1, 2, 3].map((num) => (
        <React.Fragment key={num}>
          <div className="flex flex-col items-center relative">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
              step >= num ? 'bg-pneuma-purple text-white' : 'bg-gray-100 text-gray-400'
            } ${step === num ? 'ring-4 ring-pneuma-light' : ''}`}>
              {step > num ? <Check size={18} /> : num}
            </div>
            <span className={`hidden sm:block text-[9px] font-black uppercase tracking-widest mt-2 absolute -bottom-6 whitespace-nowrap ${step === num ? 'text-pneuma-purple' : 'text-gray-400'}`}>
              {num === 1 ? 'Bio Data' : num === 2 ? 'Travel & Skills' : 'Family & Documents'}
            </span>
          </div>
          {num < 3 && (
            <div className={`w-10 sm:w-24 h-1 mx-2 transition-all duration-500 ${step > num ? 'bg-pneuma-purple' : 'bg-gray-100'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const SectionHeader = ({ icon: Icon, title, description }: { icon: any, title: string, description?: string }) => (
    <div className="border-b border-gray-100 pb-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-pneuma-light rounded-lg text-pneuma-purple shrink-0">
          <Icon size={18} />
        </div>
        <div>
          <h3 className="font-extrabold text-gray-900 uppercase tracking-widest text-xs sm:text-sm">{title}</h3>
          {description && <p className="text-[10px] text-gray-400 font-medium mt-0.5">{description}</p>}
        </div>
      </div>
    </div>
  );

  // Fix: Make children optional in FormField type to resolve JSX children mapping errors
  const FormField = ({ label, children, required = true }: { label: string, children?: React.ReactNode, required?: boolean }) => (
    <div className="space-y-1.5">
      <label className="text-[9px] font-black text-gray-500 uppercase tracking-wider block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Application Received</h3>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            Your comprehensive profile has been successfully submitted. We will review your documentation and contact you for the next steps in the recruitment process.
          </p>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-8">
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Your Reference</p>
            <p className="font-mono text-lg font-bold text-pneuma-purple tracking-tighter">PN-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-pneuma-purple text-white py-3.5 rounded-xl font-bold hover:bg-pneuma-dark transition-all shadow-lg"
          >
            Close Window
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-hidden">
      <div className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] w-full max-w-4xl shadow-2xl relative overflow-hidden flex flex-col max-h-[95vh] my-auto">
        {/* Progress bar / Header accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pneuma-purple via-pneuma-gold to-pneuma-purple z-20"></div>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 sm:right-6 sm:top-6 text-gray-400 hover:text-pneuma-purple hover:rotate-90 transition-all z-30 bg-white/50 backdrop-blur rounded-full p-1"
        >
          <X size={28} />
        </button>

        {/* Scrollable Content Area */}
        <div id="modal-scroll-area" className="flex-grow overflow-y-auto p-6 sm:p-10 pt-12">
          {/* Form Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-pneuma-light text-pneuma-purple px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-2">
              <Lock size={10} /> Secure Portal
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif leading-tight">Apply for {job.title}</h2>
          </div>

          <StepIndicator />

          <form onSubmit={handleSubmit} className="mt-8 pb-4">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <section>
                  <SectionHeader icon={User} title="Section 1: Personal Biography" description="Basic identification and profile" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="md:col-span-2">
                      <FormField label="Full Name (As on Passport)">
                        <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none bg-gray-50/50" placeholder="Full name" />
                      </FormField>
                    </div>
                    <FormField label="Nationality">
                      <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none bg-gray-50/50" placeholder="e.g. Ugandan" />
                    </FormField>
                    
                    <FormField label="Religion">
                      <select required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none appearance-none bg-gray-50/50">
                        <option value="">Select</option>
                        <option>Christian</option>
                        <option>Muslim</option>
                        <option>Other</option>
                      </select>
                    </FormField>
                    <FormField label="Date of Birth">
                      <input required type="date" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none bg-gray-50/50" />
                    </FormField>
                    <FormField label="Place of Birth">
                      <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none bg-gray-50/50" placeholder="City/District" />
                    </FormField>

                    <FormField label="Marital Status">
                      <select required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none appearance-none bg-gray-50/50">
                        <option value="">Select</option>
                        <option>Single</option>
                        <option>Married</option>
                        <option>Widowed</option>
                        <option>Divorced</option>
                      </select>
                    </FormField>
                    <FormField label="Number of Dependants">
                      <input required type="number" min="0" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none bg-gray-50/50" />
                    </FormField>
                    <FormField label="Weight (kg)">
                      <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none bg-gray-50/50" placeholder="e.g. 65" />
                    </FormField>

                    <div className="md:col-span-3">
                      <FormField label="Education Level">
                        <select required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none appearance-none bg-gray-50/50">
                          <option value="">Select Highest Education Level</option>
                          <option>Primary Level</option>
                          <option>Secondary (O-Level)</option>
                          <option>Secondary (A-Level)</option>
                          <option>Certificate / Vocational</option>
                          <option>Diploma</option>
                          <option>University Degree</option>
                          <option>Postgraduate</option>
                        </select>
                      </FormField>
                    </div>
                  </div>
                </section>
                <div className="flex justify-end pt-6">
                  <button type="button" onClick={nextStep} className="bg-pneuma-purple text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-pneuma-dark transition-all">
                    Next Section <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <section>
                  <SectionHeader icon={Globe} title="Section 2: Travel & Skills" description="Passport and language details" />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField label="Passport Number">
                      <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none bg-gray-50/50 font-mono uppercase" placeholder="A0000000" />
                    </FormField>
                    <FormField label="Date of Issue">
                      <input required type="date" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none bg-gray-50/50" />
                    </FormField>
                    <FormField label="Date of Expiry">
                      <input required type="date" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none bg-gray-50/50" />
                    </FormField>
                    <FormField label="Country of Issue">
                      <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none bg-gray-50/50" placeholder="Uganda" />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <FormField label="English Language Proficiency">
                        <div className="flex gap-2">
                          {['Poor', 'Fair', 'Fluent'].map((level) => (
                            <label key={level} className="flex-grow flex items-center justify-center gap-1.5 p-2.5 border border-gray-200 rounded-xl cursor-pointer hover:bg-pneuma-light has-[:checked]:bg-pneuma-purple has-[:checked]:text-white transition-all">
                              <input type="radio" name="englishProficiency" value={level} className="hidden" />
                              <span className="text-[10px] font-bold">{level}</span>
                            </label>
                          ))}
                        </div>
                      </FormField>
                      
                      <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-pneuma-purple" />
                          <span className="text-[10px] font-bold text-gray-700">Can Read</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-pneuma-purple" />
                          <span className="text-[10px] font-bold text-gray-700">Can Write</span>
                        </label>
                      </div>
                    </div>

                    <FormField label="Employment History Abroad (Country & Duration)" required={false}>
                      <textarea rows={3} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none resize-none bg-gray-50/50" placeholder="e.g. Dubai (2 years)"></textarea>
                    </FormField>
                  </div>
                </section>
                <div className="flex justify-between pt-6">
                  <button type="button" onClick={prevStep} className="text-gray-500 font-bold flex items-center gap-2 hover:text-pneuma-purple transition-all">
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button type="button" onClick={nextStep} className="bg-pneuma-purple text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-pneuma-dark transition-all">
                    Next Section <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <section>
                  <SectionHeader icon={Heart} title="Section 3: Family & Documents" description="Required for legal vetting" />
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="md:col-span-3 text-[9px] font-black text-pneuma-purple uppercase tracking-[0.2em] border-b pb-1">Father's Info</div>
                      <FormField label="Name"><input required type="text" className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white" /></FormField>
                      <FormField label="Address"><input required type="text" className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white" /></FormField>
                      <FormField label="Contact"><input required type="tel" className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white" /></FormField>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="md:col-span-3 text-[9px] font-black text-pneuma-purple uppercase tracking-[0.2em] border-b pb-1">Mother's Info</div>
                      <FormField label="Name"><input required type="text" className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white" /></FormField>
                      <FormField label="Address"><input required type="text" className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white" /></FormField>
                      <FormField label="Contact"><input required type="tel" className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white" /></FormField>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="md:col-span-2 text-[9px] font-black text-pneuma-purple uppercase tracking-[0.2em] border-b pb-1">Next of Kin</div>
                      <FormField label="Name"><input required type="text" className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white" /></FormField>
                      <FormField label="Relationship"><input required type="text" className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white" /></FormField>
                      <FormField label="Contact"><input required type="tel" className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white" /></FormField>
                      <FormField label="Address"><input required type="text" className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white" /></FormField>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className={`relative border-2 border-dashed rounded-xl p-4 text-center transition-all ${passportFile.file ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}>
                      <input type="file" required onChange={(e) => handleFileChange(e, 'passport')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.jpg,.jpeg,.png" />
                      <div className="space-y-1">
                        <FileText size={18} className="mx-auto text-pneuma-purple" />
                        <p className="text-[9px] font-black uppercase">Passport</p>
                        {passportFile.file && <p className="text-[8px] text-green-600 truncate px-2">{passportFile.file.name}</p>}
                      </div>
                    </div>
                    <div className={`relative border-2 border-dashed rounded-xl p-4 text-center transition-all ${cvFile.file ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}>
                      <input type="file" required onChange={(e) => handleFileChange(e, 'cv')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.jpg,.jpeg,.png" />
                      <div className="space-y-1">
                        <Upload size={18} className="mx-auto text-pneuma-purple" />
                        <p className="text-[9px] font-black uppercase">CV/Bio-Data</p>
                        {cvFile.file && <p className="text-[8px] text-green-600 truncate px-2">{cvFile.file.name}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="bg-pneuma-dark text-white p-6 rounded-2xl mt-8 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-pneuma-gold">Human Verification: {captchaTask.a} + {captchaTask.b} = </span>
                      <input type="number" required value={captchaAnswer} onChange={(e) => setCaptchaAnswer(e.target.value)} className="w-14 px-2 py-1 bg-white rounded text-pneuma-dark font-bold text-center" />
                    </div>
                    <div className="flex items-start gap-3">
                      <input required id="declaration" type="checkbox" className="mt-1 w-4 h-4 rounded bg-white/10 text-pneuma-gold" />
                      <label htmlFor="declaration" className="text-[10px] text-gray-300 leading-tight cursor-pointer">
                        I declare that all info is true. I understand false statements lead to disqualification and reporting to the <strong className="text-white">Ministry of Gender</strong>.
                      </label>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button type="button" onClick={prevStep} className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl font-bold text-xs hover:bg-white/20 transition-all shrink-0">
                        Back
                      </button>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex-grow bg-pneuma-gold text-pneuma-dark py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? <><div className="w-4 h-4 border-2 border-pneuma-dark border-t-transparent rounded-full animate-spin" /> ...</> : <>Submit Application <ArrowRight size={18} /></>}
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </form>
        </div>
        
        {/* Footer badges */}
        <div className="bg-gray-50 px-8 py-3 flex items-center justify-center gap-6 border-t border-gray-100 shrink-0">
           <div className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-gray-400">
              <ShieldCheck size={10} className="text-pneuma-purple" /> Licensed Agency
           </div>
           <div className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-gray-400">
              <Award size={10} className="text-pneuma-purple" /> License: {COMPANY_INFO.license}
           </div>
        </div>
      </div>
    </div>
  );
};
