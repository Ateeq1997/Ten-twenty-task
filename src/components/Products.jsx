// src/sections/Products.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/assets/1.png",
    title: "Client 1",
    location: "Dubai, United Arab Emirates",
  },
  {
    image: "/assets/2.png",
    title: "Client 2",
    location: "Lahore, Pakistan",
  },
  {
    image: "/assets/3.png",
    title: "Client 3",
    location: "Jeddah, Saudi Arabia",
  },
  {
    image: "/assets/4.png",
    title: "Client 4",
    location: "Doha, Qatar",
  },
  {
    image: "/assets/5.png",
    title: "Client 5",
    location: "Istanbul, Türkiye",
  },
  {
    image: "/assets/6.png",
    title: "Client 6",
    location: "Mumbai, India",
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else if (info.offset.x > 50) {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section className="w-full py-20 text-center overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold mb-4"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Quality Products
        </motion.h2>

        <motion.p
          className="max-w-xl mx-auto text-gray-500 text-sm sm:text-base"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>
      </motion.div>

      <div className="relative h-[420px] w-full flex items-center justify-center cursor-grab">
        <motion.div
          className="relative w-full flex items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          {slides.map((slide, i) => {
            const offset = ((i - currentIndex + slides.length) % slides.length);
            const distance = offset > slides.length / 2 ? offset - slides.length : offset;

            let scale = 0.7;
            let zIndex = 0;
            let opacity = 0;
            let rotate = 0;
            let translateX = `${distance * 350}px`;

            if (distance === 0) {
              scale = 1.0;
              zIndex = 30;
              opacity = 1;
              rotate = 0;
            } else if (Math.abs(distance) === 1) {
              scale = 0.85;
              zIndex = 20;
              opacity = 0.7;
              rotate = distance > 0 ? 10 : -10;
            } else {
              scale = 0.6;
              zIndex = 10;
              opacity = 0;
            }

            return (
              <motion.div
                key={i}
                className="absolute select-none"
                animate={{
                  scale,
                  x: translateX,
                  zIndex,
                  opacity,
                  rotate,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="relative w-[200px] sm:w-[280px] h-[260px] sm:h-[360px] rounded-xl overflow-hidden shadow-xl group">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-xl select-none"
                    draggable={false}
                  />
                  {distance === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow flex items-center justify-center font-medium text-sm">
                        Drag
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-xs sm:text-base">
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                  <p className="text-gray-500">{slide.location}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
