import React, { useState } from 'react';

export default function SchoolAdmissionPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Student Profile
    studentFirstName: '',
    studentLastName: '',
    dateOfBirth: '',
    gender: '',
    // Step 2: Academic Intent
    gradeApplyingFor: '',
    previousSchool: '',
    academicYear: '2026-2027',
    // Step 3: Parent/Guardian Info
    guardianName: '',
    guardianEmail: '',
    guardianPhone: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    { id: 1, name: 'Student Profile' },
    { id: 2, name: 'Academic Intent' },
    { id: 3, name: 'Guardian Details' }
  ];

  const validateStep = (step) => {
    let stepErrors = {};
    if (step === 1) {
      if (!formData.studentFirstName.trim()) stepErrors.studentFirstName = "First name is required";
      if (!formData.studentLastName.trim()) stepErrors.studentLastName = "Last name is required";
      if (!formData.dateOfBirth) stepErrors.dateOfBirth = "Date of birth is required";
      if (!formData.gender) stepErrors.gender = "Please select a gender";
    }
    if (step === 2) {
      if (!formData.gradeApplyingFor) stepErrors.gradeApplyingFor = "Please select a grade level";
    }
    if (step === 3) {
      if (!formData.guardianName.trim()) stepErrors.guardianName = "Guardian name is required";
      if (!formData.guardianEmail.trim()) {
        stepErrors.guardianEmail = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.guardianEmail)) {
        stepErrors.guardianEmail = "Invalid email format";
      }
      if (!formData.guardianPhone.trim()) stepErrors.guardianPhone = "Phone number is required";
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Restarts the process completely for a brand-new application loop
  const handleResetApplication = () => {
    setFormData({
      studentFirstName: '',
      studentLastName: '',
      dateOfBirth: '',
      gender: '',
      gradeApplyingFor: '',
      previousSchool: '',
      academicYear: '2026-2027',
      guardianName: '',
      guardianEmail: '',
      guardianPhone: '',
    });
    setErrors({});
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-emerald-50/50 text-slate-800 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[650px]">
        
        {/* Left Column: Progress Timeline */}
        <div className="lg:col-span-4 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="text-indigo-200 text-xs font-bold tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full">
              Admissions Open
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight mt-4 leading-tight">
              Begin Your child's <br/><span className="text-emerald-300">Bright Future</span>
            </h1>
          </div>

          {/* Stepper Steps Tracker */}
          <div className="my-8 lg:my-0 space-y-6 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  isSubmitted 
                    ? 'bg-indigo-400/20 text-indigo-200' 
                    : currentStep === step.id 
                    ? 'bg-emerald-400 text-slate-900 ring-4 ring-emerald-400/20 shadow-md' 
                    : currentStep > step.id 
                    ? 'bg-indigo-400/40 text-indigo-100 line-through' 
                    : 'bg-indigo-800 text-indigo-300 border border-indigo-600'
                }`}>
                  {(!isSubmitted && currentStep > step.id) ? '✓' : step.id}
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider ${!isSubmitted && currentStep === step.id ? 'text-emerald-300 font-semibold' : 'text-indigo-200/60'}`}>
                    Step {step.id}
                  </p>
                  <p className={`text-sm font-medium ${!isSubmitted && currentStep === step.id ? 'text-white' : 'text-indigo-100/80'}`}>
                    {step.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-indigo-200/70 border-t border-indigo-500/30 pt-4 relative z-10">
            Need help? Reach out at <span className="text-white font-medium underline">admissions@school.edu</span>
          </div>
        </div>

        {/* Right Column: Dynamic Work Area */}
        <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center bg-white">
          {isSubmitted ? (
            /* Updated Success Feedback Block with Restart Loop Hook */
            <div className="text-center max-w-md mx-auto space-y-6 py-8 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl shadow-inner animate-bounce">
                ✓
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">Application Submitted!</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Thank you for applying. We have sent a confirmation email to <span className="font-semibold text-indigo-600">{formData.guardianEmail || 'your inbox'}</span> with tracking instructions.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetApplication}
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-md active:scale-95 inline-flex items-center justify-center space-x-2 group"
                >
                  <svg className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18"/></svg>
                  <span>Apply for Another Student</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="mb-2">
                <h2 className="text-2xl font-bold text-slate-900">{steps[currentStep - 1].name}</h2>
                <p className="text-slate-500 text-sm">Please fill out the fields below.</p>
              </div>

              {/* STEP 1: STUDENT PROFILE */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Student First Name</label>
                    <input
                      type="text"
                      name="studentFirstName"
                      value={formData.studentFirstName}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${errors.studentFirstName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-indigo-200'} rounded-xl px-4 py-3 outline-none focus:ring-4 focus:border-indigo-500 transition-all text-sm`}
                      placeholder="Jane"
                    />
                    {errors.studentFirstName && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.studentFirstName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Student Last Name</label>
                    <input
                      type="text"
                      name="studentLastName"
                      value={formData.studentLastName}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${errors.studentLastName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-indigo-200'} rounded-xl px-4 py-3 outline-none focus:ring-4 focus:border-indigo-500 transition-all text-sm`}
                      placeholder="Doe"
                    />
                    {errors.studentLastName && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.studentLastName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${errors.dateOfBirth ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-indigo-200'} rounded-xl px-4 py-3 outline-none focus:ring-4 focus:border-indigo-500 transition-all text-sm text-slate-700`}
                    />
                    {errors.dateOfBirth && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.dateOfBirth}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${errors.gender ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-indigo-200'} rounded-xl px-4 py-3 outline-none focus:ring-4 focus:border-indigo-500 transition-all text-sm text-slate-700`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.gender}</p>}
                  </div>
                </div>
              )}

              {/* STEP 2: ACADEMIC INTENT */}
              {currentStep === 2 && (
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Grade / Level Applying For</label>
                    <select
                      name="gradeApplyingFor"
                      value={formData.gradeApplyingFor}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${errors.gradeApplyingFor ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-indigo-200'} rounded-xl px-4 py-3 outline-none focus:ring-4 focus:border-indigo-500 transition-all text-sm text-slate-700`}
                    >
                      <option value="">Select Target Grade</option>
                      <option value="kindergarten">Kindergarten</option>
                      <option value="elementary">Elementary (Grades 1-5)</option>
                      <option value="middle">Middle School (Grades 6-8)</option>
                      <option value="high">High School (Grades 9-12)</option>
                    </select>
                    {errors.gradeApplyingFor && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.gradeApplyingFor}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Previous School Attended</label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
                      placeholder="International Academy of Arts"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: GUARDIAN DETAILS */}
              {currentStep === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Parent / Guardian Full Name</label>
                    <input
                      type="text"
                      name="guardianName"
                      value={formData.guardianName}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${errors.guardianName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-indigo-200'} rounded-xl px-4 py-3 outline-none focus:ring-4 focus:border-indigo-500 transition-all text-sm`}
                      placeholder="John Doe Senior"
                    />
                    {errors.guardianName && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.guardianName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Contact Email Address</label>
                    <input
                      type="email"
                      name="guardianEmail"
                      value={formData.guardianEmail}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${errors.guardianEmail ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-indigo-200'} rounded-xl px-4 py-3 outline-none focus:ring-4 focus:border-indigo-500 transition-all text-sm`}
                      placeholder="guardian@example.com"
                    />
                    {errors.guardianEmail && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.guardianEmail}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${errors.guardianPhone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-indigo-200'} rounded-xl px-4 py-3 outline-none focus:ring-4 focus:border-indigo-500 transition-all text-sm`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.guardianPhone && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.guardianPhone}</p>}
                  </div>
                </div>
              )}

              {/* ACTION BUTTON CONTROLS */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 1 || isSubmitting}
                  className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                    currentStep === 1 
                      ? 'text-slate-300 pointer-events-none' 
                      : 'text-slate-600 hover:bg-slate-100 active:scale-95'
                  }`}
                >
                  Back
                </button>

                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md active:scale-95 flex items-center gap-1"
                  >
                    Continue
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-indigo-600 hover:opacity-95 text-white font-semibold rounded-xl text-sm transition-all shadow-lg active:scale-95 disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>Submit Application</span>
                    )}
                  </button>
                )}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}