
import React, { useState } from 'react';
import { Job, GalleryImage, CountryGuide, RecruitmentTip, Location } from '../types';
import { LayoutDashboard, Briefcase, Globe, Image as ImageIcon, Plus, Trash2, Edit2, Save, X, LogOut, ShieldCheck, CheckCircle, AlertCircle, ChevronRight, FileText } from 'lucide-react';

interface AdminDashboardProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  galleryImages: GalleryImage[];
  setGalleryImages: React.Dispatch<React.SetStateAction<GalleryImage[]>>;
  countryGuides: CountryGuide[];
  setCountryGuides: React.Dispatch<React.SetStateAction<CountryGuide[]>>;
  recruitmentTips: RecruitmentTip[];
  setRecruitmentTips: React.Dispatch<React.SetStateAction<RecruitmentTip[]>>;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  isLoggedIn, setIsLoggedIn, jobs, setJobs, galleryImages, setGalleryImages,
  countryGuides, setCountryGuides, recruitmentTips, setRecruitmentTips, onClose
}) => {
  const [activeTab, setActiveTab] = useState<'jobs' | 'resources' | 'gallery'>('jobs');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === '@Admin256') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleDeleteJob = (id: string) => {
    if (window.confirm('Are you sure you want to delete this job listing?')) {
      setJobs(prev => prev.filter(j => j.id !== id));
      showSuccess('Job deleted successfully');
    }
  };

  const handleSaveJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingJob) return;

    if (jobs.find(j => j.id === editingJob.id)) {
      setJobs(prev => prev.map(j => j.id === editingJob.id ? editingJob : j));
      showSuccess('Job updated');
    } else {
      setJobs(prev => [...prev, editingJob]);
      showSuccess('New job added');
    }
    setEditingJob(null);
  };

  const handleDeleteImage = (url: string) => {
    if (window.confirm('Remove this image from gallery?')) {
      setGalleryImages(prev => prev.filter(img => img.url !== url));
      showSuccess('Image removed');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-pneuma-dark flex items-center justify-center p-4">
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 w-full max-w-md shadow-2xl animate-in zoom-in duration-300">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-pneuma-light rounded-3xl flex items-center justify-center mx-auto mb-6 text-pneuma-purple shadow-inner">
              <ShieldCheck size={40} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 font-serif">Admin Login</h1>
            <p className="text-gray-500 mt-2">Pneuma Nikos Management Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-2">Username</label>
              <input 
                required 
                type="text" 
                value={loginData.username}
                onChange={e => setLoginData({...loginData, username: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-pneuma-purple outline-none font-bold" 
                placeholder="admin"
              />
            </div>
            <div>
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-2">Password</label>
              <input 
                required 
                type="password" 
                value={loginData.password}
                onChange={e => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-pneuma-purple outline-none font-bold" 
                placeholder="••••••••"
              />
            </div>
            {error && <p className="text-red-500 text-sm font-bold flex items-center gap-2"><AlertCircle size={16} /> {error}</p>}
            
            <button type="submit" className="w-full bg-pneuma-purple text-white py-4 rounded-2xl font-bold text-lg hover:bg-pneuma-dark transition-all shadow-xl shadow-pneuma-purple/20">
              Access Dashboard
            </button>
          </form>

          <button onClick={onClose} className="w-full mt-6 text-gray-400 font-bold hover:text-pneuma-purple transition-colors text-sm">
            Return to Website
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="bg-pneuma-purple text-white p-2 rounded-xl">
            <LayoutDashboard size={24} />
          </div>
          <h2 className="text-xl font-bold font-serif text-gray-900 hidden sm:block">Control Center</h2>
        </div>

        {successMsg && (
          <div className="bg-green-50 text-green-700 px-6 py-2 rounded-full border border-green-100 flex items-center gap-2 animate-in fade-in slide-in-from-top-4">
            <CheckCircle size={18} /> <span className="text-sm font-bold uppercase tracking-wider">{successMsg}</span>
          </div>
        )}

        <div className="flex items-center gap-4">
          <span className="text-xs font-black text-gray-400 uppercase tracking-widest hidden sm:block">Logged in as Administrator</span>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 text-red-500 hover:text-red-700 font-bold text-sm bg-red-50 px-4 py-2 rounded-xl transition-all"
          >
            <LogOut size={16} /> <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Sidebar Nav */}
        <aside className="w-full lg:w-64 bg-white border-r border-gray-100 p-6 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm whitespace-nowrap transition-all ${activeTab === 'jobs' ? 'bg-pneuma-purple text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Briefcase size={20} /> Jobs
          </button>
          <button 
            onClick={() => setActiveTab('resources')}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm whitespace-nowrap transition-all ${activeTab === 'resources' ? 'bg-pneuma-purple text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Globe size={20} /> Resources
          </button>
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm whitespace-nowrap transition-all ${activeTab === 'gallery' ? 'bg-pneuma-purple text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <ImageIcon size={20} /> Gallery
          </button>
        </aside>

        {/* Content Area */}
        <main className="flex-grow p-6 sm:p-10 max-h-[calc(100vh-80px)] overflow-y-auto">
          {activeTab === 'jobs' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold font-serif">Job Listings</h3>
                <button 
                  onClick={() => setEditingJob({ id: Date.now().toString(), title: '', location: Location.DUBAI, category: 'Service', vacancies: 1, description: '', postedDate: new Date().toISOString().split('T')[0], requirements: [] })}
                  className="bg-pneuma-gold text-pneuma-dark px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
                >
                  <Plus size={20} /> Add Job
                </button>
              </div>

              {editingJob ? (
                <div className="bg-white p-8 rounded-3xl border border-pneuma-light shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-pneuma-gold"></div>
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="text-xl font-bold">Edit Listing Details</h4>
                    <button onClick={() => setEditingJob(null)} className="text-gray-400 hover:text-red-500"><X size={24} /></button>
                  </div>
                  <form onSubmit={handleSaveJob} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-gray-400">Job Title</label>
                      <input required type="text" className="w-full p-4 bg-gray-50 border rounded-2xl" value={editingJob.title} onChange={e => setEditingJob({...editingJob, title: e.target.value})} />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-gray-400">Location</label>
                      <select className="w-full p-4 bg-gray-50 border rounded-2xl" value={editingJob.location} onChange={e => setEditingJob({...editingJob, location: e.target.value as Location})}>
                        <option value={Location.DUBAI}>Dubai (UAE)</option>
                        <option value={Location.SAUDI_ARABIA}>Saudi Arabia</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-gray-400">Salary Range</label>
                      <input type="text" className="w-full p-4 bg-gray-50 border rounded-2xl" value={editingJob.salary} onChange={e => setEditingJob({...editingJob, salary: e.target.value})} />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-gray-400">Vacancies</label>
                      <input type="number" className="w-full p-4 bg-gray-50 border rounded-2xl" value={editingJob.vacancies} onChange={e => setEditingJob({...editingJob, vacancies: parseInt(e.target.value)})} />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <label className="text-[10px] font-black uppercase text-gray-400">Description</label>
                      <textarea className="w-full p-4 bg-gray-50 border rounded-2xl min-h-[120px]" value={editingJob.description} onChange={e => setEditingJob({...editingJob, description: e.target.value})} />
                    </div>
                    <button type="submit" className="md:col-span-2 bg-pneuma-purple text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-pneuma-dark transition-all">
                      <Save size={20} /> Save Changes
                    </button>
                  </form>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {jobs.map(job => (
                    <div key={job.id} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm hover:shadow-md transition-all group">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-pneuma-light text-pneuma-purple rounded-xl flex items-center justify-center font-bold">
                          {job.title[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{job.title}</h4>
                          <p className="text-xs text-gray-400 uppercase tracking-widest">{job.location} • {job.vacancies} Vacancies</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setEditingJob(job)} className="p-3 bg-pneuma-light text-pneuma-purple rounded-xl hover:bg-pneuma-purple hover:text-white transition-all"><Edit2 size={18} /></button>
                        <button onClick={() => handleDeleteJob(job.id)} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold font-serif">Success Gallery</h3>
                <button 
                  onClick={() => setGalleryImages([{ url: '', title: '' }, ...galleryImages])}
                  className="bg-pneuma-gold text-pneuma-dark px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
                >
                  <Plus size={20} /> Add Photo
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                    <div className="aspect-video bg-gray-100 relative">
                      <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button onClick={() => handleDeleteImage(img.url)} className="p-4 bg-white text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all"><Trash2 size={24} /></button>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <input 
                        type="text" 
                        placeholder="Image Title" 
                        value={img.title} 
                        onChange={e => {
                          const newImages = [...galleryImages];
                          newImages[idx].title = e.target.value;
                          setGalleryImages(newImages);
                        }}
                        className="w-full bg-gray-50 border p-3 rounded-xl text-sm font-bold"
                      />
                      <input 
                        type="text" 
                        placeholder="Image URL" 
                        value={img.url} 
                        onChange={e => {
                          const newImages = [...galleryImages];
                          newImages[idx].url = e.target.value;
                          setGalleryImages(newImages);
                        }}
                        className="w-full bg-gray-50 border p-3 rounded-xl text-xs font-mono"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div>
                <h3 className="text-2xl font-bold font-serif mb-8">Country Guides</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {countryGuides.map((guide, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-pneuma-purple text-white p-3 rounded-2xl"><Globe size={24} /></div>
                        <h4 className="text-xl font-bold">{guide.country}</h4>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-gray-400">Culture Description</label>
                          <textarea 
                            value={guide.culture} 
                            onChange={e => {
                              const newGuides = [...countryGuides];
                              newGuides[idx].culture = e.target.value;
                              setCountryGuides(newGuides);
                            }}
                            className="w-full p-4 bg-gray-50 border rounded-2xl min-h-[100px] text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-gray-400">Legal Rights</label>
                          <textarea 
                            value={guide.rights} 
                            onChange={e => {
                              const newGuides = [...countryGuides];
                              newGuides[idx].rights = e.target.value;
                              setCountryGuides(newGuides);
                            }}
                            className="w-full p-4 bg-gray-50 border rounded-2xl min-h-[100px] text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif mb-8">Recruitment Tips</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {recruitmentTips.map((tip, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <FileText size={18} className="text-pneuma-purple" />
                        {tip.title}
                      </h4>
                      <div className="space-y-2">
                        {tip.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex gap-2">
                            <input 
                              type="text" 
                              value={item} 
                              onChange={e => {
                                const newTips = [...recruitmentTips];
                                newTips[idx].items[itemIdx] = e.target.value;
                                setRecruitmentTips(newTips);
                              }}
                              className="w-full p-3 bg-gray-50 border rounded-xl text-xs"
                            />
                            <button onClick={() => {
                              const newTips = [...recruitmentTips];
                              newTips[idx].items.splice(itemIdx, 1);
                              setRecruitmentTips(newTips);
                            }} className="text-red-400 hover:text-red-600"><Trash2 size={14}/></button>
                          </div>
                        ))}
                        <button 
                          onClick={() => {
                            const newTips = [...recruitmentTips];
                            newTips[idx].items.push('New Tip Entry');
                            setRecruitmentTips(newTips);
                          }}
                          className="w-full mt-4 p-2 bg-pneuma-light text-pneuma-purple text-[10px] font-bold uppercase tracking-widest rounded-lg"
                        >
                          + Add Item
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
