import React, { useState } from "react";

// Designated historical items (Main Left Column Feed) with high-contrast UI tokens
const pastDataPool = [
  {
    id: 1,
    type: "sports",
    title: "Pan-Asian Varsity Football Finals",
    school: "Meridian International Academy",
    location: "Bangkok",
    date: "2026-06-12",
    tag: "Sports",
    bgSurface: "bg-[#16120e] border-amber-500/30",
    accent: "border-amber-400/40 text-amber-400 bg-amber-400/10",
    description:
      "An intense championship match concluded with a thrilling penalty shootout victory for the absolute title.",
  },
  {
    id: 2,
    type: "news",
    title: "STEM Robotics Team Wins Global Championship",
    school: "Horizon International Academy",
    location: "Dubai",
    date: "2026-05-18",
    tag: "STEM",
    bgSurface: "bg-[#0e171b] border-cyan-500/30",
    accent: "border-cyan-400/40 text-cyan-400 bg-cyan-400/10",
    description:
      "The academy's engineering group secured first place over 150 teams in the World Robotics League finals.",
  },
  {
    id: 3,
    type: "event",
    title: "International Cultural Exchange Week",
    school: "Evergreen International School",
    location: "Tokyo",
    date: "2026-05-25",
    tag: "Culture",
    bgSurface: "bg-[#0f1814] border-emerald-500/30",
    accent: "border-emerald-400/40 text-emerald-400 bg-emerald-400/10",
    description:
      "A week-long celebration showcasing global traditions, native food architectures, and live stage performances.",
  },
  {
    id: 4,
    type: "event",
    title: "UN Model Conference 2026",
    school: "Global International School",
    location: "Singapore",
    date: "2026-04-20",
    tag: "Diplomacy",
    bgSurface: "bg-[#14101a] border-violet-500/30",
    accent: "border-violet-400/40 text-violet-400 bg-violet-400/10",
    description:
      "Students from 30+ countries simulated UN proceedings focusing on global climate action policies.",
  }
];

// Designated future items (Right Sidebar Timeline Feed)
const upcomingDataPool = [
  {
    id: 101,
    type: "sports",
    title: "Global Schools Aquatics Championship 2026",
    school: "Pacific Coast International Academy",
    location: "Sydney",
    date: "2026-07-04",
    tag: "Sports"
  },
  {
    id: 102,
    type: "stem",
    title: "World AI & Quantum Youth Summit",
    school: "Horizon International Academy",
    location: "Dubai",
    date: "2026-08-12",
    tag: "STEM"
  },
  {
    id: 103,
    type: "culture",
    title: "International Fine Arts Exhibition",
    school: "Evergreen International School",
    location: "Tokyo",
    date: "2026-09-18",
    tag: "Culture"
  }
];

const filters = ["All", "News", "Events", "STEM", "Culture", "Sports"];

