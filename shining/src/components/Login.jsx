import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Tera fetch wala logic yahan add kar diya
const handleLogin = async (e) => {
    e.preventDefault();
    
    // Ye line decide karegi ki kaunsa URL use karna hai
    // Agar localhost par ho toh 5000, nahi toh Render wala link
    const API_BASE_URL = window.location.hostname === "localhost" 
      ? "http://localhost:5000" 
      : "https://shining-11.onrender.com";

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, password: password })
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("isAdmin", "true");
        navigate('/admin-dashboard');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server se connect nahi ho pa raha!");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-slate-900 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-xl">
        <div className="text-center mb-8">
          <h2 className="text-indigo-400 font-bold uppercase text-xs tracking-widest mb-2">Admin Portal</h2>
          <h1 className="text-3xl font-black text-white uppercase">Login <span className="text-indigo-500">Access</span></h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-white/50 text-[10px] font-bold uppercase mb-2 ml-1 tracking-tighter">Admin Name</label>
            <input 
              type="text" 
              className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:border-indigo-500 outline-none transition-all"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-white/50 text-[10px] font-bold uppercase mb-2 ml-1 tracking-tighter">Password</label>
            <input 
              type="password" 
              className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:border-indigo-500 outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/20 uppercase text-sm">
            Unlock Dashboard
          </button>
        </form>
        
        <button onClick={() => navigate('/')} className="w-full mt-4 text-white/20 text-[10px] hover:text-white uppercase font-bold transition-all">
          ← Back to Site
        </button>
      </div>
    </div>
  );
}