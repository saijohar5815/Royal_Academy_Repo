import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Eye, Target, Compass, Award, Users, BookOpen, Quote, X, Calendar } from 'lucide-react';

// Custom CountUp Component
const Counter = ({ targetValue, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const endValue = parseInt(targetValue, 10);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.floor(progress * endValue);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetValue, duration]);

  return (
    <span ref={ref} className="font-bold tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export default function About() {
  const [activeTab, setActiveTab] = useState('vision');
  const [showMessageModal, setShowMessageModal] = useState(false);

  const tabsContent = {
    vision: {
      title: 'Our Vision',
      icon: Eye,
      content: 'To be a globally recognized center of educational excellence, fostering compassionate, innovative, and principled leaders who shape a sustainable and harmonious world.',
      points: [
        'Cultivating global citizenship and intercultural respect.',
        'Encouraging design thinking and digital innovation.',
        'Promoting character formation and emotional quotient development.',
      ]
    },
    mission: {
      title: 'Our Mission',
      icon: Target,
      content: 'We commit to providing a rigorous academic environment that balances cognitive development with creative exploration, physical well-being, and social responsibility.',
      points: [
        'Delivering a world-class inquiry-based curriculum.',
        'Sustaining state-of-the-art facilities for sports and lab sciences.',
        'Forging close partnerships with parents and the global community.',
      ]
    },
    values: {
      title: 'Core Values',
      icon: Compass,
      content: 'Our identity is built upon five foundational pillars that guide every decision, program, and interaction within our global campus community.',
      points: [
        'Integrity: Being honest, fair, and morally courageous.',
        'Excellence: Pushing boundaries and pursuing constant growth.',
        'Empathy: Practicing active kindness and respecting diversity.',
        'Resilience: Overcoming adversity with a growth mindset.',
      ]
    },
    history: {
      title: 'Our History',
      icon: Calendar,
      content: 'Founded in 2001, Royal Academy started as a vision to create a modern school with international standards. Today, we are home to students from over 35 nationalities.',
      points: [
        '2001: Established with a cohort of 150 primary students.',
        '2010: Opened the Senior Secondary campus and modern tech wing.',
        '2020: Awarded Outstanding School ranking by International Board.',
      ]
    }
  };

  const ActiveTabIcon = tabsContent[activeTab].icon;

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-extrabold bg-accent/15 px-4 py-1.5 rounded-full">
            About Our Academy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mt-4 mb-6 font-serif-luxury tracking-tight leading-tight">
            Nurturing Minds, Shaping Global Futures
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </div>

        {/* Top Layout: Stats + Info Tabs */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Stats Grid - 5 cols */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <div className="bg-bglight border border-primary/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-premium hover:shadow-premium-hover transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-xl mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-primary font-sans">
                <Counter targetValue="1200" suffix="+" />
              </h3>
              <p className="text-slate-500 text-sm font-semibold mt-2">Active Students</p>
            </div>

            <div className="bg-bglight border border-primary/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-premium hover:shadow-premium-hover transition-all duration-300">
              <div className="p-3 bg-accent/10 rounded-xl mb-4">
                <BookOpen className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-primary font-sans">
                <Counter targetValue="100" suffix="+" />
              </h3>
              <p className="text-slate-500 text-sm font-semibold mt-2">Expert Faculty</p>
            </div>

            <div className="bg-bglight border border-primary/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-premium hover:shadow-premium-hover transition-all duration-300">
              <div className="p-3 bg-accent/10 rounded-xl mb-4">
                <Award className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-primary font-sans">
                <Counter targetValue="25" suffix="+" />
              </h3>
              <p className="text-slate-500 text-sm font-semibold mt-2">Years of Excellence</p>
            </div>

            <div className="bg-bglight border border-primary/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-premium hover:shadow-premium-hover transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-xl mb-4">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-primary font-sans">
                <Counter targetValue="50" suffix="+" />
              </h3>
              <p className="text-slate-500 text-sm font-semibold mt-2">National Awards</p>
            </div>
          </div>

          {/* Info Tabs - 7 cols */}
          <div className="lg:col-span-7 bg-bglight border border-primary/5 rounded-3xl p-8 shadow-premium">
            <div className="flex flex-wrap gap-2 border-b border-primary/10 pb-4 mb-6">
              {Object.keys(tabsContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-primary text-white shadow-md'
                      : 'text-primary/75 hover:bg-primary/5'
                  }`}
                >
                  {tabsContent[tab].title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3 text-primary">
                  <div className="p-2 bg-primary/5 rounded-lg">
                    <ActiveTabIcon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-serif-luxury">{tabsContent[activeTab].title}</h3>
                </div>

                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {tabsContent[activeTab].content}
                </p>

                <ul className="space-y-3 pl-1">
                  {tabsContent[activeTab].points.map((pt, index) => (
                    <li key={index} className="flex items-start text-sm font-semibold text-slate-700">
                      <span className="text-accent mr-3 mt-1 text-base leading-none">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Principal's Message Section */}
        <div className="bg-primary rounded-3xl overflow-hidden shadow-premium grid lg:grid-cols-12 items-stretch border border-white/5">
          {/* Principal Photo */}
          <div className="lg:col-span-5 min-h-[300px] lg:min-h-full relative">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
              alt="Principal Dr. Victoria Sterling"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Principal Text */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-left relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
            
            <div className="space-y-6 relative z-10">
              <Quote className="h-10 w-10 text-accent/35 transform -scale-x-100" />
              
              <h3 className="text-white text-2xl font-bold font-serif-luxury leading-snug">
                "We believe every student has a unique spark of leadership waiting to be discovered and cultivated."
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                Welcome to Royal Academy International. As we stand on the threshold of a rapidly changing global workforce, our mandate is to equip learners not just with facts, but with the critical capability to adapt, build, and lead. Through a rigorous standard of care, modern digital systems, and rich community exploration, we empower characters that last.
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <p className="text-accent text-base font-extrabold font-serif-luxury tracking-wide">Dr. Victoria Sterling</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-0.5">Principal & Executive Director</p>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <button
                onClick={() => setShowMessageModal(true)}
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-primary font-bold rounded-xl shadow-md transition-all duration-300 text-sm tracking-wide transform hover:-translate-y-0.5"
              >
                Read Full Message
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Principal Message Modal Overlay */}
      <AnimatePresence>
        {showMessageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMessageModal(false)}
              className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-primary/5 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowMessageModal(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-primary hover:bg-bglight transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=150&q=80"
                    alt="Dr. Victoria Sterling"
                    className="w-16 h-16 rounded-2xl object-cover border border-accent/20"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-primary font-serif-luxury">Dr. Victoria Sterling</h4>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-0.5">Principal's Address</p>
                  </div>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    Dear Parents, Students, and Friends,
                  </p>
                  <p>
                    At Royal Academy, education is more than a syllabus. It is a comprehensive framework where scientific inquiry meets athletic grit, and global collaboration blends with local empathy. Our curriculum is tailored to draw out the genius inside every young mind.
                  </p>
                  <p>
                    We cultivate a mindset of resilience. In our smart learning environments, students are encouraged to test theories, fail, rebuild, and master concepts. We place significant emphasis on ethics, emotional intelligence, and environmental stewardship, shaping characters that remain grounded while their ambitions soar.
                  </p>
                  <p>
                    Our experienced educators act as facilitators of discovery. We invite you to join us on this educational journey, establishing a legacy of leadership, courage, and excellence.
                  </p>
                  <p className="font-bold text-primary">
                    Warmest Regards,
                    <br />
                    <span className="font-serif-luxury text-accent text-lg mt-2 inline-block">Victoria Sterling</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
