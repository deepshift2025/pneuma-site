
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { ShieldCheck, CreditCard, FileText, Download, Lock } from 'lucide-react';

export const Portal: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-pneuma-purple/10 inline-flex p-4 rounded-full mb-6">
            <ShieldCheck className="text-pneuma-purple" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">Partner & Client Portal</h1>
          <p className="text-gray-500">Secure information for our recruitment partners and employers.</p>
        </div>

        <div className="space-y-8">
          {/* Banking Info */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-pneuma-dark p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard size={24} className="text-pneuma-gold" />
                <h2 className="text-xl font-bold">Banking Information</h2>
              </div>
              <Lock size={18} className="text-gray-400" />
            </div>
            <div className="p-8">
              <p className="text-gray-500 mb-8 text-sm italic border-l-4 border-pneuma-gold pl-4">
                Please use the following details for all official business transactions with Pneuma Nikos Group Ltd.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Bank Name</label>
                  <p className="text-lg font-bold text-gray-900">{COMPANY_INFO.bank}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Account Holder</label>
                  <p className="text-lg font-bold text-gray-900">Pneuma Nikos Group Ltd</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Branch</label>
                  <p className="text-lg font-bold text-gray-900">Kampala Main</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Country</label>
                  <p className="text-lg font-bold text-gray-900">Uganda</p>
                </div>
              </div>
            </div>
          </div>

          {/* Invoicing Info */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-pneuma-purple p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText size={24} className="text-pneuma-gold" />
                <h2 className="text-xl font-bold">DORAT Invoicing System</h2>
              </div>
              <Download size={18} className="text-gray-300 hover:text-white cursor-pointer" />
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Transparency & Efficiency</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We utilize the <strong>DORAT Invoice</strong> system for all our international recruitment offices. This ensures real-time tracking of payments, visa processing fees, and deployment logistics.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <ShieldCheck size={16} className="text-pneuma-purple" />
                      Digital-first invoicing for speed
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <ShieldCheck size={16} className="text-pneuma-purple" />
                      Auditable financial trails
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <ShieldCheck size={16} className="text-pneuma-purple" />
                      Multi-currency support (USD, SAR, AED)
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-48 bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
                  <div className="bg-pneuma-light text-pneuma-purple p-4 rounded-full inline-block mb-4">
                    <Download size={24} />
                  </div>
                  <p className="text-[10px] font-bold uppercase text-gray-400">Sample Invoice</p>
                  <button className="text-pneuma-purple text-xs font-bold hover:underline">Download PDF</button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Need technical support or access credentials? <br />
              <button className="text-pneuma-purple font-bold hover:underline mt-1">Contact IT Department</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
