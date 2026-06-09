import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Images,
  Play,
  Cpu,
  Trophy,
  Wifi,
  BookOpen,
  Layers,
  X,
  Maximize2
} from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
const galleryItems = [
  {
    id: 1,
    title: "AI Robotics Lab",
    category: "Research",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    aspect: "md:col-span-2 aspect-video md:aspect-auto md:h-full"
  },
  {
    id: 2,
    title: "Smart Campus Hub",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    aspect: "aspect-square"
  },
  {
    id: 3,
    title: "Quantum Library Vault",
    category: "Library",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    aspect: "aspect-[3/4] md:row-span-2 md:h-full"
  },
  {
    id: 4,
    title: "Championship Stadium",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    aspect: "aspect-video"
  },
  {
    id: 5,
    title: "Bio-Tech Research Wing",
    category: "Research",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    aspect: "md:col-span-2 aspect-video"
  },
  {
    id: 6,
    title: "Cyber Summit Arena",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    aspect: "aspect-square"
  },
  {
    id: 7,
    title: "Deep Learning Cluster",
    category: "Research",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    aspect: "aspect-video"
  },
  {
    id: 8,
    title: "Digital Media Commons",
    category: "Library",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    aspect: "aspect-square"
  },
  {
    id: 9,
    title: "Olympic Training Complex",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80",
    aspect: "md:col-span-2 aspect-video"
  },
  {
    id: 10,
    title: "Aerodynamics Test Lab",
    category: "Research",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    aspect: "aspect-square"
  },
  {
    id: 11,
    title: "E-Sports Pavilion",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    aspect: "aspect-video"
  },
  {
    id: 12,
    title: "Innovation Greenhouse",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    aspect: "md:col-span-2 aspect-video"
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans selection:bg-indigo-500/20">
      <Navbar />
      {/* Light Mode Sophisticated Aurora Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[800px] md:w-[1200px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-200/40 to-fuchsia-200/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[600px] md:w-[900px] h-[500px] rounded-full bg-blue-100/50 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 space-y-16 sm:space-y-24">
        
        <GalleryHero />

        <GalleryCategories 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <GalleryGrid 
          activeCategory={activeCategory} 
          setSelectedImage={setSelectedImage} 
        />

        <VideoGallery />
      </div>

      <Lightbox selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </div>
  );
}

function GalleryHero() {
  return (
    <section className="relative text-center max-w-4xl mx-auto pt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 sm:space-y-6"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] sm:text-xs font-bold tracking-widest text-indigo-600 uppercase shadow-sm">
          <Images size={12} className="animate-pulse" />
          Campus Gallery Network
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-none text-slate-900">
          VISUALIZE THE <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
            FUTURE ECOSYSTEM
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed px-2">
          Step into our high-performance AI environments, continuous learning networks, 
          and tech-integrated architectural landmarks.
        </p>
      </motion.div>
    </section>
  );
}

function GalleryCategories({ activeCategory, setActiveCategory }) {
  const categories = [
    { title: "All", icon: <Layers size={16} /> },
    { title: "Research", icon: <Cpu size={16} /> },
    { title: "Library", icon: <BookOpen size={16} /> },
    { title: "Sports", icon: <Trophy size={16} /> },
    { title: "Campus", icon: <Wifi size={16} /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto px-2">
      {categories.map((item) => {
        const isActive = activeCategory === item.title;
        return (
          <button
            key={item.title}
            onClick={() => setActiveCategory(item.title)}
            className={`relative flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 border backdrop-blur-md overflow-hidden select-none ${
              isActive 
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-md shadow-indigo-500/20" 
                : "bg-white text-slate-600 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-sm"
            }`}
          >
            {item.icon}
            <span>{item.title}</span>
            {isActive && (
              <motion.span 
                layoutId="activeGlow" 
                className="absolute inset-0 bg-white/10 blur-sm pointer-events-none" 
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

function GalleryGrid({ activeCategory, setSelectedImage }) {
  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:grid-flow-row-dense">
      <AnimatePresence mode="popLayout">
        {filteredItems.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            key={item.id}
            className={`relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/60 bg-white cursor-pointer w-full shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 ${item.aspect}`}
            onClick={() => setSelectedImage(item.image)}
          >
            <div className="w-full h-full relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {/* Refined gradient overlay: provides deep contrast under text without dulling the rest of the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent transition-all group-hover:from-indigo-950/80 group-hover:via-slate-950/20" />
            </div>

            {/* Light Mode Interactive Action View Icon */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-lg bg-white/90 backdrop-blur-md border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block shadow-sm">
              <Maximize2 size={14} className="text-indigo-600" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 space-y-1.5 z-10 pointer-events-none">
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-white bg-indigo-500/80 backdrop-blur-md px-2 py-0.5 rounded w-fit block">
                {item.category}
              </span>
              <h3 className="font-bold text-base sm:text-lg md:text-xl tracking-tight text-white group-hover:text-indigo-200 transition-colors duration-200 line-clamp-1">
                {item.title}
              </h3>
            </div>

            {/* Subtle card-border accent highlight change on hover */}
            <div className="absolute inset-0 border border-indigo-500/0 group-hover:border-indigo-500/30 rounded-2xl sm:rounded-3xl transition-colors duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function VideoGallery() {
  return (
    <section className="space-y-6 sm:space-y-8">
      <div className="border-b border-slate-200 pb-4 sm:pb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Campus Video Archive
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">Immersive real-world dynamic simulations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {[1, 2].map((video) => (
          <div
            key={video}
            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white aspect-video shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Video Thumbnail"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-85 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-indigo-950/10 transition-colors duration-300" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 group-hover:bg-indigo-600 text-slate-800 group-hover:text-white backdrop-blur-md border border-slate-200/50 group-hover:border-transparent flex items-center justify-center transform scale-100 group-hover:scale-110 transition-all duration-300 shadow-md">
                <Play size={18} className="fill-current ml-0.5 sm:ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Lightbox({ selectedImage, setSelectedImage }) {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10"
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-colors text-white z-50 touch-manipulation"
          >
            <X size={18} />
          </button>

          <motion.img
            initial={{ scale: 0.96, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 15 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            src={selectedImage}
            alt="Expanded display"
            className="max-w-full max-h-[80vh] sm:max-h-[85vh] rounded-xl sm:rounded-2xl object-contain border border-white/10 shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}