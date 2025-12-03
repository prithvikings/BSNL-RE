import BentoGrid from "../components/BentoGrid";
import Customer from "../components/Customer";
import Hero from "../components/Hero";
import HeroSection2 from "../components/Herosection2";
import Herosection3 from "../components/Herosection3";
import Navbar from "../components/Navbar";
import TestimonialsSectionDemo from "../components/TestimonialsSectionDemo";
import Service from "../components/Service";
import Community from "../components/Community";
import { MinimalFooter } from "../components/minimal-footer";
import HeroSectionVideo from "../components/HeroSectionVideo";
export default function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div
        className="w-full min-h-screen relative 
      [background:radial-gradient(125%_100%_at_50%_0%,_#fff_6.32%,_#FDFBE7_29.28%,_#E7EFFD_68.68%,_#fff_100%)]"
      >
        <div className="mx-auto max-w-4xl">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="hidden md:flex w-full min-h-screen relative pb-24 
      [background:radial-gradient(130%_150%_at_50%_0%,_#ffffff_8%,_#fdfbf7_30%,_#E7EFFD_60%,_#FDFBE7_85%,_#ffffff_100%)]"
      >
        <div className="mx-auto max-w-4xl">
          <HeroSectionVideo />
        </div>
      </div>

      {/* Section 2 */}
      <div
        className=" w-full min-h-screen relative
      [background:radial-gradient(130%_150%_at_50%_0%,_#ffffff_8%,_#fdfbf7_30%,_#E7EFFD_60%,_#FDFBE7_85%,_#ffffff_100%)]"
      >
        <div className="mx-auto max-w-4xl">
          <HeroSection2 />
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-neutral-900">
        <div className="mx-auto max-w-4xl">
          <Herosection3 />
        </div>
      </div>

      <div className="w-full min-h-screen bg-neutral-100">
        <div className="mx-auto max-w-4xl">
          <BentoGrid />
        </div>
      </div>

      <div
        className="w-full min-h-screen relative 
[background:radial-gradient(120%_120%_at_50%_0%,_#ffffff_5%,_#FDFBE7_20%,_#E7EFFD_50%,_#ffffff_95%)]"
      >
        <div className="mx-auto max-w-4xl">
          <TestimonialsSectionDemo />
        </div>
      </div>

      <div className="w-full min-h-screen bg-neutral-100">
        <div className="mx-auto max-w-4xl">
          <Customer />
        </div>
      </div>

      <div className="w-full min-h-screen bg-white">
        <div className="mx-auto max-w-4xl">
          <Service />
        </div>
      </div>

      <div className="w-full min-h-screen border-t-1 border-neutral-200 relative [background:radial-gradient(120%_120%_at_50%_0%,_#ffffff_5%,_#FDFBE7_20%,_#E7EFFD_50%,_#ffffff_95%)]">
        <div className="mx-auto max-w-4xl">
          <Community />
        </div>
      </div>
      <div className="w-full bg-neutral-50">
        <div className="mx-auto max-w-4xl">
          <MinimalFooter />
        </div>
      </div>
    </div>
  );
}

//  <div className="w-full min-h-screen border-t-1 border-neutral-200 relative [background:radial-gradient(130%_150%_at_50%_0%,_#ffffff_8%,_#fdfbf7_30%,_#E7EFFD_60%,__#FDFBE7_85%,_#ffffff_100%)]">
//         <div className="mx-auto max-w-4xl">
//           <Herosection3 />
//         </div>
//       </div>
