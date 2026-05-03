import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowUpRight, LogIn, Briefcase, SearchX } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function FeaturedSection() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- 1. DYNAMIC API URL ---
  const API_BASE_URL = window.location.hostname === "localhost" 
    ? "http://localhost:5000" 
    : "https://shining-3.onrender.com";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Path fix: /api/jobs/list-jobs
        const res = await axios.get(`${API_BASE_URL}/api/jobs/list-jobs`);
        setJobs(res.data.slice(0, 10));
      } catch (err) {
        console.error("Jobs load nahi ho payi:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [API_BASE_URL]);

  if (loading) return null;

  return (
    <section className="py-16 bg-[#020617] px-4 md:px-10 relative">
      <div className="max-w-7xl mx-auto mb-10 flex flex-row justify-between items-center md:items-end gap-2">
        <div>
          <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1 md:mb-2">Top Opportunities</h2>
          <h3 className="text-xl md:text-4xl font-black text-white uppercase leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Positions</span>
          </h3>
        </div>
        
        <div className="flex items-center gap-3">
          {jobs.length > 0 && (
            <div className="hidden md:flex gap-3">
              <button className="nav-prev p-3 rounded-full border border-white/10 text-white hover:bg-indigo-600 transition-all cursor-pointer">
                <ChevronLeft size={20} />
              </button>
              <button className="nav-next p-3 rounded-full border border-white/10 text-white hover:bg-indigo-600 transition-all cursor-pointer">
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          <button 
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl bg-indigo-600 border border-indigo-500 text-white font-bold uppercase text-[10px] md:text-xs hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 whitespace-nowrap"
          >
            <LogIn size={14} className="md:w-4 md:h-4" /> Login
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {jobs.length === 0 ? (
          <div className="w-full py-20 flex flex-col items-center justify-center bg-slate-900/20 rounded-[3rem] border border-white/5 border-dashed">
            <SearchX size={48} className="text-indigo-500/50 mb-4" />
            <p className="text-white/60 font-bold uppercase tracking-widest text-sm">No Jobs Available At The Moment</p>
            <p className="text-white/30 text-xs mt-2">Check back later for new opportunities!</p>
          </div>
        ) : (
          <>
            <div className="hidden md:block">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={25}
                slidesPerView={jobs.length < 3 ? jobs.length : 3}
                loop={jobs.length > 3}
                navigation={{ prevEl: '.nav-prev', nextEl: '.nav-next' }}
                autoplay={{ delay: 3000 }}
              >
                {jobs.map((job) => (
                  <SwiperSlide key={job._id}>
                    <CardItem job={job} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex flex-col gap-6 md:hidden">
              {jobs.map((job) => (
                <CardItem key={job._id} job={job}  />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// direct cloudnary url use ho ra 
function CardItem({ job }) {
  return (
    <div className="group relative bg-slate-900/50 rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-indigo-500/30 hover:-translate-y-2 shadow-xl">
      <div className="relative h-72 w-full p-4 flex items-center justify-center bg-slate-950/30">
        {job.jobImage ? (
          <img 
            src={job.jobImage} 
            alt={job.title}
            className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Briefcase size={60} className="text-white/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-50" />
      </div>

      <div className="p-6">
        <h4 className="text-white font-bold text-lg mb-4 truncate uppercase tracking-tight">{job.title}</h4>
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase hover:bg-indigo-600 transition-all group/btn">
          See Details <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}