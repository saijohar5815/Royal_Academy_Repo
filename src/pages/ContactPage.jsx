import React, { useState } from 'react';
import Navbar from "../components/Navbar/Navbar";
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Simple real-time validation
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error dynamically as user types
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulating API Call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1800)); 
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Fade out success/error message after 4 seconds
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-slate-100 flex items-center justify-center p-4 md:p-8">
      <Navbar />
      <div className="w-full max-w-6xl bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">
        
        {/* Left Column: Visual & Info Side */}
        <div className="lg:col-span-5 bg-gradient-to-b from-indigo-600 to-violet-700 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Background Blobs */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <span className="text-indigo-200 text-sm font-semibold tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
              Say Hello
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
              Let's build something <span className="text-indigo-200">extraordinary</span> together.
            </h1>
            <p className="text-indigo-100/80 max-w-sm leading-relaxed">
              Have a question, an idea, or a project that needs some magic? Drop a line, and let's make it happen.
            </p>
          </div>

          {/* Quick Contact Details */}
          <div className="mt-12 lg:mt-0 space-y-6 relative z-10">
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <p className="text-xs text-indigo-200 uppercase tracking-wider">Email Us</p>
                <a href="mailto:hello@example.com" className="text-white font-medium hover:underline">hello@example.com</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <p className="text-xs text-indigo-200 uppercase tracking-wider">Our HQ</p>
                <p className="text-white font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-slate-900">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input Group */}
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className={`w-full bg-slate-800/50 border ${errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-700 focus:border-indigo-500'} rounded-2xl px-5 pt-6 pb-2 text-slate-100 outline-none transition-all duration-200 peer placeholder-shown:pt-4 placeholder-shown:pb-4`}
              />
              <label className="absolute left-5 top-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-500 pointer-events-none origin-left transform peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-indigo-400">
                Your Name
              </label>
              {errors.name && <p className="text-rose-400 text-xs mt-1 ml-1 font-medium">{errors.name}</p>}
            </div>

            {/* Email Input Group */}
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className={`w-full bg-slate-800/50 border ${errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-700 focus:border-indigo-500'} rounded-2xl px-5 pt-6 pb-2 text-slate-100 outline-none transition-all duration-200 peer placeholder-shown:pt-4 placeholder-shown:pb-4`}
              />
              <label className="absolute left-5 top-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-500 pointer-events-none origin-left transform peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-indigo-400">
                Email Address
              </label>
              {errors.email && <p className="text-rose-400 text-xs mt-1 ml-1 font-medium">{errors.email}</p>}
            </div>

            {/* Message Input Group */}
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder=" "
                className={`w-full bg-slate-800/50 border ${errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-700 focus:border-indigo-500'} rounded-2xl px-5 pt-6 pb-2 text-slate-100 outline-none transition-all duration-200 peer placeholder-shown:pt-4 placeholder-shown:pb-4 resize-none`}
              ></textarea>
              <label className="absolute left-5 top-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-500 pointer-events-none origin-left transform peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-indigo-400">
                Tell us about your project
              </label>
              {errors.message && <p className="text-rose-400 text-xs mt-1 ml-1 font-medium">{errors.message}</p>}
            </div>

            {/* Submit Button & Feedback Status */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center space-x-2 min-w-[160px]"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>

              {/* Toast / Status Notifications */}
              {submitStatus === 'success' && (
                <div className="text-emerald-400 font-medium flex items-center space-x-2 animate-fade-in-up">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  <span>Message sent successfully!</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-rose-400 font-medium flex items-center space-x-2 animate-fade-in-up">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  <span>Something went wrong. Try again.</span>
                </div>
              )}
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}