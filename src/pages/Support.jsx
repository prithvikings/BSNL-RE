import React from 'react'
import SupportHero from '../components/SupportHero'
import Navbar from '../components/Navbar'
import { MinimalFooter } from "../components/minimal-footer";


const Support = () => {
  return (
      <div
        className="w-full min-h-screen relative pb-24 
      [background:radial-gradient(130%_150%_at_50%_0%,_#ffffff_8%,_#fdfbf7_30%,_#E7EFFD_60%,_#FDFBE7_85%,_#ffffff_100%)]"
      >
        <div className="mx-auto max-w-4xl">
          <Navbar />
          <SupportHero />
        </div>
        <div className="w-full bg-neutral-50">
        <div className="mx-auto max-w-4xl">
          <MinimalFooter />
        </div>
      </div>
      </div>
  )
}

export default Support