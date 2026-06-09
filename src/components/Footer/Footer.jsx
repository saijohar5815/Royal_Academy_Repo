import React from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 py-16 sm:py-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Footer Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Essence */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-xl tracking-tighter">ROYAL ACADEMY</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Cultivating excellence through a global educational framework. Empowering the leaders of 2026 and beyond.
            </p>
          </div>

          {/* Column 2: Anchor Navigation (Dynamic scroll) */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              {['Academics','Achievements','Facilities','Career-Journey','Gallery', 'News','Testimonials', 'Admissions','Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-stone-400 hover:text-amber-500 transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <ExternalLink size={12} /> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutional Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Admissions</h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li>Application Portal</li>
              <li>Tuition & Fees</li>
              <li>Virtual Tours</li>
            </ul>
          </div>

          {/* Column 4: Contact Core */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Connect</h4>
            <div className="space-y-3 text-stone-400 text-sm">
              <div className="flex items-center gap-3"><MapPin size={16} className="text-amber-500" /> Knowledge District, 400</div>
              <div className="flex items-center gap-3"><Phone size={16} className="text-amber-500" /> +1 (234) 567-890</div>
              <div className="flex items-center gap-3"><Mail size={16} className="text-amber-500" /> info@royalacademy.edu</div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-stone-600 font-mono">
          <p>© 2026 Royal Academy Institutional Group. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-amber-500 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-amber-500 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}