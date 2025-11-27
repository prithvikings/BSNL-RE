// [#2579f4]

import { BsFillLightningChargeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {motion} from 'motion/react';
const Hero = () => {

  const navigate = useNavigate();

  const handleclick=()=>{
    navigate('/recharge');
  }

  const imageInfiniteScrollData = [
    {
      id: 1,
      src: "https://companieslogo.com/img/orig/TEJASNET.NS-3e1a5d00.png?t=1747638762",
      alt: "Tejasnetworks Logo",
    },
    {
      id: 2,
      src: "https://www.hfcl.com/HFCL-Blue-Logo.png",
      alt: "HFCL Logo",
    },
    {
      id: 3,
      src: "https://images.seeklogo.com/logo-png/61/2/tata-consultancy-services-logo-png_seeklogo-615014.png",
      alt: "TCS Logo",
    },
    {
      id: 4,
      src: "https://companieslogo.com/img/orig/MTNL.NS_BIG-332cae0a.png?t=1720244493",
      alt: "MTNL Logo",
    },
    {
      id: 5,
      src: "https://upload.wikimedia.org/wikipedia/commons/5/56/Steel_Authority_of_India_logo.svg",
      alt: "SAIL Logo",
    },
    {
      id: 6,
      src: "https://download.logo.wine/logo/Oil_and_Natural_Gas_Corporation/Oil_and_Natural_Gas_Corporation-Logo.wine.png",
      alt: "ONGC Logo",
    },
    {
      id: 7,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/National_Thermal_Power_logo.svg/1200px-National_Thermal_Power_logo.svg.png",
      alt: "NTPC Logo",
    },
    {
      id: 8,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Indian_Oil_Logo.svg/1713px-Indian_Oil_Logo.svg.png",
      alt: "IOCL Logo",
    },
    {
      id: 9,
      src: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/hindustan-aeronautics-limited-hal-logo-hd.png",
      alt: "HAL Logo",
    },
    {
      id: 10,
      src: "https://download.logo.wine/logo/Bharat_Heavy_Electricals_Limited/Bharat_Heavy_Electricals_Limited-Logo.wine.png",
      alt: "BHEL Logo",
    },
  ];
  return (
    <div className="my-20">
      <div className="flex flex-col items-center justify-center gap-4 selection:bg-neutral-700 selection:text-white">
          <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#EEF2F6] px-4 py-0.5 rounded-full font-medium text-sm text-[#1b1a1a] 
          cursor-pointer flex items-center justify-between gap-2 border border-[#E7EAEE] 
          transition duration-200 hover:bg-[#dadcde]"
        >
          Lightning Fast <BsFillLightningChargeFill className="text-amber-300" />
        </motion.div>
        <motion.h1 
        initial={{
          opacity:0,
          scale:1.1,
          filter:'blur(10px)',

        }}
        animate={{
          opacity:1,
          scale:1,
          filter:'blur(0px)',
        }}
        transition={{
          duration:0.3,
          ease:'easeIn',
          delay:0.1

        }}

        className="text-center font-bricolor text-5xl font-semibold mt-6 bg-gradient-to-b from-slate-600 to-neutral-900 text-transparent bg-clip-text leading-tight">
          Fast, Affordable <br />
          Connectivity{" "}
          <span className="font-newsreader italic text-emerald-600"> Across India</span>
        </motion.h1>
        <motion.p
        initial={{
          opacity:0,
          y:20,
        }}
        animate={{
          opacity:1,
          y:0,
        }}
        transition={{
          duration:0.3,
          ease:'easeIn',
          delay:0.3
        }}
        
        className="text-center text-neutral-600 font-normal leading-tight text-md font-poppins">
          Choose plans for mobile, fibre, and landline with <br />
          simple pricing and reliable coverage.
        </motion.p>
        <div className="flex items-center justify-between gap-4 mt-6">
          <motion.button
          onClick={handleclick}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="relative px-2 py-1.5 bg-emerald-600 text-white font-medium cursor-pointer
          shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded overflow-hidden"
        >
          {/* Ink overlay */}
          <span className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
          <span className="relative z-10">Recharge Now</span>
        </motion.button>
        </div>

        <div className="w-full mt-16 px-4 flex flex-col items-center justify-center">
          <h1 className="font-poppins text-sm font-medium text-neutral-900 tracking-tight">
            Trusted By
          </h1>

          <div
            className="w-full overflow-hidden mt-6 relative
    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          >
            <div className="flex w-max animate-infinite-logo">
              {imageInfiniteScrollData
                .concat(imageInfiniteScrollData)
                .map(({ id, src, alt }, index) => (
                  <img
                    key={id + "-img-" + index}
                    src={src}
                    alt={alt}
                    className="size-20 mx-8 object-contain opacity-80 hover:opacity-100 transition grayscale hover:grayscale-0"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
