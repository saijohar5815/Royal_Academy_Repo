import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Calendar, GraduationCap } from "lucide-react";

export default function AdmissionsCTA() {
  return (
    // Seamless transitions across viewports with premium deep workspace depth
    <section id="admissions" className="py-12 sm:py-20 lg:py-24 bg-[#060913] text-white relative overflow-hidden">
      
      {/* --- BACKGROUND LUMINOUS GRAPHICS --- */}
      {/* Asymmetric Radial Eclipse Halos that add depth without bleeding into other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[500px] bg-gradient-to-r from-emerald-500/10 via-amber-500/5 to-blue-500/10 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />
      
      {/* Micro Grid Accent structure */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), 
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- MAIN STADIUM BOX ARCHITECTURE --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl sm:rounded-[40px] bg-gradient-to-b from-[#0f162c] to-[#0b0f1f] border border-white/5 p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden"
        >
          {/* Top Gradient Ribbon Indicator */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-400 via-amber-400 to-blue-500" />
          
          {/* Fine Design Subtle Background Circle Overlays */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/[0.01] rounded-full border border-white/5 pointer-events-none hidden sm:block" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/[0.01] rounded-full border border-white/5 pointer-events-none hidden sm:block" />

          {/* Mini Token Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 mb-6 font-bold">
            <Sparkles size={12} className="animate-pulse text-emerald-400" /> Admissions Open • Academic Cycle 2026-27
          </div>

          {/* Main Title Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Shape Your Child’s Future <br className="hidden sm:inline" />
            As a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">Global Leader</span>
          </h2>

          {/* Subheading Context Paragraph */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed sm:leading-8 font-normal">
            Secure a seat in our upcoming cohort. Applications are evaluated dynamically on a rolling timeline. Give your child access to elite global metrics today.
          </p>

          {/* --- ACTION HUBS --- */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            {/* Primary Action Trigger */}
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:brightness-110 active:scale-[0.98] text-slate-950 font-black text-sm sm:text-base rounded-xl transition-all duration-200 shadow-xl shadow-emerald-500/10 tracking-wide group whitespace-nowrap">
              Apply For Enrollment 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            {/* Secondary Discovery Option */}
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 active:scale-[0.98] text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-200 whitespace-nowrap">
              <Calendar size={16} className="text-slate-400" /> Book Campus Tour
            </button>
          </div>

          {/* --- TRUST FOOTER METRICS GRID --- */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <GraduationCap size={16} className="text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold">Scholarship Pools</span>
              </div>
              <p className="text-lg font-extrabold text-white">Merit Tiers Available</p>
            </div>

            <div className="space-y-1 border-t border-white/5 pt-4 sm:border-t-0 sm:pt-0 sm:border-x sm:border-white/5">
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <Calendar size={15} className="text-amber-400" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold">Priority Deadline</span>
              </div>
              <p className="text-lg font-extrabold text-white">Rolling Cohorts</p>
            </div>

            <div className="space-y-1 border-t border-white/5 pt-4 sm:border-t-0 sm:pt-0">
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <Sparkles size={14} className="text-blue-400" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold">Class Capacities</span>
              </div>
              <p className="text-lg font-extrabold text-white">Limited to 22 Students</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}