
import React, { useState, useEffect } from 'react';
import { ShieldCheck, FileText, AlertTriangle, Scale, Lock, Info, ExternalLink, ShieldAlert, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

type LegalSection = 'privacy' | 'terms' | 'cookies' | 'anti-fraud' | 'complaints';

export const Legal: React.FC<{ initialSection?: LegalSection }> = ({ initialSection = 'privacy' }) => {
  const [activeSection, setActiveSection] = useState<LegalSection>(initialSection);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const sections = [
    { id: 'anti-fraud', label: 'Anti-Fraud Warning', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
    { id: 'privacy', label: 'Privacy Policy', icon: Lock, color: 'text-pneuma-purple', bg: 'bg-pneuma-light' },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText, color: 'text-pneuma-purple', bg: 'bg-pneuma-light' },
    { id: 'cookies', label: 'Cookie Policy', icon: Info, color: 'text-pneuma-purple', bg: 'bg-pneuma-light' },
    { id: 'complaints', label: 'Complaints Procedure', icon: Scale, color: 'text-pneuma-purple', bg: 'bg-pneuma-light' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'anti-fraud':
        return (
          <div className="space-y-8">
            <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-r-3xl mb-10">
              <div className="flex items-center gap-4 mb-4">
                <ShieldAlert className="text-red-600" size={32} />
                <h2 className="text-3xl font-bold text-red-900 font-serif">Critical Security Advisory</h2>
              </div>
              <p className="text-red-800 font-bold text-xl mb-4">
                IMPORTANT: Pneuma Nikos Group Ltd does NOT charge any recruitment fees to job seekers.
              </p>
              <p className="text-red-700">
                Beware of individuals claiming to be our "agents" asking for money on the streets, via mobile money, or for "guaranteed" placements. All official transactions are strictly office-based.
              </p>
            </div>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">How to Verify Legitimacy</h3>
              <p className="text-gray-600">To protect yourself from fraudulent recruiters, always follow these verification steps:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Check the License", desc: `Verify License E24050028 on the official Ministry of Gender EEMIS portal.` },
                  { title: "Verify the Location", desc: "Our only official headquarters is at Kigoowa Road, Rubaga (Ntinda area), Kampala." },
                  { title: "No Mobile Money", desc: "We never ask for payments to individual mobile money numbers." },
                  { title: "Official Receipts", desc: "Every payment at our office must be accompanied by an official company receipt." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                    <CheckCircle className="text-pneuma-gold shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Fraudulent Warning Signs</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Job offers sent via WhatsApp from unknown numbers without previous interaction.</li>
                <li>Requests for "processing fees", "medical fees" or "visa fees" to be sent via mobile money.</li>
                <li>Agents who refuse to meet at the official Pneuma Nikos office in Rubaga.</li>
                <li>Pressure to sign documents without proper review.</li>
              </ul>
              <div className="bg-pneuma-dark text-white p-8 rounded-3xl mt-8">
                <h4 className="text-pneuma-gold font-bold mb-2">Report Fraud Immediately</h4>
                <p className="mb-4">If you have been approached by a suspicious person claiming to work for Pneuma Nikos, please contact us immediately:</p>
                <p className="font-bold text-xl">{COMPANY_INFO.phone1} / {COMPANY_INFO.phone2}</p>
                <p className="text-gray-400 text-sm mt-2 italic">Your report remains anonymous and helps protect others.</p>
              </div>
            </section>
          </div>
        );
      case 'privacy':
        return (
          <div className="prose prose-pneuma max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-6">Privacy & Data Protection Policy</h2>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase mb-8">
              <ShieldCheck size={12} /> GDPR & Data Protection Act 2019 Compliant
            </div>
            <p className="text-gray-500 mb-8">Effective Date: May 31, 2024</p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">1. Data Collection & Ethics</h3>
            <p>Pneuma Nikos Group Ltd ("we", "us", "our") collects personal information including but not limited to full names, passport details, contact information, educational history, and family details for the sole purpose of external labor recruitment. We strictly adhere to the <strong>Data Protection and Privacy Act, 2019 (Uganda)</strong> and international <strong>GDPR</strong> principles.</p>

            <h3 className="text-xl font-bold mt-8 mb-4">2. Your Rights (GDPR)</h3>
            <p>Under GDPR and local laws, you have the following rights regarding your data:</p>
            <ul>
              <li><strong>Right to Access:</strong> You can request a copy of the data we hold about you.</li>
              <li><strong>Right to Erasure:</strong> You can request that we delete your data if your recruitment process is concluded or cancelled.</li>
              <li><strong>Right to Rectification:</strong> You can correct any inaccurate information in your profile.</li>
              <li><strong>Right to Withdraw Consent:</strong> You can withdraw your consent for data processing at any time.</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">3. High-Security Measures</h3>
            <p>We implement bank-grade security to protect your sensitive recruitment data:</p>
            <ul>
              <li><strong>Encryption:</strong> All digital applications are transmitted via 256-bit SSL encryption.</li>
              <li><strong>Access Control:</strong> Data is only accessible to verified HR personnel on a need-to-know basis.</li>
              <li><strong>Storage:</strong> Physical documents are stored in fireproof, secure cabinets within our Kampala headquarters.</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">4. Retention Policy</h3>
            <p>Candidate data is retained for a period of 5 years following deployment or application, as required by the Ministry of Gender, Labour and Social Development audit guidelines, after which it is securely purged.</p>

            <h3 className="text-xl font-bold mt-8 mb-4">5. Contact Data Protection Officer</h3>
            <p>For any privacy-related inquiries, please contact our Data Protection Officer at: <strong>{COMPANY_INFO.email}</strong>.</p>
          </div>
        );
      case 'terms':
        return (
          <div className="prose prose-pneuma max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-6">Terms and Conditions</h2>
            <p className="text-gray-500 mb-8">Last Updated: June 2024</p>

            <h3 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h3>
            <p>By accessing this website and applying for job opportunities through Pneuma Nikos Group Ltd, you agree to be bound by these terms and all applicable laws of the Republic of Uganda.</p>

            <h3 className="text-xl font-bold mt-8 mb-4">2. Recruitment Eligibility</h3>
            <p>Candidates must be Ugandan citizens, possess a valid passport, and meet the specific medical and legal requirements set by the destination country.</p>

            <h3 className="text-xl font-bold mt-8 mb-4">3. Accuracy of Information</h3>
            <p>You warrant that all information provided during the application process is truthful and accurate. Provision of forged documents is a criminal offense and will lead to immediate disqualification and reporting to authorities.</p>
          </div>
        );
      case 'cookies':
        return (
          <div className="prose prose-pneuma max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-6">Cookie Policy</h2>
            <p className="text-gray-600 mb-8">We use cookies to enhance your experience on our portal.</p>
            <h3 className="text-xl font-bold mt-8 mb-4">What are Cookies?</h3>
            <p>Cookies are small text files stored on your device that help us remember your preferences and ensure the security of your application session.</p>
            <h3 className="text-xl font-bold mt-8 mb-4">How we use them:</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for you to log into the candidate portal.</li>
              <li><strong>Security Cookies:</strong> To prevent unauthorized access to your application data.</li>
              <li><strong>Analytics:</strong> To understand how job seekers interact with our listings.</li>
            </ul>
          </div>
        );
      case 'complaints':
        return (
          <div className="prose prose-pneuma max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-6">Complaints & Grievance Procedure</h2>
            <p className="text-gray-600 mb-8">Pneuma Nikos Group Ltd is committed to the highest standards of service. We provide a clear channel for candidate grievances.</p>

            <div className="bg-pneuma-light p-8 rounded-3xl border border-pneuma-purple/20 mb-10">
              <h3 className="text-xl font-bold text-pneuma-purple mb-4 mt-0">How to Lodge a Complaint</h3>
              <ol className="space-y-4">
                <li><strong>Internal Reporting:</strong> Contact our Welfare & HR Officer at {COMPANY_INFO.phone1}.</li>
                <li><strong>Written Grievance:</strong> Email details of your concern to {COMPANY_INFO.email} with the subject "GRIEVANCE".</li>
                <li><strong>Response Time:</strong> We acknowledge all complaints within 48 hours and provide a resolution plan within 10 business days.</li>
              </ol>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Migrant Worker Support</h3>
            <p>For workers already deployed abroad, we maintain 24/7 welfare monitoring. If you are facing difficulties with your employer, use the emergency hotline provided in your pre-departure orientation kit.</p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">External Escalation</h3>
            <p>If your grievance is not resolved satisfactorily, you may contact the Ministry of Gender, Labour and Social Development (Uganda) at their official labor migration hotline: <strong>0800 203 133</strong>.</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-pneuma-dark py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Legal & Compliance Hub</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ensuring transparency, security, and trust for every Ugandan candidate and international partner.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 sticky top-48">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest px-4 mb-4">Documents</h3>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id as LegalSection)}
                      className={`w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold transition-all ${
                        activeSection === section.id
                          ? `${section.bg} ${section.color}`
                          : 'text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={20} />
                      {section.label}
                    </button>
                  );
                })}
              </nav>
              <div className="mt-8 pt-8 border-t border-gray-100 px-4">
                <p className="text-[10px] text-gray-400 leading-relaxed italic">
                  All documents are legally binding and comply with the laws of the Republic of Uganda.
                </p>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 sm:p-16">
              {renderContent()}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-pneuma-gold/10 text-pneuma-dark px-6 py-3 rounded-full border border-pneuma-gold/20">
                <ShieldCheck size={18} className="text-pneuma-purple" />
                <span className="text-sm font-bold">Pneuma Nikos Group Ltd - Verified License {COMPANY_INFO.license}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
