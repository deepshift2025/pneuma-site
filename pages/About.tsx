
import React from 'react';
import { COMPANY_INFO, LEADERSHIP, CORE_VALUES } from '../constants';
// Added Activity to the imports to fix the "Cannot find name 'Activity'" error on line 124.
import { Award, CheckCircle, Shield, Briefcase, Users, FileCheck, Target, Heart, Scale, Quote, Activity } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Company Story & Mission */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-pneuma-light text-pneuma-purple px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Briefcase size={14} /> Our Company Story
              </div>
              <h1 className="text-5xl font-bold text-gray-900 font-serif mb-8 leading-tight">
                Empowering Ugandan Talent in the <span className="text-pneuma-purple underline decoration-pneuma-gold">Middle East</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Pneuma Nikos Group Ltd was founded in Kampala with a singular, powerful mission: to redefine external labor recruitment through transparency and dignity. We serve as a trusted bridge, connecting the hardworking spirit of Uganda with life-changing opportunities in Saudi Arabia and the UAE.
              </p>
              
              <div className="bg-pneuma-dark p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pneuma-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-pneuma-gold font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                  <CheckCircle size={14} /> Our Mission
                </h3>
                <p className="text-xl font-light italic leading-relaxed">
                  "{COMPANY_INFO.mission}"
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-pneuma-light">
                <img 
                  src="https://i.postimg.cc/Nf5gNBFq/IMG-0033-JPG.jpg" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-pneuma-gold p-8 rounded-3xl shadow-xl max-w-xs">
                <p className="text-pneuma-dark font-serif text-2xl font-bold italic leading-tight">"Feeding the Universe"</p>
                <p className="text-pneuma-dark/60 text-[10px] mt-2 font-black uppercase tracking-[0.2em]">The Pneuma Global Slogan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from CEO & Director - Brian Tumusiime */}
      <section className="py-24 bg-pneuma-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pneuma-gold rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-md rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row items-stretch border border-white/10">
            <div className="lg:w-2/5 relative min-h-[500px]">
              <img 
                src="https://i.postimg.cc/sDN2y1q7/Q4A9233-jpg.jpg" 
                alt="Brian Tumusiime - Director / CEO" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pneuma-dark/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-3xl font-serif font-bold leading-tight">Brian Tumusiime</p>
                <p className="text-pneuma-gold font-black uppercase tracking-widest text-xs">Director / CEO</p>
              </div>
            </div>
            <div className="lg:w-3/5 p-12 lg:p-20 relative flex flex-col justify-center">
              <Quote className="absolute top-10 right-10 text-white/5" size={140} />
              <div className="relative z-10">
                <h2 className="text-pneuma-gold font-bold tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
                   <Shield size={14} className="text-pneuma-gold" /> Leadership Message
                </h2>
                <h3 className="text-4xl font-bold text-white font-serif mb-10 leading-tight">A Vision for <span className="text-pneuma-gold">Human Capital Excellence</span></h3>
                <div className="space-y-8 text-gray-300 text-lg font-light leading-relaxed">
                  <p className="italic text-xl text-white font-medium">
                    "My fellow Ugandans, Pneuma Nikos was founded on the principle that your hard work should be met with fairness and opportunity. We are not just a business; we are a vessel for transformation."
                  </p>
                  <p>
                    "Our journey is one of trust. When you walk into our offices, you are entering a space of safety and absolute transparency. We have built deep international partnerships in Saudi Arabia and the UAE specifically to ensure that our candidates are placed with employers who respect their dignity and value their contribution."
                  </p>
                  <p>
                    "Our goal is to ensure that every step of your journey abroad—from the first documentation to your final deployment—is paved with the professionalism you deserve. We are here to help you feed your universe by empowering your future."
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-6">
                  <div className="h-px w-20 bg-pneuma-gold"></div>
                  <div>
                    <p className="font-serif italic text-white text-2xl">Brian Tumusiime</p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-pneuma-gold mt-1">Director / CEO, Pneuma Nikos Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Operations Manager - Nantaba Janet M Tumusiime */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row-reverse items-stretch">
            <div className="lg:w-2/5 relative min-h-[400px]">
              <img 
                src="https://i.postimg.cc/Kvb2dPBH/janet-jpg.jpg" 
                alt="Nantaba Janet M Tumusiime - Operations Manager" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pneuma-purple/40 to-transparent"></div>
              <div className="absolute bottom-10 right-10 text-white text-right">
                <p className="text-2xl font-serif font-bold leading-tight">Nantaba Janet M Tumusiime</p>
                <p className="text-pneuma-gold font-black uppercase tracking-widest text-[10px]">Operations Manager</p>
              </div>
            </div>
            <div className="lg:w-3/5 p-12 lg:p-20 relative flex flex-col justify-center">
              <Quote className="absolute top-10 right-10 text-pneuma-purple/5" size={120} />
              <div className="relative z-10">
                <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
                   <Activity size={14} className="text-pneuma-gold" /> Operational Excellence
                </h2>
                <h3 className="text-3xl font-bold text-gray-900 font-serif mb-8 leading-tight">Precision in Every Step of Your <span className="text-pneuma-purple">Journey Abroad</span></h3>
                <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                  <p>
                    "Efficiency and integrity are the twin pillars of our recruitment operations. As your Operations Manager, I personally oversee the complex journey of your application to ensure it meets both Ugandan and international standards without compromise or delay."
                  </p>
                  <p>
                    "Our mission is to turn your aspirations into reality through a refined, secure processing system. We work tirelessly to handle the logistical details—from documentation and medicals to legal vetting and travel—so that you can step into your new role with confidence and the full support of the Pneuma family behind you."
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <div className="h-px w-12 bg-pneuma-gold"></div>
                  <div>
                    <p className="font-serif italic text-pneuma-dark text-xl">Nantaba Janet M Tumusiime</p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-pneuma-purple mt-1">Operations Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Core Values */}
      <section className="py-24 bg-pneuma-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-4">Our Foundation</h2>
            <h3 className="text-4xl font-bold text-gray-900 font-serif mb-6">Vision & Principles</h3>
            <p className="text-gray-500 text-lg">
              "{COMPANY_INFO.vision}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {CORE_VALUES.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-pneuma-gold transition-colors group">
                <div className="w-12 h-12 bg-pneuma-light rounded-xl flex items-center justify-center text-pneuma-purple mb-6 group-hover:bg-pneuma-purple group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-4">The Pneuma Family</h2>
              <h3 className="text-4xl font-bold text-gray-900 font-serif leading-tight">Leadership Dedicated to Your Success</h3>
            </div>
            <p className="text-gray-500 md:w-1/3">
              Our directors and staff bring a personal, family-based approach to professional international recruitment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {LEADERSHIP.map((member, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative mb-6 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pneuma-dark/90 via-pneuma-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-[10px] leading-relaxed font-medium italic">{member.bio}</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-pneuma-purple font-bold text-xs uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Regulatory Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pneuma-dark rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pneuma-purple/20 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-pneuma-gold text-pneuma-dark px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                  <Shield size={16} /> Fully Regulated & Compliant
                </div>
                <h3 className="text-4xl font-bold font-serif mb-6 leading-tight">Committed to Ethical & Legal Recruitment Standards</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Pneuma Nikos Group Ltd is officially registered and recognized by the Uganda Ministry of Gender, Labour and Social Development. We adhere to all international labor conventions to protect our candidates' rights.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                    <div className="bg-pneuma-gold text-pneuma-dark p-2 rounded-lg">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Official License Number</p>
                      <p className="text-xl font-bold text-white">{COMPANY_INFO.license}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                    <div className="bg-pneuma-gold text-pneuma-dark p-2 rounded-lg">
                      <FileCheck size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">EEMIS Registration</p>
                      <p className="text-xl font-bold text-white">{COMPANY_INFO.eemisRegistration}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  <img src="https://i.postimg.cc/Dyvrdk76/phuema-logo-1.png" alt="Ministry Logo" className="h-32 w-auto mb-8" />
                  <h4 className="text-pneuma-dark font-bold text-2xl mb-4 leading-tight">Ministry of Gender, Labour and Social Development</h4>
                  <div className="w-16 h-1 bg-pneuma-gold mb-6"></div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    We are proud to be part of the official labor migration system in Uganda, ensuring safe and regulated employment for all our candidates.
                  </p>
                  <div className="grid grid-cols-1 gap-4 w-full">
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <p className="text-pneuma-purple font-black text-xs uppercase">Valid Since</p>
                      <p className="text-gray-900 font-bold text-sm">May 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
