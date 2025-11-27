import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import removebg from "../assets/image/removebg.png";
import { motion } from "motion/react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Mobile", link: "/mobile" },
    { name: "Fibre", link: "/fibre" },
    { name: "About", link: "/about" },
    { name: "Support", link: "/support" },
  ];

  const navigate = useNavigate();
  const handleclick = () => navigate("/newconnection");

  return (
    <div className="flex items-center justify-between py-2 px-4 md:px-0 relative">
      
      {/* Logo */}
      <Link to="/">
        <img src={removebg} alt="BSNL Logo" className="w-16 cursor-pointer select-none" />
      </Link>

      {/* Desktop Menu */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(2px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        className="hidden md:flex items-center gap-4"
      >
        {Links.map((link) => (
          <Link
            key={link.name}
            to={link.link}
            className="relative group text-sm font-medium text-neutral-800 transition font-poppins"
          >
            {link.name}

            {/* Minimal underline hover */}
            <span
              className="absolute left-1/2 -bottom-0.5 h-[1px] w-0 bg-neutral-800 
              transition-all duration-300 group-hover:w-full group-hover:left-0"
            ></span>
          </Link>
        ))}

        <button
          onClick={handleclick}
          className="relative overflow-hidden px-2 py-1.5 bg-emerald-600 text-white cursor-pointer 
          font-medium shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded
          transition-transform duration-200 hover:-translate-y-[1px]"
        >
          {/* micro-ink overlay */}
          <span className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
          <span className="relative z-10">New Connection</span>
        </button>
      </motion.div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 group relative active:scale-95 transition-all duration-300 ease-out"
      >
        <span
          className={`h-0.5 w-6 bg-neutral-800 transition-all duration-300 
            ${open ? "translate-y-2 rotate-45" : ""}`}
        ></span>

        <span
          className={`h-0.5 w-6 bg-neutral-800 transition-all duration-300 
            ${open ? "opacity-0" : ""}`}
        ></span>

        <span
          className={`h-0.5 w-6 bg-neutral-800 transition-all duration-300 
            ${open ? "-translate-y-2 -rotate-45" : ""}`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-3 p-4 md:hidden z-50"
        >
          {Links.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              onClick={() => setOpen(false)}
              className="text-sm font-medium font-poppins text-neutral-800 hover:text-neutral-500 transition"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              handleclick();
            }}
            className="relative overflow-hidden px-3 py-2 bg-emerald-600 text-white font-medium rounded-md shadow
            transition-transform duration-200 hover:-translate-y-[1px]"
          >
            <span className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
            <span className="relative z-10">New Connection</span>
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
