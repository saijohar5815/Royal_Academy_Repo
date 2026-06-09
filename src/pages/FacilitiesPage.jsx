import React, { useState } from "react";
import {
  Cpu, BookOpen,   Trophy,   Wifi,   Sparkles,
  Activity,   ArrowRight,   Zap,   BrainCircuit,
  Orbit,     Database,   Shield,   Rocket,   Building2,
  Microscope,   GraduationCap,    Globe,   Server,
  Gauge
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";


export default function FacilitiesPage() {
  const [activeNode, setActiveNode] = useState("labs");
  const [activeNode1, setActiveNode1] = useState("robotics");
  const [showDetails, setShowDetails] = useState(false);
 const facilities = {
  robotics: {
    title: "AI Robotics Foundry",
    stats: "1.2 PFLOPS",
    color: "from-pink-500 to-fuchsia-500",
    icon: <Cpu size={24} />,
    desc:
      "Advanced AI training clusters, autonomous robotics labs, and deep-learning simulation environments.",

    details: {
      overview:
        "The AI Robotics Foundry serves as the central innovation hub for robotics engineering, machine learning, and autonomous systems development.",

      features: [
        "Autonomous Drone Testing Arena",
        "Humanoid Robotics Laboratory",
        "Industrial Automation Research",
        "Machine Vision Systems",
        "AI Simulation Environment",
      ],

      equipment: [
        "NVIDIA DGX AI Cluster",
        "Boston Dynamics Test Units",
        "Industrial Robotic Arms",
        "Motion Capture Systems",
      ],

      capacity: "500 Researchers",
      availability: "24/7",
    },
  },

  library: {
    title: "Quantum Library",
    stats: "4.2M Archives",
    color: "from-cyan-500 to-indigo-500",
    icon: <BookOpen size={24} />,
    desc:
      "Immersive digital knowledge repository with AI-assisted research systems.",

    details: {
      overview:
        "A next-generation library offering AI-powered knowledge discovery and collaborative research spaces.",

      features: [
        "Digital Research Pods",
        "AR Knowledge Visualization",
        "Collaborative Study Rooms",
        "AI Research Assistant",
      ],

      equipment: [
        "Quantum Search Engine",
        "Digital Archive Servers",
        "VR Learning Rooms",
      ],

      capacity: "2000 Students",
      availability: "24/7",
    },
  },

  sports: {
    title: "Apex Arena",
    stats: "98.4% Efficiency",
    color: "from-fuchsia-500 to-purple-500",
    icon: <Trophy size={24} />,
    desc:
      "Smart sports complex with biometric tracking and performance analytics.",

    details: {
      overview:
        "A high-tech sports arena with AI-driven athlete monitoring and wellness systems.",

      features: [
        "Olympic Swimming Pool",
        "Indoor Multi-Sport Courts",
        "AI Fitness Analytics",
        "Recovery Center",
      ],

      equipment: [
        "Motion Tracking Sensors",
        "Smart Treadmills",
        "Recovery Pods",
      ],

      capacity: "3000 Visitors",
      availability: "6 AM - 11 PM",
    },
  },

  campus: {
    title: "Smart Mesh Campus",
    stats: "1400+ Nodes",
    color: "from-purple-500 to-violet-500",
    icon: <Wifi size={24} />,
    desc:
      "Connected campus infrastructure powered by AI and IoT systems.",

    details: {
      overview:
        "An intelligent campus ecosystem providing seamless connectivity and automation.",

      features: [
        "Smart Classrooms",
        "AI Security Monitoring",
        "IoT Infrastructure",
        "Digital Twin Campus",
      ],

      equipment: [
        "Edge AI Nodes",
        "Smart Sensors",
        "Campus Analytics Center",
      ],

      capacity: "Entire Campus",
      availability: "Always Active",
    },
  },
};

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-gradient-to-br from-[#080214] via-[#12051f] to-[#04010a]">
      <Navbar />
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <AuroraBackground />

      <ParticleField />

      <CyberGrid />
      <div
  className="absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage:
      "radial-gradient(circle at center, rgba(255,255,255,.5) 1px, transparent 1px)",
    backgroundSize: "4px 4px",
  }}
/>

      {/* ===================================================== */}
      {/* MAIN CONTENT */}
      {/* ===================================================== */}

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TopStatusBar />

        <HeroSection />

        {/* ================================================ */}
        {/* FACILITY SELECTOR */}
        {/* ================================================ */}
<section id="facilities-section" className="mt-12">
<ParticleField />
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
    {Object.entries(facilities).map(([key, facility]) => (
      <motion.button
        key={key}
        whileHover={{
          y: -8,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={() => {
          setActiveNode1(key);
          setShowDetails(false);
        }}
        className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl p-6 text-left transition-all duration-500 ${
          activeNode1 === key
            ? "border-fuchsia-500/50 bg-fuchsia-500/10 shadow-[0_0_40px_rgba(217,70,239,.15)]"
            : "border-white/10 bg-white/[0.03]"
        }`}
      >
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-r ${facility.color}`}
        />
<ParticleField />
        <div className="relative z-10">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${facility.color} flex items-center justify-center`}
          >
            {facility.icon}
          </div>

          <h3 className="mt-6 text-lg font-bold text-white">
            {facility.title}
          </h3>

          <p className="text-fuchsia-300 mt-2 text-sm">
            {facility.stats}
          </p>
        </div>
      </motion.button>
    ))}

  </div>
</section>

  {/* ================================================ */}
        {/* FACILITY DETAILS PANEL */}
 {/* ================================================ */}

<motion.div
  key={activeNode1}
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.4,
  }}
  className="mt-8 rounded-3xl border border-fuchsia-500/20 bg-black/30 backdrop-blur-2xl overflow-hidden"
>
  <div className="grid grid-cols-1 xl:grid-cols-2">
<ParticleField />
    {/* LEFT SIDE */}

    <div className="p-6 md:p-8 xl:p-10">

      <div
        className={`inline-flex px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r ${facilities[activeNode1].color}`}
      >
        FACILITY NODE
      </div>

      <h2 className="mt-5 text-3xl md:text-4xl xl:text-5xl font-black text-white">
        {facilities[activeNode1].title}
      </h2>

      <p className="mt-5 text-slate-300 leading-relaxed text-base md:text-lg">
        {facilities[activeNode1].desc}
      </p>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-purple-600 flex items-center gap-2 font-semibold hover:scale-105 transition-all"
      >
        {showDetails ? "Hide Details" : "Explore Node"}

        <ArrowRight size={16} />
      </button>

    </div>

    {/* RIGHT SIDE */}

    <div className="relative min-h-[250px] md:min-h-[320px] flex items-center justify-center overflow-hidden">
<ParticleField />
      <div className="absolute w-72 h-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-60 h-60 border border-fuchsia-500/30 rounded-full"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-40 h-40 border border-purple-500/40 rounded-full"
      />

      <BrainCircuit
        size={80}
        className="text-fuchsia-400 z-10"
      />
    </div>

  </div>
</motion.div>
 {/* ================================================ */}
        {/* FACILITY DETAILS PANEL */}
 {/* ================================================ */}
<AnimatePresence>
  {showDetails && (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      className="mt-8 rounded-3xl border border-fuchsia-500/20 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8"
    >
      <ParticleField />
      <h3 className="text-3xl font-black mb-4">
        {facilities[activeNode1].title}
      </h3>

      <p className="text-slate-300 mb-8">
        {facilities[activeNode1].details.overview}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="rounded-2xl border border-white/10 p-5">
          <h4 className="text-fuchsia-400 font-bold mb-4">
            Features
          </h4>

          <ul className="space-y-2">
            {facilities[activeNode1].details.features.map(
              (feature) => (
                <li key={feature}>
                  • {feature}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 p-5">
          <h4 className="text-fuchsia-400 font-bold mb-4">
            Equipment
          </h4>

          <ul className="space-y-2">
            {facilities[activeNode1].details.equipment.map(
              (item) => (
                <li key={item}>
                  • {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 p-5">
          <h4 className="text-fuchsia-400 font-bold mb-4">
            Capacity
          </h4>

          <p>
            {facilities[activeNode1].details.capacity}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 p-5">
          <h4 className="text-fuchsia-400 font-bold mb-4">
            Availability
          </h4>

          <p>
            {facilities[activeNode1].details.availability}
          </p>
        </div>

      </div>
    </motion.div>
  )}
</AnimatePresence>
          <MetricsDashboard />

  <CampusShowcase />

  <SmartFeatures />

  <ComparisonMatrix />
        
      </div>
    </div>
  );
}

/* ======================================================= */
/* HERO */
/* ======================================================= */


function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  const handleViewFacilities = () => {
    const section = document.getElementById("facilities-section");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="mt-10">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative overflow-hidden rounded-[40px] border border-fuchsia-500/20"
      >
        {/* ================================= */}
        {/* BACKGROUND */}
        {/* ================================= */}

        <div className="absolute inset-0 bg-[#080214]" />

        {/* Aurora Layer */}

        <div className="absolute inset-0">
          <div className="absolute top-[-250px] left-[-150px] w-[800px] h-[800px] rounded-full bg-pink-500/25 blur-[180px]" />

          <div className="absolute bottom-[-300px] right-[-150px] w-[900px] h-[900px] rounded-full bg-violet-500/20 blur-[200px]" />

          <motion.div
            animate={{
              x: [-80, 80, -80],
              y: [-40, 50, -40],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[20%] left-[35%] w-[600px] h-[600px] rounded-full bg-fuchsia-500/15 blur-[160px]"
          />
        </div>

        {/* Cyber Grid */}

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,255,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,255,.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Particles */}

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
            }}
            className="absolute rounded-full bg-fuchsia-400"
            style={{
              width: `${4 + Math.random() * 4}px`,
              height: `${4 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* ================================= */}
        {/* CONTENT */}
        {/* ================================= */}

        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            {/* ================================= */}
            {/* LEFT SIDE */}
            {/* ================================= */}

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 backdrop-blur-md text-fuchsia-300 text-xs font-semibold tracking-wider">
                <Sparkles size={14} />
                AI CAMPUS OPERATING SYSTEM
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-none">
                FUTURE OF
                <br />

                <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                  INTELLIGENT
                </span>

                <br />

                EDUCATION
              </h1>

              <p className="max-w-2xl mt-8 text-lg text-slate-300 leading-relaxed">
                Explore advanced laboratories, AI-powered
                research centers, autonomous learning systems,
                smart infrastructure, and next-generation
                innovation hubs designed for the future.
              </p>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  onClick={() => setShowVideo(true)}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-purple-600 font-semibold shadow-[0_0_40px_rgba(217,70,239,.4)] hover:scale-105 transition-all duration-300"
                >
                  Explore Campus
                </button>

                <button
                  onClick={handleViewFacilities}
                  className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.08] transition-all duration-300"
                >
                  View Facilities
                </button>
              </div>

              {/* Stats */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  {
                    value: "12K+",
                    label: "Students",
                  },
                  {
                    value: "1.4K",
                    label: "AI Nodes",
                  },
                  {
                    value: "340+",
                    label: "Projects",
                  },
                  {
                    value: "99.98%",
                    label: "Uptime",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-fuchsia-500/20 bg-white/[0.03] backdrop-blur-md p-4"
                  >
                    <div className="text-2xl font-black text-white">
                      {item.value}
                    </div>

                    <div className="text-sm text-slate-400 mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================================= */}
            {/* RIGHT SIDE MEDIA */}
            {/* ================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="w-full"
            >
              <div className="overflow-hidden rounded-[32px] border border-fuchsia-500/20 bg-black/20 backdrop-blur-xl shadow-[0_0_80px_rgba(217,70,239,.15)]">
                <div className="relative aspect-[16/10] w-full">
                  {!showVideo ? (
                    <>
                      <img
                        src="https://wallpaperaccess.com/full/1912160.jpg"
                        alt="AI Campus"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-fuchsia-500/20 backdrop-blur-md border border-fuchsia-400/40 flex items-center justify-center shadow-[0_0_40px_rgba(217,70,239,.5)]">
                          <div className="w-0 h-0 border-l-[22px] border-l-white border-y-[14px] border-y-transparent ml-2" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source
                        src="videos/facilityvideo.mp4"
                        type="video/mp4"
                      />
                    </video>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Glow */}

        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-fuchsia-500/10 to-transparent" />
      </motion.div>
    </section>
  );
}


/* ======================================================= */
/* STATUS BAR */
/* ======================================================= */

function TopStatusBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-5 py-4">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

        <span className="text-xs uppercase tracking-widest text-emerald-300">
          Campus Systems Online
        </span>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Activity size={15} />
          99.98% Uptime
        </div>

        <div className="flex items-center gap-2">
          <Zap size={15} />
          1400+ Smart Nodes
        </div>

        <div className="flex items-center gap-2">
          <Orbit size={15} />
          Quantum Network Active
        </div>
      </div>
    </div>
  );
}

/* ======================================================= */
/* AURORA */
/* ======================================================= */

function AuroraBackground() {
  return (
    <>
      <div className="absolute -top-[300px] -left-[250px] w-[900px] h-[900px] bg-[#d946ef]/20 rounded-full blur-[220px]" />

<div className="absolute top-[20%] right-[-300px] w-[900px] h-[900px] bg-[#a855f7]/20 rounded-full blur-[220px]" />

<div className="absolute bottom-[-400px] left-[20%] w-[900px] h-[900px] bg-[#ff4df0]/15 rounded-full blur-[240px]" />
      <motion.div
        animate={{
          x: [-150, 150, -150],
          y: [-50, 80, -50]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-[180px]"
      />
    </>
  );
}

/* ======================================================= */
/* GRID */
/* ======================================================= */

function CyberGrid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `
        linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
      `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

/* ======================================================= */
/* PARTICLES */
/* ======================================================= */

function ParticleField() {
  const particles = Array.from({ length: 80 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            background:
              i % 2 === 0
                ? "#ff4df0"
                : "#a855f7",
          }}
          animate={{
            y: [
              window.innerHeight + 100,
              -300
            ],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.4, 1]
          }}
          transition={{
            duration: 12 + Math.random() * 12,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
        />
      ))}
    </div>
  );
}

function MetricsDashboard() {
  const metrics = [
    {
      title: "Students Connected",
      value: "12,842",
      icon: <GraduationCap size={22} />
    },
    {
      title: "AI Compute Nodes",
      value: "1,420",
      icon: <Cpu size={22} />
    },
    {
      title: "Research Projects",
      value: "348",
      icon: <Microscope size={22} />
    },
    {
      title: "Global Partnerships",
      value: "76",
      icon: <Globe size={22} />
    }
  ];

  return (
    <section className="mt-16">
      <ParticleField />
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />

        <h2 className="text-3xl font-black">
          SYSTEM METRICS
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {metrics.map((metric) => (
          <motion.div
            whileHover={{
              y: -8,
              rotateX: 5
            }}
            key={metric.title}
            className="group relative overflow-hidden rounded-3xl border border-fuchsia-500/20 bg-white/[0.03] backdrop-blur-xl p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-500 flex items-center justify-center">
                {metric.icon}
              </div>

              <div className="mt-5 text-3xl font-black">
                {metric.value}
              </div>

              <div className="mt-2 text-slate-400 text-sm">
                {metric.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CampusShowcase() {
  
  const showcase = [
    {
      title: "AI Research Hub",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      title: "Innovation Center",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    },
    {
      title: "Cyber Library",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
    },
    {
      title: "Smart Arena",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0"
    }
  ];

  return (
    <section className="mt-20">
      <ParticleField />
      <h2 className="text-3xl font-black mb-8">
        CAMPUS SHOWCASE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {showcase.map((item) => (
          <motion.div
            whileHover={{
              y: -10
            }}
            key={item.title}
            className="group relative rounded-3xl overflow-hidden border border-fuchsia-500/20"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <h3 className="font-bold text-lg">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SmartFeatures() {
  const features = [
    {
      icon: <Database />,
      title: "Quantum Archives",
      desc: "AI-indexed academic knowledge."
    },
    {
      icon: <Shield />,
      title: "Cyber Security Core",
      desc: "Zero-trust infrastructure."
    },
    {
      icon: <Server />,
      title: "Cloud Fabric",
      desc: "High-performance computing."
    },
    {
      icon: <Rocket />,
      title: "Startup Incubator",
      desc: "Innovation acceleration."
    },
    {
      icon: <Building2 />,
      title: "Smart Infrastructure",
      desc: "IoT-connected campus."
    },
    {
      icon: <Gauge />,
      title: "Live Analytics",
      desc: "Real-time operational telemetry."
    }
  ];

  return (
    <section className="mt-20">
      <ParticleField />
      <h2 className="text-3xl font-black mb-8">
        SMART CAMPUS FEATURES
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature) => (
          <motion.div
            whileHover={{
              scale: 1.03
            }}
            key={feature.title}
            className="rounded-3xl border border-fuchsia-500/20 bg-white/[0.03] backdrop-blur-xl p-6"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-500 flex items-center justify-center">
              {feature.icon}
            </div>

            <h3 className="mt-5 text-xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-3 text-slate-400 text-sm">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ComparisonMatrix() {
  return (
    <section className="mt-20 mb-20">
      <ParticleField />
      <h2 className="text-3xl font-black mb-8">
        FACILITY MATRIX
      </h2>

      <div className="overflow-hidden rounded-3xl border border-fuchsia-500/20 bg-white/[0.03] backdrop-blur-xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-fuchsia-500/20">
              <th className="text-left p-5">
                Facility
              </th>

              <th className="text-left p-5">
                Capacity
              </th>

              <th className="text-left p-5">
                AI Level
              </th>

              <th className="text-left p-5">
                Availability
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-white/5">
              <td className="p-5">
                Quantum Library
              </td>
              <td className="p-5">4.2M Records</td>
              <td className="p-5 text-fuchsia-400">
                Ultra
              </td>
              <td className="p-5 text-emerald-400">
                24/7
              </td>
            </tr>

            <tr className="border-b border-white/5">
              <td className="p-5">
                Robotics Lab
              </td>
              <td className="p-5">32 Units</td>
              <td className="p-5 text-fuchsia-400">
                Extreme
              </td>
              <td className="p-5 text-amber-400">
                Scheduled
              </td>
            </tr>

            <tr className="border-b border-white/5">
              <td className="p-5">
                Apex Arena
              </td>
              <td className="p-5">5000+</td>
              <td className="p-5 text-purple-400">
                Advanced
              </td>
              <td className="p-5 text-emerald-400">
                Open
              </td>
            </tr>

            <tr>
              <td className="p-5">
                Smart Campus
              </td>
              <td className="p-5">Unlimited</td>
              <td className="p-5 text-fuchsia-400">
                Autonomous
              </td>
              <td className="p-5 text-emerald-400">
                Always Active
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
