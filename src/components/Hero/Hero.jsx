import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Monitor,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const floatingCards = [
  {
    icon: Monitor,
    title: "Smart Classrooms",
    desc: "Interactive smart boards and modern digital learning.",
    color: "from-blue-500/30 to-indigo-500/30",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    desc: "Highly qualified educators with global experience.",
    color: "from-amber-500/30 to-orange-500/30",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    desc: "24×7 monitored campus with advanced security.",
    color: "from-emerald-500/30 to-teal-500/30",
  },
  {
    icon: Sparkles,
    title: "Holistic Learning",
    desc: "Sports, arts, leadership and innovation together.",
    color: "from-purple-500/30 to-pink-500/30",
  },
];

export default function Hero() {
  const videoRef = useRef(null);

  // Safely forces background video execution across iOS and Android browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay caught or delayed by browser engine:", error);
      });
    }
  }, []);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-20 bg-[#02152f]"
    >
      {/* --- BACKGROUND VIDEO SYSTEM --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.75] contrast-[1.05] saturate-[1.1]"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#02152f]/90 via-[#02152f]/60 to-black/30 z-10" />
      </div>

      {/* --- MAIN ADAPTIVE LAYOUT CONTAINER --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col justify-between h-full">
        
        {/* Main Columns Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Hero Text Section */}
          <div className="col-span-1 lg:col-span-7 text-left w-full">
            <div className="w-full rounded-3xl bg-black/20 backdrop-blur-sm p-5 sm:p-8 border border-white/5 shadow-2xl">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 px-4 py-1.5 rounded-full text-yellow-300 text-sm font-semibold mb-6"
              >
                <Sparkles size={16} className="animate-pulse" />
                Admissions Open 2026-27
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              >
                Nurturing{" "}
                <span className="text-yellow-400 block sm:inline">Today's Learners</span>
                <span className="lg:block mt-1">
                  {" "}For Tomorrow's <span className="text-yellow-400">Leaders</span>
                </span>
              </motion.h1>

              {/* Description Copy */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg text-slate-200 mt-6 max-w-xl leading-relaxed drop-shadow-md"
              >
                Empowering students through academic excellence, innovation, leadership, research, and holistic development to shape the next generation of global leaders.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                <button
                  onClick={() => handleScrollTo("#admissions")}
                  className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl shadow-lg transition transform active:scale-[0.98] text-center text-sm uppercase tracking-wider"
                >
                  Apply Now
                </button>

                <button
                  onClick={() => handleScrollTo("#facilities")}
                  className="w-full sm:w-auto border border-white/60 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition transform active:scale-[0.98] text-center text-sm font-semibold"
                >
                  Explore Campus
                </button>
              </motion.div>

            </div>
          </div>

          {/* Right Cards Section (Adapts flawlessly to a grid on tablets and 1 column on phones) */}
          <div className="col-span-1 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 w-full">
            {floatingCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 0.6,
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                  }}
                  className="backdrop-blur-xl bg-black/30 border border-white/15 rounded-2xl p-5 sm:p-6 shadow-2xl transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} border border-white/10 flex items-center justify-center shadow-lg mb-4`}
                  >
                    <Icon className="text-yellow-400" size={24} />
                  </div>

                  <h3 className="text-white text-lg font-bold mb-1.5 tracking-wide">
                    {card.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Scroll Indicator Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center mt-12 sm:mt-16 cursor-pointer group no-select"
          onClick={() => handleScrollTo("#about")}
        >
          <span className="text-white/60 text-xs tracking-[4px] uppercase mb-2 group-hover:text-yellow-400 transition-colors">
            Scroll Down
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={24} className="text-yellow-400" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}