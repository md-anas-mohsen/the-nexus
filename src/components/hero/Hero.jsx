import {
  APP_INFO_DEV_NAME,
  APP_INFO_OCCUPATION,
  APP_INFO_OCCUPATION_ROLE_1,
  APP_INFO_OCCUPATION_ROLE_2,
} from "../../constants";
import RocketAstronautAnimation from "./character/rocketdude";
import "./hero.scss";
import { motion } from "framer-motion";
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
    </div>
  );
};

export default Hero;
