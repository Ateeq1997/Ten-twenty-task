import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-4">
      <div className="bg-white shadow-sm px-6 py-4 mx-auto max-w-[1200px] flex justify-between items-center">

        {/* ====== Mobile View: Contact on Left ====== */}
        <div className="flex w-full items-center justify-between md:hidden">
          <button className="border border-black px-4 py-1 rounded-full text-sm flex items-center gap-2">
            Contact us <span>→</span>
          </button>

          {/* Toggle Button */}
          <button
            onClick={toggleMenu}
            className="text-black"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* ====== Desktop View: Nav on Left, Contact on Right ====== */}
        <div className="hidden md:flex justify-between items-center w-full">
          {/* Left - Nav */}
          <nav className="flex items-center space-x-8 text-sm">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">News</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Our Team</a>
            <a href="#" className="hover:underline">Make Enquiry</a>
          </nav>

          {/* Right - Contact Button */}
          <button className="border border-black px-4 py-1 rounded-full text-sm flex items-center gap-2">
            Contact us <span>→</span>
          </button>
        </div>
      </div>

      {/* ====== Mobile Dropdown Nav ====== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="bg-white px-6 py-4 md:hidden shadow-md origin-top"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 text-sm">
              {["About", "News", "Services", "Our Team", "Make Enquiry"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:underline"
                  onClick={closeMenu}
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
