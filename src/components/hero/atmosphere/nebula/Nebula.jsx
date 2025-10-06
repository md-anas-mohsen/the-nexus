import { motion } from "framer-motion";
import "./nebula.scss";

const Nebula = () => {
  return (
    <motion.div
      className="nebula"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        // 👇 Optional: global slow pulse
        scale: [1, 1.02, 1],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 20,
          ease: "easeInOut",
        },
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => {
        const size = Math.random() * 180 + 240;
        const left = Math.random() * 90 - 10;
        const top = Math.random() * 80 - 10;
        const delay = Math.random() * 4;
        const duration = Math.random() * 4 + 4;

        // Vary hue slightly around your color (339°)
        const hueOffset = Math.random() * 30 - 15; // ±15°
        const coreHue = 339 + hueOffset;

        // For warmer clouds near rocket, shift toward red/orange
        const warmHue = 339 - 30; // 309° = reddish-pink

        if (i === 7) {
          return (
            <div
              key="warm-nebula"
              className="cloud"
              style={{
                width: "250px",
                height: "250px",
                left: "40%",
                top: "65%",
                animationDuration: "14s",
                animationDelay: "0s",
                opacity: 0.55,
                filter: "blur(120px)",
                background: `radial-gradient(circle,
          hsl(339, 66%, 37%) 0%,   /* YOUR COLOR */
          hsl(339, 66%, 25%) 50%,   /* darker core */
          hsl(300, 60%, 30%) 80%,   /* deep purple fade */
          transparent 100%)`,
                boxShadow: "0 0 50px rgba(156, 32, 78, 0.4)",
                mixBlendMode: "screen",
              }}
            />
          );
        }

        return (
          <div
            key={i}
            className="cloud"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: Math.random() * 0.1 + 0.4,
              background: `radial-gradient(circle,
          hsl(${coreHue}, 66%, 37%) 0%,
          hsl(${coreHue - 30}, 60%, 30%) 60%,
          transparent 100%)`,
              boxShadow: `0 0 30px rgba(156, 32, 78, 0.2)`,
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default Nebula;
