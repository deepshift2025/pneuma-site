
import React from 'react';
import { View } from '../types';
import { COMPANY_INFO } from '../constants';
import { Menu, X, Phone, Mail, MapPin, Award, Facebook, Instagram, ShieldCheck, AlertTriangle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  setView: (view: View) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks: { label: string; value: View }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Jobs', value: 'jobs' },
    { label: 'Resources', value: 'resources' },
    { label: 'Process', value: 'process' },
    { label: 'Contact', value: 'contact' },
  ];

  const legalLinks: { label: string; value: View }[] = [
    { label: 'Anti-Fraud Warning', value: 'legal' },
    { label: 'Privacy Policy', value: 'legal' },
    { label: 'Terms of Service', value: 'legal' },
    { label: 'Cookie Policy', value: 'legal' },
    { label: 'Complaints Procedure', value: 'legal' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-pneuma-dark text-white py-2 px-4 text-xs sm:text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} className="text-pneuma-gold" /> {COMPANY_INFO.phone1}</span>
            <span className="flex items-center gap-1"><Mail size={14} className="text-pneuma-gold" /> {COMPANY_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={14} className="text-pneuma-gold" />
            <span>License: {COMPANY_INFO.license}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-24">
            <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
              <img 
                src="https://i.postimg.cc/mg39JTTf/PHUMENA-LOGO-4.png" 
                alt="Pneuma Nikos Group Ltd" 
                className="h-12 md:h-18 w-auto object-contain transition-transform hover:scale-105"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => setView(link.value)}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    currentView === link.value ? 'text-pneuma-purple border-b-2 border-pneuma-gold' : 'text-gray-600 hover:text-pneuma-purple'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-pneuma-purple focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => {
                  setView(link.value);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-base font-medium rounded-md ${
                  currentView === link.value ? 'bg-pneuma-light text-pneuma-purple' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-pneuma-dark text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="flex flex-col">
              <img 
                src="https://i.postimg.cc/G2PDGzNG/phuema_logo3.png" 
                alt="Pneuma Nikos Group Ltd Logo" 
                className="h-20 w-auto object-contain mb-6 self-start"
              />
              <p className="text-gray-300 mb-6 italic">"{COMPANY_INFO.slogan}"</p>
              
              <div className="flex space-x-4">
                <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pneuma-gold transition-colors">
                  <Facebook size={24} />
                </a>
                <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pneuma-gold transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 border-b border-pneuma-purple pb-2">Legal & Support</h4>
              <ul className="space-y-3">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <button onClick={() => setView(link.value)} className="text-gray-400 hover:text-white text-sm transition-colors text-left">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 border-b border-pneuma-purple pb-2">Compliance</h4>
              <div className="space-y-4">
                <div className="bg-pneuma-purple/30 p-4 rounded-lg border border-pneuma-purple/50">
                  <p className="text-xs text-gray-300 mb-1 uppercase tracking-wider">License Number</p>
                  <p className="text-pneuma-gold font-bold">{COMPANY_INFO.license}</p>
                  <p className="text-[10px] text-gray-400 mt-1">Regulated by the Ministry of Gender, Labour and Social Development</p>
                  <p className="text-[10px] text-gray-400">Valid through: {COMPANY_INFO.licenseValidityEnd}</p>
                </div>
                <div className="flex items-center gap-2 text-pneuma-gold">
                   <ShieldCheck size={20} />
                   <span className="text-xs font-bold uppercase tracking-widest">Ethical Recruitment Agency</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 border-b border-pneuma-purple pb-2">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-pneuma-gold shrink-0 mt-1" />
                  <span className="text-sm text-gray-400">{COMPANY_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-pneuma-gold shrink-0" />
                  <span className="text-sm text-gray-400">
                    {COMPANY_INFO.phone1}<br/>
                    {COMPANY_INFO.phone2}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-pneuma-gold shrink-0" />
                  <span className="text-sm text-gray-400">{COMPANY_INFO.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
            <p>&copy; {new Date().getFullYear()} Pneuma Nikos Group Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
