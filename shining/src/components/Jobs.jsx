import React, { useState } from 'react';
import axios from 'axios';
import { Upload, X, Briefcase, Target, Users } from 'lucide-react';

export default function FeaturedSection() {
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  // Render Backend URL
  const API_BASE_URL = "https://shining-11.onrender.com"; 

  // CV Submit Handler
  const handleCvSubmit = async (e) => {
    e.preventDefault();
    if (!cvFile) return alert("Please select a CV file");

    setUploading(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('cv', cvFile);

    try {
      const res = await axios.post(`${API_BASE_URL}/api/upload-cv`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (res.data.success) {
        alert("✅ CV Sent Successfully!");
        setIsModalOpen(false);
        setFormData({ name: '', email: '', phone: '' });
        setCvFile(null);
      }
    } catch (err) {
      console.error("Upload Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Error sending CV. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="py-20 bg-[#020617] px-4 md:px-10 relative overflow-hidden">
      
      {/* --- Center Upload Button Section --- */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex flex-col items-center justify-center gap-2 px-8 py-6 md:px-12 md:py-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-cyan-600 border border-indigo-400/30 text-white transition-all hover:scale-105 shadow-2xl shadow-indigo-500/20"
        >
          <Upload size={32} className="mb-2 animate-bounce" />
          <span className="text-xs md:text-sm font-medium opacity-80 uppercase tracking-widest">Upload Your</span>
          <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter">CV / RESUME</span>
        </button>
      </div>

      {/* --- About / Intro Paragraph Section (YE WAPAS AA GAYA) --- */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-8 md:p-12 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                SHINING <span className="text-indigo-400">PLACEMENT</span>
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                Welcome to <span className="text-white font-semibold">Shining Placement</span>, where we bridge the gap between talent and opportunity. 
                As a premier Management Consultancy, we specialize in Human Resources services, helping businesses scale with the right professionals. 
                From <span className="text-indigo-300">Executive Recruitment</span> to <span className="text-indigo-300">Bulk Hiring</span>, 
                our pro-active approach ensures a synergistic association with our clients, treating your growth as our own commitment.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-wider">
                  <Briefcase size={16} className="text-indigo-500" /> Pan India Network
                </div>
                <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-wider">
                  <Target size={16} className="text-indigo-500" /> Time-Bound Delivery
                </div>
                <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-wider">
                  <Users size={16} className="text-indigo-500" /> Expert Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CV Upload Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#0f172a] border border-white/10 w-full max-w-md rounded-[2rem] overflow-hidden relative shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <form onSubmit={handleCvSubmit} className="p-8">
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">Submit Your <span className="text-indigo-400">CV</span></h4>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Phone" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                
                <div className="relative border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-colors">
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    required
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => setCvFile(e.target.files[0])}
                  />
                  <Upload className="mx-auto text-indigo-500 mb-2" size={24} />
                  <p className="text-white/60 text-xs">
                    {cvFile ? cvFile.name : "Select CV (PDF/DOC)"}
                  </p>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={uploading}
                className="w-full mt-6 py-4 rounded-xl bg-indigo-600 text-white font-black uppercase text-xs hover:bg-indigo-700 transition-all disabled:opacity-50"
              >
                {uploading ? "Sending..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}