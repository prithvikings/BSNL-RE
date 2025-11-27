import { ChevronRight } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'

const Community = () => {
  const filmyReviews = [
    {
      id: 1,
      character: "Babu Rao",
      quote:
        "Arre BSNL ka naya revamp mast hai re baba! Pehle network aata nahi tha, ab itna fast ki aankhon ke saamne chakachak ho jaata hai!"
    },
    {
      id: 2,
      character: "Circuit",
      quote:
        "Bhai, BSNL ka network ab full solid, ekdum dabang! Speed aisi ki phone bole— 'abey chal na!' bina rukawat ke."
    },
    {
      id: 3,
      character: "Raju",
      quote:
        "Yeh BSNL ka upgrade badiya hai lekin free mein nahi milega… par paisa vasool hai! Fast, smooth, ekdum tension-free."
    },
    {
      id: 4,
      character: "Majnu Bhai",
      quote:
        "BSNL ka naya network? Uff! Art jaisa kaam karta hai. Ek line kheechunga— idhar se udhar tak full speed!"
    },
    {
      id: 5,
      character: "Teja",
      quote:
        "Network Teja hai, mark idhar hai! BSNL ka revamp dekhkar lagta hai asli power abhi shuru hui hai."
    },
    {
      id: 6,
      character: "Uday Shetty",
      quote:
        "Control uday control itna jyada internet mat use kar."
    },
  ];

  return (
    <div className="py-24 px-4 md:px-0">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22,1,0.36,1] }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold mb-4 font-inter"
      >
        Join Our Community
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.22,1,0.36,1] }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <p className="text-base md:text-lg font-gilroy text-neutral-700">
          Hear what our customers have to say
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {[true, false].map((isLeft, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="
                rounded-full bg-white 
                p-3 md:p-4 
                shadow-lg hover:shadow-xl cursor-pointer 
                transition duration-300
              "
            >
              <ChevronRight
                className={`text-black ${isLeft ? 'rotate-180' : ''}`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* GRID */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-4 
        mt-12 md:mt-24
      ">
        {filmyReviews.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.07,
              ease: [0.22,1,0.36,1]
            }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="
              bg-white 
              p-5 md:p-6 
              rounded-lg 
              shadow-md 
              hover:shadow-xl 
              transition duration-300 
              cursor-pointer
            "
          >
            {/* Quote */}
            <motion.p
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
              className="text-gray-700 mb-4 text-sm md:text-base"
            >
              "{item.quote}"
            </motion.p>

            {/* Character */}
            <motion.h3
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
              className="text-base md:text-lg font-semibold"
            >
              - {item.character}
            </motion.h3>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default Community
