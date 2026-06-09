import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu automatically if window scales past the desktop threshold
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Block background body scrolling when mobile navigation panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Achievements", path: "/achievements" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        bg-gradient-to-r
        from-[#06234a]/95
        via-[#18385b]/90
        to-[#4d5b69]/80
        shadow-lg
      "
    >
      {/* --- DESKTOP & TABLET MAIN PANEL CONFIGURATION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* LOGO ENGINE */}
        <Link to="/" className="flex items-center gap-3 z-50 flex-shrink-0">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl border border-yellow-400 flex items-center justify-center bg-[#06234a]/40">
            <GraduationCap className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div>
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-black leading-none tracking-wide">
              ROYALACADEMY
            </h1>
            <p className="text-yellow-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold mt-0.5">
              International School
            </p>
          </div>
        </Link>

        {/* INLINE LINK ARCHITECTURE (HIDDEN ON MOBILE) */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 justify-center px-4">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative text-sm xl:text-base font-semibold tracking-wide py-2 transition duration-300 ${
                    active
                      ? "text-yellow-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span 
                      layoutId="activeIndicator"
                      className="absolute left-0 -bottom-2 w-full h-[2px] bg-yellow-400 rounded-full" 
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* PRIMARY CALL TO ACTION ACTIONS (HIDDEN ON MOBILE) */}
        <div className="hidden lg:block flex-shrink-0">
          <Link
            to="/apply"
            className="
              relative
              inline-block
              bg-white
              text-[#06234a]
              font-extrabold
              text-sm
              px-6
              py-3
              rounded-xl
              border-2
              border-yellow-400
              hover:bg-yellow-400
              hover:text-[#06234a]
              hover:scale-105
              active:scale-[0.98]
              transition-all
              duration-300
              whitespace-nowrap
              shadow-md
            "
          >
            Apply Now
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-yellow-400 animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-yellow-400"></span>
          </Link>
        </div>

        {/* MOBILE INTERACTION INTERFACE TOGGLE */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-yellow-400 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- ADAPTIVE MOBILE DRAWER SLIDEOUT OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full h-[calc(100vh-5rem)] sm:h-[calc(100vh-6rem)] bg-gradient-to-b from-[#18385b] to-[#06234a] border-t border-white/10 z-40 overflow-y-auto lg:hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col justify-between h-full max-w-md mx-auto">
              
              {/* Mobile Link Matrix Stack */}
              <ul className="flex flex-col gap-4">
                {navItems.map((item, idx) => {
                  const active = location.pathname === item.path;

                  return (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block w-full text-lg font-bold py-3 px-4 rounded-xl transition duration-200 ${
                          active
                            ? "bg-yellow-400/10 text-yellow-400 border-l-4 border-yellow-400"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Sticky Bottom Call To Action Container */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8 pt-6 border-t border-white/10"
              >
                <Link
                  to="/apply"
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    w-full
                    bg-gradient-to-r
                    from-yellow-400
                    to-amber-500
                    text-slate-950
                    font-black
                    text-center
                    py-4
                    rounded-xl
                    text-base
                    shadow-xl
                    transition
                    active:scale-[0.98]
                  "
                >
                  Apply Now
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;