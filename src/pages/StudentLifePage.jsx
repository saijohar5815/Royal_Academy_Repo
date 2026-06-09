import React, { useState } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Trophy, 
  Wifi, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  Compass
} from 'lucide-react';

export default function StudentLifePage() {
  const [bookingData, setBookingData] = useState({
    visitorName: '',
    visitorEmail: '',
    visitDate: '',
    visitTime: '',
    facilityInterest: ''
  });
  const [booked, setBooked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  const facilities = [
    {
      id: 'library',
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      title: 'The Infinite Nexus Library',
      tag: 'Resource Hub',
      desc: 'A next-generation metadata ecosystem merging classic physical anthologies with vast spatial archives. Features quiet acoustic capsules, private researcher pods, and immediate high-bandwidth access to global global repositories.',
      bgGradient: 'from-cyan-950/40 to-slate-950',
      borderColor: 'group-hover:border-cyan-500/40',
      accentColor: 'text-cyan-400'
    },
    {
      id: 'labs',
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: 'AI & Core Robotics Foundry',
      tag: 'Research Node',
      desc: 'Our flagship innovation lab outfitted with real-time tensor computation arrays, industrial mechanical testing beds, and advanced generative AI design nodes. This is where student blueprints become functional kinetic systems.',
      bgGradient: 'from-indigo-950/40 to-slate-950',
      borderColor: 'group-hover:border-indigo-500/40',
      accentColor: 'text-indigo-400'
    },
    {
      id: 'sports',
      icon: <Trophy className="w-6 h-6 text-purple-400" />,
      title: 'Apex Sports Complex',
      tag: 'Athletics & Kinetic',
      desc: 'A modern athletic structure housing biometric tracking tracking track facilities, Olympic-tier swimming pools, indoor climbing matrices, and cross-functional training spaces designed to optimize health and peak physical execution.',
      bgGradient: 'from-purple-950/40 to-slate-950',
      borderColor: 'group-hover:border-purple-500/40',
      accentColor: 'text-purple-400'
    },
    {
      id: 'campus',
      icon: <Wifi className="w-6 h-6 text-emerald-400" />,
      title: 'Cognitive Smart Campus',
      tag: 'Ecosystem',
      desc: 'A totally mesh-networked campus infrastructure utilizing real-time space telemetry, touchless cryptographic entry nodes, and green spatial environmental management systems to support a modern, seamless daily flow.',
      bgGradient: 'from-emerald-950/40 to-slate-950',
      borderColor: 'group-hover:border-emerald-500/40',
      accentColor: 'text-emerald-400'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-500 selection:text-white antialiased font-sans">
      
      {/* Dynamic Keyframe Animation inject */}
      <style>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.01); }
        }
        .animate-subtle-float { animation: subtleFloat 5s ease-in-out infinite; }
      `}</style>

      {/* --- INFRASTRUCTURE HERO --- */}
      <div className="relative w-full overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center border-b border-slate-800/40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] right-[15%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 blur-[130px]" />
          <div className="absolute bottom-[-20%] left-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-cyan-600 to-emerald-500 blur-[110px]" />
        </div>

        <div className="relative max-w-3xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> State-Of-The-Art Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
            Where Space Fuels <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              High-Velocity Innovation.
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Our facilities are architectural frameworks built for cross-disciplinary collaboration. Explore our specialized hubs or book a real-world visualization slot below.
          </p>
        </div>
      </div>

      {/* --- LAYOUT SECTION CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: THE FACILITIES SHOWCASE GRID (7/12 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Interactive Catalog</h2>
              <p className="text-lg font-bold text-slate-300">Explore our specialized ecosystem nodes</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {facilities.map((fac) => (
                <div 
                  key={fac.id}
                  className={`group bg-gradient-to-r ${fac.bgGradient} border border-slate-800 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:translate-x-1 border-l-2 hover:border-l-4 ${fac.borderColor}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      {fac.icon}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-extrabold text-lg text-slate-200 group-hover:text-white transition-colors">
                          {fac.title}
                        </h3>
                        <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase border border-slate-800 px-2 py-0.5 rounded bg-slate-900/50">
                          {fac.tag}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed font-normal">
                        {fac.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: SCHEDULE A VISIT FORM (5/12 Columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden relative">
              
              {/* Form Top Aesthetic Edge */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />

              {booked ? (
                /* Visit Confirmation Display Screen */
                <div className="text-center p-8 sm:p-12 space-y-6 animate-subtle-float">
                  <div className="w-16 h-16 bg-indigo-500/10 text-indigo-400 rounded-full flex items-center justify-center mx-auto border border-indigo-500/20 shadow-xl shadow-indigo-950/20 relative">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Campus Pass Scheduled</h3>
                    <p className="text-[10px] text-slate-500 font-mono">AUTHORIZED ENTRY ACCESS</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
                    Hello <span className="font-bold text-slate-200">{bookingData.visitorName || 'Guest'}</span>, your personalized spatial walk is cataloged for <span className="text-indigo-400 font-medium">{bookingData.visitDate}</span> at <span className="text-indigo-400 font-medium">{bookingData.visitTime}</span>. Entry map pass coordinates have been routed to your email.
                  </p>
                  <button 
                    onClick={() => { setBooked(false); setBookingData({ visitorName:'', visitorEmail:'', visitDate:'', visitTime:'', facilityInterest:'' }); }}
                    className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                  >
                    Reschedule or Modify Appointment
                  </button>
                </div>
              ) : (
                /* Primary Interactive Reservation Form Interface */
                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-indigo-400 mb-1">
                      <Compass className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Physical Briefing</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">Reserve Campus Experience</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Secure an exclusive 1-on-1 walkthrough slot with architectural guides.</p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Your Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                        <input 
                          type="text" 
                          name="visitorName" 
                          required 
                          value={bookingData.visitorName} 
                          onChange={handleInputChange} 
                          placeholder="Evelyn Carter" 
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-slate-600 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                        <input 
                          type="email" 
                          name="visitorEmail" 
                          required 
                          value={bookingData.visitorEmail} 
                          onChange={handleInputChange} 
                          placeholder="evelyn@domain.com" 
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-slate-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Target Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                          <input 
                            type="date" 
                            name="visitDate" 
                            required 
                            value={bookingData.visitDate} 
                            onChange={handleInputChange} 
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white transition-all [color-scheme:dark]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Preferred Session</label>
                        <div className="relative">
                          <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                          <select 
                            name="visitTime" 
                            required 
                            value={bookingData.visitTime} 
                            onChange={handleInputChange} 
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white transition-all appearance-none"
                          >
                            <option value="" disabled className="bg-slate-950 text-slate-500">Select hours...</option>
                            <option value="09:00 AM" className="bg-slate-950 text-white">Morning (09:00 AM)</option>
                            <option value="01:00 PM" className="bg-slate-950 text-white">Midday (01:00 PM)</option>
                            <option value="04:00 PM" className="bg-slate-950 text-white">Late Session (04:00 PM)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Primary Facility Interest Focus</label>
                      <div className="relative">
                        <Layers className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                        <select 
                          name="facilityInterest" 
                          required 
                          value={bookingData.facilityInterest} 
                          onChange={handleInputChange} 
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white transition-all appearance-none"
                        >
                          <option value="" disabled className="bg-slate-950 text-slate-500">Select target sector...</option>
                          <option value="all" className="bg-slate-950 text-white">Complete Campus Comprehensive Loop</option>
                          <option value="library" className="bg-slate-950 text-white">The Infinite Nexus Library Node</option>
                          <option value="labs" className="bg-slate-950 text-white">AI & Robotics Laboratory Core</option>
                          <option value="sports" className="bg-slate-950 text-white">Apex Sports & Recovery Arenas</option>
                        </select>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-indigo-950/40 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-4 group"
                    >
                      Book Tour Schedule Pass
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-[10px] text-center text-slate-500 mt-3 flex items-center justify-center gap-1.5">
                      <MapPin className="w-3 h-3 text-slate-600" /> Virtual tours available via portal fallback systems.
                    </p>

                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}