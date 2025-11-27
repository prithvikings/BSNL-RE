import {
  TriangleAlert,
  Truck,
  MapPin,
  Headset,
  Cable,
  Gauge,
  Receipt,
  Voicemail,
  Router,
  CardSim,
} from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const SupportHero = () => {
  const helpItems = [
    { title: "SIM Issues", icon: <CardSim className="size-7 sm:size-8 text-neutral-700" /> },
    { title: "Slow Internet", icon: <Gauge className="size-7 sm:size-8 text-neutral-700" /> },
    { title: "Fiber Not Working", icon: <Cable className="size-7 sm:size-8 text-neutral-700" /> },
    { title: "Billing Issues", icon: <Receipt className="size-7 sm:size-8 text-neutral-700" /> },
    { title: "VOLTE Issues", icon: <Voicemail className="size-7 sm:size-8 text-neutral-700" /> },
    { title: "Router Setup", icon: <Router className="size-7 sm:size-8 text-neutral-700" /> },
  ];

  return (
    <div className="py-24 px-4 md:px-0">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex items-center flex-col gap-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold">
          Support
        </h1>

        <p className="text-sm sm:text-md font-poppins font-medium text-neutral-600">
          Get help with your BSNL services.
        </p>
      </motion.div>

      {/* TOP SUPPORT ACTIONS */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          gap-4 
          mt-14
        "
      >
        {[
          {
            icon: <TriangleAlert className="text-emerald-500 size-12 sm:size-14 mr-4 stroke-1" />,
            title: "Raise Complaint",
          },
          {
            icon: <Truck className="text-emerald-500 size-12 sm:size-14 mr-4 stroke-1" />,
            title: "Track Complaint",
          },
          {
            icon: <MapPin className="text-emerald-500 size-12 sm:size-14 mr-4 stroke-1" />,
            title: "Locate Center",
          },
          {
            icon: <Headset className="text-emerald-500 size-12 sm:size-14 mr-4 stroke-1" />,
            title: "Customer Support",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
            whileHover={{
              y: -3,
              boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
            }}
            className="bg-white rounded-md border border-neutral-300 cursor-pointer transition-shadow duration-300"
          >
            <div className="flex items-center p-4 sm:p-6">
              {item.icon}
              <p className="text-lg sm:text-xl font-rubik">{item.title}</p>
            </div>
            <div className="border-t border-neutral-300 p-4 sm:p-6">
              <h1 className="text-center font-poppins font-normal">{item.title}</h1>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SELF HELP ARTICLES */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(7px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        className="mt-14"
      >
        <div className="bg-white rounded-xl border border-neutral-300 shadow-sm overflow-hidden">

          {/* Header */}
          <div className="p-6">
            <h1 className="text-lg sm:text-xl font-poppins font-semibold text-neutral-800">
              Self-Help Articles
            </h1>
          </div>

          {/* GRID */}
          <div
            className="
              grid 
              grid-cols-2 
              sm:grid-cols-2 
              md:grid-cols-3 
              border-t border-neutral-200
            "
          >
            {helpItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: 0.05 * index,
                }}
                whileHover={{
                  backgroundColor: "rgb(249,249,249)",
                }}
                className="flex flex-col items-center justify-center py-6 sm:py-8 border border-neutral-200 cursor-pointer transition duration-200"
              >
                {item.icon}
                <p className="font-poppins text-xs sm:text-sm font-medium text-neutral-700 mt-2">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CONTACT SUPPORT CTA */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
            whileHover={{
              backgroundColor: "rgb(245,245,245)",
            }}
            className="border-t border-neutral-200 p-6 cursor-pointer transition duration-200"
          >
            <h1 className="text-center text-md sm:text-lg font-poppins font-medium text-emerald-600">
              Contact Support
            </h1>
          </motion.div>
        </div>
      </motion.div>

      {/* CONTACT SECTION */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(7px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
        className="mt-14"
      >
        <div className="bg-white rounded-xl border border-neutral-300 shadow-sm overflow-hidden">

          <div className="p-6 border-b-2 border-neutral-200">
            <h1 className="text-lg sm:text-xl font-poppins font-semibold text-neutral-800">
              Contact
            </h1>
          </div>

          <div className="p-6 space-y-4 text-sm sm:text-base">
            <div>
              <h2 className="font-poppins font-medium text-neutral-700">Customer Care Number:</h2>
              <p className="font-rubik text-neutral-600">1800-345-1500</p>
            </div>
            <div>
              <h2 className="font-poppins font-medium text-neutral-700">Email Support:</h2>
              <p className="font-rubik text-neutral-600">
                prithvi07raj07@gmail.com
              </p>
            </div>
            <div>
              <h2 className="font-poppins font-medium text-neutral-700">Office Address:</h2>
              <p className="font-rubik text-neutral-600">
                BSNL Corporate Office, New Delhi, India
              </p>
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default SupportHero;
