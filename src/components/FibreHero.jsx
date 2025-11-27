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
import peach_recharge from "../assets/image/peach_recharge.png";
import india from "../assets/image/india.png";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const FibreHero = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/recharge");
  };

  // -------------------------------
  // POPULAR FIBRE PLANS
  // -------------------------------
  const fibrePopularPlans = [
    {
      id: 1,
      title: "Fibre Basic 30Mbps",
      speed: "30 Mbps",
      data: "3.3TB FUP",
      ott: "No OTT",
      oldPrice: 499,
      newPrice: 449,
      icon: <Wifi className="text-emerald-600 size-5" />,
      badge: false,
    },
    {
      id: 2,
      title: "Fibre Premium 100Mbps",
      speed: "100 Mbps",
      data: "3.3TB FUP",
      ott: "Hotstar Mobile",
      oldPrice: 799,
      newPrice: 699,
      icon: <Radio className="text-emerald-600 size-5" />,
      badge: true,
    },
    {
      id: 3,
      title: "Fibre Ultra 150Mbps",
      speed: "150 Mbps",
      data: "4TB FUP",
      ott: "SonyLiv + Zee5",
      oldPrice: 999,
      newPrice: 899,
      icon: <Smartphone className="text-emerald-600 size-5" />,
      badge: false,
    },
    {
      id: 4,
      title: "Fibre Max 200Mbps",
      speed: "200 Mbps",
      data: "4TB FUP",
      ott: "SonyLiv + Zee5 + Hotstar",
      oldPrice: 1299,
      newPrice: 1199,
      icon: <Wifi className="text-emerald-600 size-5" />,
      badge: false,
    },
  ];

  // -------------------------------
  // EXPLORE MORE FIBRE PLANS
  // -------------------------------
  const exploreFibrePlans = [
    {
      id: 101,
      type: "Basic",
      title: "Fibre Basic 30 Mbps",
      speed: "30 Mbps",
      data: "3.3TB FUP",
      ott: "No",
      price: 449,
    },
    {
      id: 102,
      type: "Basic",
      title: "Fibre Basic Plus 60 Mbps",
      speed: "60 Mbps",
      data: "3.3TB FUP",
      ott: "No",
      price: 599,
    },
    {
      id: 103,
      type: "Premium",
      title: "Fibre Premium 100 Mbps",
      speed: "100 Mbps",
      data: "3.3TB FUP",
      ott: "Hotstar Mobile",
      price: 699,
    },
    {
      id: 104,
      type: "Premium",
      title: "Fibre Ultra 150 Mbps",
      speed: "150 Mbps",
      data: "4TB FUP",
      ott: "SonyLiv + Zee5",
      price: 899,
    },
    {
      id: 105,
      type: "Ultra",
      title: "Fibre Ultra Max 200 Mbps",
      speed: "200 Mbps",
      data: "4TB FUP",
      ott: "SonyLiv + Zee5 + Hotstar",
      price: 1199,
    },
    {
      id: 106,
      type: "Ultra",
      title: "Fibre Titanium 300 Mbps",
      speed: "300 Mbps",
      data: "5TB FUP",
      ott: "SonyLiv + Zee5 + Hotstar + Amazon Prime",
      price: 1499,
    },
  ];

  // -------------------------------
  // COMPARISON TABLE
  // -------------------------------
  const comparePlans = [
    {
      id: 1,
      title: "Fibre Basic 30Mbps",
      price: 449,
      speed: "30 Mbps",
      data: "3.3TB",
      ott: "None",
      staticIP: false,
      recommended: false,
    },
    {
      id: 2,
      title: "Fibre Premium 100Mbps",
      price: 699,
      speed: "100 Mbps",
      data: "3.3TB",
      ott: "Hotstar Mobile",
      staticIP: false,
      recommended: true,
    },
    {
      id: 3,
      title: "Fibre Ultra 150Mbps",
      price: 899,
      speed: "150 Mbps",
      data: "4TB",
      ott: "SonyLiv + Zee5",
      staticIP: true,
      recommended: false,
    },
    {
      id: 4,
      title: "Fibre Max 200Mbps",
      price: 1199,
      speed: "200 Mbps",
      data: "4TB",
      ott: "SonyLiv + Zee5 + Hotstar",
      staticIP: true,
      recommended: false,
    },
  ];

  // -------------------------------
  // LOADING SIMULATION
  // -------------------------------
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const SkeletonCard = () => (
    <div className="bg-white border border-neutral-300 rounded-xl p-4 animate-pulse">
      <div className="h-4 bg-neutral-200 w-1/3 mb-4 rounded" />
      <div className="h-3 bg-neutral-200 w-2/3 mb-2 rounded" />
      <div className="h-3 bg-neutral-200 w-1/2 mb-2 rounded" />
      <div className="h-6 bg-neutral-200 w-1/4 ml-auto rounded mt-3" />
    </div>
  );

  const EmptyState = () => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
      className="col-span-1 md:col-span-2 text-center py-20 opacity-80"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
        className="w-24 mx-auto opacity-70 mb-4"
      />
      <h2 className="text-lg font-semibold text-neutral-700 font-poppins">
        No plans found
      </h2>
      <p className="text-sm text-neutral-500">Try different search keywords.</p>
    </motion.div>
  );

  // -------------------------------
  // FILTER LOGIC
  // -------------------------------
  const filteredPlans = exploreFibrePlans
    .filter((p) => (activeTab === "All" ? true : p.type === activeTab))
    .filter((p) => {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.speed.toLowerCase().includes(q) ||
        p.data.toLowerCase().includes(q) ||
        p.ott.toLowerCase().includes(q) ||
        String(p.price).includes(q)
      );
    });

  return (
    <div className="px-4 md:px-0">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col md:flex-row justify-between items-center py-10 md:py-12 gap-8"
      >
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold">
            Fibre Plans.
          </h1>
          <p className="text-sm font-poppins max-w-md text-neutral-700 mx-auto md:mx-0">
            High-speed Bharat Fibre plans for <br className="hidden md:block" />{" "}
            every home and business.
          </p>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleclick}
            className="bg-emerald-600 text-white px-6 py-3 w-full sm:w-max text-sm font-medium hover:bg-emerald-700 transition-colors duration-200 cursor-pointer mx-auto md:mx-0 rounded-md"
          >
            Recharge Now
          </motion.button>
        </div>

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          whileHover={{ y: -2 }}
          src={peach_recharge}
          className="mt-2 md:mt-0 size-54 sm:size-56 md:size-100 rounded-2xl object-cover mx-auto md:mx-0"
          alt="Fibre Recharge"
        />
      </motion.section>

      {/* HERO BANNER IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="relative w-full rounded-xl overflow-hidden mb-4"
      >
        <img
          src="https://jep-asset.akamaized.net/cms/assets/jiofiber/discover/unlimited-desktop-1184x520-feb.webp"
          className="w-full h-56 sm:h-72 md:h-[360px] object-cover"
          alt="High Speed Internet"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold drop-shadow-xl">
            High Speed Internet
          </h1>
          <p className="text-neutral-200 text-sm sm:text-lg font-inter mt-2 drop-shadow">
            Experience ultra-fast Bharat Fibre connectivity.
          </p>
        </div>
      </motion.div>

      {/* POPULAR PLANS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="py-12"
      >
        <h1 className="text-3xl font-poppins font-semibold mb-6">
          Popular Fibre Plans
        </h1>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
          {fibrePopularPlans.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: 0.05 * idx }}
              whileHover={{
                y: -3,
                boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
              }}
              className="relative w-full md:w-80 p-4 rounded-xl 
                border border-neutral-300 
                bg-neutral-100 backdrop-blur-sm shadow-sm 
                transition-all duration-200 
                cursor-pointer"
            >
              {p.badge && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="absolute bottom-3 left-3 bg-emerald-600 text-white text-[10px] px-2 py-1 rounded-full shadow-sm"
                >
                  BEST VALUE
                </motion.span>
              )}

              <div className="flex justify-between mb-2">
                <h2 className="font-poppins text-lg font-semibold">
                  {p.title}
                </h2>
                <motion.div whileHover={{ y: -1 }} className="opacity-90">
                  {p.icon}
                </motion.div>
              </div>

              <p className="text-sm text-neutral-700 font-poppins">
                {p.speed} | {p.data}
              </p>
              <p className="text-sm text-neutral-700 font-poppins">
                OTT: {p.ott}
              </p>

              <div className="flex flex-col items-end mt-3">
                <span className="line-through text-neutral-600 text-sm">
                  ₹{p.oldPrice}
                </span>
                <span className="text-xl font-semibold">₹{p.newPrice}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EXPLORE MORE PLANS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="pt-24"
      >
        <h1 className="text-3xl font-poppins font-semibold mb-14">
          Explore More Fibre Plans
        </h1>

        {/* TAB + SEARCH */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            {["All", "Basic", "Premium", "Ultra"].map((tab, i) => (
              <motion.div
                key={tab}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, delay: 0.05 * i }}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 border-2 rounded-md cursor-pointer transition 
                  ${
                    activeTab === tab
                      ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                      : "border-transparent text-neutral-600 font-medium hover:bg-neutral-100"
                  }`}
              >
                {tab}
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-xl">
            <input
              type="text"
              placeholder="Search plans by speed, FUP, OTT..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-neutral-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
            />
            <FilterIcon className="text-neutral-600 cursor-pointer hidden sm:block" />
          </div>
        </div>

        {/* GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: 0.2 }}
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
            filteredPlans.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, delay: 0.03 * idx }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
                }}
                className="bg-white border border-neutral-300 rounded-xl p-4
                  shadow-sm transition-all duration-200 cursor-pointer"
              >
                <div className="flex justify-between mb-2">
                  <h2 className="font-poppins text-lg font-semibold text-neutral-800">
                    {p.title}
                  </h2>
                  <span className="text-xs bg-neutral-200 px-2 py-1 rounded-full font-medium text-neutral-600">
                    {p.type}
                  </span>
                </div>

                <p className="font-poppins text-sm text-neutral-600">
                  {p.speed}
                </p>
                <p className="font-poppins text-sm text-neutral-600">
                  FUP: {p.data}
                </p>
                <p className="font-poppins text-sm text-neutral-600">
                  OTT: {p.ott}
                </p>

                <div className="flex justify-end mt-3">
                  <span className="text-xl font-poppins font-semibold text-neutral-800">
                    ₹{p.price}
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </motion.section>

      {/* COMPARISON TABLE */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="pt-28 pb-16 font-poppins"
      >
        <h1 className="text-3xl font-poppins font-semibold mb-10">
          Compare Fibre Plans
        </h1>

        <div className="overflow-x-auto pb-2">
          <table className="min-w-[720px] border border-neutral-300 rounded-xl overflow-hidden">
            <thead className="bg-neutral-100 font-roboto font-normal">
              <tr>
                <th className="p-4 text-left">Plan</th>
                <th className="p-4 text-left">Speed</th>
                <th className="p-4 text-left">Data FUP</th>
                <th className="p-4 text-left">OTT</th>
                <th className="p-4 text-left">Static IP</th>
                <th className="p-4 text-left">Price</th>
              </tr>
            </thead>

            <tbody>
              {comparePlans.map((p) => (
                <tr
                  key={p.id}
                  className={`border-b border-neutral-200 hover:bg-neutral-100 transition-colors ${
                    p.recommended ? "bg-neutral-100" : "bg-white"
                  }`}
                >
                  <td className="p-4 font-medium">
                    {p.title}
                    {p.recommended && (
                      <span className="ml-2 text-xs px-2 py-1 bg-emerald-600 text-white rounded-full">
                        Recommended
                      </span>
                    )}
                  </td>
                  <td className="p-4">{p.speed}</td>
                  <td className="p-4">{p.data}</td>
                  <td className="p-4">{p.ott}</td>
                  <td className="p-4">
                    {p.staticIP ? (
                      <span className="text-green-600">Yes</span>
                    ) : (
                      <span className="text-red-500">No</span>
                    )}
                  </td>
                  <td className="p-4 font-semibold">₹{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* WHY CHOOSE BSNL */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="pt-28"
      >
        <h1 className="text-3xl font-poppins font-semibold mb-10">
          Why Choose BSNL Neo?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Wifi className="size-6 text-emerald-600" />,
              title: "Nationwide Coverage",
              desc: "Reliable connectivity powered by BharatNet backbone across urban and rural India.",
            },
            {
              icon: <ShieldCheck className="size-6 text-emerald-600" />,
              title: "Government-Grade Security",
              desc: "Your data stays protected with enterprise-level encryption and compliance.",
            },
            {
              icon: <Gauge className="size-6 text-emerald-600" />,
              title: "Consistent Speeds",
              desc: "Optimized network delivering stable speeds even during peak hours.",
            },
            {
              icon: <Headphones className="size-6 text-emerald-600" />,
              title: "24/7 Customer Support",
              desc: "Round-the-clock support with multilingual assistance.",
            },
            {
              icon: <Globe className="size-6 text-emerald-600" />,
              title: "True Pan-India Service",
              desc: "Coverage in 22 telecom circles — no other operator matches this footprint.",
            },
            {
              icon: <Bolt className="size-6 text-emerald-600" />,
              title: "No Hidden Charges",
              desc: "Straightforward pricing. No bill shocks. No shady fine print.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.07 * i,
              }}
              whileHover={{
                y: -3,
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              }}
              className="bg-white border border-neutral-200 rounded-xl p-6
                transition-all duration-300 cursor-default"
            >
              <motion.div whileHover={{ y: -1 }} className="mb-3 inline-block">
                {item.icon}
              </motion.div>
              <h2 className="font-semibold text-lg text-neutral-800">
                {item.title}
              </h2>
              <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* LOCATION CHECKER */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="pt-28 flex-col items-center"
      >
        <h1 className="text-3xl font-poppins font-semibold mb-6">
          Check Network Availability
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.25, delay: 0.05 }}
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
                className="w-full border border-neutral-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
              />
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="px-6 py-1.5 bg-emerald-600 text-white cursor-pointer font-medium rounded-md text-shadow-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-emerald-700 transition-colors duration-200"
              >
                Check
              </motion.button>
            </div>

            <p className="text-sm text-neutral-400 mt-3 font-inter font-normal">
              *Service availability may vary by location.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="hidden md:block w-78 object-cover md:ml-10"
            src={india}
            alt="India map"
          />
        </div>
      </motion.section>

      {/* ADDONS SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="pt-28 pb-10"
      >
        <h1 className="text-3xl font-poppins font-semibold mb-10">
          Addons & Boosters
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Data Booster",
              desc: "Extra high-speed data when you need it — 4GB / 10GB / 20GB boosters.",
              img: "https://cdn-icons-png.flaticon.com/512/5110/5110513.png",
            },
            {
              title: "OTT Add-ons",
              desc: "Stream your favourites on SonyLiv / ZEE5 / Eros Now bundles.",
              img: "https://cdn-icons-png.flaticon.com/512/3039/3039380.png",
            },
            {
              title: "International Roaming",
              desc: "Affordable IR packs for UAE, USA, Europe & Asia.",
              img: "https://cdn-icons-png.flaticon.com/512/854/854866.png",
            },
            {
              title: "SMS + Call Add-ons",
              desc: "Boost outgoing SMS and international calling minutes.",
              img: "https://cdn-icons-png.flaticon.com/512/3798/3798916.png",
            },
            {
              title: "Security Suite",
              desc: "Anti-virus, anti-phishing, device protection powered by BSNL Secure.",
              img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
            },
            {
              title: "Static IP Add-on",
              desc: "Upgrade your connection with a dedicated Static IP for home or office.",
              img: "https://cdn-icons-png.flaticon.com/512/3159/3159310.png",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.07 * index,
              }}
              whileHover={{
                y: -3,
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              }}
              className="bg-white rounded-xl border border-neutral-200 p-6 
                transition-all duration-300 cursor-pointer"
            >
              <img src={item.img} className="w-14 h-14 mb-4" alt={item.title} />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-neutral-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="py-14 bg-zinc-100/50 text-center mt-4"
      >
        <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-neutral-900">
          BharatConnect.
        </h1>
        <p className="text-lg text-emerald-600 italic font-newsreader mt-2">
          Fast. Reliable. Future-ready fibre.
        </p>
      </motion.div>
    </div>
  );
};

export default FibreHero;
