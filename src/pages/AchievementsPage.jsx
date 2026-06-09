import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Rocket,
  Medal,
  Star,
  Cpu,
  Layers,
  Sparkles,
  Search,
  ArrowUpRight,
  ChevronRight,
  RefreshCw,
  CheckCircle2,
  ShieldCheck,
  Building
} from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
// Meticulously structured technical catalog
const achievements = [
  {
    id: "ACH-01",
    title: "Global Innovation Award",
    year: "2025",
    category: "AI & SYSTEMS",
    metric: "TOP 1%",
    icon: Trophy,
    accent: "text-cyan-600 bg-cyan-50 border-cyan-200/60",
    description: "Recognized among the world's top AI-driven educational models integrating automated multi-agent synthesis frameworks."
  },
  {
    id: "ACH-02",
    title: "Research Breakthroughs",
    year: "2025",
    category: "PUBLICATIONS",
    metric: "500+ NODES",
    icon: Rocket,
    accent: "text-purple-600 bg-purple-50 border-purple-200/60",
    description: "Secured persistent high-impact registry positions across international tech journals for neural architecture topologies."
  },
  {
    id: "ACH-03",
    title: "Championship Dominance",
    year: "2024",
    category: "ATHLETICS",
    metric: "14 GOLD",
    icon: Medal,
    accent: "text-emerald-600 bg-emerald-50 border-emerald-200/60",
    description: "Shattered standing university track records during national intercollegiate sweeps under unified athletic protocols."
  },
  {
    id: "ACH-04",
    title: "Academic Distinction",
    year: "2024",
    category: "EDUCATION",
    metric: "TIER-1",
    icon: Star,
    accent: "text-amber-600 bg-amber-50 border-amber-200/60",
    description: "Solidified structural position as the absolute standard for enterprise-level computing and core compiler logic training."
  }
];

