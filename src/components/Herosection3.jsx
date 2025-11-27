import { motion } from "motion/react";

const Herosection3 = () => {
  return (
    <div className="py-24 px-4 max-w-2xl mx-auto">

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-lato tracking-wide font-medium text-neutral-100"
      >
        Dear Customer
      </motion.h1>

      {/* Paragraph 1 */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
        viewport={{ once: true }}
        className="text-base sm:text-lg md:text-xl leading-relaxed md:leading-xl mt-8 max-w-4xl font-alegreya text-neutral-300 text-left md:text-justify"
      >
        We want to speak to you openly and honestly. We know that our service
        has not always met the standard you expect, and we understand the
        frustration that inconsistent network performance can cause in your
        daily life. You rely on us for communication, work, studies, and staying
        connected with the people who matter and we haven’t always delivered that reliably.
      </motion.p>

      {/* Paragraph 2 */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="text-base sm:text-lg md:text-xl leading-relaxed md:leading-md mt-8 max-w-4xl font-alegreya text-neutral-300 text-left md:text-justify"
      >
        We are truly sorry for any inconvenience this has caused. Please know
        that we are{" "}
        <span className="text-white font-poppins font-semibold text-base md:text-lg">
          actively working{" "}
        </span>
        to improve our network infrastructure and service quality. Your
        experience is our top priority, and we are committed to making the
        necessary changes to regain your trust.
      </motion.p>

      {/* Paragraph 3 */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="text-base sm:text-lg md:text-xl leading-relaxed md:leading-xl mt-8 max-w-4xl font-alegreya text-neutral-300 text-left md:text-justify"
      >
        Thank you for your patience and understanding as we strive to{" "}
        <span className="text-white font-poppins font-semibold text-base md:text-lg">
          serve you better.
        </span>{" "}
        We value your loyalty and are dedicated to providing you with the
        reliable service you deserve.
      </motion.p>

      {/* Signature */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="text-base sm:text-lg md:text-xl tracking-tight mt-8 max-w-4xl font-lato text-neutral-300 text-left md:text-justify"
      >
        Sincerely, <br />
        BSNL Team
      </motion.p>
    </div>
  );
};

export default Herosection3;



{
  /* <div className="py-20 px-4">
        <h1 className="text-center text-4xl font-medium bg-clip-text bg-gradient-to-b from-slate-600 to-neutral-900 text-transparent ">
          Why Choose BSNL
        </h1>
        <div className="flex items-center justify-center gap-8 mt-12">
          <div className="text-center">
            <TbTruckDelivery className="text-4xl text-[#2579f4] mx-auto" />
            <h2 className="text-md font-semibold mt-4">Wide Coverage</h2>
            <p className="text-neutral-600 mt-2">
              Reliable connectivity across urban and rural areas.
            </p>
          </div>
          <div className="text-center">
            <BiSupport className="text-4xl text-[#2579f4] mx-auto" />
            <h2 className="text-md font-semibold mt-4">24/7 Support</h2>
            <p className="text-neutral-600 mt-2">
              Dedicated customer service available round the clock.
            </p>
          </div>
          <div className="text-center">
            <IoSpeedometerOutline className="text-4xl text-[#2579f4] mx-auto" />
            <h2 className="text-md font-semibold mt-4">High Speed</h2>
            <p className="text-neutral-600 mt-2">
              Experience blazing fast internet speeds for all your needs.
            </p>
          </div>
        </div>
      </div>  */
}
