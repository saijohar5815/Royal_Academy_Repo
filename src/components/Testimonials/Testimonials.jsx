import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The global focus and cutting-edge STEM laboratories completely transformed how our daughter views problem-solving. She isn't just memorizing facts; she is actively inventing solutions.",
    author: "Dr. Aris Thorne",
    role: "Parent of Grade X Student",
    metric: "MIT '30 Placement",
    featured: true,
    accent: "from-amber-600 to-yellow-500",
    bg: "bg-white border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(120,113,108,0.08)]"
  },
  {
    id: 2,
    quote: "Attending Royal Academy gave me the international exposure and rigorous academic framework needed to easily transition into Ivy League expectations.",
    author: "Sarah Jenkins",
    role: "Alumna, Class of 2024",
    metric: "Oxford Scholar",
    featured: false,
    accent: "from-yellow-600 to-amber-500",
    bg: "bg-white border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(120,113,108,0.08)]"
  },
  {
    id: 3,
    quote: "The teachers don't just instruct—they deeply mentor. The leadership initiatives here forced me out of my comfort zone in the best way possible.",
    author: "Michaela Vance",
    role: "Head Prefect / Senior",
    metric: "Student Leader",
    featured: false,
    accent: "from-amber-700 to-yellow-600",
    bg: "bg-white border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(120,113,108,0.08)]"
  },
  {
    id: 4,
    quote: "As an expat family, finding a school that offers true global diversity alongside world-class athletic facilities was paramount. Royal Academy hit every single box seamlessly.",
    author: "The Marcus Family",
    role: "International Parents",
    metric: "Expat Network",
    featured: true,
    accent: "from-yellow-700 to-amber-600",
    bg: "bg-white border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(120,113,108,0.08)]"
  }
];

export default function Testimonials() {
  return (
    // Unique Warm Luxury Cream Canvas for a clear section break
    <section id="testimonials" className="py-16 sm:py-24 bg-[#fbfbfa] text-stone-800 relative overflow-hidden border-t border-stone-200">
      
      {/* --- BACKGROUND ACCENTS --- */}
      {/* Subtle Classical Architectural Dot Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#78716c 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Smooth Warm Ambient Radial Light Halos */}
      <div className="absolute top-0 right-[-10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-amber-200/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-yellow-200/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- HEADER INFRASTRUCTURE --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-20 border-b border-stone-200/80 pb-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-800 mb-4 font-bold">
              <Star size={12} className="fill-amber-600 text-amber-600" /> Global Voices & Impact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-none">
              Stories of Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600">Transformation</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-4 leading-relaxed font-normal">
              Hear firsthand from the global parents, ambitious students, and distinguished alumni driving excellence within our international ecosystem.
            </p>
          </div>
          
          {/* Elegant Luxury Trust Card */}
          <div className="flex items-center gap-4 bg-white border border-stone-200 p-4 rounded-2xl self-start lg:self-auto shadow-[0_4px_20px_-4px_rgba(120,113,108,0.06)]">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg shadow-sm">
              4.9
            </div>
            <div>
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-500" />)}
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-stone-500 mt-1 font-semibold">Verified Parent Reviews</p>
            </div>
          </div>
        </div>

        {/* --- ASYMMETRIC BENTO GRID MATRIX --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-40px" }}
              className={`p-6 sm:p-8 rounded-3xl ${item.bg} border relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_10px_30px_-4px_rgba(217,119,6,0.1)] ${
                item.featured ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* Top Accent Gradient Border Strip */}
              <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${item.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

              <div>
                {/* Meta Header Inside Card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 sm:p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-stone-500 group-hover:bg-amber-50 group-hover:text-amber-700 transition-colors duration-300">
                    <Quote size={18} className="transform rotate-180 opacity-80" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200 text-stone-600 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors duration-200 uppercase">
                    {item.metric}
                  </span>
                </div>

                {/* Main Quote Copy */}
                <p className={`text-stone-800 tracking-tight leading-relaxed font-medium mb-8 antialiased ${
                  item.featured ? "text-base sm:text-lg md:text-xl" : "text-sm sm:text-base"
                }`}>
                  "{item.quote}"
                </p>
              </div>

              {/* Author Information Panel */}
              <div className="pt-5 border-t border-stone-100 flex items-center justify-between gap-4 mt-auto">
                <div>
                  <h4 className="text-stone-900 font-extrabold text-sm sm:text-base tracking-tight group-hover:text-amber-700 transition-colors duration-200">
                    {item.author}
                  </h4>
                  <p className="text-stone-500 text-xs mt-0.5 font-normal">
                    {item.role}
                  </p>
                </div>
                
                <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hidden sm:flex">
                  <ArrowUpRight size={14} className="text-stone-500 group-hover:text-stone-800" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}