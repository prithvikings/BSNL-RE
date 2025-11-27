import React from 'react'
import Navbar from '../components/Navbar'
import FibreHero from '../components/FibreHero'
import { MinimalFooter } from "../components/minimal-footer";



const Fibre = () => {
  return (
    <div>
        <div
        className="w-full min-h-screen relative 
      [background:radial-gradient(125%_100%_at_50%_0%,_#fff_6.32%,_#FDFBE7_29.28%,_#E7EFFD_68.68%,_#fff_100%)]"
      >
        <div className="mx-auto max-w-4xl">
          <Navbar />
          <FibreHero />
        </div>
      </div>
      <div className="w-full bg-neutral-50">
        <div className="mx-auto max-w-4xl">
          <MinimalFooter />
        </div>
      </div>
    </div>
  )
}

export default Fibre