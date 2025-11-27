import React, { useState } from "react";
import { motion,AnimatePresence } from "motion/react";
import contract from "../assets/image/contract.png";
import confetti from "canvas-confetti";
import { CheckCircle, FileText, Lock, Wrench } from "lucide-react";

const NewconnectionHero = () => {
  const tabs = [
    "Application Details",
    "Address",
    "Plan Selection",
    "Upload Documents",
    "Review & Submit",
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    selectedPlan: "",
    documents: null,
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
const [animateStep, setAnimateStep] = useState(false);
const [shake, setShake] = useState(false);

  // VALIDATION
  const validateStep = () => {
    let stepErrors = {};

    if (currentStep === 0) {
      if (!formData.fullName.trim()) stepErrors.fullName = "Name is required";
      if (!/\S+@\S+\.\S+/.test(formData.email))
        stepErrors.email = "Invalid email address";
      if (!/^[0-9]{10}$/.test(formData.phone))
        stepErrors.phone = "Phone must be 10 digits";
    }

    if (currentStep === 1) {
      if (!formData.address.trim()) stepErrors.address = "Address required";
      if (!formData.city.trim()) stepErrors.city = "City required";
      if (!/^[0-9]{6}$/.test(formData.pincode))
        stepErrors.pincode = "Pincode must be 6 digits";
    }

    if (currentStep === 2) {
      if (!formData.selectedPlan)
        stepErrors.selectedPlan = "Please choose a plan";
    }

    if (currentStep === 3) {
      if (!formData.documents)
        stepErrors.documents = "Upload at least one document";
    }

    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) {
    setShake(true);
    setTimeout(() => setShake(false), 400);
    return false;
  }

  return true;
  };

  const nextStep = () => {
    if (validateStep()) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => setCurrentStep(currentStep - 1);

  // SUBMIT SUCCESS
 const handleSubmit = () => {
  setSubmitted(true);

  // Fire two directional bursts like Stripe
  const defaults = {
    spread: 65,
    startVelocity: 45,
    ticks: 50,
    zIndex: 9999,
    scalar: 1.1,
  };

  // LEFT → RIGHT burst
  confetti({
    ...defaults,
    particleCount: 60,
    origin: { x: 0, y: 0.6 },
    angle: 45,            // HEADS toward center
    drift: 0.4,
    colors: ["#0EA5E9", "#2563EB", "#22C55E"],
  });

  // RIGHT → LEFT burst (slight delay for cinematic effect)
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 60,
      origin: { x: 1, y: 0.6 },
      angle: 135,          // HEADS toward center
      drift: -0.4,
      colors: ["#0EA5E9", "#2563EB", "#22C55E"],
    });
  }, 180);

  // Center soft rain (finishing touch)
  setTimeout(() => {
    confetti({
      particleCount: 40,
      spread: 80,
      startVelocity: 25,
      origin: { x: 0.5, y: 0.2 },
      scalar: 0.9,
      ticks: 80,
      drift: 0,
      colors: ["#3B82F6", "#22C55E", "#6366F1"],
    });
  }, 350);

  // Auto-scroll up
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 300);
};


  const progressPercent = ((currentStep + 1) / tabs.length) * 100;

  return (
    <div className="mt-24 pb-20 px-4 md:px-0">
      {/* SUCCESS SCREEN */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)", y: 25 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col items-center text-center mt-10"
        >
          <CheckCircle className="text-green-500 size-16 sm:size-20 animate-pulse" />
          <h1 className="text-2xl sm:text-3xl font-poppins font-semibold mt-4">
            Application Submitted!
          </h1>
          <p className="text-neutral-700 mt-2 text-sm sm:text-base">
            Our team will contact you soon to verify your documents.
          </p>
        </motion.div>
      )}

      {/* FORM + HERO */}
      {!submitted && (
        <>
          {/* HERO SECTION */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 25 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl font-poppins font-semibold leading-tight">
                Apply for a New <br /> Connection
              </h1>

              <p className="text-sm sm:text-lg font-poppins text-neutral-700">
                Fill out the form below to request a{" "}
                <span className="text-emerald-600">BSNL connection.</span>
              </p>
            </div>

            {/* Desktop-only Image */}
            <motion.img
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              src={contract}
              alt="New Connection"
              className="
                hidden md:block w-[350px] h-[260px] 
                object-contain opacity-90
              "
            />
          </motion.div>

          {/* FORM TITLE */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-20"
          >
            <h1 className="text-4xl md:text-5xl font-poppins font-semibold">
              Application Form
            </h1>
            <p className="text-neutral-700 mt-4 text-sm sm:text-base">
              Fill out your details to proceed.
            </p>
          </motion.div>

          {/* PROGRESS BAR */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="w-full bg-neutral-200 rounded-full h-2 my-12 overflow-hidden"
          >
            <motion.div
              key={progressPercent}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="h-full bg-emerald-600"
            />
          </motion.div>

          {/* TABS */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="flex gap-6 mt-6 border-b border-neutral-300 pb-2 overflow-x-auto whitespace-nowrap"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`pb-2 font-poppins text-xs sm:text-sm transition ${
                  currentStep === index
                    ? "border-b-2 border-emerald-600 text-emerald-600 font-semibold"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* STEP CONTENT */}
<AnimatePresence mode="wait">
  <motion.div
    key={currentStep}
    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    className={`mt-10 ${shake ? "shake" : ""}`}
  >

    {/* STEP 1 */}
    {currentStep === 0 && (
      <div className="space-y-6 w-full max-w-[420px]">
        <div className="float-group">
          <input
            type="text"
            className="float-input"
            placeholder=" "
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
          />
          <label className="float-label">Full Name</label>
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        <div className="float-group">
          <input
            type="email"
            className="float-input"
            placeholder=" "
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
          <label className="float-label">Email</label>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="float-group">
          <input
            type="text"
            className="float-input"
            placeholder=" "
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
          <label className="float-label">Phone Number</label>
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <button
          onClick={nextStep}
          className="w-full sm:w-auto px-4 py-2 bg-emerald-600 text-white font-medium rounded-md shadow hover:bg-emerald-700 transition"
        >
          Next
        </button>
      </div>
    )}

    {/* STEP 2 */}
    {currentStep === 1 && (
      <div className="space-y-6 w-full max-w-[420px]">

        <div className="float-group">
          <textarea
            className="float-input h-24"
            placeholder=" "
            value={formData.address}
            onChange={(e) => updateField("address", e.target.value)}
          />
          <label className="float-label">Address</label>
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        <div className="float-group">
          <input
            className="float-input"
            placeholder=" "
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
          />
          <label className="float-label">City</label>
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>

        <div className="float-group">
          <input
            className="float-input"
            placeholder=" "
            value={formData.pincode}
            onChange={(e) => updateField("pincode", e.target.value)}
          />
          <label className="float-label">Pincode</label>
          {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
        </div>

        <div className="flex gap-4">
          <button onClick={prevStep} className="border px-6 py-2 rounded-md">
            Back
          </button>
          <button onClick={nextStep} className="px-4 py-2 bg-emerald-600 text-white rounded-md">
            Next
          </button>
        </div>
      </div>
    )}

    {/* STEP 3 */}
    {currentStep === 2 && (
      <div>
        <h2 className="text-xl font-semibold">Choose a Plan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {["Basic 499", "Premium 699", "Ultra 899"].map((plan) => (
            <motion.div
              key={plan}
              whileHover={{ y: -2, boxShadow: "0 10px 24px rgba(0,0,0,0.12)" }}
              onClick={() => updateField("selectedPlan", plan)}
              className={`border p-4 rounded-xl cursor-pointer transition ${
                formData.selectedPlan === plan
                  ? "border-emerald-600 bg-blue-50"
                  : "border-neutral-300 hover:bg-neutral-100"
              }`}
            >
              <p className="font-semibold">{plan}</p>
              <p className="text-sm text-neutral-600">High-speed fibre plan</p>
            </motion.div>
          ))}
        </div>

        {errors.selectedPlan && (
          <p className="text-red-500 text-sm mt-2">{errors.selectedPlan}</p>
        )}

        <div className="flex gap-4 mt-6">
          <button onClick={prevStep} className="border px-6 py-2 rounded-md">
            Back
          </button>
          <button onClick={nextStep} className="px-4 py-2 bg-emerald-600 text-white rounded-md">
            Next
          </button>
        </div>
      </div>
    )}

    {/* STEP 4 */}
    {currentStep === 3 && (
      <div className="space-y-6 w-full max-w-[420px]">
        <div className="float-group">
          <input
            type="file"
            className="float-input"
            onChange={(e) => updateField("documents", e.target.files[0])}
          />
          <label className="float-label">Upload Document</label>
          {errors.documents && <p className="text-red-500 text-sm">{errors.documents}</p>}
        </div>

        <div className="flex gap-4">
          <button onClick={prevStep} className="border px-6 py-2 rounded-md">
            Back
          </button>
          <button onClick={nextStep} className="px-4 py-2 bg-emerald-600 text-white rounded-md">
            Next
          </button>
        </div>
      </div>
    )}

    {/* STEP 5 */}
    {currentStep === 4 && (
      <div>
        <h2 className="text-xl font-semibold">Review Your Details</h2>

        <motion.div className="mt-6 p-4 border rounded-lg space-y-2 text-sm sm:text-base">
          <p><b>Name:</b> {formData.fullName}</p>
          <p><b>Email:</b> {formData.email}</p>
          <p><b>Phone:</b> {formData.phone}</p>
          <p><b>Address:</b> {formData.address}</p>
          <p><b>City:</b> {formData.city}</p>
          <p><b>Pincode:</b> {formData.pincode}</p>
          <p><b>Plan:</b> {formData.selectedPlan}</p>
          <p><b>Documents:</b> {formData.documents?.name}</p>
        </motion.div>

        <div className="flex gap-4 mt-6">
          <button onClick={prevStep} className="border px-6 py-2 rounded-md">
            Back
          </button>
          <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded-md">
            Submit Application
          </button>
        </div>
      </div>
    )}

  </motion.div>
</AnimatePresence>


          {/* PROCESS STEPS */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            
            className="mt-28 transition: width 0.45s var(--ease);
"
          >
            <h1 className="text-2xl sm:text-3xl font-semibold mb-6 font-poppins">
              Process to Get a New Connection
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <FileText className="text-emerald-600 size-10 mb-3 stroke-1" />
                  ),
                  title: "Submit Application",
                  desc: "Fill out the form.",
                },
                {
                  icon: (
                    <Lock className="text-emerald-600 size-10 mb-3 stroke-1" />
                  ),
                  title: "Verify Documents",
                  desc: "Submit required documents.",
                },
                {
                  icon: (
                    <Wrench className="text-emerald-600 size-10 mb-3 stroke-1" />
                  ),
                  title: "Installation",
                  desc: "Get your connection installed.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: 0.07 * i,
                  }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 12px 28px rgba(0,0,0,0.1)",
                  }}
                  className="border rounded-xl p-6 cursor-pointer transition-all"
                >
                  {step.icon}
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-neutral-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default NewconnectionHero;
