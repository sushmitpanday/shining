import React, { useState } from 'react';
import axios from 'axios';
import { Upload, X, Briefcase, Target, Users } from 'lucide-react';

export default function FeaturedSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  // Dynamic URL: Local par localhost, Render par Render
  const API_BASE_URL = window.location.hostname === "localhost" 
    ? "http://localhost:5000" 
    : "https://shining-11.onrender.com";

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
      const res = await axios.post(`${API_BASE_URL}/api/upload-cv`, data);
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
      <div className="max-w-4xl mx-auto text-center mb-16">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex flex-col items-center justify-center gap-2 px-8 py-6 md:px-12 md:py-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-cyan-600 text-white transition-all hover:scale-105"
        >
          <Upload size={32} className="mb-2 animate-bounce" />
          <span className="text-3xl md:text-5xl font-black uppercase">CV / RESUME</span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#0f172a] border border-white/10 w-full max-w-md rounded-[2rem] p-8 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 text-white/50"><X size={24} /></button>
            <form onSubmit={handleCvSubmit} className="space-y-4">
              <h4 className="text-xl font-bold text-white uppercase">Submit Your <span className="text-indigo-400">CV</span></h4>
              <input type="text" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="Email" required className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <input type="text" placeholder="Phone" required className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              <div className="relative border-2 border-dashed border-white/10 rounded-xl p-6 text-center">
                <input type="file" accept=".pdf,.doc,.docx" required className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setCvFile(e.target.files[0])} />
                <p className="text-white/60 text-xs">{cvFile ? cvFile.name : "Select CV (PDF/DOC)"}</p>
              </div>
              <button type="submit" disabled={uploading} className="w-full py-4 rounded-xl bg-indigo-600 text-white font-black uppercase">{uploading ? "Sending..." : "Submit Application"}</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}