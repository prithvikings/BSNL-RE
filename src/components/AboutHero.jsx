import React from "react";
import { motion } from "motion/react";
import { ArrowRight, MapPin, ShieldCheck, Eye, Globe } from "lucide-react";
import tower_blue from "../assets/image/tower_blue.png";
import india from "../assets/image/india.png";

const AboutHero = () => {
  return (
    <div className="mt-20 pb-20 px-4 md:px-0">

      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-between items-start gap-6"
      >

        {/* LEFT TEXT */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold">
            About BSNL
          </h1>

          <p className="text-base sm:text-lg text-neutral-700 leading-normal">
            Connecting India with reliable telecom <br className="hidden md:block" /> 
            services nationwide.
          </p>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="px-3 py-2 w-full sm:w-1/2 md:w-1/2 mt-4 bg-emerald-600 
            text-white cursor-pointer font-medium rounded-md text-shadow-2xl 
            shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-emerald-700 transition duration-200"
          >
            Read Our Story
          </motion.button>
        </div>

        {/* RIGHT IMAGE — Desktop Only */}
        <motion.img
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          src={tower_blue}
          alt="About"
          className="
            hidden md:block   /* Only Desktop */
            w-48 
            opacity-90 
            object-contain 
            mx-auto md:mx-0
          "
        />
      </motion.div>

      {/* MAIN GRID */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14"
      >

        {/* LEFT — MISSION */}
        <div>
          <h2 className="text-xl sm:text-2xl font-poppins font-semibold mb-3">
            Our Mission
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-8 text-sm sm:text-[15px] font-rubik">
            To deliver seamless communication and advance digital connectivity
            for individuals and businesses across India.
          </p>

          {/* COVERAGE LIST */}
          <div className="border-t border-neutral-300 pt-6">
            <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4">
              Coverage Map
            </h3>

            <ul className="space-y-3">
              {[
                "BSNL Expands 4G Services to New Regions",
                "Launch of New High-Speed Broadband Plans",
                "BSNL Partners with Tech Giants for Innovation",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 3, color: "#2579f4" }}
                  className="flex items-center justify-between cursor-pointer transition font-rubik text-sm sm:text-base"
                >
                  {item}
                  <ArrowRight className="size-4" />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT — MAP + CAREERS */}
        <div className="flex flex-col gap-10">

          {/* MAP BOX */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
            className="border border-neutral-300 rounded-xl p-4 sm:p-6 bg-neutral-50"
          >
            <div className="w-full h-48 sm:h-64 flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                src={india}
                className="w-40 sm:w-56 opacity-70 scale-95"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              className="mt-4 w-full text-center border border-neutral-400 py-2 rounded-md 
              font-medium hover:bg-neutral-100 transition text-sm sm:text-base"
            >
              Check Coverage
            </motion.button>
          </motion.div>

          {/* CAREERS */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-poppins font-semibold">
              Careers
            </h3>
            <p className="text-neutral-700 mt-1 text-sm sm:text-base">
              Join Our Team
            </p>

            <motion.button
              whileTap={{ scale: 0.97 }}
              className="mt-4 px-4 sm:px-5 py-2 border border-emerald-600 text-emerald-600 rounded-md 
              hover:bg-blue-50 transition font-medium text-sm"
            >
              View Openings
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* PRESS RELEASES */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
        className="mt-16 pt-8 border-t border-neutral-300"
      >
        <h2 className="text-xl sm:text-2xl font-poppins font-semibold mb-6">
          Press Releases
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {[
            ["BSNL Expands 4G Services", "Launch of New High-Speed Broadband Plans"],
            ["Read Our Reports", "Pan-India Presence"],
          ].map((col, i) => (
            <div key={i} className="space-y-3">
              {col.map((text, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 3, color: "#2579f4" }}
                  className="flex items-center justify-between cursor-pointer text-sm sm:text-base"
                >
                  {text}
                  <ArrowRight className="size-4" />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* VALUES ROW */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
        className="
          my-20 mb-12 
          grid 
          grid-cols-2 
          sm:grid-cols-4 
          text-center 
          max-w-4xl 
          mx-auto 
          gap-8 sm:gap-4
        "
      >
        {[
          { icon: <MapPin className="text-emerald-600 size-8 sm:size-10 stroke-1" />, text: "Customer Focus" },
          { icon: <ShieldCheck className="text-emerald-600 size-8 sm:size-10 stroke-1" />, text: "Reliability" },
          { icon: <Eye className="text-emerald-600 size-8 sm:size-10 stroke-1" />, text: "Transparency" },
          { icon: <Globe className="text-emerald-600 size-8 sm:size-10 stroke-1" />, text: "Pan-India Presence" },
        ].map((v, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            {v.icon}
            <p className="font-medium text-sm sm:text-base">{v.text}</p>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default AboutHero;
