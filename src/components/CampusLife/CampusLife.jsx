import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Stethoscope, 
  Code, 
  Rocket, 
  Scale, 
  Palette, 
  Briefcase, 
  Plane, 
  Cpu,
  X, 
  ChevronRight, 
  Navigation, 
  Eye, 
  ShieldAlert, 
  Layers 
} from "lucide-react";

const careerData = [
  {
    id: "doctor",
    title: "Doctor",
    icon: Stethoscope,
    perks: ["Biology Labs", "Medical Mentors", "Research Programs", "NEET Preparation"],
    pathway: "Pre-Med Track, Advanced Biochemistry, and Hospital Internships.",
  },
  {
    id: "engineer",
    title: "Software Engineer",
    icon: Code,
    perks: ["Coding Bootcamps", "AI Research", "Hackathons", "Silicon Valley Tie-ups"],
    pathway: "Full-Stack engineering foundations, Machine Learning logic, and algorithms.",
  },
  {
    id: "scientist",
    title: "Scientist",
    icon: Rocket,
    perks: ["NASA Space Apps", "Quantum Labs", "IP Patents Guidance", "ISRO Mentorship"],
    pathway: "Astrophysics modules, advanced chemical synthesis tracks, and peer reviews.",
  },
  {
    id: "ias",
    title: "IAS Officer",
    icon: Scale,
    perks: ["Civics Club", "Debating Society", "Policy Mock Drafts", "UPSC Foundations"],
    pathway: "Public administration theory, constitutional ethics training, and analytical writing.",
  },
  {
    id: "artist",
    title: "Artist",
    icon: Palette,
    perks: ["Digital Arts Studio", "Global Galleries", "NFT Design Lab", "Creative Portfolios"],
    pathway: "Fine arts exposure, digital UI/UX rendering assets, and spatial design philosophy.",
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    icon: Briefcase,
    perks: ["Incubation Seed Fund", "Shark Tank Pitch", "Venture Mentors", "MBA Pre-requisites"],
    pathway: "Lean startup scaling models, corporate tax infrastructure, and venture pitching.",
  },
  {
    id: "pilot",
    title: "Pilot",
    icon: Plane,
    perks: ["Aviation Simulation", "Meteorology Club", "Physics of Flight", "Cadet Prep Classes"],
    pathway: "Aerodynamics engineering metrics, situational navigation training, and instrumentation.",
  },
  {
    id: "robotics",
    title: "Robotics Engineer",
    icon: Cpu,
    perks: ["Mechatronics Lab", "IoT Device Farm", "Drone Prototyping", "ROBOTEX Competitions"],
    pathway: "Microcontroller coding patterns, cinematic CAD drafting designs, and automated loop systems.",
  }
];

