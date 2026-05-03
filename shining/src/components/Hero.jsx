import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// Images 
import Img1 from '../assets/image.png';
import Img2 from '../assets/image copy.png';
import Img3 from '../assets/image copy 2.png';

export default function ImageSlider() {
  const slides = [
    { id: 1, img: Img1 },
    { id: 2, img: Img2 },
    { id: 3, img: Img3 },
  ];

  return (
    /* md:px-10 se sides mein margin aayega aur md:max-w-7xl se width control hogi */
    <section className="relative w-full bg-[#020617] py-4 md:py-8">
      <div className="mx-auto px-0 md:px-10 max-w-[1440px]">
        <div className="relative w-full h-[40vh] md:h-[500px] overflow-hidden bg-black md:rounded-[2rem] shadow-2xl">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }} 
            loop={true}
            speed={1200} 
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false 
            }}
            className="h-full w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="overflow-hidden">
                {({ isActive }) => (
                  <div className="relative w-full h-full">
                    {/* Background Image with Zoom Animation */}
                    <div 
                      className={`absolute inset-0 w-full h-full transition-transform duration-[5000ms] ease-out ${
                        isActive ? "scale-110" : "scale-100"
                      }`}
                      style={{ 
                        backgroundImage: `url(${slide.img})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                      }} 
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Decorative Bottom Blur Line - Inside the rounded container */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}