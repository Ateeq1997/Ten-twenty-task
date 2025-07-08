import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 py-4">
      <div className="bg-white shadow-sm px-6 py-8 mx-auto max-w-[1200px] flex justify-between items-center">
        <nav className="flex items-center space-x-8 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Our Team</a>
          <a href="#" className="hover:underline">Make Enquiry</a>
        </nav>
        <button className="border border-black px-4 py-1 rounded-full text-sm flex items-center gap-2">
          Contact us <span>→</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
