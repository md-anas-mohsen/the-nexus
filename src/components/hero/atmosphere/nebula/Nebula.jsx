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
        scale: [1, 1.01, 1],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 25,
          ease: "easeInOut",
        },
      }}
    >
      <div className="vignette" />
      {/* 🌌 Large Background Nebula Layer */}
      <div className="nebula-bg" />

      {/* 🌠 Dynamic Clouds */}
      {Array.from({ length: 6 }).map((_, i) => {
        // Define corner zones: [minTop, maxTop, minLeft, maxLeft]
        const corners = [
          [0, 2, 95, 100], // top-right
          [0, 0, 50, 75], // top-mid
          [80, 95, 85, 95], // bottom-right
          [80, 95, 0, 2], // bottom-left
          // top-left removed
        ];

        const [minTop, maxTop, minLeft, maxLeft] =
          corners[Math.floor(Math.random() * corners.length)];

        const top = Math.random() * (maxTop - minTop) + minTop;
        const left = Math.random() * (maxLeft - minLeft) + minLeft;

        const size = Math.random() * 200 + 300;
        const delay = Math.random() * 3;
        const duration = Math.random() * 6 + 6;

        const hueOffset = Math.random() * 20 - 10;
        const coreHue = 330 + hueOffset;
        const outerHue = 270 + hueOffset;
        const sat = 70 + Math.random() * 10;
        const light = 40 + Math.random() * 10;

        return (
          <div
            key={`cloud-${i}`}
            className="cloud"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: Math.random() * 0.1 + 0.15,
              filter: "blur(180px)",
              background: `radial-gradient(circle at 30% 70%,
          hsl(${coreHue}, ${sat}%, ${light}%) 0%,
          hsl(${coreHue - 15}, ${sat - 5}%, ${light - 5}%) 40%,
          hsl(${outerHue}, ${sat - 15}%, ${light - 15}%) 70%,
          transparent 100%)`,
              boxShadow: `0 0 60px rgba(255, 100, 150, ${
                Math.random() * 0.1 + 0.1
              })`,
              mixBlendMode: "screen",
              willChange: "transform, opacity",
            }}
          />
        );
      })}
      {/* 🔥 Warm Glow Near Rocket */}
      <div
        className="cloud warm-glow"
        style={{
          width: "350px",
          height: "350px",
          left: "40%",
          top: "65%",
          animationDuration: "16s",
          animationDelay: "0s", // Start immediately near rocket
          opacity: 0.65,
          filter: "blur(150px)",
          background: `radial-gradient(circle at 50% 50%,
            hsl(30, 80%, 50%) 0%,
            hsl(330, 70%, 40%) 30%,
            hsl(270, 60%, 35%) 60%,
            transparent 100%)`,
          boxShadow: "0 0 80px rgba(255, 100, 150, 0.4)",
          mixBlendMode: "overlay",
        }}
      />

      {/* 💫 Extra Soft Glow Layer */}
      <div
        className="cloud glow-layer"
        style={{
          width: "500px",
          height: "500px",
          left: "25%",
          top: "30%",
          animationDuration: "20s",
          animationDelay: "2s", // Slight delay for depth
          opacity: 0.3,
          filter: "blur(200px)",
          background: `radial-gradient(circle at 40% 60%,
            hsl(270, 60%, 40%) 0%,
            hsl(330, 50%, 35%) 50%,
            transparent 100%)`,
          mixBlendMode: "screen",
        }}
      />
    </motion.div>
  );
};

export default Nebula;
