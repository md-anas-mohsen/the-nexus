import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const RocketComponent = ({ src, alt, className }) => {
  const rocketControls = useAnimation();

  const [flareIndex, setFlareIndex] = useState(0);

  const flareImages = [
    "/flare1.png",
    "/flare2.png",
    "/flare3.png",
    "/flare4.png",
  ];

  useEffect(() => {
    // Start flare animation immediately
    const flareTimer = setInterval(() => {
      setFlareIndex((prev) => (prev + 1) % flareImages.length);
    }, 250); // Change flare every 100ms

    return () => clearInterval(flareTimer);
  }, [flareImages.length]);

  useEffect(() => {
    // Start with slide-in animation
    rocketControls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    });
  }, [rocketControls]);

  // Add animation state management
  const [animationPhase, setAnimationPhase] = useState("slide-in");

  // Update the animation complete handler
  const handleSlideComplete = () => {
    if (animationPhase === "slide-in") {
      setAnimationPhase("hover");
      rocketControls.start({
        y: [0, -10, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      });
    }
  };

  return (
    <>
      <motion.div
        className={className}
        initial={{ y: 200, opacity: 0 }}
        animate={rocketControls}
        onAnimationComplete={handleSlideComplete}
      >
        <img
          style={{
            transform: "scale(0.7)",
            zIndex: 1,
          }}
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
        />
        <motion.div
          style={{
            position: "absolute",
            top: "75%", // Right at the base of the rocket
            left: "46%",
            width: "8%",
            height: "24%",
            background:
              "radial-gradient(circle, rgba(255,140,0,0.6) 0%, rgba(255,80,0,0.3) 60%, transparent 100%)",
            // background:
            //   "radial-gradient(circle, \
            //   rgba(255, 60, 100, 0.8) 0%, \
            //   rgba(255, 40, 120, 0.6) 40%, \
            //   rgba(200, 30, 180, 0.4) 70%, \
            //   rgba(150, 20, 160, 0.2) 90%, \
            //   transparent 100%)",
            filter: "blur(2px)",
            zIndex: "2",
            pointerEvents: "none",
          }}
          animate={{
            // scale: [1, 1.1, 1],
            scaleY: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7],
            // rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10px", // Position flares below rocket
            left: "50%",
            transform: "translateX(-50%)",
            width: "130px", // Adjust size as needed
            height: "280px",
            zIndex: "-1",
          }}
        >
          {/* <img
          src={flareImages[flareIndex]}
          alt="Rocket flare"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        /> */}
          <motion.img
            src={flareImages[flareIndex]} // Use a single, well-designed flare
            alt="Rocket flare"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.9, 0.7],
              // rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          bottom: "-25px", // Position at base
          left: "35%", // Narrower than rocket width
          width: "60%", // Centered and narrower
          height: "30px",
          background:
            "radial-gradient(ellipse at center, rgba(255,100,0,0.8) 0%, rgba(255,60,0,0.5) 60%, transparent 80%)",
          // background:
          //   "linear-gradient(to bottom, \
          //     rgba(255, 60, 100, 0.8) 0%, \
          //     rgba(255, 40, 120, 0.7) 30%, \
          //     rgba(200, 30, 180, 0.5) 60%, \
          //     rgba(150, 20, 160, 0.3) 85%, \
          //     transparent 100%)",
          borderRadius: "50%",
          filter: "blur(8px)",
          opacity: 0.9,
          zIndex: "0",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.9, 0.7],
          // rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default RocketComponent;
