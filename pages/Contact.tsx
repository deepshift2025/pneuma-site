
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, MessageCircle, Info, Shield, ShieldCheck, Lock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Anti-spam challenge
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaTask] = useState({ a: Math.floor(Math.random() * 5), b: Math.floor(Math.random() * 5) });

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Pneuma%20Nikos%20Group%2C%20I%20am%20interested%20in%20your%20recruitment%20services.`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (parseInt(captchaAnswer) !== captchaTask.a + captchaTask.b) {
      alert('Security check failed. Please verify the sum.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Contact Info Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-pneuma-purple font-bold tracking-widest uppercase text-sm mb-4">Get in Touch</h2>
            <h1 className="text-5xl font-bold text-gray-900 font-serif mb-8 leading-tight">Professional Guidance for Your <span className="text-pneuma-purple">Global Journey</span></h1>
            <p className="text-gray-600 text-lg mb-12">
              Our office is located in Ntinda, Kampala. Whether you are a job seeker or a potential international partner, we are ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-pneuma-light p-4 rounded-2xl text-pneuma-purple shrink-0 group-hover:bg-pneuma-purple group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Visit Our Office</h4>
                  <p className="text-gray-500">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-pneuma-light p-4 rounded-2xl text-pneuma-purple shrink-0 group-hover:bg-pneuma-purple group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Call Our Experts</h4>
                  <div className="space-y-1">
                    <p className="text-gray-600 font-semibold">{COMPANY_INFO.phone1}</p>
                    <p className="text-gray-600 font-semibold">{COMPANY_INFO.phone2}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-pneuma-light p-4 rounded-2xl text-pneuma-purple shrink-0 group-hover:bg-pneuma-purple group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                  <p className="text-gray-500">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-pneuma-light p-4 rounded-2xl text-pneuma-purple shrink-0 group-hover:bg-pneuma-purple group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Office Hours</h4>
                  <p className="text-gray-500">Monday - Friday: 8:00 AM - 5:30 PM</p>
                  <p className="text-gray-500">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-red-500 text-xs mt-1 font-bold">Closed on Sundays & Public Holidays</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <button 
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-[#25D366]/20"
              >
                <MessageCircle size={24} /> Chat on WhatsApp
              </button>
              <div className="flex gap-4">
                <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-full text-gray-600 hover:bg-pneuma-purple hover:text-white transition-all">
                  <Facebook size={24} />
                </a>
                <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-full text-gray-600 hover:bg-pneuma-purple hover:text-white transition-all">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pneuma-light rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Official Inquiry</h3>
            
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Message Sent!</h4>
                <p className="text-gray-500 mb-8">Thank you for contacting Pneuma Nikos Group Ltd. Our team will review your inquiry and get back to you within 24 business hours.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-pneuma-purple font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none bg-gray-50" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none bg-gray-50" placeholder="+256..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none bg-gray-50" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Inquiry Type</label>
                  <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none appearance-none bg-gray-50">
                    <option value="">Select a subject...</option>
                    <option>Job Application Status</option>
                    <option>International Partnership</option>
                    <option>License Verification</option>
                    <option>Document Legalization</option>
                    <option>Complaint/Welfare Report</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Message Detail</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none resize-none bg-gray-50" placeholder="How can we help you specifically?"></textarea>
                </div>
                
                {/* Security Verification */}
                <div className="bg-pneuma-light p-5 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={20} className="text-pneuma-purple" />
                    <span className="text-sm font-bold text-gray-700">{captchaTask.a} + {captchaTask.b} = </span>
                  </div>
                  <input 
                    type="number" 
                    required 
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    className="w-16 px-2 py-1 bg-white rounded-lg border border-pneuma-purple/20 outline-none text-center font-bold"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3 text-gray-500 mb-6 border border-gray-100">
                  <Lock size={18} className="shrink-0 text-pneuma-purple" />
                  <p className="text-[10px] font-medium uppercase tracking-widest">Encrypted Transmission Enabled</p>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-pneuma-purple text-white py-4 rounded-xl font-bold hover:bg-pneuma-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-pneuma-purple/20 disabled:bg-gray-400"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>Send Secured Inquiry <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-gray-200 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/kampala-map-large/1920/600?blur=4" 
            className="w-full h-full object-cover brightness-75" 
            alt="Kampala Map Area" 
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl max-w-md w-full border border-pneuma-light">
            <div className="w-16 h-16 bg-pneuma-purple text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <MapPin size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-2 text-gray-900 font-serif">Main Office Location</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Find us at <strong>Kigoowa Road, Ntinda, Kampala</strong>. <br/>
              P.O. BOX 273, Kampala.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pneuma-purple text-white text-center py-3 rounded-xl font-bold hover:bg-pneuma-dark transition-all"
              >
                Open in Google Maps
              </a>
              <button 
                onClick={handleWhatsApp}
                className="text-pneuma-purple font-bold text-sm hover:underline"
              >
                Request Live Location via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 bg-pneuma-light/50 border-t border-pneuma-light">
        <div className="max-w-7xl auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-pneuma-purple font-black uppercase text-[10px] tracking-widest mb-2">
            <Shield size={14} /> Security Advisory
          </div>
          <p className="text-gray-500 text-xs max-w-2xl mx-auto">
            Pneuma Nikos Group Ltd will never ask for payments via mobile money to individual numbers. All payments must be made at our official office in Ntinda or via our Diamond Trust Bank account. Report any fraudulent activity immediately to our hotline.
          </p>
        </div>
      </section>
    </div>
  );
};
