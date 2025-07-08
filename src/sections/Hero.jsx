import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slides = [
  '/assets/Mask-group.png',
  '/assets/7.jpg',
  '/assets/8.jpg',
  '/assets/9.jpg'
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [borderAnim, setBorderAnim] = useState(false);

const manualNext = () => {
  // Instantly go to next slide on click
  setBorderAnim(false); // reset any ongoing animation
  setIndex((prev) => (prev + 1) % slides.length);
};

useEffect(() => {
  // autoplay logic with animated border
  setBorderAnim(true);
  const timer = setTimeout(() => {
    setIndex((prev) => (prev + 1) % slides.length);
    setBorderAnim(false);
  }, 5000); // Animation duration

  const interval = setInterval(() => {
    setBorderAnim(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setBorderAnim(false);
    }, 5000);
  }, 11000); // Total delay including animation

  return () => {
    clearTimeout(timer);
    clearInterval(interval);
  };
}, [index]);

  return (
    <section className="relative h-screen w-full overflow-hidden select-none">
      {/* Current Slide */}
      <motion.div
        key={index}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[index]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Animated Border Around Thumbnail with Gap */}
{/* Border Container (just lines) */}
<div className="absolute bottom-2 left-10 z-30 w-28 h-28 pointer-events-none">
  <div className="w-full h-full relative">
    {borderAnim && (
      <motion.div
        className="absolute top-0 left-0 h-[6px] bg-white pointer-events-none"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    )}
    {borderAnim && (
      <motion.div
        className="absolute top-0 right-0 w-[6px] bg-white pointer-events-none"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ delay: 1.2, duration: 1.2, ease: 'easeInOut' }}
      />
    )}
    {borderAnim && (
      <motion.div
        className="absolute bottom-0 right-0 h-[6px] bg-white pointer-events-none"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 2.4, duration: 1.2, ease: 'easeInOut' }}
      />
    )}
    {borderAnim && (
      <motion.div
        className="absolute bottom-0 left-0 w-[6px] bg-white pointer-events-none"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ delay: 3.6, duration: 1.2, ease: 'easeInOut' }}
      />
    )}
  </div>
</div>

      {/* Text Content */}
   <motion.div
  key={index} // triggers animation on slide change
  className="absolute top-1/2 left-12 transform -translate-y-1/2 text-white max-w-md z-10"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1 }}
>
  <motion.p
    className="text-sm mb-2 opacity-70"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  >
    Welcome To TenTwenty Farms
  </motion.p>

  <motion.h1
    className="text-4xl md:text-6xl font-light leading-tight"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
  >
    From Our Farms <br /> To Your Hands
  </motion.h1>
</motion.div>


      {/* Bottom Left Control */}
      <div className="absolute bottom-8 left-12 flex items-center gap-6 text-white text-xs z-20">
        <div
          className="relative group cursor-pointer w-20 h-20 z-40 translate-x-[8px] translate-y-[8px]"
          onClick={manualNext}
        >
<img
  src={slides[(index + 1) % slides.length]}
  alt="Next"
  className="w-full h-full object-cover"
/>

      <div className="absolute inset-0 border-2 border-white group-hover:scale-105 transition" />
  <span className="absolute inset-0 flex items-center justify-center text-white text-[10px]">Next</span>
</div>

        <div className="flex flex-col justify-center translate-x-2">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div className="w-12 h-[2px] bg-white my-1" />
          <span className="opacity-70">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;