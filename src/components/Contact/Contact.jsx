import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gradeLevel: "Primary School",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted safely:", formData);
  };

  return (
    // Clean White Luxury Canvas — Crisp, bright, and professional
    <section id="contact" className="py-16 sm:py-24 bg-white text-stone-900 relative overflow-hidden border-t border-stone-100">
      
      {/* Subtle background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50/50 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-100/50 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: EDITORIAL ENTRY */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 border border-amber-200 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-900 mb-4 font-bold">
                ● Admissions Core 2026
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-950 tracking-tight leading-tight">
                Begin Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">Royal Journey</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-4 leading-relaxed font-normal max-w-md">
                Have questions regarding curricula, enrollment timelines, or scheduling physical campus tours? Connect directly with our global admissions council.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Campus Location", info: "100 Royal Academy Blvd, Knowledge District" },
                { icon: Phone, title: "Admissions Desk", info: "+1 (234) 567-890" },
                { icon: Mail, title: "Digital Registry", info: "admissions@royalacademy.edu" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors duration-300">
                  <div className="p-3 bg-white rounded-xl text-amber-700 shadow-sm flex-shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold">{item.title}</h4>
                    <p className="text-sm text-stone-800 mt-0.5 font-medium">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: FORM CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 w-full bg-white border border-stone-200 p-6 sm:p-8 md:p-10 rounded-[32px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-500 to-orange-600" />

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2 font-bold">Parent / Guardian Name</label>
                <input type="text" required placeholder="Alexander Mercer" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2 font-bold">Email Address</label>
                  <input type="email" required placeholder="parent@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2 font-bold">Contact Number</label>
                  <input type="tel" required placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2 font-bold">Target Academic Program</label>
                <select value={formData.gradeLevel} onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all appearance-none cursor-pointer">
                  <option value="Primary School">Primary School (Grades I - V)</option>
                  <option value="Middle School">Middle School (Grades VI - VIII)</option>
                  <option value="Senior School">Senior School (Grades IX - XII)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2 font-bold">Inquiry Message</label>
                <textarea rows={4} required placeholder="Tell us about your child's learning style or academic goals..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all resize-none" />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-stone-500 text-[11px] font-mono">
                  <ShieldCheck size={14} className="text-amber-600" /> Secure Admissions Handling
                </div>
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-sm rounded-xl transition-all duration-200 shadow-lg whitespace-nowrap">
                  Submit Inquiry File <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}