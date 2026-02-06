
import React, { useState } from 'react';
import { RECRUITMENT_PROCESS } from '../constants';
// Added Globe to the imports to fix "Cannot find name 'Globe'" error
import { ChevronDown, ChevronUp, CheckCircle2, Info, Clock, AlertCircle, Globe } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-2">The Journey</h2>
          <h3 className="text-4xl font-bold text-gray-900 font-serif">Recruitment Step-by-Step</h3>
          <div className="w-24 h-1.5 bg-pneuma-gold mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
            We follow a rigorous and transparent 6-step recruitment cycle to ensure your safety and success abroad.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-100 hidden sm:block"></div>

          <div className="space-y-8">
            {RECRUITMENT_PROCESS.map((step, idx) => {
              const isActive = activeStep === idx;
              
              return (
                <div 
                  key={step.step}
                  className={`relative group transition-all duration-500 ${isActive ? 'scale-[1.02]' : ''}`}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  onClick={() => setActiveStep(isActive ? null : idx)}
                >
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                    {/* Icon / Number Circle */}
                    <div className="relative z-10 shrink-0 self-start sm:self-center">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 border-4 border-white ${
                        isActive 
                          ? 'bg-pneuma-purple text-white rotate-6' 
                          : 'bg-pneuma-light text-pneuma-purple group-hover:bg-pneuma-gold group-hover:text-pneuma-dark'
                      }`}>
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 bg-pneuma-dark text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                        {step.step}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-grow bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-100 transition-all cursor-pointer ${
                      isActive ? 'bg-white shadow-2xl border-pneuma-purple/20' : 'hover:bg-white hover:shadow-lg'
                    }`}>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                        {isActive ? <ChevronUp className="text-pneuma-purple" /> : <ChevronDown className="text-gray-300" />}
                      </div>
                      <p className="text-gray-500 text-sm mb-4">{step.description}</p>

                      {/* Expandable Details */}
                      <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                        <div className="space-y-4 pt-4 border-t border-gray-100">
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex gap-4 p-4 bg-pneuma-light/30 rounded-2xl border border-pneuma-light transition-all hover:bg-pneuma-light">
                              <div className="shrink-0 mt-0.5">
                                {/* Fix: Use the Globe icon from lucide-react */}
                                {detail.includes('Saudi') || detail.includes('UAE') ? (
                                  <Globe size={18} className="text-pneuma-purple" />
                                ) : detail.includes('weeks') ? (
                                  <Clock size={18} className="text-pneuma-purple" />
                                ) : detail.includes('photo') ? (
                                  <AlertCircle size={18} className="text-pneuma-gold" />
                                ) : (
                                  <CheckCircle2 size={18} className="text-green-500" />
                                )}
                              </div>
                              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Footer info for some steps */}
                        {step.step === 4 && (
                          <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <Info size={14} /> Strict Photo Requirements Apply
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 bg-pneuma-dark rounded-[3rem] p-10 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pneuma-gold/10 rounded-full blur-3xl"></div>
          <h4 className="text-2xl font-bold font-serif mb-4">Questions about the journey?</h4>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Our counselors are available Monday to Saturday to guide you through every legal and medical requirement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+256702772221" className="bg-pneuma-gold text-pneuma-dark px-8 py-3 rounded-xl font-bold hover:bg-white transition-all">
              Call Hotline
            </a>
            <a href="https://wa.me/256702772221" className="bg-white/10 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