function CampusLife() {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [hoveredCareer, setHoveredCareer] = useState(null);

  // Pure data matrix mapping for background spatial dots
  const particleStars = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      top: `${(i * 7) % 100}%`,
      left: `${(i * 13) % 100}%`,
      duration: ((i * 3) % 5) + 4,
      delay: (i * 0.5) % 3
    }));
  }, []);

  return (
    <section 
      id="career-journey" 
      className="relative py-16 sm:py-24 md:py-32 bg-[#03060b] text-slate-100 overflow-hidden min-h-screen flex flex-col items-center justify-center font-sans"
    >
      {/* 🌌 Unique Digital Grid Background Matrix */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        {particleStars.map((star) => (
          <motion.div
            key={star.id}
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "linear",
            }}
            style={{ top: star.top, left: star.left }}
            className="absolute w-1 h-1 bg-amber-500 rounded-full blur-[0.3px]"
          />
        ))}
        {/* Ambient vertical accent lines */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center z-10">
        
        {/* --- PREMIUM TYPOGRAPHY HEADLINE --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 border border-slate-800 rounded-lg text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-amber-400 uppercase mb-4 sm:mb-5 shadow-inner">
            <Navigation className="w-3.5 h-3.5 rotate-45 text-amber-500 animate-pulse" /> FUTURE ROUTE MAPPER
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none">
            The Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">Transit Terminal</span>
          </h2>
          <p className="text-slate-400 mt-4 sm:mt-5 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed px-2">
            Royal Academy acts as an elite, high-velocity interchange junction—routing students seamlessly into premium global industry verticals.
          </p>
        </motion.div>

        {/* ⚠️ DYNAMIC ACCREDITATION / FOUNDATION NOTICE FRAME */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-gradient-to-r from-slate-950 via-[#0a0f1d] to-slate-950 border border-slate-900 rounded-2xl p-4 mb-8 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left shadow-2xl shadow-black/40"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
            <ShieldAlert className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-bold block mb-0.5">Academic Foundation Notice</span>
            <p className="text-xs sm:text-sm text-slate-400 leading-normal font-sans">
              We provide the specialized academic blueprints, competitive research methodologies, and direct university portfolio preparations required to unlock these professional trajectories. Royal Academy functions as your preparatory launching pad.
            </p>
          </div>
        </motion.div>

        {/* --- GRID TERMINAL DESIGN MATRIX --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-8 items-center bg-slate-950/20 p-4 sm:p-6 md:p-10 lg:p-12 rounded-[24px] sm:rounded-[32px] border border-slate-900/50 backdrop-blur-md relative">
          
          {/* Decorative Framing System Codes */}
          <div className="absolute top-4 left-5 font-mono text-[9px] sm:text-[10px] text-slate-700 tracking-wider select-none hidden sm:block">+[SYS_MATRIX_LN_09]</div>
          <div className="absolute bottom-4 right-5 font-mono text-[9px] sm:text-[10px] text-slate-700 tracking-wider select-none hidden sm:block">// SYSTEM_INTERCHANGE_ACTIVE</div>

          {/* 🏫 CENTRAL COMMAND CORE STATION (Top position on Mobile devices) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 order-1 lg:order-none flex flex-col items-center justify-center py-6 lg:py-0 relative px-2">
            {/* Vector Connector Link Lines - Visible on Desktop only */}
            <div className="absolute inset-0 items-center justify-center pointer-events-none hidden lg:flex">
              <svg className="w-full h-full overflow-visible opacity-25">
                <line x1="0%" y1="20%" x2="50%" y2="50%" stroke={hoveredCareer ? "#f59e0b" : "#334155"} strokeWidth={hoveredCareer ? "1.5" : "1"} strokeDasharray={hoveredCareer ? "0" : "4 4"} className="transition-all duration-300" />
                <line x1="0%" y1="80%" x2="50%" y2="50%" stroke={hoveredCareer ? "#f59e0b" : "#334155"} strokeWidth={hoveredCareer ? "1.5" : "1"} strokeDasharray={hoveredCareer ? "0" : "4 4"} className="transition-all duration-300" />
                <line x1="100%" y1="20%" x2="50%" y2="50%" stroke={hoveredCareer ? "#f59e0b" : "#334155"} strokeWidth={hoveredCareer ? "1.5" : "1"} strokeDasharray={hoveredCareer ? "0" : "4 4"} className="transition-all duration-300" />
                <line x1="100%" y1="80%" x2="50%" y2="50%" stroke={hoveredCareer ? "#f59e0b" : "#334155"} strokeWidth={hoveredCareer ? "1.5" : "1"} strokeDasharray={hoveredCareer ? "0" : "4 4"} className="transition-all duration-300" />
              </svg>
            </div>

            {/* FLOATING CAROUSEL INTERCHANGE CONTAINER */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
              className="w-full max-w-xs sm:max-w-sm bg-[#060a12] border-2 border-slate-900/80 p-6 sm:p-8 rounded-3xl text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative select-none z-10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-mono text-[9px] font-black rounded-full uppercase tracking-[0.2em] shadow-lg whitespace-nowrap">
                Main Interchange
              </div>
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 flex items-center justify-center mx-auto mb-4 sm:mb-5 relative shadow-inner">
                <div className="absolute inset-1.5 rounded-xl bg-amber-500/10 animate-ping opacity-20" />
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-[0.15em]">Royal Academy</h3>
              <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-[0.25em] font-mono mt-1.5 sm:mt-2 font-bold">Central Platform Matrix</p>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-900/80 flex items-center justify-center gap-6 sm:gap-8">
                <div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-amber-400">08</div>
                  <div className="text-[8px] sm:text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Outbound Rails</div>
                </div>
                <div className="w-px h-8 bg-slate-900" />
                <div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-emerald-400">100%</div>
                  <div className="text-[8px] sm:text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Active Stream</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LEFT WING ROUTES (Columns 1 & 2 on Desktop, Stacks underneath on Mobile) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-3 sm:space-y-4 order-2 lg:order-none">
            <div className="text-left border-b border-slate-900 pb-2 mb-2 sm:mb-4 hidden lg:block">
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase font-bold">Gateway Gate A // West-Bound</span>
            </div>
            {careerData.slice(0, 4).map((career) => {
              const Icon = career.icon;
              const isHovered = hoveredCareer === career.id;
              return (
                <motion.div
                  key={career.id}
                  onMouseEnter={() => setHoveredCareer(career.id)}
                  onMouseLeave={() => setHoveredCareer(null)}
                  onClick={() => setSelectedCareer(career)}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between group relative ${
                    isHovered 
                      ? "bg-slate-900/90 border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.04)] text-white" 
                      : "bg-[#070b13]/90 border-slate-900/80 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]" : "bg-slate-950 border border-slate-800 text-slate-400"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold tracking-wide text-white transition-colors group-hover:text-amber-400">{career.title}</h4>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 font-mono tracking-wider mt-0.5">Route Line Vector</p>
                    </div>
                  </div>

                  {/* 🎯 ELEVATED TOOLTIP FEATURE METRICS FOR DESKTOP HOVER ONLY */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full mb-3 left-0 bg-[#090e17] border border-slate-800/80 rounded-xl p-3.5 shadow-2xl z-50 pointer-events-none w-56 text-left hidden lg:block backdrop-blur-xl"
                      >
                        <h5 className="text-[10px] font-mono font-bold tracking-[0.15em] text-amber-400 mb-2 pb-1.5 border-b border-slate-800/60 uppercase">
                          Route Framework
                        </h5>
                        <div className="space-y-1.5">
                          {career.perks.slice(0, 3).map((perk, pIdx) => (
                            <p key={pIdx} className="text-[11px] text-slate-300 font-medium tracking-wide flex items-center gap-2 antialiased">
                              <span className="text-amber-500 font-bold text-xs">✓</span> {perk}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Eye className={`w-4 h-4 transition-all duration-300 ${isHovered ? "text-amber-400 opacity-100 translate-x-0" : "text-slate-700 opacity-0 -translate-x-2 lg:group-hover:opacity-40"}`} />
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] transition-colors ${isHovered ? "bg-amber-500" : "bg-transparent"}`} />
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT WING ROUTES (Columns 6 & 7 on Desktop) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-3 sm:space-y-4 order-3 lg:order-none">
            <div className="text-right border-b border-slate-900 pb-2 mb-2 sm:mb-4 hidden lg:block">
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase font-bold">Gateway Gate B // East-Bound</span>
            </div>
            {careerData.slice(4, 8).map((career) => {
              const Icon = career.icon;
              const isHovered = hoveredCareer === career.id;
              return (
                <motion.div
                  key={career.id}
                  onMouseEnter={() => setHoveredCareer(career.id)}
                  onMouseLeave={() => setHoveredCareer(null)}
                  onClick={() => setSelectedCareer(career)}
                  whileHover={{ x: -4, scale: 1.01 }}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between group relative ${
                    isHovered 
                      ? "bg-slate-900/90 border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.04)] text-white" 
                      : "bg-[#070b13]/90 border-slate-900/80 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]" : "bg-slate-950 border border-slate-800 text-slate-400"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold tracking-wide text-white transition-colors group-hover:text-amber-400">{career.title}</h4>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 font-mono tracking-wider mt-0.5">Route Line Vector</p>
                    </div>
                  </div>

                  {/* 🎯 ELEVATED TOOLTIP FEATURE METRICS FOR DESKTOP HOVER ONLY */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full mb-3 right-0 bg-[#090e17] border border-slate-800/80 rounded-xl p-3.5 shadow-2xl z-50 pointer-events-none w-56 text-left hidden lg:block backdrop-blur-xl"
                      >
                        <h5 className="text-[10px] font-mono font-bold tracking-[0.15em] text-amber-400 mb-2 pb-1.5 border-b border-slate-800/60 uppercase">
                          Route Framework
                        </h5>
                        <div className="space-y-1.5">
                          {career.perks.slice(0, 3).map((perk, pIdx) => (
                            <p key={pIdx} className="text-[11px] text-slate-300 font-medium tracking-wide flex items-center gap-2 antialiased">
                              <span className="text-amber-500 font-bold text-xs">✓</span> {perk}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Eye className={`w-4 h-4 transition-all duration-300 ${isHovered ? "text-amber-400 opacity-100 translate-x-0" : "text-slate-700 opacity-0 translate-x-2 lg:group-hover:opacity-40"}`} />
                  <div className={`absolute right-0 top-0 bottom-0 w-[3px] transition-colors ${isHovered ? "bg-amber-500" : "bg-transparent"}`} />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ---🔮 TECH INDUSTRIAL SIDE PANEL --- */}
      <AnimatePresence>
        {selectedCareer && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCareer(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 135 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#05080e] border-l border-slate-900/70 p-6 sm:p-8 z-50 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div>
                {/* Header controls */}
                <div className="flex items-center justify-between border-b border-slate-900 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl">
                      {React.createElement(selectedCareer.icon, { className: "w-5 h-5" })}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-wide">{selectedCareer.title}</h3>
                      <p className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest mt-0.5">Vector Route Lock</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedCareer(null)}
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Main Body Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-2.5">Academic Framework Target</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-900/60 font-sans">
                      {selectedCareer.pathway}
                    </p>
                  </div>

                  {/* ⚡ FEATURES LIST RE-STYLED TO PREMIUM TECH-METRICS */}
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-3">Preparatory Ecosystem Provisions</h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedCareer.perks.map((perk, index) => (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          key={index} 
                          className="flex items-center gap-3.5 bg-slate-900/40 border border-slate-800/80 px-4 py-3 rounded-xl hover:border-amber-500/20 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24] flex-shrink-0" />
                          <span className="font-mono text-xs sm:text-sm text-slate-200 tracking-wide font-medium antialiased">
                            {perk}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Call to Action */}
              <div className="pt-6 border-t border-slate-900 mt-8">
                <button 
                  onClick={() => alert(`Navigating to specialized route metrics portfolio.`)}
                  className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-mono text-xs font-black uppercase tracking-[0.15em] rounded-xl hover:opacity-90 transition-all shadow-xl shadow-amber-500/5 flex items-center justify-center gap-2 group"
                >
                  Inspect Foundation Track 
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default CampusLife;