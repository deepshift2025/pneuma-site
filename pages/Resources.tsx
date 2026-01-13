
import React from 'react';
import { COUNTRY_GUIDES, RECRUITMENT_TIPS, COMPANY_INFO } from '../constants';
import { Globe, BookOpen, CheckCircle, Info, ShieldAlert, FileText, ArrowRight, Lightbulb } from 'lucide-react';

export const Resources: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-pneuma-dark py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pneuma-purple/10 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-pneuma-gold/20 text-pneuma-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-pneuma-gold/20">
              <BookOpen size={14} /> Information Hub
            </div>
            <h1 className="text-5xl font-bold font-serif mb-6 leading-tight">Everything You Need to Know for Your <span className="text-pneuma-gold">Journey to the Middle East</span></h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              We provide all the resources, guides, and safety tips you need to prepare for your international career in Saudi Arabia and Dubai. Transparency is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Country Guides */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-4">Destinations</h2>
              <h3 className="text-4xl font-bold text-gray-900 font-serif leading-tight">Country-Specific Guides</h3>
            </div>
            <p className="text-gray-500 md:w-1/3">
              Explore cultural insights, worker rights, and what to expect in each of our partner countries in the Middle East.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {COUNTRY_GUIDES.map((guide, idx) => (
              <div key={idx} className="bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="aspect-video relative overflow-hidden">
                  <img src={guide.image} alt={guide.country} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
                    <span className="text-pneuma-dark font-black uppercase text-sm tracking-widest">{guide.country}</span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-pneuma-purple font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Globe size={14} /> Culture & Lifestyle
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{guide.culture}</p>
                      
                      <h4 className="text-pneuma-purple font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <ShieldAlert size={14} /> Worker Rights
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{guide.rights}</p>
                    </div>
                    <div>
                      <h4 className="text-pneuma-purple font-bold text-xs uppercase tracking-widest mb-4">Highlights</h4>
                      <ul className="space-y-3">
                        {guide.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
                            <CheckCircle size={16} className="text-pneuma-gold shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Tips & Checklists */}
      <section className="py-24 bg-pneuma-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-4">Preparation</h2>
            <h3 className="text-4xl font-bold text-gray-900 font-serif">The Candidate Success Toolkit</h3>
            <p className="text-gray-500 mt-4">Essential information to ensure a smooth and successful recruitment process.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {RECRUITMENT_TIPS.map((tip, idx) => (
              <div key={idx} className={`bg-white p-10 rounded-3xl shadow-sm border ${tip.title.includes('Anti-Fraud') ? 'border-red-100 ring-2 ring-red-50' : 'border-gray-100'}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${tip.title.includes('Anti-Fraud') ? 'bg-red-100 text-red-600' : 'bg-pneuma-light text-pneuma-purple'}`}>
                  {tip.icon}
                </div>
                <h4 className={`text-xl font-bold mb-6 ${tip.title.includes('Anti-Fraud') ? 'text-red-600' : 'text-gray-900'}`}>{tip.title}</h4>
                <ul className="space-y-4">
                  {tip.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm group">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${tip.title.includes('Anti-Fraud') ? 'bg-red-400' : 'bg-pneuma-gold'}`}></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migrant Rights Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pneuma-dark rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-pneuma-purple text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                  <Info size={16} className="text-pneuma-gold" /> Rights & Responsibilities
                </div>
                <h3 className="text-4xl font-bold font-serif mb-6 leading-tight">Your Legal Protections as a Migrant Worker</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Every worker placed through Pneuma Nikos Group Ltd is legally protected by the laws of Uganda and the destination country. Knowing your rights is the first step to a safe career.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <CheckCircle className="text-pneuma-gold shrink-0" size={20} />
                    <p className="text-sm text-gray-300">Right to a signed contract in your language.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="text-pneuma-gold shrink-0" size={20} />
                    <p className="text-sm text-gray-300">Right to retain possession of your passport.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="text-pneuma-gold shrink-0" size={20} />
                    <p className="text-sm text-gray-300">Right to regular, on-time salary payments.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="text-pneuma-gold shrink-0" size={20} />
                    <p className="text-sm text-gray-300">Right to safe housing and medical care.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10">
                  <h4 className="text-xl font-bold mb-6 text-pneuma-gold">Important Contacts</h4>
                  <div className="space-y-6">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <p className="text-xs text-gray-500 uppercase font-black mb-1">Ministry of Gender Hotline</p>
                      <p className="text-lg font-bold">0800 203 133</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <p className="text-xs text-gray-500 uppercase font-black mb-1">Pneuma Welfare Support</p>
                      <p className="text-lg font-bold">{COMPANY_INFO.phone1}</p>
                    </div>
                    <p className="text-xs text-gray-400 italic">
                      Save these numbers before travel. We provide 24/7 welfare monitoring for all our deployed staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / News Section Placeholder */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-4">Stay Informed</h2>
              <h3 className="text-4xl font-bold text-gray-900 font-serif">Latest Updates & News</h3>
            </div>
            <button className="text-pneuma-purple font-bold flex items-center gap-2 hover:underline">
              View All Posts <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-200">
                   <img src={`https://picsum.photos/seed/pneuma-news-${i}/600/400`} alt="News" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="text-xs text-pneuma-gold font-bold uppercase mb-4 tracking-widest">Company Update • May 2024</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 leading-tight">New Recruitment Drive for {i === 1 ? 'Dubai Cleaners' : i === 2 ? 'Saudi Arabia Professionals' : 'Middle East Domestic Staff'}</h4>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                    We are excited to announce our newest partnership with major employers in the Gulf region. Applications are now open for qualified candidates.
                  </p>
                  <button className="text-pneuma-purple text-sm font-bold flex items-center gap-2 group">
                    Read Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
