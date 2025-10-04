import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import "./heroslider.scss";

const slides = [
  "MVP Builder",
  "React • Node • TypeScript • Docker",
  "Ideas → Product",
  "Code. Deploy. Iterate.",
];

const slideVariants = {
  enter: { opacity: 0, x: 100 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.8 },
  },
};

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="hero-slider__slide"
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
