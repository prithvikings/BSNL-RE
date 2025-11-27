import React from "react";
import { motion } from "motion/react";

const BentoGrid = () => {
  const items = [
    {
      id: 1,
      title: "Bharat Fibre",
      text: "Ultra-fast fibre broadband built for seamless streaming, gaming, and remote work.",
      border: "border-3 border-neutral-700 shadow-[2px_1px_0px_0px_#000000]",
      hoverShadow: "hover:shadow-[3px_3px_0px_0px_#000000]",
      span: "",
    },
    {
      id: 2,
      title: "4G Expansion",
      text: "Faster, stronger 4G as BSNL upgrades towers nationwide for improved reliability.",
      border: "border-2 border-neutral-500 shadow-[0_4px_16px_rgba(0,0,0,0.08)]",
      hoverShadow: "hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]",
      span: "",
    },
    {
      id: 3,
      title: "Affordable Plans",
      text: "Simple, transparent pricing designed to fit every user’s needs.",
      border: "border-2 border-neutral-500 shadow-sm",
      hoverShadow: "hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]",
      span: "",
    },
    {
      id: 4,
      title: "Nation-Wide Coverage",
      text: "Reaching cities, towns, villages, and remote areas — BSNL connects India like no one else.",
      border: "border-2 border-neutral-500 shadow-sm",
      hoverShadow: "hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]",
      span: "col-span-2 md:col-span-2",
    },
    {
      id: 5,
      title: "24/7 Support",
      text: "Always available to assist you with quick, customer-first support.",
      border: "border-3 border-neutral-700 shadow-[2px_1px_0px_0px_#000000]",
      hoverShadow: "hover:shadow-[3px_3px_0px_0px_#000000]",
      span: "",
    },
    {
      id: 6,
      title: "Secure Network",
      text: "Trusted, government-grade infrastructure built with security at its core.",
      border: "border-2 border-neutral-500 shadow-sm",
      hoverShadow: "hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]",
      span: "",
    },
    {
      id: 7,
      title: "Digital India Backbone",
      text: "Powering schools, enterprises, homes, and government sectors with essential connectivity.",
      border: "border-3 border-neutral-700 shadow-[2px_1px_0px_0px_#000000]",
      hoverShadow: "hover:shadow-[3px_3px_0px_0px_#000000]",
      span: "col-span-2 md:col-span-2",
    },
    {
      id: 8,
      title: "Upcoming 5G",
      text: "Next-gen 5G rollout in progress, bringing high-speed connectivity to every BSNL user.",
      border: "border-2 border-neutral-500 shadow-sm",
      hoverShadow: "hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]",
      span: "col-span-2 md:col-span-3",
    },
  ];

  return (
    <div className="py-24 px-2 sm:px-4">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight py-8 text-neutral-800 font-rubik">
        What we{" "}
        <span className="font-newsreader italic text-emerald-600 font-medium tracking-wide">
          offer
        </span>
      </h1>

      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-3 
          max-w-4xl 
          mx-auto
        "
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className={`
              p-3 sm:p-4 md:p-6 
              bg-neutral-100 
              transition duration-300
              ${item.border}
              ${item.hoverShadow}
              ${item.span}
            `}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-emerald-600 font-rubik">
              {item.title}
            </h2>
            <p className="text-neutral-700 text-xs sm:text-sm font-poppins">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
