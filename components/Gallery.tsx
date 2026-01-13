
import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [fullscreenIdx, setFullscreenIdx] = useState<number | null>(null);
  
  // Infinite scroll logic (cloning images for seamless marquee)
  const infiniteImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES];

  const handleNext = () => {
    if (fullscreenIdx !== null) {
      setFullscreenIdx((fullscreenIdx + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = () => {
    if (fullscreenIdx !== null) {
      setFullscreenIdx((fullscreenIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (fullscreenIdx === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setFullscreenIdx(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenIdx]);

  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-2">Our Life at Pneuma</h2>
        <h3 className="text-4xl font-bold text-gray-900 font-serif">Success & Orientation Gallery</h3>
        <p className="text-gray-500 mt-4 text-sm max-w-2xl mx-auto">Double-click any image to view in full screen. Experience the journey of our candidates from Kampala to the world.</p>
      </div>

      <div className="relative group/marquee">
        {/* Carousel Container */}
        <div 
          className="flex gap-4 animate-marquee group-hover/marquee:pause"
          style={{ width: 'max-content' }}
        >
          {infiniteImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] shrink-0 rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer select-none group/img bg-gray-100 border border-gray-100"
              onDoubleClick={() => setFullscreenIdx(idx % GALLERY_IMAGES.length)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pneuma-dark/90 via-pneuma-dark/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex flex-col justify-end p-10">
                <p className="text-white font-bold text-xl mb-2">{img.title}</p>
                <div className="flex items-center gap-2 text-pneuma-gold text-xs font-black uppercase tracking-widest">
                  <Maximize2 size={14} /> Double-Click for Full View
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {fullscreenIdx !== null && (
        <div className="fixed inset-0 z-[1000] bg-pneuma-dark/98 backdrop-blur-2xl flex flex-col animate-in fade-in duration-300">
          <div className="flex justify-between items-center p-6 text-white border-b border-white/5">
            <div className="flex flex-col">
              <h4 className="text-2xl font-serif font-bold text-pneuma-gold">
                {GALLERY_IMAGES[fullscreenIdx].title}
              </h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-black">
                Image {fullscreenIdx + 1} of {GALLERY_IMAGES.length}
              </p>
            </div>
            <button 
              onClick={() => setFullscreenIdx(null)}
              className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
            >
              <X size={32} />
            </button>
          </div>

          <div className="flex-grow relative flex items-center justify-center overflow-hidden">
            {/* Nav Arrows */}
            <button 
              onClick={handlePrev}
              className="absolute left-8 p-5 bg-white/5 hover:bg-pneuma-gold hover:text-pneuma-dark rounded-full text-white transition-all group z-50 backdrop-blur-md"
            >
              <ChevronLeft size={48} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-8 p-5 bg-white/5 hover:bg-pneuma-gold hover:text-pneuma-dark rounded-full text-white transition-all group z-50 backdrop-blur-md"
            >
              <ChevronRight size={48} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Scrollable Gallery Content */}
            <div className="w-full h-full flex items-center justify-center overflow-x-auto no-scrollbar snap-x snap-mandatory px-4">
              {GALLERY_IMAGES.map((img, i) => (
                <div 
                  key={i} 
                  className={`min-w-full h-full flex items-center justify-center snap-center p-8 transition-all duration-500 ${i === fullscreenIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'}`}
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="max-w-full max-h-[75vh] object-contain rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 flex justify-center gap-4 overflow-x-auto no-scrollbar bg-pneuma-dark/50 border-t border-white/5">
            {GALLERY_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setFullscreenIdx(i)}
                className={`h-1.5 transition-all rounded-full ${i === fullscreenIdx ? 'w-16 bg-pneuma-gold' : 'w-6 bg-white/10 hover:bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.33%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
