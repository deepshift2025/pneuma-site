
import React from 'react';
// Add COMPANY_INFO to the import list from constants
import { RECRUITMENT_PROCESS, COMPANY_INFO } from '../constants';
// Add Globe to the import list from lucide-react
import { CheckCircle, Info, Clock, AlertCircle, Globe } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-4">The Journey Abroad</h2>
          <h3 className="text-4xl font-bold text-gray-900 font-serif mb-6 leading-tight">Step-by-Step Recruitment Process</h3>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            At Pneuma Nikos Group, transparency is our foundation. Here is exactly what happens from the moment you apply until your departure.
          </p>
          <div className="w-24 h-1.5 bg-pneuma-gold mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Connector Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-100 hidden sm:block"></div>

          {RECRUITMENT_PROCESS.map((step, idx) => (
            <div key={step.step} className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                {/* Step Circle / Icon */}
                <div className="relative z-10 shrink-0">
                  <div className="w-16 h-16 bg-pneuma-dark text-white rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-pneuma-purple group-hover:scale-110 transition-all duration-300 ring-4 ring-white">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-pneuma-gold text-pneuma-dark text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                    {step.step}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow group-hover:border-pneuma-purple/20">
                  <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                    <h4 className="text-2xl font-bold text-gray-900 font-serif">{step.title}</h4>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-pneuma-purple/10 text-pneuma-purple px-3 py-1 rounded-full">
                      Step {step.step} of 6
                    </span>
                  </div>
                  
                  <p className="text-pneuma-purple font-medium text-sm mb-6 leading-relaxed border-l-4 border-pneuma-gold pl-4 italic">
                    {step.description}
                  </p>

                  <div className="space-y-4">
                    {(step as any).details?.map((detail: string, i: number) => (
                      <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-50 shadow-sm group-hover:bg-pneuma-light transition-colors">
                        <div className="shrink-0 mt-0.5">
                          {detail.toLowerCase().includes('saudi') || detail.toLowerCase().includes('uae') ? (
                            <Globe size={16} className="text-pneuma-purple" />
                          ) : detail.toLowerCase().includes('fee') ? (
                            <Info size={16} className="text-pneuma-gold" />
                          ) : detail.toLowerCase().includes('weeks') ? (
                            <Clock size={16} className="text-pneuma-purple" />
                          ) : (
                            <CheckCircle size={16} className="text-green-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {step.step === 4 && (
                    <div className="mt-6 flex items-start gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
                      <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                      <p className="text-[10px] text-red-700 font-bold uppercase tracking-wider">
                        Interpol photos must show both eyes and head clearly to prevent rejection.
                      </p>
                    </div>
                  )}

                  {step.step === 6 && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Mandatory Travel Checklist</h5>
                      <div className="flex flex-wrap gap-4">
                        {['Visa Issued', 'Airticket Issued', 'Yellow Fever Card'].map((item, i) => (
                          <div key={i} className="bg-pneuma-dark text-white text-[10px] font-bold px-4 py-2 rounded-lg flex items-center gap-2">
                             <div className="w-1.5 h-1.5 bg-pneuma-gold rounded-full"></div>
                             {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Support */}
        <div className="mt-24 text-center p-12 bg-pneuma-light rounded-[3rem] border border-pneuma-purple/10">
          <h4 className="text-xl font-bold text-pneuma-dark mb-4">Need help understanding the process?</h4>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Our counselors are available Monday to Saturday to guide you through every legal and medical requirement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${COMPANY_INFO.phone1}`} className="bg-pneuma-purple text-white px-8 py-3 rounded-xl font-bold hover:bg-pneuma-dark transition-all shadow-lg shadow-pneuma-purple/10">
              Call Hotline
            </a>
            <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
