
import React, { useState } from 'react';
import { MOCK_JOBS } from '../constants';
import { Job, Location } from '../types';
import { Search, MapPin, Calendar, Users, Briefcase, Filter, Star, Clock, FileText, CheckCircle } from 'lucide-react';

interface JobsProps {
  onApply: (job: Job) => void;
}

export const Jobs: React.FC<JobsProps> = ({ onApply }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Location | 'All'>('All');

  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">Current Openings</h1>
          <p className="text-gray-500 max-w-2xl">
            Explore our latest job opportunities in Saudi Arabia and Dubai (UAE). 
            All positions are strictly regulated and compliant with Ministry standards.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-6 items-center">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by role or keyword..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative w-full">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                className="w-full pl-12 pr-8 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pneuma-purple outline-none appearance-none"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value as any)}
              >
                <option value="All">All Locations</option>
                {Object.values(Location).map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            
            <button className="bg-pneuma-light text-pneuma-purple p-3 rounded-xl hover:bg-pneuma-purple hover:text-white transition-colors">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-start">
                  <div className="hidden sm:flex bg-pneuma-light w-20 h-20 rounded-2xl items-center justify-center text-pneuma-purple shrink-0">
                    <Briefcase size={40} />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{job.title}</h3>
                        <div className="flex items-center gap-2 text-pneuma-purple text-sm font-bold uppercase tracking-wider">
                          <MapPin size={14} /> {job.location}
                        </div>
                      </div>
                      {job.salary && (
                        <div className="bg-pneuma-purple text-white px-4 py-2 rounded-xl text-lg font-bold">
                          {job.salary}
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-4 bg-gray-50 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <Clock className="text-pneuma-gold" size={20} />
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Contract Duration</p>
                          <p className="text-sm font-bold">{job.contractDuration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="text-pneuma-gold" size={20} />
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Open Vacancies</p>
                          <p className="text-sm font-bold">{job.vacancies} Positions</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="text-pneuma-gold" size={20} />
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Posted Date</p>
                          <p className="text-sm font-bold">{job.postedDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="text-red-500" size={20} />
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Deadline</p>
                          <p className="text-sm font-bold text-red-500">{job.deadline}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <FileText size={18} className="text-pneuma-purple" />
                          Requirements Summary
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements?.map((req, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-pneuma-gold rounded-full"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">About the Role</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                      <button 
                        onClick={() => onApply(job)}
                        className="bg-pneuma-purple text-white px-10 py-4 rounded-xl font-bold hover:bg-pneuma-dark transition-all shadow-lg shadow-pneuma-purple/20"
                      >
                        Apply Now
                      </button>
                      <button className="border border-gray-200 text-gray-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                        Inquire More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                <Search size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedLocation('All'); }}
                className="mt-6 text-pneuma-purple font-bold hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
