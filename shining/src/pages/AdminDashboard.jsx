import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Image as ImageIcon, PlusCircle, Loader2 } from 'lucide-react';

export default function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = window.location.hostname === "localhost" 
    ? "http://localhost:5000" 
    : "https://shining-3.onrender.com";

  const AUTH_HEADER = { headers: { 'admin-secret': 'MAHAKAAL_ADMIN_KEY' } };

  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/jobs/list-jobs`);
      setJobs(res.data);
    } catch (err) { console.error("Fetch Error"); }
  };

  useEffect(() => { fetchJobs(); }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Bhai image select kar lo!");
    setLoading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('jobImage', image);

    try {
      await axios.post(`${API_BASE_URL}/api/jobs/add-job`, formData, {
        headers: { ...AUTH_HEADER.headers, 'Content-Type': 'multipart/form-data' }
      });
      alert("Job Posted!");
      setTitle(''); setDescription(''); setImage(null); setPreview(null);
      fetchJobs();
    } catch (err) {
      alert("Post failed: " + (err.response?.data?.message || "Server Error"));
    } finally { setLoading(false); }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Kyu Malik, delete kar dein?")) {
      try {
        await axios.delete(`${API_BASE_URL}/api/jobs/delete-job/${id}`, AUTH_HEADER);
        fetchJobs();
      } catch (err) { alert("Delete failed!"); }
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-10 flex items-center gap-3">
          <PlusCircle className="text-indigo-500" /> ADMIN CONTROL
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* CREATE JOB FORM */}
          <form onSubmit={handleSubmit} className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/10 h-fit shadow-2xl">
            <div className="space-y-5">
              <input 
                value={title} onChange={(e) => setTitle(e.target.value)} required
                type="text" placeholder="Job Title" 
                className="w-full p-4 bg-black/50 rounded-2xl border border-white/10 focus:border-indigo-500 outline-none"
              />
              <textarea 
                value={description} onChange={(e) => setDescription(e.target.value)} required
                placeholder="Job Description..." rows="4"
                className="w-full p-4 bg-black/50 rounded-2xl border border-white/10 focus:border-indigo-500 outline-none"
              ></textarea>

              <div className="relative border-2 border-dashed border-white/10 rounded-2xl p-4 text-center hover:border-indigo-500 cursor-pointer transition-all">
                {preview ? <img src={preview} className="h-40 mx-auto rounded-lg object-cover" alt="p" /> : 
                <div className="py-4 text-white/40"><ImageIcon size={40} className="mx-auto mb-2" /><p>Upload Banner</p></div>}
                <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>

              <button disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-2xl font-black flex justify-center items-center gap-2">
                {loading ? <Loader2 className="animate-spin" /> : "POST JOB NOW"}
              </button>
            </div>
          </form>

          {/* ACTIVE LISTINGS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white/40">Live Placements</h3>
            <div className="max-h-[500px] overflow-y-auto pr-2 space-y-4">
              {jobs.map((job) => (
                <div key={job._id} className="bg-slate-900 border border-white/5 p-4 rounded-3xl flex items-center gap-4 hover:border-indigo-500/50 transition-all">
                  <img src={`${API_BASE_URL}${job.jobImage}`} className="w-16 h-16 rounded-xl object-cover" alt="job" />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{job.title}</h4>
                    <p className="text-white/30 text-[10px]">{new Date(job.createdAt).toDateString()}</p>
                  </div>
                  <button onClick={() => handleDelete(job._id)} className="p-3 text-red-500 hover:bg-red-500/10 rounded-xl">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}