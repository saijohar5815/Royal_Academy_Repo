import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Award, GraduationCap, Compass, ArrowRight, CheckCircle2, 
  ChevronRight, Brain, Globe, Trophy, Users, School, Sparkles, Code,
  Cpu, Terminal, Activity, Library, Layers, Atom, Landmark, ShieldCheck,
  Fingerprint, RefreshCw, Network, Radio
} from "lucide-react";

import Navbar from "../components/Navbar/Navbar";

// =========================================================================
// DATABASES & CONFIGURATION (Comprehensive Academic Track Data)
// =========================================================================
const academicTracks = {
  primary: {
    id: "primary",
    title: "Primary School",
    ageGroup: "Ages 5 - 11 // Grades 1 - 5",
    tagline: "Cultivating Foundations of Wonder & Cognitive Logic",
    themeColor: "from-amber-500 to-orange-600",
    bgMuted: "bg-amber-50/60",
    borderActive: "border-amber-500",
    textGradient: "from-amber-600 to-orange-700",
    icon: School,
    accentGlow: "group-hover:shadow-[0_30px_60px_rgba(245,158,11,0.15)]",
    overview: "Our primary program fuses early mathematical literacy, linguistic fluency, and active physical play. We construct an ecosystem where natural curiosity is structured into scientific logic.",
    pillars: [
      { icon: Brain, title: "Cognitive Baselines", desc: "Early logic arrays, sensory geometry, and bilingual linguistic frameworks." },
      { icon: Globe, title: "Eco-Discovery", desc: "Immersive field observation modules and fundamental life sciences tracking." }
    ],
    curriculum: [
      { level: "Grades 1-2", focus: "Phonics & Guided Reading, Singapore Mathematical Logic, Visual Pattern Recognition & Motor Skills" },
      { level: "Grades 3-4", focus: "Introductory Fractions, Creative Composition, Botanical Ecology & Beginning Block-Based Coding" },
      { level: "Grade 5", focus: "Pre-Algebra Frameworks, Classical Rhetoric, Earth Systems & Structural Essay Outlining" }
    ],
    detailedCurriculum: {
      stem: [
        { subject: "Primary Mathematics", topics: ["Mental Math & Fact Fluency", "Singapore Math Models", "Fractions & Basic Decimals"] },
        { subject: "Inquiry Sciences", topics: ["Life Cycles & Ecosystems", "States of Matter Experiments", "Weather & Climate Tracking"] }
      ],
      humanities: [
        { subject: "Language Arts", topics: ["Phonics & Vocabulary Mapping", "Narrative & Persuasive Writing", "Public Speaking Exercises"] },
        { subject: "Social Studies", topics: ["Community & Civic Roles", "Geography & Map Skills", "Ancient Civilizations Survey"] }
      ],
      specialized: [
        { subject: "Technology & Creative Arts", topics: ["Scratch Block-Coding Systems", "Tactile Arts & Crafts Studio", "Introductory Choir & Rhythm Labs"] }
      ]
    },
    highlights: ["1:8 Faculty-to-Learner Ratio", "Immersive Sensory Laboratories", "Weekly Foundational Masterclasses"]
  },
  middle: {
    id: "middle",
    title: "Middle School",
    ageGroup: "Ages 11 - 14 // Grades 6 - 8",
    tagline: "The Convergence of Analytical Rigor & Global Systems",
    themeColor: "from-blue-600 to-indigo-600",
    bgMuted: "bg-blue-50/60",
    borderActive: "border-blue-500",
    textGradient: "from-blue-600 to-indigo-700",
    icon: BookOpen,
    accentGlow: "group-hover:shadow-[0_30px_60px_rgba(37,99,235,0.15)]",
    overview: "Middle School serves as the bridge into specialized academic disciplines. Students actively engage with formal experimental science, model diplomatic frameworks, and advanced athletic tracking.",
    pillars: [
      { icon: Code, title: "Algorithmic Systems", desc: "Object-oriented scripting fundamentals, logic trees, and procedural science." },
      { icon: Users, title: "Civic Architecture", desc: "Global history deep dives, parliamentary rhetoric, and ethics simulations." }
    ],
    curriculum: [
      { level: "Grade 6", focus: "Ratios & Integers, Earth & Space Systems, Textual Evidence Analysis & World Geography" },
      { level: "Grade 7", focus: "Proportional Relationships, Kinetic & Potential Energy Labs, Constitutional Law & Intro to Python" },
      { level: "Grade 8", focus: "Linear Equations & Algebra 1, Introductory Molecular Biology, Geopolitical Frameworks & Public Policy" }
    ],
    detailedCurriculum: {
      stem: [
        { subject: "Algebraic Reasoning", topics: ["Linear Equations & Functions", "Data Analysis & Statistics", "Geometric Proof Foundations"] },
        { subject: "Integrated Sciences", topics: ["Newtonian Mechanics & Physics", "Basic Chemistry Compounds", "Cellular Biology Systems"] }
      ],
      humanities: [
        { subject: "Literary Deconstruction", topics: ["Classical & Modern Novels", "Expository Writing Blueprints", "Media Literacy & Rhetoric"] },
        { subject: "World History & Civics", topics: ["Constitutional Frameworks", "Global Trading Networks", "Comparative Government Models"] }
      ],
      specialized: [
        { subject: "Computer Science & Design", topics: ["Python Programming Basics", "3D Modeling & CAD Systems", "Robotic Sensors & Automation"] }
      ]
    },
    highlights: ["Mandatory Dual-Language Pipelines", "Annual Model United Nations Integration", "Introductory Robotics Lab Track"]
  },
  high: {
    id: "high",
    title: "High School",
    ageGroup: "Ages 14 - 18 // Grades 9 - 12",
    tagline: "Elite University Preparation & Domain Mastery",
    themeColor: "from-rose-600 to-pink-600",
    bgMuted: "bg-rose-50/60",
    borderActive: "border-rose-500",
    textGradient: "from-rose-600 to-pink-700",
    icon: GraduationCap,
    accentGlow: "group-hover:shadow-[0_30px_60px_rgba(225,29,72,0.15)]",
    overview: "An elite prep paradigm combining the uncompromised academic standards of the International Baccalaureate with real-world technological and diplomatic application matrix tracks.",
    pillars: [
      { icon: Award, title: "Advanced Placements", desc: "University-level research, quantum-adjacent mathematics, and strategic thesis writing." },
      { icon: Compass, title: "Global Vector Guidance", desc: "Dedicated tier-1 university placement consulting and direct patent incubation labs." }
    ],
    curriculum: [
      { level: "Grades 9-10", focus: "Geometry & Algebra 2, Macroeconomics, AP Biology / AP Physics Tracks & Analytical Epistemology" },
      { level: "Grades 11-12", focus: "IB Diploma Core Tracks, Advanced Calculus / Statistics, Quantum Theory Seminars & Published Thesis Defense" }
    ],
    detailedCurriculum: {
      stem: [
        { subject: "Advanced Mathematics", topics: ["AP/IB Calculus BC", "Multivariable Matrices", "Statistical Probability Analytics"] },
        { subject: "University-Tier Sciences", topics: ["Organic Chemistry Dynamics", "Quantum Physics Mechanics", "Bioinformatics & Genetics"] }
      ],
      humanities: [
        { subject: "Advanced Epistemology", topics: ["IB Theory of Knowledge (ToK)", "Academic Thesis & Peer Review", "Classical Philosophy Synthesis"] },
        { subject: "Economics & Politics", topics: ["Macro/Microeconomic Theory", "International Relations Networks", "Human Rights & Global Policy"] }
      ],
      specialized: [
        { subject: "Venture & Patent Labs", topics: ["Full-Stack Software Engineering", "IP & Corporate Law Fundamentals", "Venture Architecture Projects"] }
      ]
    },
    highlights: ["100% Ivy League & Tier-1 Placement Index", "Direct Corporate Internship Tracks", "Dedicated Venture Incubation Grant Access"]
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 14 } 
  }
};

