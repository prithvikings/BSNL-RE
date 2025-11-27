import React from 'react'
import { motion } from 'motion/react'

const Service = () => {
  const services = [
    {
      id: 1,
      title: '# HyperService',
      desc: 'Get your connection serviced faster, easier, better.',
      link: 'Learn More →',
      img: 'https://img.freepik.com/premium-vector/fast-delivery-truck-delivery-service-concept-fast-service-truck-vector-illustration-flat-design_153097-3532.jpg'
    },
    {
      id: 2,
      title: 'Experience Bharat Fiber',
      desc: 'Fiber speed that’s as smooth as your online experience.',
      link: 'Explore Plans →',
      img: 'https://telecomtalk.info/wp-content/uploads/2020/11/bsnl-bharat-fiber-broadband.png'
    },
    {
      id: 3,
      title: '24/7 Customer Support',
      desc: 'Round-the-clock help so you’re never stuck.',
      link: 'Contact Support →',
      img: 'https://careers.jio.com/images/joblist/205.jpg'
    }
  ]

  return (
    <div className="py-24 px-4 md:px-0">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-poppins tracking-tight max-w-xl py-4 font-semibold text-neutral-800"
      >
        Our Services
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.22,1,0.36,1] }}
        viewport={{ once: true }}
        className="text-base md:text-lg font-inter max-w-2xl text-neutral-600"
      >
        Experience top-notch BSNL services built for the future.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12">

        {services.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="
              bg-white 
              rounded-xl 
              shadow-sm 
              hover:shadow-lg 
              transition duration-300 
              p-3 
              cursor-pointer
            "
          >
            {/* Image */}
            <motion.img
              src={item.img}
              alt={item.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25, ease: [0.22,1,0.36,1] }}
              className="
                rounded-t-xl 
                w-full 
                h-40 
                sm:h-48 
                md:h-56 
                object-cover 
                transition 
                duration-300
              "
            />

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-poppins font-semibold py-4 text-neutral-800">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-neutral-600 font-inter text-sm pb-4">
              {item.desc}
            </p>

            {/* Link Button */}
            <motion.button
              whileHover={{ x: 2 }}
              transition={{ duration: 0.15 }}
              className="text-emerald-600 font-semibold text-sm flex items-center gap-1 relative"
            >
              <span className="relative">
                {item.link}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </motion.button>
          </motion.div>
        ))}

      </div>

    </div>
  )
}

export default Service
  