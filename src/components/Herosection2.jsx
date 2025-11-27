// [#2579f4]
import { BiSupport } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { IoLocateOutline, IoSpeedometerOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import {motion} from 'motion/react';

const HeroSection2 = () => {
  const smallCardData = [
    {
      id: 1,
      icon: <TbTruckDelivery className="text-emerald-600" />,
      title: "Track Order",
      description: "Get real-time updates on your order status.",
    },
    {
      id: 2,
      icon: <BiSupport className="text-emerald-600" />,
      title: "Complaint Status",
      description: "Check the status of your complaints easily.",
    },
    {
      id: 3,
      icon: <IoLocateOutline className="text-emerald-600" />,
      title: "Check Coverage",
      description: "Verify service availability in your area.",
    },
    {
      id: 4,
      icon: <IoSpeedometerOutline className="text-emerald-600" />,
      title: "Speed Test",
      description: "Test your internet connection speed instantly.",
    },
  ];

  const plans = [
    {
      id: 1,
      name: "1.5 GB/day",
      description: "Unlimited calls and SMS",
      smalldesc: "India's best value plan",
      speed: "100 Mbps",
      data: "Unlimited",
      price: "₹999/month",
    },
    {
      id: 2,
      name: "2 GB/day",
      speed: "200 Mbps",
      description: "Unlimited calls and SMS",
      smalldesc: "India's best value plan",
      data: "Unlimited",
      price: "₹1299/month",
    },
    {
      id: 3,
      name: "2.5 GB/day",
      speed: "300 Mbps",
      description: "Unlimited calls and SMS",
      smalldesc: "India's best value plan",
      data: "Unlimited",
      price: "₹1599/month",
    },
  ];

  return (
    <div>
      {/* Quick Service */}
      <div className="flex flex-col items-center justify-center gap-4 selection:bg-neutral-700 selection:text-white">
        <h1 className="text-3xl md:text-4xl font-poppins mt-20 font-medium">
          Quick Service
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 px-4 max-w-4xl w-full"
        >
          {smallCardData.map(({ id, icon, title, description }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex flex-col items-center cursor-pointer hover:bg-[#E7EFFD]
              active:bg-[#CAD6ED] transition duration-200 justify-center gap-2 
              px-6 py-4 font-medium shadow-[0px_4px_3px_-1px_rgba(0,0,0,0.1),
              0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md"
            >
              <div className="text-4xl mb-2">{icon}</div>
              <div className="text-lg">{title}</div>
              <div className="text-sm text-center text-neutral-600">
                {description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fibre Plans */}
      <div className="mt-24 px-4">
        <h1 className="text-3xl md:text-4xl font-medium my-4 font-rubik">
          Popular{" "}
          <span className="text-emerald-600 font-newsreader italic">
            Fibre Plans
          </span>
        </h1>

        <motion.div 
        initial={{
          opacity:0,
          y:20,
          filter:'blur(4px)',
        }}
        whileInView={{
          opacity:1,
          y:0,
          filter:'blur(0px)',
        }}
        transition={{
          duration:0.3,
          ease:'easeIn',
          delay:0.2
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="border-1 border-neutral-300 px-4 py-4 rounded-xl 
              shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <div className="flex flex-col mb-8 items-start gap-1">
                <h2 className="text-3xl md:text-4xl font-semibold font-rubik text-neutral-800">
                  {plan.name}
                </h2>
                <p className="text-lg font-poppins font-medium text-neutral-700">
                  {plan.description}
                </p>
              </div>

              <p className="text-md font-lato">
                <FaCheckCircle className="text-emerald-600 inline mr-2" />
                {plan.smalldesc}
              </p>
              <p className="text-md font-lato">
                <FaCheckCircle className="text-emerald-600 inline mr-2" />
                Data: {plan.data}
              </p>
              <p className="text-md font-lato">
                <FaCheckCircle className="text-emerald-600 inline mr-2" />
                Price: {plan.price}
              </p>

              <button className="mt-4 px-8 py-2 bg-emerald-600 text-neutral-100 text-sm cursor-pointer font-medium hover:bg-emerald-700 transition duration-300">
                Check {plan.name} plans
              </button>
            </div>
          ))}

          <p className="text-md flex items-center">
            See all fibre plans
            <FaArrowRight className="text-emerald-600 inline ml-2" />
          </p>
        </motion.div>
      </div>

      {/* Mobile Plans */}
      <div className="mt-12 px-4">
        <h1 className="text-3xl md:text-4xl font-medium my-4 font-rubik">
          Popular{" "}
          <span className="text-emerald-600 font-newsreader italic">
            Mobile Plans
          </span>
        </h1>

        <motion.div
        initial={{
          opacity:0,
          y:20,
          filter:'blur(4px)',
        }}
        whileInView={{
          opacity:1,
          y:0,
          filter:'blur(0px)',
        }}
        transition={{
          duration:0.3,
          ease:'easeIn',
          delay:0.2
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="border-1 border-neutral-300 px-4 py-4 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <div className="flex flex-col mb-8 items-start gap-1">
                <h2 className="text-3xl md:text-4xl font-semibold font-rubik text-neutral-800">
                  {plan.name}
                </h2>
                <p className="text-lg font-poppins font-medium text-neutral-700">
                  {plan.description}
                </p>
              </div>

              <p className="text-md font-lato">
                <FaCheckCircle className="text-emerald-600 inline mr-2" />
                {plan.smalldesc}
              </p>
              <p className="text-md font-lato">
                <FaCheckCircle className="text-emerald-600 inline mr-2" />
                Data: {plan.data}
              </p>
              <p className="text-md font-lato">
                <FaCheckCircle className="text-emerald-600 inline mr-2" />
                Price: {plan.price}
              </p>

              <button className="mt-4 px-8 py-2 bg-emerald-600 text-neutral-100 text-sm cursor-pointer font-medium hover:bg-emerald-700 transition duration-300">
                Check {plan.name} plans
              </button>
            </div>
          ))}

          <p className="text-md flex items-center">
            See all Mobile plans
            <FaArrowRight className="text-emerald-600 inline ml-2" />
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection2;
