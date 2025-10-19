// StarFall.jsx
import { motion } from "framer-motion";
import "./starfall.scss";

const StarFall = ({
  numStars = 128,
  twinklePeriod = 1.8, // seconds per full twinkle cycle (lower = faster)
}) => {
  return (
    <motion.div
      className="stars-cluster"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {Array.from({ length: numStars }).map((_, i) => {
        const size = Math.random() * 5 + 2;
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.8 + 0.1;
        const duration = Math.random() * 8 + 6;
        const randomDelay = -Math.random() * duration;

        return (
          <div
            key={i}
            className="star"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              opacity,
              "--fall-duration": `${duration}s`,
              "--delay": `${randomDelay}s`,
              "--twinkle-duration": `${twinklePeriod}s`, // ✅ Controlled by prop
              "--twinkle-delay": `-${Math.random() * twinklePeriod}s`,
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default StarFall;
