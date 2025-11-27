import React, { useState, useEffect } from "react";
import {
  X,
  CheckCircle2,
  Search,
  Smartphone,
  CreditCard,
  Banknote,
  Wallet,
} from "lucide-react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "motion/react";

const plans = [
  { id: 1, name: "Combo Voucher", price: 199, data: "2GB/day", validity: "28 Days" },
  { id: 2, name: "Data Pack", price: 149, data: "1GB/day", validity: "20 Days" },
  { id: 3, name: "Unlimited Pack", price: 299, data: "1.5GB/day", validity: "28 Days" },
  { id: 4, name: "BSNL Power Pack", price: 399, data: "3GB/day", validity: "55 Days" },
];

const recentRecharges = [
  { number: "9875543210", price: 399, type: "Combo Voucher", details: "3GB/Day, 55 Days" },
  { number: "9875543210", price: 199, type: "Combo Saver", details: "1GB/Day, 28 Days" },
  { number: "9875543210", price: 499, type: "Power Pack", details: "2GB/Day, 70 Days" },
];

const RechargeHero = () => {
  const [mobile, setMobile] = useState("");
  const [tab, setTab] = useState("Prepaid");
  const [error, setError] = useState("");

  const [pageLoading, setPageLoading] = useState(true);
  const [proceedLoading, setProceedLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fake initial load for skeletons
  useEffect(() => {
    const timeout = setTimeout(() => setPageLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  const validateNumber = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return false;
    }
    setError("");
    return true;
  };

  const handleProceed = () => {
    if (!validateNumber()) return;

    setProceedLoading(true);
    setTimeout(() => {
      setProceedLoading(false);
      setShowPlanModal(true);
    }, 600);
  };

  const handleRecharge = (plan) => {
    setSelectedPlan(plan);
    setShowPlanModal(false);

    setTimeout(() => {
      setShowSuccess(true);

      // Directional, Stripe-like confetti
      const defaults = {
        spread: 65,
        startVelocity: 45,
        ticks: 50,
        zIndex: 9999,
        scalar: 1.05,
      };

      // Left → center
      confetti({
        ...defaults,
        particleCount: 60,
        origin: { x: 0, y: 0.6 },
        angle: 45,
        drift: 0.4,
        colors: ["#0EA5E9", "#2563EB", "#22C55E"],
      });

      // Right → center
      setTimeout(() => {
        confetti({
          ...defaults,
          particleCount: 60,
          origin: { x: 1, y: 0.6 },
          angle: 135,
          drift: -0.4,
          colors: ["#0EA5E9", "#2563EB", "#22C55E"],
        });
      }, 160);

      // Soft center rain
      setTimeout(() => {
        confetti({
          particleCount: 40,
          spread: 80,
          startVelocity: 25,
          origin: { x: 0.5, y: 0.2 },
          scalar: 0.9,
          ticks: 80,
          colors: ["#3B82F6", "#22C55E", "#6366F1"],
        });
      }, 320);

      setTimeout(() => setShowSuccess(false), 2500);
    }, 350);
  };

  const filtered = recentRecharges.filter((item) =>
    item.number.includes(searchQuery)
  );

  return (
    <div className="mt-16 md:mt-20 pb-24 md:pb-32 px-4 md:px-0">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl font-inter font-semibold">
          Recharge or Pay
        </h1>
        <p className="text-neutral-600 mt-4 font-inter text-sm sm:text-base">
          Recharge your prepaid number or pay your <br className="hidden sm:block" />
          broadband, postpaid or landline bills.
        </p>
      </motion.div>

      {/* MAIN CARD / SKELETON */}
      {pageLoading ? (
        <div className="max-w-xl mx-auto mt-10 border border-neutral-300 rounded-xl p-4 sm:p-6 md:p-8 bg-white shadow-sm animate-pulse">
          <div className="h-6 w-1/3 bg-neutral-200 rounded mb-4" />
          <div className="h-4 w-1/5 bg-neutral-200 rounded mb-2" />
          <div className="h-10 w-full bg-neutral-200 rounded mb-6" />

          <div className="flex gap-4 mb-6">
            <div className="h-6 w-16 bg-neutral-200 rounded" />
            <div className="h-6 w-16 bg-neutral-200 rounded" />
            <div className="h-6 w-20 bg-neutral-200 rounded" />
          </div>

          <div className="h-10 w-full bg-neutral-200 rounded" />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-xl mx-auto mt-10 border border-neutral-300 rounded-xl p-4 sm:p-6 md:p-8 bg-white shadow-sm"
        >
          <h2 className="text-xl font-semibold mb-4 text-neutral-800 font-poppins">
            Recharge or Pay Bills
          </h2>

          <label className="text-sm font-medium font-poppins text-neutral-800">
            Mobile Number
          </label>
          <input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full font-poppins border mt-2 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition duration-300"
            placeholder="Enter mobile number..."
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* TABS */}
          <div className="flex gap-4 sm:gap-6 mt-5 text-sm overflow-x-auto whitespace-nowrap">
            {["Prepaid", "Postpaid", "Broadband", "Landline"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-1 ${
                  tab === t
                    ? "text-emerald-600 border-b-2 border-emerald-600 font-poppins"
                    : "text-neutral-500 font-poppins"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* PROCEED */}
          <motion.button
            whileTap={{ scale: proceedLoading ? 1 : 0.97 }}
            onClick={handleProceed}
            disabled={proceedLoading}
            className={`w-full text-white py-2 rounded-md mt-6 font-medium transition ${
              proceedLoading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
            {proceedLoading ? "Processing..." : "Proceed"}
          </motion.button>
        </motion.div>
      )}

      {/* PLAN SELECT MODAL */}
      <AnimatePresence>
        {showPlanModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 10, scale: 0.97, filter: "blur(6px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white w-[92%] max-w-md rounded-xl p-6 shadow-xl relative"
            >
              <button
                className="absolute right-4 top-4"
                onClick={() => setShowPlanModal(false)}
              >
                <X className="size-5" />
              </button>

              <h2 className="text-xl font-semibold mb-5">Select a Plan</h2>

              <div className="space-y-3">
                {plans.map((p) => (
                  <motion.div
                    key={p.id}
                    whileHover={{
                      y: -2,
                      boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                    }}
                    onClick={() => handleRecharge(p)}
                    className="border rounded-lg p-4 cursor-pointer hover:border-emerald-500 hover:bg-emerald-50/50 transition"
                  >
                    <div className="flex justify-between">
                      <h3 className="font-medium">{p.name}</h3>
                      <span className="font-semibold text-emerald-600">
                        ₹{p.price}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-600">
                      {p.data} • {p.validity}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RECENT RECHARGES */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold font-poppins mb-4 text-neutral-800">
          Recent Recharges
        </h2>

        {/* SEARCH BAR */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 size-5 text-neutral-500" />
          <input
            type="text"
            placeholder="Search your previous recharges"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-neutral-300 pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 transition duration-300 text-sm"
          />
        </div>

        {/* LIST / SKELETON */}
        <div className="mt-6 space-y-4">
          {pageLoading ? (
            <>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="animate-pulse bg-white border p-4 rounded-xl"
                >
                  <div className="h-4 w-1/4 bg-neutral-200 rounded" />
                  <div className="h-3 w-1/3 bg-neutral-200 rounded mt-2" />
                  <div className="h-3 w-1/5 bg-neutral-200 rounded mt-2" />
                </div>
              ))}
            </>
          ) : (
            filtered.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -2,
                  boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                }}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-white border border-neutral-300 p-4 rounded-xl shadow-sm"
              >
                <div>
                  <p className="font-semibold">{item.number}</p>
                  <p className="text-neutral-700 text-sm">{item.type}</p>
                  <p className="text-neutral-500 text-sm">{item.details}</p>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-end gap-2 sm:gap-0">
                  <p className="text-lg font-semibold">₹{item.price}</p>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="bg-emerald-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-emerald-700 transition"
                  >
                    Recharge
                  </motion.button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      {/* PAYMENT METHODS */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold font-poppins mb-6">
          Payment Methods
        </h2>

        {pageLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border rounded-xl p-6 animate-pulse bg-white flex flex-col items-center"
              >
                <div className="h-10 w-10 bg-neutral-200 rounded-full" />
                <div className="h-3 w-20 bg-neutral-200 rounded mt-3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <CreditCard className="size-8 text-neutral-600" />,
                  label: "Credit / Debit Card",
                },
                {
                  icon: <Banknote className="size-8 text-neutral-600" />,
                  label: "Net Banking",
                },
                {
                  icon: <Smartphone className="size-8 text-neutral-600" />,
                  label: "UPI",
                },
                {
                  icon: <Wallet className="size-8 text-neutral-600" />,
                  label: "Wallet",
                },
              ].map((item) => (
  <motion.div
    key={item.label}
    whileHover={{
      y: -2,
      boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
    }}
    transition={{ duration: 0.2 }}
    className="flex items-center gap-4 border rounded-xl bg-gray-100/50 cursor-pointer p-5 sm:p-6"
  >
    {item.icon}
    <p className="font-medium text-sm sm:text-base">{item.label}</p>
  </motion.div>
))}
            </div>
          </div>
        )}
      </motion.div>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showSuccess && selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, y: 10, filter: "blur(6px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white p-8 rounded-xl shadow-lg text-center w-80"
            >
              <CheckCircle2 className="text-green-500 size-16 mx-auto" />
              <h2 className="text-xl font-semibold mt-4">
                Recharge Successful!
              </h2>
              <p className="text-neutral-600 mt-1 text-sm sm:text-base">
                Your recharge of{" "}
                <span className="font-semibold">₹{selectedPlan.price}</span> is
                completed.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RechargeHero;
