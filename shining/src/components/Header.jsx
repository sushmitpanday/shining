import React, { useState } from 'react';
import { Menu, X, Home, Info, Phone, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom'; // Link import kiya

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // href ki jagah 'to' paths set kar diye
  const navLinks = [
    { name: 'Home', to: '/', icon: <Home size={20} /> },
    { name: 'About Us', to: '/about', icon: <Info size={20} /> },
    { name: 'Contact Us', to: '/contact', icon: <Phone size={20} /> },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-20 bg-[#020617] backdrop-blur-xl border-b border-white/5 z-[80] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            
            {/* Logo Section - Wrapped in Link to Home */}
            <Link to="/" className="flex-shrink-0 flex items-center group cursor-pointer">
              <div className="bg-indigo-500 p-2 rounded-lg mr-3 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
                <Briefcase className="text-white" size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white leading-none">
                  SHINING <span className="text-indigo-400">PLACEMENT</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400">Premium Hiring</span>
              </div>
            </Link>

            {/* Desktop Links - Used Link Component */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-slate-300 hover:text-white font-medium text-sm transition-all hover:tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2.5 rounded-xl bg-white/5 text-slate-300 hover:text-white border border-white/10"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}>
        
        <div 
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div className={`absolute top-0 right-0 w-72 h-full bg-slate-950 border-l border-white/10 shadow-[-20px_0_40px_rgba(0,0,0,0.8)] transform transition-transform duration-500 ease-out p-6 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          
          <div className="flex justify-between items-center mb-12 mt-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Menu</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all"
            >
              <X size={22} />
            </button>
          </div>

          {/* Mobile Links - Used Link Component */}
          <div className="space-y-3">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-300 hover:text-white hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all group ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="p-2 rounded-lg bg-slate-900 group-hover:text-indigo-400 transition-colors">
                  {link.icon}
                </div>
                <span className="font-semibold">{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto pb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20">
              <p className="text-[10px] text-indigo-300/60 font-medium leading-relaxed">
                Searching for your dream job? <br />
                <span className="text-white">Let's get started.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </>
  );
};

export default Header;