export default function SchoolNewsEvents() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic for past archives
  const filteredPastData = activeFilter === "All"
    ? pastDataPool
    : pastDataPool.filter(
        (item) =>
          item.type.toLowerCase() === activeFilter.toLowerCase() ||
          item.tag.toLowerCase() === activeFilter.toLowerCase()
      );

  // Filter logic for upcoming timeline
  const filteredUpcomingData = activeFilter === "All"
    ? upcomingDataPool
    : upcomingDataPool.filter(
        (item) =>
          item.type.toLowerCase() === activeFilter.toLowerCase() ||
          item.tag.toLowerCase() === activeFilter.toLowerCase()
      );

  return (
    <div id="news" className="min-h-screen bg-[#090d16] text-slate-100 p-4 sm:p-6 md:p-8 font-sans antialiased relative overflow-x-hidden">
      
      {/* Precision Background Glow Lines */}
      <div className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-emerald-500/[0.03] blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-amber-500/[0.02] blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HERO HEADER --- */}
        <div className="mb-8 sm:mb-12 border-b border-neutral-800 pb-6 sm:pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-950/80 border border-emerald-500/40 rounded text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-3">
              ● Live Transmission Core
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
              Global Stream <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">Hub</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 font-normal leading-relaxed">
              Real-time dispatches from international schools worldwide, tracking past metrics, achievements, and future timelines.
            </p>
          </div>

          {/* --- RESPONSIVE FILTER INTERFACE --- */}
          <div className="w-full lg:w-auto flex-shrink-0">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none scroll-smooth -mx-4 px-4 lg:mx-0 lg:px-0 bg-transparent lg:bg-[#111622] lg:p-1.5 rounded-none lg:rounded-xl lg:border lg:border-neutral-800">
              {filters.map((f) => {
                const isActive = activeFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-4 py-2 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20"
                        : "bg-[#111622] border border-neutral-800 lg:border-none lg:bg-transparent hover:bg-neutral-800/80 text-slate-400 hover:text-white"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- MAIN SPLIT BENTO LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* LEFT COLUMN: PAST RECORD LOGS */}
          <div className="col-span-1 lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2 sm:mb-4">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 font-bold">
                ⏳ Historical Records & Archives
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 bg-neutral-800 px-2 py-0.5 rounded">
                {filteredPastData.length} Logs Loaded
              </span>
            </div>

            {filteredPastData.length === 0 ? (
              <div className="p-8 sm:p-12 text-center rounded-2xl bg-[#111622] border border-neutral-800 font-mono text-xs text-neutral-400">
                No archived historical telemetry fits this category selection.
              </div>
            ) : (
              filteredPastData.map((item) => (
                <div
                  key={item.id}
                  className={`p-5 sm:p-6 rounded-2xl ${item.bgSurface} border hover:border-neutral-600 transition-all duration-200 relative overflow-hidden`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                    <div>
                      <span className={`inline-block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 sm:py-1 rounded border ${item.accent}`}>
                        {item.type}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-2.5 sm:mt-3 leading-snug">
                        {item.title}
                      </h2>
                    </div>
                    
                    <div className="text-xs font-mono text-slate-300 font-semibold self-start sm:self-auto bg-neutral-950/60 px-2.5 py-1 rounded border border-neutral-800 whitespace-nowrap">
                      📅 {item.date}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-2xl antialiased">
                    {item.description}
                  </p>

                  <div className="mt-5 sm:mt-6 pt-4 border-t border-neutral-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-slate-300 font-medium">
                      <span className="text-emerald-400">🏢</span>
                      <span className="text-white text-xs sm:text-sm">{item.school}</span>
                      <span className="text-neutral-600 hidden sm:inline">•</span>
                      <span className="text-slate-400 font-mono text-[11px] sm:text-[12px] w-full sm:w-auto block sm:inline mt-0.5 sm:mt-0">{item.location}</span>
                    </div>

                    <span className="px-2.5 py-1 bg-neutral-950 border border-neutral-800 text-slate-300 font-mono text-[10px] sm:text-[11px] rounded-md font-semibold self-start sm:self-auto">
                      #{item.tag.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT COLUMN: UPCOMING TIMELINES & INFRAS */}
          <div className="col-span-1 space-y-6 order-1 lg:order-2">
            
            {/* FUTURE METRIC STREAM */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#111622] border border-neutral-800 relative">
              <div className="absolute top-3 right-4 font-mono text-[8px] sm:text-[9px] text-neutral-400 tracking-widest uppercase">LIVE // NEXT</div>
              <h3 className="font-mono text-xs font-bold tracking-widest uppercase text-slate-200 mb-5 sm:mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Upcoming Timeline
              </h3>

              {filteredUpcomingData.length === 0 ? (
                <p className="text-xs font-mono text-neutral-400 text-center py-4">
                  No future schedules mapped for this tier.
                </p>
              ) : (
                <div className="relative border-l border-neutral-800 ml-1.5 space-y-5 sm:space-y-6">
                  {filteredUpcomingData.map((item) => (
                    <div key={item.id} className="relative pl-5 sm:pl-6 group">
                      {/* Active Node Indicator */}
                      <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#090d16] border-2 border-emerald-400 shadow-[0_0_8px_#34d399]" />
                      
                      <p className="text-[10px] sm:text-xs font-mono text-emerald-400 font-bold tracking-wide mb-1">{item.date}</p>
                      <p className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
                        {item.title}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-300 mt-1">{item.school}</p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-neutral-950 border border-neutral-800 rounded text-[9px] sm:text-[10px] font-mono text-slate-300 font-semibold uppercase">
                        #{item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* BASE STATIC METRICS PLATFORM */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#111622] border border-neutral-800 relative overflow-hidden">
              <h3 className="font-mono text-xs font-bold tracking-widest uppercase text-slate-200 mb-2">
                🌐 Global Infrastructure
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 leading-normal">
                Active school networks reporting data telemetry across international jurisdictions.
              </p>

              <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-3">
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 sm:p-4 text-left">
                  <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">120+</p>
                  <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-1">Institutions</p>
                </div>
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 sm:p-4 text-left">
                  <p className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">35</p>
                  <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-1">Countries</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}