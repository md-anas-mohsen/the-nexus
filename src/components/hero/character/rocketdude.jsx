// RocketAstronautAnimation.jsx
import { motion } from "framer-motion";

const RocketAstronautAnimation = () => {
  return (
    <div className="rocket-animation-container">
      {/* Animated Rocket */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        className="rocket-svg"
        style={{ filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))" }}
      >
        {/* Rocket Body */}
        <path d="M100,20 L120,60 L100,100 L80,60 Z" />

        {/* Rocket Nose Cone */}
        <polygon points="100,20 110,10 90,10" />

        {/* Rocket Fins */}
        <polygon points="80,60 70,80 85,75" />
        <polygon points="120,60 130,80 115,75" />

        {/* Flames */}
        <path
          d="M90,100 C85,110 80,120 85,130 C90,140 110,140 115,130 C120,120 115,110 110,100"
          fill="#f59e0b"
          opacity="0.8"
        />

        {/* Flame details */}
        <path
          d="M95,105 C92,115 90,125 95,135 C100,145 105,145 110,135 C115,125 113,115 110,105"
          fill="#fbbf24"
          opacity="0.6"
        />

        {/* Stars */}
        <circle cx="30" cy="30" r="2" fill="#ffffff" />
        <circle cx="170" cy="30" r="2" fill="#ffffff" />
        <circle cx="40" cy="160" r="1.5" fill="#ffffff" />
        <circle cx="160" cy="150" r="1.5" fill="#ffffff" />
        <circle cx="20" cy="120" r="1" fill="#ffffff" />
        <circle cx="180" cy="110" r="1" fill="#ffffff" />
      </svg>

      {/* Animated Astronaut */}
      <motion.div
        className="astronaut-container"
        animate={{
          y: [-5, 5, -5],
          rotate: [0, 2, -2, 0],
          transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="astronaut-svg"
          style={{ filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))" }}
        >
          {/* Astronaut helmet */}
          <circle
            cx="50"
            cy="40"
            r="20"
            fill="#1f2937"
            stroke="#ffffff"
            strokeWidth="2"
          />

          {/* Helmet visor */}
          <ellipse
            cx="50"
            cy="40"
            rx="18"
            ry="15"
            fill="#3b82f6"
            opacity="0.3"
          />

          {/* Astronaut body */}
          <rect x="35" y="60" width="30" height="30" rx="5" fill="#1f2937" />

          {/* Arms */}
          <path d="M35,65 L25,75 L25,85 L35,75 Z" fill="#1f2937" />
          <path d="M65,65 L75,75 L75,85 L65,75 Z" fill="#1f2937" />

          {/* Legs */}
          <rect x="40" y="90" width="10" height="15" fill="#1f2937" />
          <rect x="50" y="90" width="10" height="15" fill="#1f2937" />

          {/* Spacesuit details */}
          <circle cx="50" cy="70" r="2" fill="#ffffff" />
          <circle cx="50" cy="75" r="2" fill="#ffffff" />
        </svg>
      </motion.div>
    </div>
  );
};

export default RocketAstronautAnimation;
