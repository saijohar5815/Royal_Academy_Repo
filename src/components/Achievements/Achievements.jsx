import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  GraduationCap,
  Award,
  Globe,
} from "lucide-react";

const achievements = [
  {
    icon: Users,
    number: "5000+",
    title: "Students Enrolled",
    color: "from-blue-500 to-indigo-600 text-white shadow-blue-500/20",
  },
  {
    icon: Award,
    number: "150+",
    title: "National & Global Awards",
    color: "from-amber-500 to-orange-600 text-white shadow-amber-500/20",
  },
  {
    icon: GraduationCap,
    number: "250+",
    title: "Expert Faculty Members",
    color: "from-emerald-500 to-teal-600 text-white shadow-emerald-500/20",
  },
  {
    icon: Globe,
    number: "20+",
    title: "Years of Academic Excellence",
    color: "from-rose-500 to-pink-600 text-white shadow-rose-500/20",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-16 sm:py-24 md:py-32 bg-slate-50 border-t border-slate-200/60 overflow-hidden"
    >
      {/* 1. Soft Warm & Cool Ambient Glow Mesh */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-200/20 blur-[80px] sm:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-amber-100/40 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none" />
      
      {/* 2. Abstract Geometric Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-50 sm:opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-amber-700 bg-amber-500/10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-amber-500/20 uppercase inline-block">
            Wall of Excellence
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mt-4 sm:mt-6">
            Excellence Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block sm:inline">
              {" "}Innovation
            </span>
          </h2>

          <p className="text-slate-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Celebrating academic brilliance, leadership, innovation, and a legacy of shaping future leaders.
          </p>
        </motion.div>

        {/* Layout Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-center">

          {/* Left Block (Stats 1 & 2) */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-none">
            {achievements.slice(0, 2).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, md: { x: -30, y: 0 } }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 border border-white shadow-[0_8px_25px_rgba(148,163,184,0.1)] flex items-center sm:items-start gap-4 sm:gap-5 relative group"
                >
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {item.number}
                    </h3>
                    <p className="text-slate-500 font-semibold text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Trophy Podium */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center justify-center py-4 sm:py-6 lg:py-0 order-1 md:col-span-2 lg:col-span-1 lg:order-none"
          >
            <div className="relative group">
              {/* Outer Amber Sunburst Glow */}
              <div className="absolute inset-0 rounded-full bg-amber-500/15 blur-xl group-hover:bg-amber-500/25 transition-all duration-500" />
              
              {/* Center Badge Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-white border-2 border-amber-500/30 p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-[0_15px_40px_rgba(245,158,11,0.1)]">
                {/* Decorative corner trims */}
                <div className="absolute top-5 left-5 sm:top-6 sm:left-6 w-3 h-3 border-t-2 border-l-2 border-amber-500/30" />
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-3 h-3 border-t-2 border-r-2 border-amber-500/30" />
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 w-3 h-3 border-b-2 border-l-2 border-amber-500/30" />
                <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-3 h-3 border-b-2 border-r-2 border-amber-500/30" />

                <Trophy
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-amber-500 drop-shadow-[0_4px_8px_rgba(245,158,11,0.25)]"
                />

                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-800 tracking-wider uppercase mt-3 sm:mt-4">
                  Royal Academy
                </h2>

                <div className="w-8 sm:w-10 h-[2px] bg-amber-500/50 my-1.5 sm:my-2" />

                <p className="text-amber-600 tracking-[0.2em] sm:tracking-[0.25em] font-bold uppercase text-[10px] sm:text-xs">
                  Leap To Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Block (Stats 3 & 4) */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-3 md:col-span-2 lg:col-span-1 lg:order-none">
            {achievements.slice(2).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, md: { x: 30, y: 0 } }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 border border-white shadow-[0_8px_25px_rgba(148,163,184,0.1)] flex items-center sm:items-start gap-4 sm:gap-5 relative group"
                >
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {item.number}
                    </h3>
                    <p className="text-slate-500 font-semibold text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-30px" }}
          className="mt-12 sm:mt-16 md:mt-24 relative rounded-2xl p-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent shadow-md sm:shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-slate-100 via-white to-slate-100 px-4 py-8 sm:px-8 sm:py-10 rounded-2xl text-center border border-slate-200/60">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 px-2">
              ⚡ 98% University Placements ⚡
            </h2>

            <p className="mt-2 sm:mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-1 sm:px-4">
              Our students excel in international environments, driving impactful changes in leadership, pioneering global research, and discovering paths across world-class institutions.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Achievements;