export default function Academics() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedTrack, setSelectedTrack] = useState("primary");
  const [syncTime, setSyncTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setInterval(() => setSyncTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, [currentPage, selectedTrack]);

  const navigateToTrack = (trackId) => {
    setSelectedTrack(trackId);
    setCurrentPage("academics");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-blue-500/20 selection:text-blue-900 relative overflow-hidden w-full">
      
      {/* GLOBAL BACKGROUND SYSTEM MATRIX */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute w-[800px] h-[800px] rounded-full bg-blue-200/20 blur-[130px] -top-20 -right-20" />
      </div>

      {/* TOP DECORATIVE HUD BAR */}
      <div className="w-full bg-slate-950 border-b border-slate-800 py-3 relative z-50">
        <div className="w-full px-6 sm:px-10 lg:px-16 flex justify-between items-center text-xs font-mono font-bold tracking-wider text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>LIVE_STREAM_ACTIVE</span>
            <span className="text-slate-500">NODE // ACADEMY_CORE_LIGHT</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-slate-500">
              <button 
                onClick={() => setCurrentPage("home")}
                className={`hover:text-blue-500 font-mono transition-colors ${currentPage === "home" ? "text-blue-400 underline decoration-2 underline-offset-4" : ""}`}
              >
                OVERVIEW_HUB
              </button>
              <span className="text-slate-700">/</span>
              <button 
                onClick={() => { setCurrentPage("academics"); setSelectedTrack("primary"); }}
                className={`hover:text-blue-500 font-mono transition-colors ${currentPage === "academics" ? "text-blue-400 underline decoration-2 underline-offset-4" : ""}`}
              >
                ACADEMIC_TRACKS
              </button>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>SECURE TRANSIT // TLS_1.3</span>
              <span>SYSTEM YEAR: 2026</span>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-24 pt-12 pb-24">
        <AnimatePresence mode="wait">
          {currentPage === "home" ? (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* TWO-COLUMN GRID STAGE */}
              <header className="py-12 md:py-20 border-b border-slate-200/80 text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-mono tracking-wider text-blue-600 uppercase font-bold">
                    <Sparkles size={14} /> CORE ENVIRONMENT TRANSIT DIRECT LOG
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-slate-950 tracking-tight uppercase leading-[0.95]">
                    Architecting the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                      Next Matrix Track
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl pt-2">
                    Welcome to the central academic interface layer. Select a specialized tracking framework module from the matrix catalog below to analyze curricula, benchmarks, and tactical deployment metrics.
                  </p>
                </div>

                {/* TELEMETRY TERMINAL WIDGET */}
                <div className="lg:col-span-5 w-full">
                  <div className="bg-slate-950 text-slate-200 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 relative overflow-hidden font-mono text-sm">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                    <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-xs text-slate-400 font-bold ml-1">SYS_MONITOR // CORE_SYNC</span>
                      </div>
                      <div className="text-xs text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-900/50 flex items-center gap-1">
                        <RefreshCw size={12} className="animate-spin" /> {syncTime}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Network size={16} className="text-blue-400" />
                          <div>
                            <div className="text-xs text-slate-500 font-bold uppercase">Global Campus Pipeline</div>
                            <div className="text-slate-200 font-bold text-sm">Curriculum Mappings Active</div>
                          </div>
                        </div>
                        <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-900/30 text-xs">100% SYNCED</span>
                      </div>
                    </div>

                    <div className="space-y-3 bg-slate-900/30 border border-slate-900 rounded-xl p-4">
                      <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                        <span>Tier Workload Balancing</span>
                      </div>
                      <div className="space-y-4 pt-1">
                        <div>
                          <div className="flex justify-between text-sm mb-1.5 text-slate-300"><span>Primary (Grades 1-5)</span><span>42%</span></div>
                          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden"><div className="bg-amber-500 h-full rounded-full" style={{ width: '42%' }} /></div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1.5 text-slate-300"><span>Middle (Grades 6-8)</span><span>68%</span></div>
                          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden"><div className="bg-blue-500 h-full rounded-full" style={{ width: '68%' }} /></div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1.5 text-slate-300"><span>High (Grades 9-12)</span><span>91%</span></div>
                          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden"><div className="bg-rose-500 h-full rounded-full" style={{ width: '91%' }} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {/* CARD SECTOR ENTRY */}
              <section className="py-16 w-full">
                <div className="space-y-2 text-left mb-12">
                  <p className="uppercase tracking-[0.25em] text-blue-600 font-mono font-bold text-sm">// PROGRAM OVERVIEW ENTRIES</p>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">Academic Development Tracks</h2>
                </div>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
                >
                  {Object.values(academicTracks).map((track) => {
                    const TrackIcon = track.icon;
                    return (
                      <motion.div 
                        key={track.id}
                        variants={cardVariants}
                        whileHover={{ y: -8, scale: 1.015 }}
                        className={`bg-white border border-slate-200/90 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between shadow-sm relative group ${track.accentGlow} hover:border-slate-300/30 transition-shadow duration-300 ease-out w-full`}
                      >
                        <div className="space-y-6">
                          <motion.div 
                            whileHover={{ rotate: 6, scale: 1.05 }}
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${track.themeColor} flex items-center justify-center text-white shadow-md`}
                          >
                            <TrackIcon size={26} />
                          </motion.div>
                          
                          <div className="space-y-3 text-left">
                            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold block">{track.ageGroup}</span>
                            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">{track.title}</h3>
                            <p className="text-base text-slate-600 leading-relaxed font-medium pt-1">
                              {track.overview}
                            </p>
                          </div>
                        </div>

                        <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-slate-400">STATUS // VERIFIED</span>
                          
                          <motion.button
                            onClick={() => navigateToTrack(track.id)}
                            whileTap={{ scale: 0.97 }}
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r ${track.themeColor} shadow-md overflow-hidden relative`}
                          >
                            <span>Explore Program</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="academics-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-6 md:py-12 w-full"
            >
              {/* HUB CAROUSEL NAVIGATION */}
              <div className="overflow-x-auto whitespace-nowrap pb-4 mb-10 border-b border-slate-200 w-full">
                <div className="flex justify-start md:justify-center items-center gap-4 min-w-max px-2">
                  {Object.values(academicTracks).map((track) => {
                    const TrackIcon = track.icon;
                    const isSelected = selectedTrack === track.id;
                    return (
                      <button
                        key={track.id}
                        onClick={() => setSelectedTrack(track.id)}
                        className={`flex items-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-mono uppercase tracking-wider font-bold transition-all duration-200 border-2 ${
                          isSelected 
                            ? `bg-white text-slate-950 ${track.borderActive} shadow-md` 
                            : "bg-slate-100/80 border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        <TrackIcon size={18} className={isSelected ? `text-transparent bg-clip-text bg-gradient-to-br ${track.themeColor}` : ""} />
                        {track.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* DYNAMIC DETAILS SUB-MATRIX */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTrack}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-12 w-full"
                >
                  <div className={`bg-white border-2 ${academicTracks[selectedTrack].borderActive}/20 rounded-3xl p-6 sm:p-10 text-left relative overflow-hidden w-full`}>
                    <div className="space-y-4 max-w-5xl relative z-10">
                      <span className="font-mono text-xs font-bold text-slate-400 block uppercase tracking-widest">// TARGET AGE SECTOR: {academicTracks[selectedTrack].ageGroup}</span>
                      <h2 className={`text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${academicTracks[selectedTrack].themeColor}`}>
                        {academicTracks[selectedTrack].title} Framework
                      </h2>
                      <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight italic">"{academicTracks[selectedTrack].tagline}"</p>
                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium pt-2">{academicTracks[selectedTrack].overview}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
                    <div className="lg:col-span-8 space-y-10 w-full">
                      {/* Curricular Benchmarks (Roadmap) */}
                      <div className="space-y-6 text-left w-full">
                        <div className="flex items-center gap-2 font-mono text-sm font-black uppercase text-slate-400 tracking-wider">
                          <Compass size={16} /> // Grade Progression Roadmap
                        </div>
                        <div className="space-y-5 w-full">
                          {academicTracks[selectedTrack].curriculum.map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 md:items-center w-full min-h-[100px]">
                              {/* INCREASED WIDTH & PADDING FOR GRADE BADGE */}
                              <div className={`px-5 py-3 rounded-xl bg-gradient-to-br ${academicTracks[selectedTrack].themeColor} text-white font-mono text-base font-bold text-center md:w-40 shrink-0 shadow-sm tracking-wide`}>
                                {item.level}
                              </div>
                              <div className="text-slate-700 font-bold text-lg leading-relaxed">{item.focus}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Syllabus Details (Core Syllabus Matrix) */}
                      <div className="space-y-6 text-left border-t border-slate-200/80 pt-8 w-full">
                        <div className="flex items-center gap-2 font-mono text-sm font-black uppercase text-slate-400 tracking-wider">
                          <Library size={16} /> // Comprehensive Core Syllabus Matrix
                        </div>
                        <div className="grid grid-cols-1 gap-8 w-full">
                          
                          {/* STEM Frameworks Box */}
                          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 w-full">
                            <div className="flex items-center gap-2 text-slate-900 font-black text-lg uppercase tracking-tight border-b border-slate-100 pb-3">
                              <Atom size={22} className="text-blue-500" /> STEM Frameworks
                            </div>
                            <div className="space-y-6">
                              {academicTracks[selectedTrack].detailedCurriculum.stem.map((sub, sIdx) => (
                                <div key={sIdx} className="space-y-3">
                                  <h5 className="text-base font-black text-slate-800 tracking-wide uppercase font-mono text-xs text-slate-400">// {sub.subject}</h5>
                                  {/* EXPLICIT GRID SPECIFICATION TO EXPAND WIDTH SIZES */}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                                    {sub.topics.map((t, tIdx) => (
                                      <span key={tIdx} className="text-sm bg-slate-50/80 px-4 py-3 rounded-xl border border-slate-200/60 font-bold text-slate-700 shadow-sm text-center flex items-center justify-center min-h-[52px]">
                                        {t}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Humanities & Thought Box */}
                          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 w-full">
                            <div className="flex items-center gap-2 text-slate-900 font-black text-lg uppercase tracking-tight border-b border-slate-100 pb-3">
                              <Landmark size={22} className="text-emerald-500" /> Humanities & Thought
                            </div>
                            <div className="space-y-6">
                              {academicTracks[selectedTrack].detailedCurriculum.humanities.map((sub, sIdx) => (
                                <div key={sIdx} className="space-y-3">
                                  <h5 className="text-base font-black text-slate-800 tracking-wide uppercase font-mono text-xs text-slate-400">// {sub.subject}</h5>
                                  {/* EXPLICIT GRID SPECIFICATION TO EXPAND WIDTH SIZES */}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                                    {sub.topics.map((t, tIdx) => (
                                      <span key={tIdx} className="text-sm bg-slate-50/80 px-4 py-3 rounded-xl border border-slate-200/60 font-bold text-slate-700 shadow-sm text-center flex items-center justify-center min-h-[52px]">
                                        {t}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* SIDE PANEL PERFORMANCE METRICS */}
                    <div className="lg:col-span-4 space-y-6 w-full lg:sticky lg:top-28">
                      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-left relative overflow-hidden">
                        <div className="flex items-center gap-2 font-mono text-sm font-black uppercase text-slate-400 tracking-wider mb-6">
                          <Trophy size={16} /> // Performance Metrics
                        </div>
                        <ul className="space-y-4">
                          {academicTracks[selectedTrack].highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-3 text-base font-semibold text-slate-700 leading-normal">
                              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button 
                        onClick={() => setCurrentPage("home")}
                        className="w-full py-4 bg-slate-950 hover:bg-slate-900 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-2xl transition-all duration-150 shadow-lg flex items-center justify-center gap-2"
                      >
                        Return to Hub Home <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-8 text-center text-xs font-mono tracking-widest text-slate-400 w-full">
        <div className="w-full px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>ROYAL ACADEMY MATRIX CORP INTEGRATION // PROT_v4</span>
          <span>SYSTEM RUNTIME SECURE ACCESS STATUS: CURRENT_OK_2026</span>
        </div>
      </footer>
    </div>
  );
}