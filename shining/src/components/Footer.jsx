import React from 'react';
import * as LucideIcons from 'lucide-react';

// Safe Icon Loader: Agar icon nahi milega toh khali div dikhayega, crash nahi hoga
const SafeIcon = ({ name, size = 18 }) => {
  const IconComponent = LucideIcons[name];
  return IconComponent ? <IconComponent size={size} /> : <div style={{ width: size, height: size }} />;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black text-white tracking-tighter italic leading-none">
              SHINING <span className="text-indigo-500">PLACEMENT</span>
            </h2>
            <span className="text-[10px] text-indigo-400 uppercase tracking-[0.3em] font-bold mt-1">
              Complete Job Solution
            </span>
          </div>
          
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Your Trust, Our Commitment. Helping professionals find their dream careers 
            with integrity and excellence.
          </p>

          {/* Social Icons using SVGs (No Lucide dependency for these to avoid crash) */}
          <div className="flex gap-4 pt-2">
            <SocialIconSVG path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /> {/* LinkedIn */}
            <SocialIconSVG path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> {/* Facebook */}
            <SocialIconSVG path="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" /> {/* Instagram */}
          </div>
        </div>

        {/* Navigation */}
        <div className="md:ml-auto">
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4">
            <li className="text-slate-400 hover:text-white text-sm cursor-pointer transition-colors">Home</li>
            <li className="text-slate-400 hover:text-white text-sm cursor-pointer transition-colors">About Agency</li>
            <li className="text-slate-400 hover:text-white text-sm cursor-pointer transition-colors">Current Openings</li>
            <li className="text-slate-400 hover:text-white text-sm cursor-pointer transition-colors">Contact Us</li>
          </ul>
        </div>

        {/* Details from Image 1000072879.jpg */}
        <div className="md:ml-auto">
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Details</h4>
          <div className="space-y-5">
            <ContactItem 
              iconName="MapPin" 
              label="Visit Us" 
              value="Karondi, Bhagwanpur" 
            />
            <ContactItem 
              iconName="Phone" 
              label="Call Us" 
              value="9627560068" 
            />
            <ContactItem 
              iconName="Mail" 
              label="Email Us" 
              value="shiningplacement@gmail.com" 
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
          © {currentYear} Shining Placement Service. All rights reserved.
        </p>
        <div className="flex gap-8 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

// SVG Based Social Icon (Safe from Lucide Errors)
function SocialIconSVG({ path }) {
  return (
    <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer border border-white/5">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={path}></path>
      </svg>
    </button>
  );
}

function ContactItem({ iconName, label, value }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="mt-1 p-2 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
        <SafeIcon name={iconName} />
      </div>
      <div>
        <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">{label}</p>
        <p className="text-slate-200 text-sm group-hover:text-indigo-400 transition-colors">{value}</p>
      </div>
    </div>
  );
}