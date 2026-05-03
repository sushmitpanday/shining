import React from 'react';
import { Target, Users, Zap, CheckCircle2, Lightbulb, ShieldCheck, TrendingUp } from 'lucide-react';

export default function About() {
  const services = [
    "Executive Recruitment", 
    "Bulk Recruitment", 
    "Offshore Recruitment", 
    "Recruitment Process Outsourcing"
  ];
  
  const industries = [
    "Automobile", "Engineering", "Manufacturing", 
    "Telecom", "FMCG", "Pharmaceutical"
  ];

  const approach = [
    "Identification & Understanding of Client's Needs.",
    "Pro-Active in providing solutions to Complex matters.",
    "Maintain Strict Confidentiality",
    "Assignments committed to a time frame",
    "The best of after-sales connectivity & commitment."
  ];

  const benefits = [
    "Negative publicity due to retrenchment process in the company is overcome.",
    "Highly educated & experienced professionals equipped for outsourced staffs.",
    "Staffing flexibility for short term & temporary business needs.",
    "Companies get time to focus on their core competencies.",
    "Curtail cost & save time with enhanced HR Services."
  ];

  const usps = [
    "Pan India Network for Sourcing Talents.",
    "Diversified and extensive sources of Resourcing.",
    "Strong Database which is systematically created and timely updated.",
    "Experienced and Professionally competent team of Recruiters.",
    "All assignments are confined to a time frame.",
    "Competitive Service charges.",
    "Unique relation and connectivity with our clients."
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-24 pb-16 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-3">About Us</h2>
          <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter">
            Shining <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">Placement</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-slate-400 text-lg leading-relaxed">
              Welcome to Shining Placement where we focus on adding value to your business. We ventured into Management Consultancy with the vision and commitment of a small team of professionals as its principal asset has over the years, graduated into adulthood, with diversified activities embracing Human Resources Consultancy services.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-indigo-500/30 pl-6">
              We aim to build a truly synergistic association with our Clients. We build, grow and value the relation with Clients and together we aim at achieving the best. As such, our Clients considers us a part of their Captive system rather than merely a Service provider.
            </p>
          </div>
        </div>

        {/* Why Recruitment Consultant */}
        <div className="mb-20 bg-indigo-600/5 p-8 rounded-3xl border border-white/5">
          <h3 className="text-2xl font-black mb-4 uppercase flex items-center gap-3 text-indigo-400">
            <Users size={28} /> Why a Recruitment Consultant?
          </h3>
          <p className="text-slate-300 leading-relaxed max-w-4xl">
            The importance of Human Resources to any business is interpreted as to be one of its Capitals. Recruiting the right person at the right place and right time serves as one of the major determinants for the success of any business house. The tug between Companies over an appropriate talent had made the process of Talent Acquisition a specialized Function and therefore it needs.
          </p>
        </div>

        {/* Our Services */}
        <div className="mb-20">
          <h3 className="text-center text-xl font-bold mb-10 uppercase tracking-widest text-slate-500">Our Core Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-indigo-500/50 transition-all flex items-center gap-4 group">
                <CheckCircle2 className="text-indigo-500 group-hover:scale-110 transition-transform" size={24} />
                <span className="font-bold text-sm uppercase tracking-tight">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Approach & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5">
            <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-3 text-cyan-400">
              <Lightbulb /> Our Approach
            </h3>
            <ul className="space-y-4">
              {approach.map((item, i) => (
                <li key={i} className="text-sm text-slate-400 flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5">
            <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-3 text-green-400">
              <ShieldCheck /> Benefits with Us
            </h3>
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <li key={i} className="text-sm text-slate-400 flex gap-3">
                  <TrendingUp size={16} className="text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Industries & USPs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Industries */}
          <div className="bg-slate-900/80 p-8 rounded-[2.5rem] border border-indigo-500/10">
            <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-3">
              <Target className="text-indigo-400" /> Industries we cater to
            </h3>
            <p className="text-xs text-slate-500 mb-6 italic">Shining Placement Services offer H.R. services to following industries across all job functions:</p>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind, i) => (
                <span key={i} className="px-5 py-2.5 bg-indigo-500/10 rounded-xl text-xs font-bold border border-indigo-500/20 text-indigo-300">
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* USPs */}
          <div className="bg-slate-900/80 p-8 rounded-[2.5rem] border border-yellow-500/10">
            <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-3">
              <Zap className="text-yellow-400" /> Our USPs
            </h3>
            <ul className="space-y-3">
              {usps.map((usp, i) => (
                <li key={i} className="text-sm text-slate-400 flex gap-3 italic font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                  {usp}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center border-t border-white/5 pt-10">
          <p className="text-xl font-serif italic text-slate-300 mb-2">
            “We are looking for wonderful relation ahead”
          </p>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
            Thanking you, — SHINING Placement
          </p>
        </div>

      </div>
    </div>
  );
}