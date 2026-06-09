import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Microscope,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    title: "Primary School",
    subtitle: "Grades I - V",
    description:
      "Building strong foundations through creativity, exploration, and joyful learning.",
    image:
      "https://thumbs.dreamstime.com/b/uk-school-classroom-children-working-33297853.jpg",
    icon: GraduationCap,
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Middle School",
    subtitle: "Grades VI - VIII",
    description:
      "Encouraging analytical thinking, innovation, collaboration, and leadership skills.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29WMyp96EoqS5nksF2Oq87aHv_G1aFPd6pg&s",
    icon: BookOpen,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Senior School",
    subtitle: "Grades IX - XII",
    description:
      "Preparing future leaders through advanced academics, research, and global exposure.",
    image:
      "https://admin.ssrvm.org/uploads/innovative_learning_spaces_fd5f1aab87.png",
    icon: Microscope,
    color: "from-red-700 to-red-900",
  },
];

function Programs() {
  return (
    <section
      id="academics"
      className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* --- HERO HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h5 className="uppercase tracking-[4px] sm:tracking-[6px] text-sm text-yellow-500 font-bold">
            Academics
          </h5>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 sm:mt-5 text-slate-900 leading-tight">
            Excellence Across{" "}
            <span className="text-yellow-500 block sm:inline">
              Every Stage
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8">
            Royal Academy nurtures curiosity, creativity, innovation, and leadership 
            through a future-ready curriculum inspired by the world's finest institutions.
          </p>
        </motion.div>

        {/* --- GRID PROGRAM CARDS ARCHITECTURE --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: window.innerWidth > 768 ? index * 0.15 : 0,
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={window.innerWidth > 1024 ? { y: -12 } : {}}
                className={`group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl duration-300 flex flex-col h-full ${
                  index === 2 && "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0"
                }`}
              >
                {/* Visual Image Banner Container */}
                <div className="relative overflow-hidden h-56 sm:h-64 lg:h-72 w-full flex-shrink-0">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-35 sm:opacity-40`}
                  ></div>
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                    <Icon
                      size={28}
                      className="text-white sm:w-[35px] sm:h-[35px]"
                    />
                  </div>
                </div>

                {/* Text Context Area */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-xs sm:text-sm text-yellow-600 font-bold uppercase tracking-widest">
                      {program.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-900 tracking-tight">
                      {program.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base leading-relaxed sm:leading-8">
                      {program.description}
                    </p>
                  </div>

                  <div className="pt-6 sm:pt-8 mt-auto">
                    <button className="flex items-center gap-2 sm:gap-3 text-red-900 font-extrabold text-sm sm:text-base transition-all group-hover:gap-4 sm:group-hover:gap-5 duration-300">
                      Explore Program
                      <ArrowRight size={18} className="sm:w-[20px] sm:h-[20px]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- RESPONSIVE BOTTOM MARKETING BANNER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 sm:mt-20 lg:mt-24 rounded-3xl sm:rounded-[40px] bg-gradient-to-r from-[#072B61] via-[#0d4ba0] to-[#072B61] p-6 sm:p-10 lg:p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Learning Beyond Classrooms
            </h2>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed sm:leading-8 font-normal">
              From AI labs and robotics to global collaborations, entrepreneurship programs, 
              arts, sports, and leadership initiatives—our students experience education 
              that goes far beyond textbooks.
            </p>

            <button className="mt-6 sm:mt-8 w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] text-slate-950 font-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl duration-200 shadow-lg tracking-wide text-sm sm:text-base">
              View Curriculum
            </button>
          </div>
          
          {/* Subtle geometric overlay for extra premium design feel */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/[0.05] rounded-full blur-3xl pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}

export default Programs;