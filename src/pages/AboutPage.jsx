import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, Target, Compass, ArrowUpRight, Radio, Terminal, Fingerprint, Layers, Sparkles, Activity
} from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
// --- STATS CONFIGURATION ---
const stats = [
  { value: "2012", label: "Epoch / Origin", metric: "SYS_INIT", color: "from-blue-600 to-indigo-600" },
  { value: "45+", label: "Global Nodes Mapped", metric: "NET_ZONE", color: "from-rose-600 to-pink-600" },
  { value: "99.4%", label: "Placement Efficiency", metric: "SUCC_RATE", color: "from-emerald-600 to-teal-600" },
  { value: "24/7", label: "Active Telemetry Hubs", metric: "LIVE_CORE", color: "from-amber-500 to-orange-600" },
];

// --- INTERACTIVE STRATEGIC PILLARS ---
const pillars = {
  vision: {
    icon: Eye,
    title: "Vision Parameter",
    subtitle: "Strategic Predictive Roadmap",
    tag: "SYS_VISION_v4.0",
    color: "from-blue-600 to-indigo-600",
    glow: "shadow-[0_20px_50px_rgba(37,99,235,0.08)]",
    border: "border-blue-200",
    bgActive: "bg-blue-50/60",
    textGlow: "text-blue-600",
    desc: "Architecting global leaders through advanced hybrid experiential methodologies, positioning next-gen thinkers at the forefront of digital and socio-economic frontiers.",
    bullets: ["Decentralized curriculum matrices", "Predictive performance tracking", "AI-augmented logic systems"]
  },
  mission: {
    icon: Target,
    title: "Core Mission",
    subtitle: "Execution & Deployment",
    tag: "SYS_MISSION_v2.1",
    color: "from-rose-600 to-pink-600",
    glow: "shadow-[0_20px_50px_rgba(225,29,72,0.08)]",
    border: "border-rose-200",
    bgActive: "bg-rose-50/60",
    textGlow: "text-rose-600",
    desc: "To deliver rigorous, universally validated educational pathways combining deep scientific research, athletic precision, and empathetic diplomatic mastery.",
    bullets: ["Uncompromised quantitative baselines", "Global multi-tier competition pipelines", "Direct tier-1 university placements"]
  },
  culture: {
    icon: Compass,
    title: "Strategic Culture",
    subtitle: "Ecosystem Integration",
    tag: "SYS_CULTURE_v9.3",
    color: "from-emerald-600 to-teal-600",
    glow: "shadow-[0_20px_50px_rgba(5,150,105,0.08)]",
    border: "border-emerald-200",
    bgActive: "bg-emerald-50/60",
    textGlow: "text-emerald-600",
    desc: "Fostering an open ecosystem defined by decentralized continuous learning, institutional integrity, global responsibility, and aggressive baseline excellence.",
    bullets: ["Cross-cultural identity synthesis", "Open-source collaborative environments", "Ethical framework execution models"]
  }
};

// --- CHRONOLOGICAL TIMELINE PATH ---
const milestones = [
  { year: "2026", title: "Quantum Computing & Global Diplomacy Lab Rollout", tag: "PHASE_04", desc: "Established secondary research frameworks natively integrating computational algorithms with Model UN structural simulations." },
  { year: "2022", title: "Pan-Asian Infrastructure Expansion", tag: "PHASE_03", desc: "Inaugurated state-of-the-art computational laboratories and physical aquatics facilities across three new international hubs." },
  { year: "2018", title: "Full International Baccalaureate Accreditation", tag: "PHASE_02", desc: "Achieved uncompromised global standard tracking tiers, unlocking direct placement partnerships with elite global universities." },
  { year: "2012", title: "The Initial Telemetry", tag: "PHASE_01", desc: "Founded with an experimental baseline class of 60 students, dedicated to redefining traditional education metrics." },
];

