
import React, { useState, useEffect } from 'react';
import { MOCK_JOBS, COMPANY_INFO, TESTIMONIALS } from '../constants';
import { View, Job } from '../types';
import { Globe, Shield, Users, ArrowRight, Briefcase, Star, Quote, CheckCircle, Award, Clock, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { Gallery } from '../components/Gallery';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

interface HomeProps {
  setView: (view: View) => void;
  onApply: (job: Job) => void;
}

const HERO_SLIDES = [
  {
    image: 'https://i.postimg.cc/7LvYGdxx/IMG-0031-JPG.jpg',
    tag: 'FULLY LICENSED: ' + COMPANY_INFO.license,
    title: 'Your Licensed Gateway to Global Success',
    description: 'Connect with verified, high-trust job opportunities in Saudi Arabia and Dubai (UAE). Legally protected recruitment for all Ugandans.',
    buttonText: 'Find Your Dream Job',
    buttonView: 'jobs' as View
  },
  {
    image: 'https://i.postimg.cc/Nf5gNBFq/IMG-0033-JPG.jpg',
    tag: 'DESTINATIONS',
    title: 'Explore Careers in the Middle East',
    description: 'Focusing exclusively on the most reliable markets in Saudi Arabia and the UAE, we bridge the gap between Ugandan talent and global employers.',
    buttonText: 'View Job Locations',
    buttonView: 'resources' as View
  },
  {
    image: 'https://i.postimg.cc/SQZS7JyH/IMG-0034-JPG.jpg',
    tag: 'ETHICAL PROCESS',
    title: 'Transparent & Professional Recruitment',
    description: 'We follow a strict 6-step recruitment cycle ensuring your safety, from application to travel. No hidden fees, just absolute integrity.',
    buttonText: 'Learn Our Process',
    buttonView: 'process' as View
  },
  {
    image: 'https://i.postimg.cc/KjY1BzHj/IMG-0064-JPG.jpg',
    tag: 'OFFICIAL HEADQUARTERS',
    title: 'Verified Recruitment Operations',
    description: 'Our physical presence in Rubaga guarantees accountability. Visit our licensed facilities to begin your secure international career journey.',
    buttonText: 'Locate Our Office',
    buttonView: 'contact' as View
  },
  {
    image: 'https://i.postimg.cc/VNjsjg69/IMG-0035-JPG.jpg',
    tag: 'FAMILY VALUES',
    title: 'Feeding the Universe through Empowerment',
    description: 'As a family-led agency, we treat every candidate as a partner. Join the Pneuma Nikos family and secure your financial future today.',
    buttonText: 'Contact Our Experts',
    buttonView: 'contact' as View
  }
];

export const Home: React.FC<HomeProps> = ({ setView, onApply }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div>
      {/* 5.1 Hero Carousel Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-pneuma-dark">
        {/* Carousel Background Images */}
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pneuma-dark/95 via-pneuma-dark/40 to-transparent"></div>
          </div>
        ))}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {HERO_SLIDES.map((slide, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 delay-300 ${index === currentSlide ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-8'}`}
              >
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <Award className="text-pneuma-gold" size={18} />
                  <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
                    {slide.tag}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
                  {slide.title.split(' ').map((word, i) => 
                    word.toLowerCase() === 'global' || word.toLowerCase() === 'success' || word.toLowerCase() === 'empowerment' || word.toLowerCase() === 'professional' || word.toLowerCase() === 'verified' ? 
                    <span key={i} className="text-pneuma-gold underline decoration-white/20">{word} </span> : word + ' '
                  )}
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 mb-12 leading-relaxed font-light">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <button 
                    onClick={() => setView(slide.buttonView)}
                    className="bg-pneuma-gold text-pneuma-dark px-10 py-5 rounded-xl font-extrabold text-lg hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-pneuma-gold/20"
                  >
                    {slide.buttonText} <ArrowRight size={22} />
                  </button>
                  <div className="flex items-center gap-4 px-4">
                    <img 
                      src="https://i.postimg.cc/Dyvrdk76/phuema-logo-1.png" 
                      className="h-10 w-auto opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" 
                      alt="Ministry Logo Placeholder" 
                      title="Regulated by Ministry of Gender, Labour and Social Development"
                    />
                    <div className="h-10 w-px bg-white/20"></div>
                    <div className="text-white/60 text-[10px] leading-tight font-medium uppercase tracking-widest">
                      Regulated by <br/>Ministry of Gender
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Extreme End Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-pneuma-gold hover:text-pneuma-dark transition-all group flex items-center justify-center shadow-2xl"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-pneuma-gold hover:text-pneuma-dark transition-all group flex items-center justify-center shadow-2xl"
          aria-label="Next slide"
        >
          <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Bottom Bar: Indicators Only */}
        <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center items-center">
          <div className="flex gap-2">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all rounded-full ${index === currentSlide ? 'w-12 bg-pneuma-gold' : 'w-4 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Validity Strip */}
      <div className="bg-pneuma-gold py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-8 overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-2 text-pneuma-dark font-bold text-sm">
            <CheckCircle size={16} /> LICENSE: {COMPANY_INFO.license}
          </div>
          <div className="hidden md:flex items-center gap-2 text-pneuma-dark font-bold text-sm">
            <CheckCircle size={16} /> VALIDITY: {COMPANY_INFO.licenseValidityStart} — {COMPANY_INFO.licenseValidityEnd}
          </div>
          <div className="flex items-center gap-2 text-pneuma-dark font-bold text-sm">
            <CheckCircle size={16} /> MINISTRY APPROVED
          </div>
        </div>
      </div>

      {/* 5.1 Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-8 leading-tight">A Legacy of Trust & Legitimacy</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Pneuma Nikos Group Ltd stands as a beacon of transparency in the Ugandan recruitment industry. We are formally licensed by the <span className="text-pneuma-purple font-bold">Ministry of Gender, Labour and Social Development</span> to ensure the safety and dignity of every candidate.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="bg-pneuma-purple text-white p-2 rounded-lg">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Verified License E24050028</h4>
                    <p className="text-gray-500 text-sm">Legally authorized recruitment operations valid through May 30, 2026.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="bg-pneuma-purple text-white p-2 rounded-lg">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Middle East Expertise</h4>
                    <p className="text-gray-500 text-sm">Deep networks in Saudi Arabia and the UAE paired with family-based Ugandan care.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-pneuma-purple p-8 rounded-3xl text-white transform translate-y-8">
                <p className="text-4xl font-bold mb-2">1000+</p>
                <p className="text-pneuma-gold text-xs font-bold uppercase tracking-widest">Successful Placements</p>
              </div>
              <div className="bg-pneuma-light p-8 rounded-3xl text-pneuma-purple">
                <p className="text-4xl font-bold mb-2">2</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Target Markets</p>
              </div>
              <div className="bg-pneuma-gold p-8 rounded-3xl text-pneuma-dark">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-pneuma-dark/60 text-xs font-bold uppercase tracking-widest">Compliance Rate</p>
              </div>
              <div className="bg-pneuma-dark p-8 rounded-3xl text-white transform -translate-y-8">
                <p className="text-4xl font-bold mb-2">24/7</p>
                <p className="text-pneuma-gold text-xs font-bold uppercase tracking-widest">Support Portal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Visualization */}
      <ProcessTimeline />

      {/* 5.1 Current Opportunities Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-2">Current Opportunities</h2>
            <h3 className="text-4xl font-bold text-gray-900 font-serif">Featured Job Listings</h3>
            <div className="w-24 h-1 bg-pneuma-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {MOCK_JOBS.slice(0, 3).map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative flex flex-col h-full">
                <div className="absolute top-0 right-0 bg-pneuma-gold px-3 py-1 rounded-bl-xl text-[10px] font-bold text-pneuma-dark uppercase">
                  {job.location}
                </div>
                <div className="bg-pneuma-light w-12 h-12 rounded-xl flex items-center justify-center text-pneuma-purple mb-6 group-hover:bg-pneuma-purple group-hover:text-white transition-colors">
                  <Briefcase size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                <div className="flex items-center gap-2 text-pneuma-purple font-bold text-xs mb-4">
                  <Star size={14} fill="currentColor" /> {job.salary}
                </div>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock size={14} className="text-pneuma-gold" />
                    <span>Contract: <strong>{job.contractDuration}</strong></span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-500">
                    <FileText size={14} className="text-pneuma-gold mt-0.5" />
                    <span>Requirements: <strong>{job.requirements?.[0]}...</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-red-500 font-semibold">
                    <CheckCircle size={14} />
                    <span>Deadline: {job.deadline}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                  <span className="text-pneuma-purple font-bold text-sm">{job.vacancies} Vacancies</span>
                  <button 
                    onClick={() => onApply(job)}
                    className="bg-pneuma-purple text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-pneuma-dark transition-colors shadow-lg shadow-pneuma-purple/10"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setView('jobs')}
              className="inline-flex items-center gap-2 bg-pneuma-purple text-white px-8 py-4 rounded-xl font-bold hover:bg-pneuma-dark transition-all shadow-xl shadow-pneuma-purple/10"
            >
              View All Openings <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 5.1 Trust & Credibility Section */}
      <section className="py-24 bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-4">Success Stories</h2>
              <h3 className="text-4xl font-bold text-gray-900 font-serif mb-6 leading-tight">Hear from Our Candidates</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Real feedback from hardworking Ugandans who have secured their futures through Pneuma Nikos Group. We pride ourselves on every life we've helped transform.
              </p>
              <div className="flex gap-4 items-center mb-8">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm" src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Candidate" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-900">4.9/5 Rating</p>
                  <p className="text-gray-400">Based on 200+ success stories</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pneuma-dark overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pneuma-purple/10 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white font-serif mb-6">Start Your International Journey Today</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Licensed recruitment means safe recruitment. Don't risk your future with unverified agencies. Join the Pneuma Nikos family today and build your legacy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => setView('contact')}
                className="bg-pneuma-gold text-pneuma-dark px-10 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-xl shadow-pneuma-gold/10"
              >
                Book an Appointment
              </button>
              <button 
                onClick={() => setView('jobs')}
                className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                Browse Current Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5.1 Gallery Section */}
      <Gallery />
    </div>
  );
};
