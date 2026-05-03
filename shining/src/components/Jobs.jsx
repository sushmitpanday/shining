import React from 'react';
import { useNavigate } from 'react-router-dom'; // Navigation ke liye
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowUpRight, LogIn } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

import Img1 from '../assets/image copy 4.png';
import Img2 from '../assets/image copy 5.png';
import Img3 from '../assets/image copy 6.png';

export default function FeaturedSection() {
  const navigate = useNavigate();
  const cards = [
    { id: 1, img: Img1 },
    { id: 2, img: Img2 },
    { id: 3, img: Img3 },
  ];

  return (
    <section className="py-16 bg-[#020617] px-4 md:px-10 relative">
      {/* Header Container: Mobile par bhi row hi rahega */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-row justify-between items-center md:items-end gap-2">
        <div>
          <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1 md:mb-2">Top Opportunities</h2>
          <h3 className="text-xl md:text-4xl font-black text-white uppercase leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Positions</span>
          </h3>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Slider Navigation (Desktop Only) */}
          <div className="hidden md:flex gap-3">
            <button className="nav-prev p-3 rounded-full border border-white/10 text-white hover:bg-indigo-600 transition-all cursor-pointer">
              <ChevronLeft size={20} />
            </button>
            <button className="nav-next p-3 rounded-full border border-white/10 text-white hover:bg-indigo-600 transition-all cursor-pointer">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Login Button: Mobile par bhi right mein rahega */}
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl bg-indigo-600 border border-indigo-500 text-white font-bold uppercase text-[10px] md:text-xs hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 whitespace-nowrap"
          >
            <LogIn size={14} className="md:w-4 md:h-4" /> Login
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="hidden md:block">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={25}
            slidesPerView={3}
            loop={true}
            navigation={{ prevEl: '.nav-prev', nextEl: '.nav-next' }}
            autoplay={{ delay: 3000 }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <CardItem card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col gap-6 md:hidden">
          {cards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardItem({ card }) {
  return (
    <div className="group relative bg-slate-900/50 rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-indigo-500/30 hover:-translate-y-2 shadow-xl">
      <div className="relative h-72 w-full p-4 flex items-center justify-center bg-slate-950/30">
        <img 
          src={card.img} 
          alt="Featured Position"
          className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-50" />
      </div>

      <div className="p-6">
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase hover:bg-indigo-600 transition-all group/btn">
          See Details <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}