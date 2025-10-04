import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./slider.scss";

const Slider = () => {
  const slides = [
    "MVP Builder",
    "React • Node • TypeScript • Docker",
    "From Idea → Product",
    "Code. Deploy. Iterate.",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Rotate slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 }, // Slight slide up/down for polish
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <div className="slidingTextContainer">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="single-slide"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
