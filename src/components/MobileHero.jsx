import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Wifi,
  Radio,
  FilterIcon,
  Gauge,
  Bolt,
  Globe,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import blue_recharge from "../assets/image/blue_recharge.png";
import india from "../assets/image/india.png";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const MobileHero = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const handleclick = () => navigate("/recharge");

  // Skeleton Loader
  const SkeletonCard = () => (
    <div className="bg-white border border-neutral-300 rounded-xl p-4 animate-pulse">
      <div className="h-4 bg-neutral-200 rounded w-1/3 mb-4"></div>
      <div className="h-3 bg-neutral-200 rounded w-2/3 mb-2"></div>
      <div className="h-3 bg-neutral-200 rounded w-1/2 mb-2"></div>
      <div className="h-6 bg-neutral-200 rounded w-1/4 mt-4 ml-auto"></div>
    </div>
  );

  const EmptyState = () => (
    <motion.div
      initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="col-span-1 md:col-span-2 text-center py-20 opacity-80"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
        className="w-24 mx-auto mb-4 opacity-70"
      />
      <h2 className="font-poppins text-lg font-semibold text-neutral-700">
        No plans found
      </h2>
      <p className="text-sm text-neutral-500">
        Try searching with different keywords.
      </p>
    </motion.div>
  );

  // Simulate Loading
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  const plans = [
    { id: 1, title: "BSNL Neo Lite", validity: "28 Days", data: "1GB/Day", calls: "Unlimited Calls", oldPrice: 199, newPrice: 149, icon: <Smartphone className="text-blue-600 size-5" />, badge: false },
    { id: 2, title: "BSNL Neo Unlimited", validity: "28 Days", data: "1.5GB/Day", calls: "Unlimited Calls", oldPrice: 239, newPrice: 179, icon: <Wifi className="text-blue-600 size-5" />, badge: true },
    { id: 3, title: "BSNL Neo Max", validity: "56 Days", data: "2GB/Day", calls: "Unlimited Calls", oldPrice: 449, newPrice: 379, icon: <Radio className="text-blue-600 size-5" />, badge: false },
    { id: 4, title: "BSNL Neo Marathon", validity: "90 Days", data: "1.5GB/Day", calls: "Unlimited Calls", oldPrice: 599, newPrice: 499, icon: <Wifi className="text-blue-600 size-5" />, badge: false },
    { id: 5, title: "BSNL Neo Annual Lite", validity: "365 Days", data: "2GB/Day", calls: "Unlimited Calls", oldPrice: 1499, newPrice: 1299, icon: <Smartphone className="text-blue-600 size-5" />, badge: false },
    { id: 6, title: "BSNL Neo Student Pack", validity: "84 Days", data: "1GB/Day", calls: "Unlimited Calls", oldPrice: 399, newPrice: 299, icon: <Radio className="text-blue-600 size-5" />, badge: false },
  ];

  const explorePlans = [
    { id: 101, type: "Prepaid", title: "BSNL Basic Saver", validity: "18 Days", data: "1GB/Day", calls: "Unlimited Calls", price: 99 },
    { id: 102, type: "Prepaid", title: "BSNL All-Rounder", validity: "28 Days", data: "2GB/Day", calls: "Unlimited Calls", price: 199 },
    { id: 103, type: "Prepaid", title: "BSNL Power Pack", validity: "84 Days", data: "1.5GB/Day", calls: "Unlimited Calls", price: 499 },
    { id: 104, type: "Postpaid", title: "BSNL Neo Postpaid 399", validity: "Monthly", data: "30GB", calls: "Unlimited", price: 399 },
    { id: 105, type: "Postpaid", title: "BSNL Neo Postpaid 599", validity: "Monthly", data: "75GB", calls: "Unlimited", price: 599 },
    { id: 106, type: "Postpaid", title: "BSNL Neo Postpaid 799", validity: "Monthly", data: "120GB", calls: "Unlimited", price: 799 },
  ];

  const comparePlans = [
    { id: 1, title: "BSNL Neo Lite", price: 149, data: "1GB/day", validity: "28 Days", calls: "Unlimited", sms: "100/day", roaming: false, recommended: false },
    { id: 2, title: "BSNL Neo Unlimited", price: 179, data: "1.5GB/day", validity: "28 Days", calls: "Unlimited", sms: "100/day", roaming: true, recommended: true },
    { id: 3, title: "BSNL Neo Max", price: 379, data: "2GB/day", validity: "56 Days", calls: "Unlimited", sms: "100/day", roaming: true, recommended: false },
    { id: 4, title: "BSNL Neo Lite", price: 149, data: "1GB/day", validity: "28 Days", calls: "Unlimited", sms: "100/day", roaming: false, recommended: false },
    { id: 5, title: "BSNL Neo Unlimited", price: 179, data: "1.5GB/day", validity: "28 Days", calls: "Unlimited", sms: "100/day", roaming: true, recommended: true },
    { id: 6, title: "BSNL Neo Max", price: 379, data: "2GB/day", validity: "56 Days", calls: "Unlimited", sms: "100/day", roaming: true, recommended: false },
  ];

  const filteredPlans = explorePlans
    .filter((p) => (activeTab === "All" ? true : p.type === activeTab))
    .filter((p) => {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.validity.toLowerCase().includes(q) ||
        p.data.toLowerCase().includes(q) ||
        p.calls.toLowerCase().includes(q) ||
        String(p.price).includes(q)
      );
    });

  return (
    <div className="px-4 md:px-0">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row justify-between items-center py-10 md:py-12 gap-8"
      >
        <div className="flex flex-col gap-4 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-poppins text-4xl md:text-5xl font-semibold text-neutral-800"
          >
            Mobile Plans.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 6, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-poppins max-w-md text-neutral-700 mx-auto md:mx-0"
          >
            Choose prepaid and postpaid mobile plans with simple pricing.
          </motion.p>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleclick}
            className="bg-emerald-600 text-white px-6 py-3 w-full sm:w-max text-sm font-medium hover:bg-emerald-700 transition-colors duration-200 cursor-pointer mx-auto md:mx-0 rounded-md"
          >
            Recharge Now
          </motion.button>
        </div>

        <motion.img
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          whileHover={{ y: -2 }}
          className="mt-4 md:mt-0 size-54 sm:size-56 md:size-100 object-cover rounded-2xl mx-auto md:mx-0"
          src={blue_recharge}
          alt="Recharge"
        />
      </motion.div>

      {/* POPULAR PLANS */}
      <motion.section
        initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="py-12"
      >
        <h1 className="font-poppins text-3xl font-semibold mb-6 text-neutral-800">
          Popular Mobile Plans
        </h1>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
          {plans.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -3,
                boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
              }}
              className="
                relative w-full md:w-80 p-4 rounded-xl 
                border border-neutral-300 
                bg-neutral-100 backdrop-blur-sm shadow-sm 
                transition-all duration-200 
                cursor-pointer
              "
            >
              {p.badge && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="
                    absolute bottom-3 left-3 
                    bg-emerald-600 text-white text-[10px] 
                    font-semibold px-2 py-1 rounded-full 
                    shadow-sm tracking-wide
                  "
                >
                  BEST VALUE
                </motion.span>
              )}

              <div className="flex items-center justify-between mb-2">
                <h2 className="font-poppins text-lg font-semibold">
                  {p.title}
                </h2>
                <motion.div
                  whileHover={{ y: -1 }}
                  className="opacity-90"
                >
                  {p.icon}
                </motion.div>
              </div>

              <p className="text-sm font-poppins text-neutral-700">
                {p.validity} | {p.calls} | {p.data}
              </p>

              <div className="flex flex-col items-end mt-3">
                <span className="text-sm font-poppins text-neutral-700 line-through">
                  ₹{p.oldPrice}
                </span>
                <span className="font-poppins text-xl font-semibold">
                  ₹{p.newPrice}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EXPLORE MORE */}
      <motion.section
        initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="py-12 pt-24"
      >
        <h1 className="font-poppins text-3xl font-semibold mb-14">
          Explore More Plans
        </h1>

        {/* Tabs + Search */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {["All", "Prepaid", "Postpaid"].map((tab, i) => (
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setActiveTab(tab)}
                className={`
                  cursor-pointer px-4 py-2 rounded-md border-2 transition
                  ${
                    activeTab === tab
                      ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                      : "border-transparent text-neutral-600 font-medium hover:bg-neutral-100"
                  }
                `}
              >
                <span className="font-poppins text-sm font-medium">
                  {tab}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 6, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="w-full md:w-xl flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Search plans by price, data, validity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-neutral-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <FilterIcon className="text-neutral-600 hidden sm:block" />
          </motion.div>
        </div>

        {/* GRID */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10"
        >
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : filteredPlans.length === 0 ? (
            <EmptyState />
          ) : (
            filteredPlans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, boxShadow: "0 10px 24px rgba(0,0,0,0.10)" }}
                className="bg-white border border-neutral-300 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="flex justify-between mb-2">
                  <h2 className="font-poppins font-semibold text-lg text-neutral-800">
                    {plan.title}
                  </h2>
                  <span className="text-xs bg-neutral-200 px-2 py-1 rounded-full font-medium">
                    {plan.type}
                  </span>
                </div>

                <p className="text-sm font-poppins text-neutral-600">
                  {plan.validity} | {plan.calls}
                </p>
                <p className="text-sm font-poppins text-neutral-600">{plan.data}</p>

                <div className="flex justify-end mt-3">
                  <span className="font-poppins text-xl font-semibold text-neutral-800">
                    ₹{plan.price}
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </motion.section>

      {/* COMPARE PLANS */}
      <motion.section
        initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pt-28 pb-16"
      >
        <h1 className="font-poppins text-3xl font-semibold mb-10">
          Compare Plans
        </h1>

        <div className="overflow-x-auto pb-2">
          <table className="min-w-[700px] border border-neutral-300 rounded-xl overflow-hidden">
            <thead className="bg-neutral-100">
              <tr>
                {["Plan", "Data", "Validity", "Calls", "SMS", "Roaming", "Price"].map((h) => (
                  <th key={h} className="px-6 py-4 text-left font-semibold text-neutral-700">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {comparePlans.map((plan) => (
                <tr
                  key={plan.id + plan.title}
                  className={`
                    border-b border-neutral-200 transition-colors cursor-pointer
                    ${plan.recommended ? "bg-neutral-100" : "bg-white"}
                    hover:bg-neutral-100
                  `}
                >
                  <td className="px-6 py-4 font-poppins font-medium">
                    {plan.title}
                    {plan.recommended && (
                      <span className="ml-2 text-xs bg-emerald-600 text-white px-2 py-1 rounded-full">
                        Recommended
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">{plan.data}</td>
                  <td className="px-6 py-4">{plan.validity}</td>
                  <td className="px-6 py-4">{plan.calls}</td>
                  <td className="px-6 py-4">{plan.sms}</td>
                  <td className="px-6 py-4">
                    {plan.roaming ? (
                      <span className="text-green-600 font-semibold">✅</span>
                    ) : (
                      <span className="text-red-500 font-semibold">✘</span>
                    )}
                  </td>
                  <td className="px-6 py-4 font-semibold">{`₹${plan.price}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* WHY CHOOSE BSNL */}
      <motion.section
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pt-28"
      >
        <h1 className="text-3xl font-poppins font-semibold mb-10">
          Why Choose BSNL Neo?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Wifi className="size-6 text-emerald-600" />, title: "Nationwide Coverage", desc: "Reliable connectivity powered by BharatNet backbone across urban and rural India." },
            { icon: <ShieldCheck className="size-6 text-emerald-600" />, title: "Government-Grade Security", desc: "Your data stays protected with enterprise-level encryption and compliance." },
            { icon: <Gauge className="size-6 text-emerald-600" />, title: "Consistent Speeds", desc: "Optimized network delivering stable speeds even during peak hours." },
            { icon: <Headphones className="size-6 text-emerald-600" />, title: "24/7 Customer Support", desc: "Round-the-clock support with multilingual assistance." },
            { icon: <Globe className="size-6 text-emerald-600" />, title: "True Pan-India Service", desc: "Coverage in 22 telecom circles — no other operator matches this footprint." },
            { icon: <Bolt className="size-6 text-emerald-600" />, title: "No Hidden Charges", desc: "Straightforward pricing. No bill shocks. No shady fine print." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}
              className="bg-white rounded-xl border border-neutral-200 p-6 transition-all duration-300"
            >
              <motion.div whileHover={{ y: -1 }} className="mb-3">
                {item.icon}
              </motion.div>
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CHECK NETWORK */}
      <motion.section
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="pt-28 flex-col items-center"
      >
        <h1 className="text-3xl font-poppins font-semibold mb-6">
          Check Network Availability
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border border-neutral-300 p-6 shadow-sm max-w-xl w-full"
          >
            <p className="text-neutral-700 font-inter font-medium text-sm mb-4">
              Enter your pincode to check service availability in your region.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                maxLength="6"
                placeholder="Enter 6-digit pincode"
                className="w-full border border-neutral-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="px-6 py-1.5 bg-emerald-600 text-white cursor-pointer font-medium rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-emerald-700 transition-colors duration-200"
              >
                Check
              </motion.button>
            </div>

            <p className="text-sm text-neutral-400 mt-3">
              *Service availability may vary by location.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block w-78 object-cover md:ml-10"
            src={india}
            alt="India map"
          />
        </div>
      </motion.section>

      {/* ADDONS */}
      <motion.section
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="pt-28 pb-10"
      >
        <h1 className="text-3xl font-poppins font-semibold mb-10">
          Addons & Boosters
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Data Booster", desc: "Extra high-speed data when you need it — 4GB / 10GB / 20GB boosters.", img: "https://cdn-icons-png.flaticon.com/512/5110/5110513.png" },
            { title: "OTT Add-ons", desc: "Stream your favourites on SonyLiv / ZEE5 / Eros Now bundles.", img: "https://cdn-icons-png.flaticon.com/512/3039/3039380.png" },
            { title: "International Roaming", desc: "Affordable IR packs for UAE, USA, Europe & Asia.", img: "https://cdn-icons-png.flaticon.com/512/854/854866.png" },
            { title: "SMS + Call Add-ons", desc: "Boost outgoing SMS and international calling minutes.", img: "https://cdn-icons-png.flaticon.com/512/3798/3798916.png" },
            { title: "Security Suite", desc: "Anti-virus, anti-phishing, device protection powered by BSNL Secure.", img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png" },
            { title: "Static IP Add-on", desc: "Upgrade your connection with a dedicated Static IP for home or office.", img: "https://cdn-icons-png.flaticon.com/512/3159/3159310.png" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.10)" }}
              className="bg-white rounded-xl border border-neutral-200 p-6 transition-all duration-300 cursor-pointer"
            >
              <img src={item.img} className="w-14 h-14 mb-4" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-neutral-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER HERO */}
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="py-14 bg-zinc-100/50 mt-4"
      >
        <h1 className="text-center text-3xl md:text-4xl font-bricolor tracking-wide font-semibold text-neutral-900">
          BharatConnect. <br />
          <span className="font-newsreader italic font-semibold text-emerald-600 text-lg">
            Secure, fast, and seamless recharges.
          </span>
        </h1>
      </motion.div>
    </div>
  );
};

export default MobileHero;
