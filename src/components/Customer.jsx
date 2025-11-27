import React from 'react'
import { ShieldCheck, Network } from 'lucide-react'
import { motion } from 'motion/react'

const Customer = () => {

  const details = [
    {
      id:1,
      title:"MapMyIndia",
      desc:"MapMyIndia leverages BSNL's robust connectivity solutions to enhance their digital mapping services, ensuring reliable access and seamless user experiences across India.",
      img:"https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/MapMyIndia_Logo.png/1200px-MapMyIndia_Logo.png"
    },
    {
      id:2,
      title:"Microsoft India",
      desc:"Microsoft India partners with BSNL to deliver cutting-edge telecom solutions, utilizing BSNL's extensive network infrastructure to provide superior connectivity and services to their clients.",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
    },
    {
      id:3,
      title:"HCL Technologies",
      desc:"HCL Technologies collaborates with BSNL to enhance their IT and telecom services, leveraging BSNL's reliable network to support HCL's global operations and deliver exceptional solutions to their customers.",
      img:"https://1000logos.net/wp-content/uploads/2023/03/HCL-logo.png",
    },
    {
      id:4,
      title:"Tech Mahindra",
      desc:"Tech Mahindra partners with BSNL to provide innovative telecom and IT solutions, utilizing BSNL's extensive network capabilities to support Tech Mahindra's diverse client base and drive digital transformation.",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/2560px-Tech_Mahindra_New_Logo.svg.png",
    },
    {
      id:5,
      title:"Wipro",
      desc:"Wipro collaborates with BSNL to enhance their IT and telecom services, leveraging BSNL's robust connectivity solutions to support Wipro's global operations and deliver exceptional value to their clients.",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png",
    },
    {
      id:6,
      title:"Larsen & Toubro Infotech",
      desc:"Larsen & Toubro Infotech partners with BSNL to provide advanced IT and telecom solutions, utilizing BSNL's extensive network infrastructure to support LTI's diverse clientele and drive innovation.",
      img:"https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png",
    }
  ]

  return (
    <div className="py-18 px-4 md:px-0">

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22,1,0.36,1] }}
        viewport={{ once: true }}
      >
        <p className="text-md font-mono text-emerald-600 font-medium">
          Nationwide Digital Infrastructure
        </p>

        <h1 className="text-3xl md:text-4xl font-poppins tracking-tight max-w-xl py-4 font-semibold text-neutral-800">
          Empower your enterprise with secure, reliable connectivity
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-normal text-neutral-700 md:max-w-md">
            Stay future-ready with enterprise class connectivity engineered for scale.
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="px-6 py-2 bg-emerald-600 text-white cursor-pointer text-md font-poppins font-medium rounded-full 
            text-shadow-2xs shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-emerald-700 transition duration-300 w-full md:w-auto text-center relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
            <span className="relative z-10">Explore for enterprise</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Two Feature Blocks */}
      <div className="pt-24 pb-18 grid grid-cols-1 md:grid-cols-2 gap-14">
        
        {[{
          icon: Network,
          title: "Work with a nationwide connectivity partner",
          text: "BSNL provides direct access to dedicated enterprise advisors, priority onboarding, and guided network integration built around your infrastructure and operational needs."
        },
        {
          icon: ShieldCheck,
          title: "Secure, compliant, enterprise-grade network",
          text: "Backed by government-grade security with ensured data integrity, role-based access, and strict adherence to national telecom compliance standards."
        }].map((block, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22,1,0.36,1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <block.icon className="text-emerald-600 w-10 h-10" />
            <h1 className="font-semibold font-poppins text-neutral-800 text-xl">
              {block.title}
            </h1>
            <p className="font-inter text-md text-neutral-600 text-left md:text-justify">
              {block.text}
            </p>
          </motion.div>
        ))}

      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-8 w-full [background-image:repeating-linear-gradient(135deg,#e5e7eb_0,#e5e7eb_2px,transparent_2px,transparent_6px)]"
      />

      {/* Logos Section */}
      <div className="pt-24">
        
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-poppins font-semibold text-neutral-800 pb-10 text-center"
        >
          Trusted by leading enterprises
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {details.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: [0.22,1,0.36,1] }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-24 sm:w-32 h-14 object-contain mb-4 grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Customer