// --- LEADERSHIP FIELD DIRECTORY ---
const leaders = [
  {
    name: "Dr. Alistair Vance",
    role: "Chancellor & Chief Academic Architect",
    image: "https://s.yimg.com/zb/imgv1/4ebe6b9e-2eff-3461-aa49-94d874748f7d/t_500x300",
    bio: "Former Department Head of Epistemology with 20+ years steering international educational policy matrices.",
    signature: "AUTH_VANCE.001",
    accent: "group-hover:border-amber-500/50",
    textAccent: "text-amber-400"
  },
  {
    name: "Elena Rostova",
    role: "Director of Innovation & Digital Ecosystems",
    image: "https://news.harvard.edu/wp-content/uploads/2025/06/062525_JohnGoldberg-_088.jpg?resize=784",
    bio: "Systems engineer specializing in decentralized educational frameworks and immersive predictive student interfaces.",
    signature: "AUTH_ROSTOVA.409",
    accent: "group-hover:border-emerald-500/50",
    textAccent: "text-emerald-400"
  },
  {
    name: "Marcus Sterling",
    role: "Dean of Student Diplomacy & Engagement",
    image: "https://harvardtechnologyreview.com/wp-content/uploads/2023/10/IMG_0247-edited.jpg",
    bio: "Ex-diplomat dedicating institutional pipelines to developing cross-cultural alignment and athletic leadership metrics.",
    signature: "AUTH_STERLING.882",
    accent: "group-hover:border-cyan-500/50",
    textAccent: "text-cyan-400"
  },
];

