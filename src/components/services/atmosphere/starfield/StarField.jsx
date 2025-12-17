// StarField.jsx
import { motion } from "framer-motion";
import "./starfield.scss";

const StarField = ({ numStars = 200, twinklePeriod = 1.8 }) => {
  return (
    <motion.div
      className="stars-cluster static-stars"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {Array.from({ length: numStars }).map((_, i) => {
        const size = Math.random() * 4 + 1; // Slightly smaller for depth
        const left = Math.random() * 100;
        const top = Math.random() * 100; // ✅ Now we need top!
        const opacity = Math.random() * 0.8 + 0.1;

        return (
          <div
            key={i}
            className="star"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`, // ✅ Fixed position
              opacity,
              "--twinkle-duration": `${twinklePeriod}s`,
              "--twinkle-delay": `-${Math.random() * twinklePeriod}s`,
              // ❌ No fall animation needed
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default StarField;
