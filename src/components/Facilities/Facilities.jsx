import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  BookOpen, 
  Cpu, 
  Trophy, 
  Tv 
} from "lucide-react";

const facilities = [
  {
    title: "Modern Library",
    subtitle: "Knowledge Beyond Books",
    icon: BookOpen,
    description:
      "A world-class digital and physical library designed to inspire research, creativity, and lifelong learning.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200",
    features: [
      "50,000+ Books",
      "Digital Library",
      "Research Zone",
      "Silent Reading Hall",
    ],
  },
  {
    title: "AI & Robotics Lab",
    subtitle: "Innovation Starts Here",
    icon: Cpu,
    description:
      "Students explore Artificial Intelligence, Robotics, Coding, and Future Technologies through hands-on learning.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    features: [
      "AI Learning",
      "Robotics",
      "Coding Studio",
      "Innovation Center",
    ],
  },
  {
    title: "Sports Complex",
    subtitle: "Building Champions",
    icon: Trophy,
    description:
      "State-of-the-art indoor and outdoor facilities encouraging leadership, teamwork, and physical excellence.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200",
    features: [
      "Olympic Track",
      "Indoor Stadium",
      "Swimming Pool",
      "Fitness Center",
    ],
  },
  {
    title: "Smart Campus",
    subtitle: "Technology Meets Education",
    icon: Tv,
    description:
      "An intelligent campus powered by smart classrooms, digital attendance, modern security, and innovation.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
    features: [
      "Smart Classrooms",
      "Digital Campus",
      "24/7 Security",
      "Wi-Fi Enabled",
    ],
  },
];

function Facilities() {
  return (
    <section
      id="facilities"
      className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* --- HEADING SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="uppercase tracking-[4px] sm:tracking-[6px] text-amber-500 font-bold text-xs sm:text-sm block">
            Our Facilities
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-3 sm:mt-4 tracking-tight text-slate-900">
            Experience 
            <span className="text-blue-900 block sm:inline"> World-Class Learning</span>
          </h2>

          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Every space at Royal Academy is meticulously crafted to inspire curiosity, high-tech innovation, creativity, and physical excellence.
          </p>
        </motion.div>

        {/* --- FACILITIES ITERATION --- */}
        <div className="space-y-20 sm:space-y-28 mb-20 sm:mb-28">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center"
              >
                {/* Image Container */}
                <div
                  className={`col-span-1 lg:col-span-6 overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl w-full aspect-[4/3] sm:aspect-video lg:h-[480px] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transform hover:scale-105 duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Content Panel */}
                <div
                  className={`col-span-1 lg:col-span-6 w-full ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-lg shadow-slate-100/80">
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-amber-500/10 rounded-xl text-amber-600">
                        <IconComponent size={20} />
                      </div>
                      <span className="uppercase text-amber-500 font-bold tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm">
                        {facility.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-5 tracking-tight">
                      {facility.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                      {facility.description}
                    </p>

                    {/* Features Matrix Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      {facility.features.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-slate-50/50 border border-slate-100/60 rounded-xl p-2.5 sm:p-3"
                        >
                          <CheckCircle
                            size={18}
                            className="text-emerald-600 flex-shrink-0"
                          />
                          <span className="text-slate-700 text-xs sm:text-sm font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Button */}
                    <button className="mt-8 sm:mt-10 w-full sm:w-auto bg-blue-900 hover:bg-blue-950 text-white font-semibold text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-blue-900/10 active:scale-[0.98]">
                      Explore {facility.title}
                      <ArrowRight size={18} className="transform group-hover:translate-x-1 duration-200" />
                    </button>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- PREMIUM CALL TO ACTION BLOCK --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 rounded-2xl sm:rounded-[40px] p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Subtle design accents */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Experience Royal Academy Firsthand
            </h2>

            <p className="mt-4 sm:mt-6 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Visit our dynamic campus spaces and discover how our advanced, world-class physical ecosystem builds future global innovators, developers, and leaders.
            </p>

            <button className="mt-8 sm:mt-10 w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-xl shadow-amber-400/10 active:scale-[0.98]">
              Schedule a Campus Visit
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Facilities;