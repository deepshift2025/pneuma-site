
import React, { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TestimonialCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds interval for a more active feel

    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative background element */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-pneuma-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pneuma-purple/5 rounded-full blur-3xl"></div>

      <div className="relative overflow-hidden bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-8 sm:p-16 min-h-[420px] flex flex-col justify-center">
        <Quote className="absolute top-8 right-12 text-pneuma-purple/5" size={120} />
        
        <div className="relative z-10">
          <div className="flex gap-1 text-pneuma-gold mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={18} fill="currentColor" />
            ))}
          </div>

          <div 
            className={`transition-all duration-700 ease-in-out ${
              isAnimating ? 'opacity-0 translate-x-8 blur-sm' : 'opacity-100 translate-x-0 blur-0'
            }`}
          >
            <p className="text-xl sm:text-2xl text-gray-700 italic font-medium leading-relaxed mb-10">
              "{TESTIMONIALS[current].content}"
            </p>

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-pneuma-purple rounded-2xl flex items-center justify-center text-white font-serif text-2xl font-bold shadow-lg shadow-pneuma-purple/20 ring-4 ring-pneuma-light">
                {TESTIMONIALS[current].name[0]}
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">{TESTIMONIALS[current].name}</h4>
                <p className="text-xs text-pneuma-purple font-black uppercase tracking-widest">{TESTIMONIALS[current].role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Verified Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Controls */}
        <div className="absolute bottom-8 right-12 flex items-center gap-3">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-xl border border-gray-100 text-gray-400 hover:bg-pneuma-purple hover:text-white hover:border-pneuma-purple transition-all shadow-sm hover:shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            className="p-3 rounded-xl border border-gray-100 text-gray-400 hover:bg-pneuma-purple hover:text-white hover:border-pneuma-purple transition-all shadow-sm hover:shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-12 flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrent(i);
                  setTimeout(() => setIsAnimating(false), 600);
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? 'w-10 bg-pneuma-gold shadow-sm' : 'w-2 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress bar (Visual auto-play indicator) */}
        {!isPaused && (
          <div className="absolute bottom-0 left-0 h-1 bg-pneuma-gold/20 w-full overflow-hidden">
            <div 
              key={current}
              className="h-full bg-pneuma-gold animate-progress"
              style={{ animationDuration: '5000ms' }}
            ></div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress linear forwards;
        }
      `}</style>
    </div>
  );
};