const workspaceMetrics = [
  { label: "GLOBAL RANK", value: "#12", system: "SYS_RANK // MAPPED" },
  { label: "EMPLOYMENT RATE", value: "98%", system: "PLCMNT // OPTIMIZED" },
  { label: "RESEARCH FUND", value: "$42M", system: "CAPITAL // INJECTED" },
];

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Advanced Multi-Step Core Engine State
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [systemIdentifier, setSystemIdentifier] = useState("NEXUS_ACADEMY_NODE_ALPHA");

  const filteredItems = achievements.filter(item => {
    const matchesCategory = activeCategory === "ALL" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Execute Protocol Pipeline Handler
  const handleExecuteProtocol = () => {
    if (isProcessing) return;
    
    setIsProcessing(true);

    if (currentStep === 1) {
      // Step 1 -> Step 2 Transitions: Morph environment identifier to Royal Academy
      setTimeout(() => {
        setSystemIdentifier("ROYAL_ACADEMY_CORE_MATRIX");
        setCurrentStep(2);
        setIsProcessing(false);
      }, 900);
    } else if (currentStep === 2) {
      // Step 2 -> Step 3 Transitions: Run structural compilation audit
      setTimeout(() => {
        setCurrentStep(3);
        setIsProcessing(false);
      }, 900);
    } else {
      // Step 3 -> Reset Cycle Protocol loop
      setTimeout(() => {
        setSystemIdentifier("NEXUS_ACADEMY_NODE_ALPHA");
        setCurrentStep(1);
        setIsProcessing(false);
      }, 400);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased font-sans relative overflow-x-hidden selection:bg-slate-900 selection:text-white">
      
      {/* Technical Matrix Backdrop Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Top Status Bar Grid */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-2">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentStep === 3 ? "bg-indigo-400" : "bg-emerald-400"}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${currentStep === 3 ? "bg-indigo-500" : "bg-emerald-500"}`}></span>
            </span>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-600 uppercase">
              SECURE_METRICS_SERVER // {currentStep === 1 ? "LIVE_NODE" : currentStep === 2 ? "ENV_TRANSIT" : "SYS_MAX_SYNC"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-slate-400">
            <span>COHORT: 2026 / 2027</span>
            <span className="text-slate-200">|</span>
            <span className="font-bold text-slate-600">{systemIdentifier.split("_")[0]} LINKED</span>
          </div>
        </div>

        {/* Hero Section Container */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-sm font-mono font-medium shadow-sm">
              <Cpu size={14} className={currentStep === 1 ? "text-indigo-500" : "text-cyan-500"} />
              <span>ENVIRONMENT // REGISTRY_INDEX</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Architecting Legacies.<br />
              <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Empowering Visionaries.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl font-normal leading-relaxed">
              Step into an elite engineering dashboard mapping severe academic breakthroughs, high-performance metrics, and validated global honors.
            </p>
          </div>

          {/* Dynamic Step-Aware Dossier Workspace Form Block */}
          <div className="lg:col-span-5 border border-slate-200 bg-slate-50/60 p-6 sm:p-8 rounded-2xl backdrop-blur-md space-y-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2.5">
                {currentStep === 3 ? (
                  <ShieldCheck size={18} className="text-emerald-500 animate-bounce" />
                ) : (
                  <Layers size={16} className="text-indigo-500" />
                )}
                <span className="text-sm font-mono font-bold tracking-tight text-slate-800">Dossier Workspace</span>
              </div>
              <span className={`text-xs font-mono border px-2.5 py-0.5 rounded-md font-bold transition-colors duration-300 ${
                currentStep === 1 ? "bg-indigo-50 border-indigo-100 text-indigo-700" :
                currentStep === 2 ? "bg-cyan-50 border-cyan-100 text-cyan-700" :
                "bg-emerald-50 border-emerald-100 text-emerald-700"
              }`}>
                Step {currentStep} / 3
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>SYSTEM INSTANCE IDENTIFIER</span>
                  {currentStep > 1 && (
                    <span className="text-[10px] bg-amber-100 text-amber-800 border border-amber-200 px-1.5 py-0.2 rounded font-mono uppercase tracking-normal">MUTATED</span>
                  )}
                </label>
                <div className={`w-full border rounded-xl px-4 py-3 text-sm font-mono font-bold transition-all duration-300 flex items-center gap-2 shadow-sm ${
                  currentStep === 1 ? "bg-white border-slate-200 text-slate-700" :
                  "bg-slate-900 border-slate-950 text-cyan-400"
                }`}>
                  {currentStep > 1 ? <Building size={14} className="text-cyan-400" /> : <Cpu size={14} className="text-slate-400" />}
                  {systemIdentifier}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">DATA TYPE</label>
                  <div className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono text-slate-700 font-medium shadow-sm">
                    {currentStep === 3 ? "ARCHIVE_SYNC" : "VERIFIED_LIVE"}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">HASH PROTOCOL</label>
                  <div className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono text-slate-700 font-medium shadow-sm">
                    {currentStep === 3 ? "SHA-512 // SECURE" : "SHA-256 // CRON"}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Step Completion Navigation Track */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {[1, 2, 3].map((step) => (
                <div 
                  key={step} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step <= currentStep ? "bg-slate-900" : "bg-slate-200"
                  }`} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Triple Performance Block Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {workspaceMetrics.map((m, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between group hover:border-slate-400 transition-all duration-200">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-indigo-500 tracking-wider block">{m.system}</span>
                <span className="text-sm font-bold text-slate-400 block tracking-wide">{m.label}</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-6">
                {m.value}
              </div>
            </div>
          ))}
        </section>

        {/* Filter Toolbar System */}
        <section className="space-y-6 pt-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between border-b border-slate-200 pb-5">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none font-mono text-sm">
              {["ALL", "AI & SYSTEMS", "PUBLICATIONS", "ATHLETICS", "EDUCATION"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl transition-all font-bold whitespace-nowrap tracking-tight ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Filter terminal parameters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-2.5 text-sm font-mono focus:outline-none focus:border-slate-400 focus:bg-white transition-all text-slate-800 shadow-sm"
              />
            </div>
          </div>

          {/* Interactive Bento Catalog Grid Layout */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    key={item.id}
                    className="group relative bg-white border border-slate-200 hover:border-slate-400 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.04)] overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-6">
                      <div className="flex items-center justify-between font-mono text-sm border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-400">{item.id}</span>
                          <span className="text-slate-300">/</span>
                          <span className="font-bold text-slate-700 tracking-wider bg-slate-100/80 px-2.5 py-0.5 rounded-md border border-slate-200/40">
                            {item.category}
                          </span>
                        </div>
                        <span className="font-bold text-slate-400">CY_{item.year}</span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className={`p-3 rounded-xl border shrink-0 shadow-sm ${item.accent}`}>
                          <Icon size={22} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">OUTPUT:</span>
                        <span className="text-sm font-mono font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-md border border-slate-200/40">
                          {item.metric}
                        </span>
                      </div>
                      
                      <button className="flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                        <span>EXPLORE_NODE</span>
                        <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          
          {filteredItems.length === 0 && (
            <div className="w-full text-center py-24 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
              <span className="text-sm font-mono text-slate-400 font-bold uppercase tracking-widest">
                No active runtime environments match your specifications.
              </span>
            </div>
          )}
        </section>

        {/* Actionable Functional CTA Module */}
        <section className="pt-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_4px_30px_rgba(0,0,0,0.01)] backdrop-blur-sm">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-md">
                <Sparkles size={12} />
                <span>SYSTEM_PIPELINE // PIPELINE_EXECUTE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                {currentStep === 1 && "Initiate Terminal Integration."}
                {currentStep === 2 && "Synchronizing Core Repositories."}
                {currentStep === 3 && "Ecosystem Verification Absolute."}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 max-w-2xl font-normal leading-relaxed">
                {currentStep === 1 && "Authorize secure operational channels to link external deployment workflows directly with our persistent, structural ecosystem registry index."}
                {currentStep === 2 && "The runtime matrix is currently rewriting the structural workspace instance parameter to Royal Academy servers."}
                {currentStep === 3 && "All terminal data pipelines have loaded successfully into the production mainframe ecosystem securely."}
              </p>
            </div>
            
            <button 
              onClick={handleExecuteProtocol}
              disabled={isProcessing}
              className={`w-full md:w-auto px-6 py-4 font-mono font-bold text-sm uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-3 group shrink-0 select-none ${
                isProcessing ? "bg-slate-700 text-slate-400 cursor-not-allowed" :
                currentStep === 3 ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/10" :
                "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10"
              }`}
            >
              {isProcessing ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : currentStep === 1 ? (
                <>
                  <span>Execute Protocol</span>
                  <ChevronRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
                </>
              ) : currentStep === 2 ? (
                <>
                  <span>Finalize Validation</span>
                  <CheckCircle2 size={16} className="text-cyan-400" />
                </>
              ) : (
                <>
                  <span>Reset Environment</span>
                  <RefreshCw size={16} />
                </>
              )}
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}