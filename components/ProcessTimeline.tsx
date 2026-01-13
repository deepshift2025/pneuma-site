
import React from 'react';
import { RECRUITMENT_PROCESS } from '../constants';

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-2">How we work</h2>
          <h3 className="text-4xl font-bold text-gray-900 font-serif">The Pneuma Recruitment Cycle</h3>
          <div className="w-24 h-1 bg-pneuma-gold mx-auto mt-4"></div>
          <p className="text-gray-500 mt-4 text-sm max-w-2xl mx-auto">
            Our streamlined 6-step process ensures a safe, transparent, and legal journey for every candidate, from initial application to international deployment.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] w-[90%] h-0.5 bg-gray-100 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 sm:gap-12 relative z-10">
            {RECRUITMENT_PROCESS.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pneuma-light text-pneuma-purple rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-pneuma-gold group-hover:text-pneuma-dark transition-all duration-300 ring-4 ring-white relative z-10">
                  {step.icon}
                </div>
                <div className="bg-pneuma-dark text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                  Step {step.step}
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
