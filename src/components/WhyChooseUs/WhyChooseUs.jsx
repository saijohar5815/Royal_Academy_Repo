import React from "react";
import {
  GraduationCap,
  BookOpen,
  Microscope,
  Trophy,
  Globe,
  Laptop,
} from "lucide-react";
import { motion } from "framer-motion";

const RADIUS = 240;

const features = [
  {
    title: "Global Exposure",
    icon: Globe,
    angle: -90, // 12 o'clock
    desc: "Worldwide partnerships and global curriculum.",
  },
  {
    title: "Middle School",
    icon: BookOpen,
    angle: -30, // 2 o'clock
    desc: "Rigorous interactive academic foundation.",
  },
  {
    title: "Achievements",
    icon: Trophy,
    angle: 30,  // 4 o'clock
    desc: "Consistently breaking milestones across domains.",
  },
  {
    title: "Digital Campus",
    icon: Laptop,
    angle: 90,  // 6 o'clock
    desc: "Next-gen tech ecosystem integrated seamlessly.",
  },
  {
    title: "STEM Labs",
    icon: Microscope,
    angle: 150, // 8 o'clock
    desc: "State-of-the-art experiential research facilities.",
  },
  {
    title: "Primary Education",
    icon: GraduationCap,
    angle: 210, // 10 o'clock
    desc: "Nurturing curiosity and essential principles.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="academics"
      className="relative py-20 lg:py-32 bg-[#050811] overflow-hidden antialiased font-sans"
    >
      {/* --- Controlled Background Atmospheric Glow Layer --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-blue-500/[0.04] blur-[80px] sm:blur-[130px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-amber-500/[0.03] blur-[60px] sm:blur-[100px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="uppercase tracking-[0.4em] text-amber-400 font-mono font-bold text-xs sm:text-sm">
            // Academics
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mt-4 tracking-tight leading-none">
            Excellence Beyond
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400"> Classrooms</span>
          </h2>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg antialiased font-medium">
            A future-ready ecosystem combining innovation, leadership, research,
            technology and holistic education.
          </p>
        </div>

        {/* --- DESKTOP ORBITAL INTERACTION INTERFACE (lg and above) --- */}
        <div className="hidden lg:block relative h-[700px] w-full max-w-[800px] mx-auto">
          
          {/* Centered Relative Wrapper */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            
            {/* SVG Link Vectors Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
              <defs>
                <linearGradient id="vectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {features.map((item, index) => {
                const radians = (item.angle * Math.PI) / 180;
                const xTarget = RADIUS * Math.cos(radians);
                const yTarget = RADIUS * Math.sin(radians);
                
                return (
                  <g key={`line-${index}`}>
                    {/* Hard Static Bus Track */}
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${xTarget}px)`}
                      y2={`calc(50% + ${yTarget}px)`}
                      stroke="rgba(245, 158, 11, 0.12)"
                      strokeWidth="1.5"
                    />
                    {/* Animated Telemetry Pulse */}
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${xTarget}px)`}
                      y2={`calc(50% + ${yTarget}px)`}
                      stroke="url(#vectorGrad)"
                      strokeWidth="2"
                      strokeDasharray="8 24"
                      animate={{ strokeDashoffset: [0, -64] }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear",
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* HIGH CONTRAST CENTRAL ORB MATRIX */}
            <div 
              className="absolute left-1/2 top-1/2 z-20"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 40px rgba(245,158,11,0.12)",
                    "0 0 60px rgba(245,158,11,0.22)",
                    "0 0 40px rgba(245,158,11,0.12)"
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="w-52 h-52 xl:w-64 xl:h-64 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 flex flex-col justify-center items-center border border-amber-300/40 text-center p-4 select-none"
              >
                <h3 className="text-3xl xl:text-4xl font-black text-slate-950 tracking-tight leading-none">
                  Royal
                </h3>
                <h3 className="text-3xl xl:text-4xl font-black text-slate-950 tracking-tight leading-none mt-1">
                  Academy
                </h3>
                <div className="w-12 h-[2px] bg-slate-950/30 my-3 rounded-full" />
                <p className="text-[8px] xl:text-[9px] tracking-[4px] xl:tracking-[5px] uppercase font-mono font-black text-slate-900 leading-tight">
                  International School
                </p>
              </motion.div>
            </div>

            {/* SATELLITE NODE MATRIX FIELD */}
            {features.map((item, index) => {
              const Icon = item.icon;
              const radians = (item.angle * Math.PI) / 180;
              const xOffset = RADIUS * Math.cos(radians);
              const yOffset = RADIUS * Math.sin(radians);

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 z-10"
                  style={{
                    transform: `translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px))`,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{ scale: 1.05, zIndex: 40 }}
                    className="group cursor-pointer"
                  >
                    <div className="w-32 h-32 xl:w-36 xl:h-36 rounded-full bg-[#0d121f]/95 backdrop-blur-sm border border-slate-800/80 hover:border-amber-400/80 shadow-2xl flex flex-col justify-center items-center text-center p-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                      <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400 mb-1.5 border border-amber-400/20 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors duration-300">
                        <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      <h4 className="font-bold text-xs tracking-tight leading-snug text-white px-1 group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h4>

                      <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-16 group-hover:opacity-100 transition-all duration-300 ease-out hidden xl:block">
                        <p className="text-[10px] mt-1.5 text-slate-400 font-medium leading-normal max-w-[110px]">
                          {item.desc}
                        </p>
                      </div>
                      
                      {/* Sub-xl text display failsafe compatibility layout */}
                      <p className="text-[10px] mt-1 text-slate-400 font-medium leading-normal max-w-[100px] xl:hidden block line-clamp-2 opacity-80">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- MOBILE/TABLET GRID INTERFACE (Under lg Breakpoints) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden mt-8 max-w-2xl mx-auto">
          
          {/* Mobile Identity Branding Header Element */}
          <div className="sm:col-span-2 bg-gradient-to-br from-[#0e1629] to-[#0a0f1d] rounded-2xl p-6 text-center border border-amber-500/20 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-400 tracking-tight">
              Royal Academy
            </h3>
            <p className="text-[9px] tracking-[4px] uppercase font-mono font-bold text-amber-400/80 mt-1.5">
              International School Core
            </p>
          </div>

          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                className="flex gap-4 p-5 bg-[#0d121f]/90 border border-slate-800/60 rounded-2xl items-center shadow-md active:border-amber-400/50 transition-colors"
              >
                <div className="p-3 bg-amber-400/10 rounded-xl border border-amber-400/20 text-amber-400 shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1 font-medium leading-normal antialiased">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;