import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles,
  Zap,
  Globe,
  Compass,
  Calendar, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  User,
  Mail,
  Phone,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Lock,
  ChevronRight
} from 'lucide-react';
import Navbar from "../components/Navbar/Navbar";
export default function Admissions() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    program: '',
    portfolioUrl: '',
  });
  
  const [activeStep, setActiveStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (activeStep < 3) setActiveStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    if (activeStep > 1) setActiveStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isStep1Valid = formData.fullName && formData.email && formData.phone;
  const isStep2Valid = formData.dob && formData.gender;
  const isStep3Valid = formData.program;

  return (
    <div className="w-full min-h-screen bg-[#0d1527] text-slate-100 selection:bg-indigo-500 selection:text-white antialiased font-sans relative">
      
      {/* --- FLUID FULL-WIDTH HEADER --- */}
      <nav className="w-full border-b border-slate-800/60 bg-[#0d1527]/80 backdrop-blur-xl fixed top-0 left-0 z-50">
        <div className="w-full px-6 sm:px-10 lg:px-16 h-24 flex items-center justify-between">
          <Navbar />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-black text-2xl tracking-tight uppercase bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              NEXUS <span className="text-indigo-400 font-light">ACADEMY</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-base font-semibold text-slate-300">
            <a href="#pillars" className="hover:text-white transition-colors tracking-wide">Ecosystem Pillars</a>
            <a href="#timeline" className="hover:text-white transition-colors tracking-wide">Milestones</a>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-sm font-mono text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
            SECURE ADMISSIONS APP
          </div>
        </div>
      </nav>

      {/* --- VISUAL GRAPHIC BACKDROP BLOOMS --- */}
      <div className="absolute top-0 left-0 w-full h-[800px] opacity-40 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[5%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-600/30 via-cyan-500/15 to-transparent blur-[150px]" />
        <div className="absolute top-[10%] right-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-purple-600/25 via-pink-500/15 to-transparent blur-[140px]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* --- HERO HEADER SECTION (EXPANDED MAX-WIDTH) --- */}
      <div className="relative pt-48 pb-20 px-6 sm:px-10 lg:px-16 text-center z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 border border-indigo-500/30 tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Admissions Node Active • Cohort 2026 / 2027
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]">
            Architecting Legacies.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Empowering Global Visionaries.
            </span>
          </h1>

          <p className="max-w-4xl mx-auto text-lg sm:text-xl lg:text-2xl text-slate-300 font-normal leading-relaxed">
            Step into an elite academic ecosystem built around intense project synthesis and advanced technological deployment. Your trajectory acceleration initiates here.
          </p>

          {/* Core Institutional Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            {[
              { value: "#12", label: "Global Rank" },
              { value: "98%", label: "Employment Rate", color: "text-cyan-400" },
              { value: "$42M", label: "Research Fund", color: "text-purple-400" }
            ].map((metric, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm shadow-xl">
                <div className={`text-2xl sm:text-4xl font-black text-white ${metric.color || ''}`}>{metric.value}</div>
                <div className="text-xs uppercase text-slate-400 font-extrabold tracking-widest mt-2">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FLUID WORKSPACE GRID LAYOUT --- */}
      <div className="w-full px-6 sm:px-10 lg:px-16 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* LEFT SIDEBOARD: ACCREDITATIONS & INFO TILES (TAKES 7 COLUMNS) */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Ecosystem Pillars Section */}
            <div id="pillars" className="space-y-8">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-indigo-400 font-black">Ecosystem Pillars</h2>
                <p className="text-3xl lg:text-4xl font-black text-slate-100 mt-2">Engineered for absolute performance.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl backdrop-blur-sm group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all">
                    <Zap className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl text-slate-200 flex items-center gap-2 group-hover:text-white transition-colors">
                    Hyper-Accelerated Tracks <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </h3>
                  <p className="text-base lg:text-lg text-slate-300 mt-3 leading-relaxed">
                    Bypass traditional bureaucratic roadmaps. Dive directly into real-world production sandboxes and active venture engineering pipelines.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl backdrop-blur-sm group">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl text-slate-200 group-hover:text-white transition-colors">Global Core Nodes</h3>
                  <p className="text-base lg:text-lg text-slate-300 mt-3 leading-relaxed">
                    Access physical, immersion residency parameters embedded directly across active Tokyo, London, and Silicon Valley workspace nodes.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl hover:border-purple-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl backdrop-blur-sm group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 border border-purple-500/20 group-hover:bg-purple-500/20 transition-all">
                    <Compass className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl text-slate-200 group-hover:text-white transition-colors">Elite Industry Faculty</h3>
                  <p className="text-base lg:text-lg text-slate-300 mt-3 leading-relaxed">
                    Train dynamically under the direct strategic supervision of enterprise architecture heads and venture fund directors.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl backdrop-blur-sm group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl text-slate-200 group-hover:text-white transition-colors">Blind Merit Grants</h3>
                  <p className="text-base lg:text-lg text-slate-300 mt-3 leading-relaxed">
                    High-caliber entry profiles trigger automatic unconditional financial support brackets covering up to 100% of physical tooling fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone Grid Timeline */}
            <div id="timeline" className="bg-slate-900/30 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-slate-800/80 shadow-2xl">
              <div className="flex items-center justify-between mb-10 border-b border-slate-800/60 pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <Calendar className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white">Milestone Matrix</h2>
                    <p className="text-base text-slate-400 mt-0.5">Key admissions processing windows</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-400/5 px-4 py-2 rounded border border-cyan-400/20 tracking-widest uppercase">Strict Windows</span>
              </div>
              
              <div className="space-y-10 pl-2">
                {[
                  { phase: "Phase 01", date: "June 15", title: "Dossier Configuration Initialization", desc: "Submit core technical records, baseline structural historical parameters, and select desired regional node preference." },
                  { phase: "Phase 02", date: "July 20", title: "Endowment Bracket Evaluation", desc: "Early applicant folders undergo automated algorithmic appraisal for priority institutional financial routing." },
                  { phase: "Phase 03", date: "August 10", title: "Live Synthesis Evaluation", desc: "Engage in an intensive interactive system simulation and deep-dive conversational project review with the board." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start relative group">
                    <div className="flex flex-col items-center flex-shrink-0 mt-2">
                      <div className="w-5 h-5 rounded-full bg-[#0d1527] border-2 border-slate-700 group-hover:border-indigo-400 flex items-center justify-center transition-colors">
                        <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider">{item.phase}</span>
                        <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded border border-indigo-400/20">{item.date}</span>
                      </div>
                      <h4 className="font-bold text-slate-100 text-xl mt-2 group-hover:text-white transition-colors">{item.title}</h4>
                      <p className="text-base lg:text-lg text-slate-300 mt-2 leading-relaxed max-w-3xl">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBOARD: INTERACTIVE MULTI-STEP ADMISSIONS PANEL (TAKES 5 COLUMNS) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="bg-slate-900/70 backdrop-blur-2xl rounded-2xl border-2 border-slate-800/80 shadow-2xl overflow-hidden transition-all relative">
              
              {/* Dynamic Top Progress Tracker */}
              <div className="w-full h-2 bg-slate-800/40 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-300 ease-out"
                  style={{ width: submitted ? '100%' : `${(activeStep / 3) * 100}%` }}
                />
              </div>

              {submitted ? (
                /* SUCCESS DISPLAY PANEL */
                <div className="p-8 sm:p-12 text-center space-y-8">
                  <div className="w-24 h-24 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20 shadow-2xl relative">
                    <CheckCircle2 className="w-12 h-12" />
                    <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-ping opacity-25" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black text-white tracking-tight">Transmission Authenticated</h3>
                    <p className="text-sm font-mono text-slate-400 tracking-widest uppercase">FILE ACCESS: NEX-{Math.floor(100000 + Math.random() * 900000)}</p>
                  </div>
                  <p className="text-base lg:text-lg text-slate-300 max-w-md mx-auto leading-relaxed">
                    Welcome to the pipeline pool, <span className="font-bold text-white">{formData.fullName}</span>. Your core identity packet has synchronized. A full validation blueprint structure has been sent to your network point at <span className="text-cyan-400 font-semibold underline">{formData.email}</span>.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setActiveStep(1); setFormData({ fullName:'', email:'', phone:'', dob:'', gender:'', program:'', portfolioUrl:'' }); }}
                    className="w-full py-4 rounded-xl bg-slate-950 border border-slate-800 text-base font-bold text-slate-300 hover:text-white hover:border-slate-700 transition-all shadow-xl"
                  >
                    Initialize New Application File
                  </button>
                </div>
              ) : (
                /* FULLY FLUID WORKSPACE FORM APPLICATION */
                <div className="p-8 sm:p-12 space-y-8">
                  
                  {/* Dynamic Form Tracker Meta Row */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-6">
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight">Dossier Workspace</h3>
                      <p className="text-base text-indigo-400 font-semibold mt-1">
                        {activeStep === 1 && "Identity & Communication Protocol"}
                        {activeStep === 2 && "Temporal Metrics & Parameters"}
                        {activeStep === 3 && "Discipline Track Architecture"}
                      </p>
                    </div>
                    <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-lg border border-indigo-500/20 shadow-sm">
                      Step {activeStep} / 3
                    </span>
                  </div>

                  <form onSubmit={activeStep === 3 ? handleSubmit : handleNextStep} className="space-y-8">
                    
                    {/* STEP 1 FIELDS */}
                    {activeStep === 1 && (
                      <div className="space-y-6">
                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Candidate Full Legal Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                              type="text" 
                              name="fullName" 
                              required 
                              value={formData.fullName} 
                              onChange={handleChange} 
                              placeholder="e.g., Alex Mercer" 
                              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-medium placeholder:text-slate-500 transition-all shadow-inner"
                            />
                          </div>
                        </div>

                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Secure Email Node</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                              type="email" 
                              name="email" 
                              required 
                              value={formData.email} 
                              onChange={handleChange} 
                              placeholder="e.g., alex@nexus.com" 
                              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-medium placeholder:text-slate-500 transition-all shadow-inner"
                            />
                          </div>
                        </div>

                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Mobile Network Line</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                              type="tel" 
                              name="phone" 
                              required 
                              value={formData.phone} 
                              onChange={handleChange} 
                              placeholder="e.g., +1 (555) 019-2831" 
                              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-medium placeholder:text-slate-500 transition-all shadow-inner"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2 FIELDS */}
                    {activeStep === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Date of Birth</label>
                          <input 
                            type="date" 
                            name="dob" 
                            required 
                            value={formData.dob} 
                            onChange={handleChange} 
                            className="w-full px-5 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-semibold transition-all shadow-inner"
                          />
                        </div>

                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Gender Classification Marker</label>
                          <select 
                            name="gender" 
                            required 
                            value={formData.gender} 
                            onChange={handleChange} 
                            className="w-full px-5 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-semibold transition-all shadow-inner"
                          >
                            <option value="" disabled className="bg-slate-900 text-slate-500">Select programmatic parameter...</option>
                            <option value="male" className="bg-slate-900 text-white">Male</option>
                            <option value="female" className="bg-slate-900 text-white">Female</option>
                            <option value="nonbinary" className="bg-slate-900 text-white">Non-Binary / Fluid</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* STEP 3 FIELDS */}
                    {activeStep === 3 && (
                      <div className="space-y-6">
                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Target Curriculum Track Major</label>
                          <div className="relative">
                            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <select 
                              name="program" 
                              required 
                              value={formData.program} 
                              onChange={handleChange} 
                              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-semibold transition-all appearance-none shadow-inner"
                            >
                              <option value="" disabled className="bg-slate-900 text-slate-500">Select programmatic tracking focus...</option>
                              <option value="ai" className="bg-slate-900 text-white">Neural Networks & Core AI Engineering</option>
                              <option value="biz" className="bg-slate-900 text-white">Quantitative Analytics & Venture Growth</option>
                              <option value="robotics" className="bg-slate-900 text-white">Autonomous Robotics & Mechatronics</option>
                              <option value="design" className="bg-slate-900 text-white">Immersive Media & Human-Machine Interfaces</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Technical Portfolio Repository Link (Optional)</label>
                          <input 
                            type="url" 
                            name="portfolioUrl" 
                            value={formData.portfolioUrl} 
                            onChange={handleChange} 
                            placeholder="https://github.com/identity" 
                            className="w-full px-5 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-medium placeholder:text-slate-500 transition-all shadow-inner"
                          />
                        </div>
                      </div>
                    )}

                    {/* INTERACTIVE STEP ACTIONS */}
                    <div className="flex items-center justify-between gap-4 pt-4">
                      {activeStep > 1 && (
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base font-bold text-slate-300 hover:text-white hover:border-slate-500 transition-all flex items-center gap-2 shadow-sm"
                        >
                          <ArrowLeft className="w-5 h-5" /> Back
                        </button>
                      )}
                      
                      {activeStep < 3 ? (
                        <button
                          type="submit"
                          disabled={activeStep === 1 ? !isStep1Valid : !isStep2Valid}
                          className="flex-1 py-4 px-6 rounded-xl font-bold text-base text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 ml-auto group shadow-lg shadow-indigo-950/40"
                        >
                          Next Segment <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={!isStep3Valid}
                          className="flex-1 py-4 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:opacity-30 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-950/50"
                        >
                          Submit Dossier Data <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      )}
                    </div>

                    {/* Security Badge Footer Pin */}
                    <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-800/60">
                      <Building2 className="w-5 h-5 text-slate-400" />
                      <Lock className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">Cryptographic SSL Security Layer Active</span>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}