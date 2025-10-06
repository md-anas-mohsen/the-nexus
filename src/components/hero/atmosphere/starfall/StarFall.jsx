import { motion } from "framer-motion";
import "./starfall.scss";

const StarFall = ({ numStars = 128 }) => {
  return (
    <motion.div
      className="stars-cluster"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {Array.from({ length: numStars }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.7 + 0.3;
        const duration = Math.random() * 6 + 6; // 15–25s

        // 🌟 Key: Negative delay = start partway through animation
        const fullCycle = duration; // seconds
        const randomDelay = -Math.random() * fullCycle; // e.g., -12.3s

        return (
          <div
            key={i}
            className="star"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              opacity,
              animationDuration: `${duration}s`,
              animationDelay: `${randomDelay}s`,
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default StarFall;
