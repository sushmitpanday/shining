import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogOut, PlusCircle, Briefcase } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 border-r border-white/10 p-6 flex flex-col">
        <h1 className="text-xl font-black mb-10 text-indigo-400">ADMIN <span className="text-white">PANEL</span></h1>
        
        <nav className="space-y-4 flex-1">
          <div className="flex items-center gap-3 p-3 bg-indigo-600 rounded-xl cursor-pointer">
            <LayoutDashboard size={20} /> <span className="font-bold text-sm">Dashboard</span>
          </div>
          <div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-all">
            <Briefcase size={20} /> <span className="font-bold text-sm">Manage Jobs</span>
          </div>
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-bold text-sm"
        >
          <LogOut size={20} /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-black uppercase">Overview</h2>
          <button className="flex items-center gap-2 bg-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all text-xs">
            <PlusCircle size={18} /> POST NEW JOB
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-white/5 p-6 rounded-[2rem]">
            <p className="text-white/50 text-xs font-bold uppercase mb-2">Total Jobs</p>
            <p className="text-4xl font-black">12</p>
          </div>
          <div className="bg-slate-900 border border-white/5 p-6 rounded-[2rem]">
            <p className="text-white/50 text-xs font-bold uppercase mb-2">Applications</p>
            <p className="text-4xl font-black">45</p>
          </div>
          <div className="bg-slate-900 border border-white/5 p-6 rounded-[2rem]">
            <p className="text-white/50 text-xs font-bold uppercase mb-2">Active Users</p>
            <p className="text-4xl font-black">120</p>
          </div>
        </div>
      </div>
    </div>
  );
}