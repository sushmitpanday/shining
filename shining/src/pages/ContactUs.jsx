import React from 'react';
import { MapPin, Phone, Mail, Globe, Send, UserCheck, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-24 pb-16 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Official Contact Info */}
          <div>
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-3">Contact Address</h2>
            <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase leading-tight">
              Let's build <span className="text-indigo-500 underline decoration-indigo-500/30">Wonderful Relations</span> ahead
            </h1>
            
            <div className="space-y-8 mt-10">
              {/* Office Details */}
              <ContactCard 
                icon={<MapPin className="text-indigo-400" />}
                title="Office Location"
                content="Roorkee- Dehradun Highway near R.T.O Check Post and I.M.S College, Karondi, Bhagwanpur, Roorkee [U.K] 247667"
              />

              {/* Contact Numbers - Direct from document */}
              <ContactCard 
                icon={<Phone className="text-indigo-400" />}
                title="Contact Numbers"
                content={
                  <div className="space-y-2">
                    <p><span className="text-indigo-400 font-bold">Deepak Saini:</span> +91 9627560068</p>
                    <p><span className="text-indigo-400 font-bold">Shivani Chaudhary:</span> +91 8868912999</p>
                  </div>
                }
              />

              {/* Email & Web */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ContactCard 
                  icon={<Mail className="text-indigo-400" />}
                  title="Official Email"
                  content="shiningplacement@gmail.com"
                />
                <ContactCard 
                  icon={<Globe className="text-indigo-400" />}
                  title="Official Website"
                  content="www.shiningplacement.com"
                />
              </div>

              {/* Management Info */}
              <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                 <div className="p-3 bg-indigo-500/10 rounded-full">
                    <UserCheck className="text-indigo-400" size={20} />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Managing Director</h4>
                    <p className="text-indigo-300 font-bold">Mr. Deepak Saini</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Right: Stylized Proposal/Inquiry Form */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
             
             <div className="mb-8">
                <h3 className="text-xl font-black uppercase flex items-center gap-2">
                  <Briefcase className="text-indigo-400" size={20} /> Recruitment Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-tight">Send us your requirements or service proposal</p>
             </div>

             <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup label="Company Representative" placeholder="Mr. / Ms." />
                  <InputGroup label="Company Name" placeholder="Organization Ltd." />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup label="Email Address" placeholder="shining@example.com" />
                  <InputGroup label="Subject" placeholder="Hiring Requirement" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Message / Present Address</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-indigo-500 outline-none h-28 transition-all" placeholder="Tell us about your hiring needs..."></textarea>
                </div>

                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 rounded-2xl uppercase text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-600/20">
                  Send Inquiry <Send size={16} />
                </button>
             </form>
             
             <div className="mt-8 text-center">
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest leading-loose">
                  Thanking you,<br/>
                  <span className="text-slate-400">- SHINING Placement</span>
                </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, content }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-indigo-600/20 transition-all shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">{title}</h4>
        <div className="text-slate-300 text-sm max-w-sm leading-relaxed">{content}</div>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">{label}</label>
      <input 
        type="text" 
        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-indigo-500 outline-none transition-all" 
        placeholder={placeholder}
      />
    </div>
  );
}