export default function FullyResponsivePremiumDashboard() {
  const [activeTab, setActiveTab] = useState("vision");

  const ActiveIcon = pillars[activeTab].icon;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-blue-500/20 selection:text-blue-900 relative overflow-hidden">
      <Navbar />
      {/* --- BACKGROUND METRIC ORBS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] rounded-full bg-blue-200/20 blur-[80px] sm:blur-[130px] -top-20 -right-20" />
        <div className="absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-rose-200/10 blur-[80px] sm:blur-[120px] bottom-1/3 -left-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ======================================================== */}
        {/* RESPONSIVE TOP HEADER ZONE (NO CLUMSY OVERLAPPING) */}
        {/* ======================================================== */}
        <div className="pt-6 pb-5 border-b border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 items-center text-[11px] font-mono tracking-wider text-slate-500 font-medium text-center sm:text-left">
            
            {/* Left Frame Metric */}
            <div className="flex items-center gap-2.5 justify-center sm:justify-start">
              <span className="text-blue-600 flex items-center gap-1.5 font-bold">
                <Radio size={14} className="animate-pulse" /> LIVE_STREAM_ACTIVE
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-400 truncate">NODE // ACADEMY_CORE_LIGHT</span>
            </div>

            {/* Center Frame Metric */}
            <div className="text-center text-slate-400/90 hidden md:block">
              SECURE TRANSIT // PROTOCOL_TLS_1.3
            </div>

            {/* Right Frame Metric */}
            <div className="flex items-center justify-center sm:justify-end gap-3.5 text-slate-400">
              <span className="hidden lg:inline">INDEX: 44_AUTH_SYS</span>
              <span className="hidden lg:inline text-slate-300">|</span>
              <span className="font-bold text-slate-700 bg-slate-200/60 px-2.5 py-0.5 rounded text-[10px]">
                YEAR: 2026
              </span>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* HERO HEROICS GRID WITH SCALED TYPOGRAPHY */}
        {/* ======================================================== */}
        <section className="pt-12 pb-16 lg:pt-24 lg:pb-24 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5 lg:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-[10px] font-mono tracking-wider text-blue-600 uppercase font-bold">
                <Terminal size={12} /> CORE DIRECTIVE // LIGHT_EDITION_v4
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight uppercase leading-[0.95] sm:leading-[0.9]">
                Pioneering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                  Human Caliber
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl pt-1 antialiased">
                Royal Academy operates as a highly sophisticated global learning grid. We have dismantled legacy industrial models to deploy fluid scientific tracks, hybrid intelligence, and advanced cultural leadership.
              </p>
            </div>

            {/* Axiom Interactive Framework Box */}
            <div className="lg:col-span-5 w-full">
              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-white border-2 border-slate-200/80 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-[0_20px_45px_rgba(37,99,235,0.03)] group transition-all duration-300 hover:border-blue-600/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-400 tracking-widest font-bold">
                  // SEC_MANIFEST
                </div>

                <div className="space-y-5 sm:space-y-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Fingerprint size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-bold flex items-center gap-1.5">
                      <Layers size={12} className="text-blue-600" /> Operational Axiom
                    </h3>
                    <p className="text-base sm:text-lg text-slate-800 mt-2.5 font-semibold italic leading-relaxed tracking-tight">
                      "We do not process information for testing; we calibrate minds to command emerging global vectors."
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-600"><Activity size={12} className="animate-pulse" /> ENGINE_STABLE</span>
                    <span className="text-blue-600 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">ACCESS_MATRIX <ArrowUpRight size={14}/></span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* --- RESPONSIVE COUNTER MATRICES --- */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 sm:mt-20">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 text-left shadow-sm group hover:border-slate-300 hover:shadow-md transition-all duration-200 relative overflow-hidden"
              >
                <span className="absolute top-2 right-3 font-mono text-[8px] text-slate-400 tracking-wider font-bold hidden sm:inline">{stat.metric}</span>
                <p className={`text-2xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-[9px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 sm:mt-2 font-bold leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 2: ATTENTION GRID MODULES (MOBILE TAB SCROLL) */}
        {/* ======================================================== */}
        <section className="py-16 lg:py-28 border-b border-slate-200">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center space-y-2 mb-10 sm:mb-16">
              <p className="uppercase tracking-[0.3em] text-blue-600 font-mono font-bold text-xs">// SYSTEM CORE INDEX</p>
              <h2 className="text-2xl sm:text-5xl font-black text-slate-900 tracking-tight">Core Strategic Modules</h2>
            </div>

            {/* MOBILE SWIPE OPTIMIZED SELECTOR TRACK */}
            <div className="overflow-x-auto whitespace-nowrap scrollbar-none pb-3 sm:pb-0 mb-8 sm:mb-12 snap-x snap-mandatory">
              <div className="flex bg-slate-200/50 border border-slate-200 p-1.5 rounded-2xl max-w-lg mx-auto justify-start sm:justify-between items-center gap-2 min-w-max sm:min-w-0">
                {Object.keys(pillars).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 snap-center ${
                      activeTab === tab
                        ? "bg-white text-slate-900 border border-slate-300/60 shadow-sm"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {tab === "vision" && <Eye size={14} className={activeTab === tab ? "text-blue-600" : ""} />}
                    {tab === "mission" && <Target size={14} className={activeTab === tab ? "text-rose-600" : ""} />}
                    {tab === "culture" && <Compass size={14} className={activeTab === tab ? "text-emerald-600" : ""} />}
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* FOCUS ADAPTIVE DISPLAY */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`bg-white border-2 ${pillars[activeTab].border} rounded-3xl p-5 sm:p-10 ${pillars[activeTab].glow} transition-all duration-300`}
              >
                <div className="absolute top-4 right-5 font-mono text-[9px] text-slate-400 tracking-widest font-bold hidden sm:inline">{pillars[activeTab].tag}</div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:grid-cols-1 sm:gap-8 items-center">
                  
                  {/* Icon Block Container */}
                  <div className="md:col-span-4 flex justify-center md:justify-start">
                    <div className={`p-5 sm:p-8 rounded-2xl sm:rounded-3xl ${pillars[activeTab].bgActive} border-2 ${pillars[activeTab].border} text-transparent bg-clip-text bg-gradient-to-br ${pillars[activeTab].color}`}>
                      <ActiveIcon size={44} className={`${pillars[activeTab].textGlow} sm:w-14 sm:h-14`} />
                    </div>
                  </div>

                  {/* Operational Content */}
                  <div className="md:col-span-8 space-y-4 text-left">
                    <span className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest block font-bold">
                      // {pillars[activeTab].subtitle}
                    </span>
                    <h3 className={`text-xl sm:text-3xl font-black tracking-tight ${pillars[activeTab].textGlow}`}>
                      {pillars[activeTab].title}
                    </h3>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold antialiased">
                      {pillars[activeTab].desc}
                    </p>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pillars[activeTab].bullets.map((bullet, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs font-mono text-slate-500 font-bold">
                          <span className={`w-2 h-2 shrink-0 rounded-full ${pillars[activeTab].textGlow} bg-current`} />
                          <span className="truncate">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 3: RESPONSIVE TIMELINE TRACK */}
        {/* ======================================================== */}
        <section className="py-16 lg:py-28 border-b border-slate-200 relative">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center space-y-2 mb-12 sm:mb-24">
              <p className="uppercase tracking-[0.3em] text-indigo-600 font-mono font-bold text-xs">// CHRONICLE ENGINE LOG</p>
              <h2 className="text-2xl sm:text-5xl font-black text-slate-900 tracking-tight">Chronological Heritage</h2>
            </div>

            {/* Fluid Multi-width Node Track */}
            <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-32 space-y-8 sm:space-y-16">
              {milestones.map((item, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-12 group">
                  
                  {/* Year Flag - Adapts smoothly from left block to stacked header text */}
                  <div className="sm:absolute sm:-left-36 sm:top-0 font-mono text-sm sm:text-xl font-black text-slate-400 group-hover:text-indigo-600 transition-colors duration-200 bg-[#f8fafc] sm:px-2 sm:w-28 text-left mb-1 sm:mb-0">
                    [{item.year}]
                  </div>

                  {/* Central Timeline Hub Dot */}
                  <div className="absolute -left-[7px] top-1.5 sm:top-2 w-3 h-3 rounded-full bg-white border-2 border-slate-300 group-hover:border-indigo-600 group-hover:bg-indigo-50 transition-all duration-200" />

                  {/* Context Block Card */}
                  <div className="bg-white border border-slate-200 hover:border-indigo-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                    <span className="absolute top-3 right-4 font-mono text-[9px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded font-bold hidden md:inline">
                      {item.tag}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium antialiased">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 4: GOVERNANCE CARDS DIRECTORY */}
        {/* ======================================================== */}
        <section className="py-16 lg:py-28">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-24 space-y-3">
            <p className="uppercase tracking-[0.3em] text-rose-600 font-mono font-bold text-xs">// INTELLECTUAL GOVERNANCE</p>
            <h2 className="text-2xl sm:text-5xl font-black text-slate-900 tracking-tight">Command Leadership</h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold px-4">
              Academic authorities, technology theorists, and institutional pioneers directing our global stream matrix.
            </p>
          </div>

          {/* Grid Layout adjusts seamlessly from single stack to 3-Column configuration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {leaders.map((leader, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm relative group hover:border-blue-600/20 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Framed Natural Photo Segment */}
                <div className="h-64 sm:h-72 w-full overflow-hidden relative bg-slate-100 shrink-0">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover brightness-95 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
                  
                  {/* Dynamic Role Badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:right-auto">
                    <p className="text-[9px] font-mono uppercase tracking-widest text-blue-700 bg-white border border-blue-100 px-2.5 py-1 rounded-md font-bold shadow-sm inline-block max-w-full truncate">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Information Segment */}
                <div className="p-5 sm:p-6 bg-white flex flex-col flex-grow text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">{leader.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-2.5 antialiased flex-grow">
                    {leader.bio}
                  </p>
                  
                  {/* Verified Metric Badge Footer */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                    <span className="text-emerald-600 flex items-center gap-1"><Sparkles size={10}/> SECURE_AUTH</span>
                    <span className="text-slate-500 group-hover:text-blue-600 transition-colors">{leader.signature}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}