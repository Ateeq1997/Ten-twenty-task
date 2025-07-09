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
    setBorderAnim(false);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    setBorderAnim(true);
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setBorderAnim(false);
    }, 5000);

    const interval = setInterval(() => {
      setBorderAnim(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setBorderAnim(false);
      }, 5000);
    }, 11000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [index]);

  return (
    <section className="relative h-screen w-full overflow-hidden select-none">
      <motion.div
        key={index}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[index]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="absolute bottom-2 left-4 sm:left-10 z-30 w-20 h-20 sm:w-28 sm:h-28 pointer-events-none">
        <div className="w-full h-full relative">
          {borderAnim && (
            <motion.div
              className="absolute top-0 left-0 h-[4px] sm:h-[6px] bg-white pointer-events-none"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          )}
          {borderAnim && (
            <motion.div
              className="absolute top-0 right-0 w-[4px] sm:w-[6px] bg-white pointer-events-none"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ delay: 1.2, duration: 1.2, ease: 'easeInOut' }}
            />
          )}
          {borderAnim && (
            <motion.div
              className="absolute bottom-0 right-0 h-[4px] sm:h-[6px] bg-white pointer-events-none"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 2.4, duration: 1.2, ease: 'easeInOut' }}
            />
          )}
          {borderAnim && (
            <motion.div
              className="absolute bottom-0 left-0 w-[4px] sm:w-[6px] bg-white pointer-events-none"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ delay: 3.6, duration: 1.2, ease: 'easeInOut' }}
            />
          )}
        </div>
      </div>

      <motion.div
        key={index}
        className="absolute top-1/2 left-6 sm:left-12 transform -translate-y-1/2 text-white max-w-xs sm:max-w-md z-10 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-xs sm:text-sm mb-1 sm:mb-2 opacity-70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Welcome To TenTwenty Farms
        </motion.p>

        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl font-light leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          From Our Farms <br /> To Your Hands
        </motion.h1>
      </motion.div>

<div className="absolute bottom-4 sm:bottom-8 left-6 sm:left-12 flex items-center gap-4 sm:gap-6 text-white text-[10px] sm:text-xs z-20">
  <div
    className="
      relative group cursor-pointer 
      w-16 h-16 sm:w-20 sm:h-20 
      z-40 
      translate-x-[1px] translate-y-[0px]       /* ✅ mobile adjustment */
      sm:translate-x-[8px] sm:translate-y-[8px]    /* ✅ desktop default */
    "
    onClick={manualNext}
  >
    <img
      src={slides[(index + 1) % slides.length]}
      alt="Next"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 border-2 border-white group-hover:scale-105 transition" />
    <span className="absolute inset-0 flex items-center justify-center text-white text-[8px] sm:text-[10px]">
      Next
    </span>
  </div>

  <div className="flex flex-col justify-center translate-x-1 sm:translate-x-2">
    <span>{String(index + 1).padStart(2, '0')}</span>
    <div className="w-10 sm:w-12 h-[1px] sm:h-[2px] bg-white my-1" />
    <span className="opacity-70">{String(slides.length).padStart(2, '0')}</span>
  </div>
</div>

    </section>
  );
};

export default Hero;