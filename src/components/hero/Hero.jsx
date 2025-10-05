import {
  APP_INFO_DEV_NAME,
  APP_INFO_OCCUPATION,
  APP_INFO_OCCUPATION_ROLE_1,
  APP_INFO_OCCUPATION_ROLE_2,
} from "../../constants";
import RocketAstronautAnimation from "./character/rocketdude";
import "./hero.scss";
import { motion, useTransform } from "framer-motion";
import RocketComponent from "./rocket/Rocket";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-2000%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 70,
    },
  },
};

// Add this new variant for scroll button
const scrollButtonVariants = {
  initial: { y: 200, opacity: 0 }, // Start from below
  animate: {
    y: 0, // Slide to final position
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    y: [0, 10, 0], // Hover effect: move down and up
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            {APP_INFO_DEV_NAME.toUpperCase()}
          </motion.h2>
          <motion.h1 variants={textVariants}>{APP_INFO_OCCUPATION}</motion.h1>
          <motion.h2 variants={textVariants}>
            {APP_INFO_OCCUPATION_ROLE_1}
          </motion.h2>
          <motion.h2 variants={textVariants}>
            {APP_INFO_OCCUPATION_ROLE_2}
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={scrollButtonVariants}
            initial="initial"
            animate="animate"
            whileInView="hover" // Start hover after slide-in
            viewport={{ once: true }} // Only trigger once
            src="/scroll.png"
            alt="Scroll down to explore"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          pointerEvents: "none", // Optional: removes mouse interactions
        }}
      >
        MVP Builder - React • Node • TypeScript • Docker - Ideas → Product -
        Code. Deploy. Iterate.
      </motion.div>
      {/* <div className="imageContainer">
        <img src="/rockethero (1).png" alt="" />
      </div> */}

      <RocketComponent
        src="/rocket.png"
        alt="Rocket icon hovering"
        className="imageContainer"
      />

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
          const duration = Math.random() * 6 + 12;

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

      <motion.div
        className="stars-cluster"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {Array.from({ length: 256 }).map((_, i) => {
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
    </div>
  );
};

export default Hero;
