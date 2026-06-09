import React from "react";
import { motion } from "framer-motion";
import {
  Newspaper,
  TrendingUp,
  Calendar,
  ArrowRight,
  Bell,
  BookOpen,
  Cpu,
  Trophy,
} from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
const featuredNews = {
  title: "AI Robotics Team Wins International Innovation Challenge",
  description:
    "Our students secured first place among 120 universities worldwide by developing an autonomous healthcare robotics platform.",
  image:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
};

const news = [
  {
    title: "New Quantum Research Center Opened",
    category: "Research",
    date: "March 15, 2025",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
  },
  {
    title: "Sports Arena Receives Smart Analytics Upgrade",
    category: "Sports",
    date: "March 10, 2025",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200",
  },
  {
    title: "AI Library Platform Reaches 1 Million Searches",
    category: "Library",
    date: "March 08, 2025",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] overflow-hidden">
      {/* Floating Background Blobs */}
      <Navbar />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-purple-200 blur-[120px] opacity-40" />

        <div className="absolute right-[-100px] top-[20%] w-[500px] h-[500px] rounded-full bg-pink-200 blur-[120px] opacity-40" />

        <div className="absolute bottom-[-200px] left-[30%] w-[500px] h-[500px] rounded-full bg-blue-200 blur-[120px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* ================================= */}
        {/* HERO SECTION */}
        {/* ================================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[40px] bg-white shadow-xl border border-slate-100 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium w-fit">
                <Newspaper size={16} />
                Campus News Network
              </div>

              <h1 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900">
                Stay Updated
                <br />
                With Campus Life
              </h1>

              <p className="mt-6 text-slate-600 text-lg">
                Discover achievements, research breakthroughs,
                student success stories, and upcoming events.
              </p>

              <button className="mt-8 w-fit px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition">
                Explore News
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="relative min-h-[350px]">
              <img
                src={featuredNews.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* ================================= */}
        {/* QUICK STATS */}
        {/* ================================= */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {[
            ["150+", "Articles"],
            ["25", "Research Updates"],
            ["12", "Events This Month"],
            ["8K+", "Subscribers"],
          ].map(([value, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-md border border-slate-100"
            >
              <h3 className="text-3xl font-black text-slate-900">
                {value}
              </h3>

              <p className="text-slate-500 mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* ================================= */}
        {/* CATEGORIES */}
        {/* ================================= */}

        <section className="mt-14">
          <h2 className="text-3xl font-black text-slate-900">
            News Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Research",
                icon: <Cpu />,
                color: "from-purple-500 to-indigo-500",
              },
              {
                title: "Academics",
                icon: <BookOpen />,
                color: "from-pink-500 to-rose-500",
              },
              {
                title: "Sports",
                icon: <Trophy />,
                color: "from-blue-500 to-cyan-500",
              },
            ].map((item) => (
              <motion.div
                whileHover={{
                  y: -10,
                }}
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-500">
                  Latest updates and announcements.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================================= */}
        {/* LATEST NEWS */}
        {/* ================================= */}

        <section className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black text-slate-900">
              Latest News
            </h2>

            <TrendingUp className="text-purple-600" />
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
            {news.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
              >
                <img
                  src={article.image}
                  alt=""
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-purple-600">
                    <Calendar size={14} />
                    {article.date}
                  </div>

                  <h3 className="mt-3 text-xl font-bold">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Category: {article.category}
                  </p>

                  <button className="mt-5 text-purple-600 font-semibold flex items-center gap-2">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================================= */}
        {/* NEWSLETTER */}
        {/* ================================= */}

        <section className="mt-20">
          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            className="rounded-[40px] bg-gradient-to-r from-purple-600 to-pink-500 text-white p-10 md:p-16"
          >
            <div className="max-w-3xl">
              <Bell size={42} />

              <h2 className="mt-6 text-4xl font-black">
                Never Miss An Update
              </h2>

              <p className="mt-4 text-white/80">
                Subscribe to receive campus news,
                event announcements, and research updates.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <input
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl text-slate-900 outline-none"
                />

                <button className="px-8 py-4 rounded-2xl bg-white text-purple-700 font-bold">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}