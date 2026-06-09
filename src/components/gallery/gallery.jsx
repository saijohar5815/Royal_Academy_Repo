import React from "react";
import { motion } from "framer-motion";
import { Image, Maximize2, Compass } from "lucide-react";

function Gallery() {
  const images = [
    "https://wallpaperaccess.com/full/1883998.jpg",
    "https://hls.harvard.edu/wp-content/uploads/2022/06/Austin-West-Classroom-Facing-West-e1438876136569-1200x789-1.jpeg",
    "https://images.squarespace-cdn.com/content/v1/56d0a7e2b09f95cc0f3165de/1674489590485-E1PHUGROK6WAP8IR19IB/002.jpg",
    "https://images.adsttc.com/media/images/5eb3/f21e/b357/6579/8b00/02bf/newsletter/1348_View_02_Int_01.jpg?1588851220",
    "https://d3rds0a9qm8vc5.cloudfront.net/s3-grok-cloodon-com/compressed_Artboard_3_copy_3005x_20.1763383625676.png",
    "https://imgproxy.divecdn.com/rSvcSu6v3XEe-5v1olboFS7Ax8diFgjjlo-MCX8JPDo/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0yMTg3MTA1NTUyLmpwZw==.webp",
  ];

  // Soft fade configuration preventing mobile site horizontal scrollbar breaks
  const faderVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: customDelay, ease: "easeOut" }
    })
  };

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- SECTION HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold tracking-[3px] sm:tracking-[5px] text-blue-900 uppercase mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" /> VISUAL JOURNAL
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Experience <span className="text-blue-900">Royal Academy</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Discover our vibrant campus, innovative laboratories, cultural celebrations, and inspiring learning landscapes designed to empower the next generation.
          </p>
        </motion.div>

        {/* --- HIGH PERFORMANCE BENTO GRID MATRIX --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-[220px] sm:auto-rows-[260px]">
          
          {/* Box 1: Vertical Tall Standout Image */}
          <motion.div
            variants={faderVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="sm:row-span-2 group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100"
          >
            <img
              src={images[0]}
              alt="Campus Life Overview"
              className="w-full h-full object-cover transform group-hover:scale-105 duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />
          </motion.div>

          {/* Box 2: Standard Aspect Image */}
          <motion.div
            variants={faderVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100"
          >
            <img
              src={images[1]}
              alt="Advanced Lecture Theater"
              className="w-full h-full object-cover transform group-hover:scale-105 duration-700 ease-out"
              loading="lazy"
            />
          </motion.div>

          {/* Box 3: Standard Aspect Image */}
          <motion.div
            variants={faderVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100"
          >
            <img
              src={images[2]}
              alt="Research Commons"
              className="w-full h-full object-cover transform group-hover:scale-105 duration-700 ease-out"
              loading="lazy"
            />
          </motion.div>

          {/* Box 4: Elegant Content Anchor Panel (Integrated into the Bento Matrix seamlessly) */}
          <motion.div
            variants={faderVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="col-span-1 sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-center text-left shadow-xl relative overflow-hidden group border border-blue-900/40"
          >
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors duration-500" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                <Image size={16} />
              </div>
              <h4 className="text-amber-400 font-mono text-[11px] font-bold tracking-widest uppercase">Ecosystem Spotlight</h4>
            </div>
            <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
              Where Spaces Foster Brilliance
            </h3>
            <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
              Every facility, common zone, and architectural curve across our academy functions with intent—serving as a collaborative arena built to challenge and expand young minds.
            </p>
          </motion.div>

          {/* Box 5: Wide Horizontal Block */}
          <motion.div
            variants={faderVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="col-span-1 sm:col-span-2 group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100"
          >
            <img
              src={images[3]}
              alt="Design Thinking Space"
              className="w-full h-full object-cover transform group-hover:scale-105 duration-700 ease-out"
              loading="lazy"
            />
          </motion.div>

          {/* Box 6: Standard Image Block */}
          <motion.div
            variants={faderVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100"
          >
            <img
              src={images[4]}
              alt="Creative Arts Center"
              className="w-full h-full object-cover transform group-hover:scale-105 duration-700 ease-out"
              loading="lazy"
            />
          </motion.div>

          {/* Box 7: Full Width Block on Tablet/Mobile, spans cleanly on desktop */}
          <motion.div
            variants={faderVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="col-span-1 sm:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100"
          >
            <div className="absolute top-4 right-4 z-20 bg-slate-900/60 backdrop-blur-md p-2 rounded-lg border border-slate-700/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={14} />
            </div>
            <img
              src={images[5]}
              alt="Athletics Complex & Fields"
              className="w-full h-full object-cover transform group-hover:scale-105 duration-700 ease-out"
              loading="lazy"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Gallery;