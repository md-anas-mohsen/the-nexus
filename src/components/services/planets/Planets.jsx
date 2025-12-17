import React from "react";
import { motion, useTransform } from "framer-motion";

import "./planets.scss";

export const PLANET_SPRITE = {
  width: 256,
  height: 256,
  positions: {
    ringedMagentaAmber: { x: 72, y: 16 }, // top-left
    pinkCyan: { x: 700, y: 16 }, // top-right
    limeGreen: { x: 700, y: 240 }, // bottom-right
    silverRed: { x: 72, y: 240 }, // bottom-left
    pinkAmberCyanMagenta: { x: 284, y: 12 }, // top-2nd
    brownCyan: { x: 256, y: 256 }, // bottom-2nd
    yellowCyan: { x: 512, y: 256 }, // bottom-3rd
    limeGreenCyan: { x: 512, y: 0 }, // top-3rd
  },
};

const Planets = () => {
  const Planet = ({
    type = "ringedMagentaAmber",
    title = "",
    className = "",
  }) => {
    const { x, y } =
      PLANET_SPRITE.positions[type] ||
      PLANET_SPRITE.positions.ringedMagentaAmber;

    return (
      <div
        className={`planet ${className}`}
        style={{
          backgroundImage: `url('/planet-sheet.png')`,
          backgroundPosition: `${-x}px ${-y}px`,
          backgroundSize: `${PLANET_SPRITE.width * 4}px ${
            PLANET_SPRITE.height * 2
          }px`, // 4 cols x 2 rows
          width: `${PLANET_SPRITE.width}px`,
          height: `${PLANET_SPRITE.height}px`,
        }}
      >
        {title && <h2 className="title">{title}</h2>}
      </div>
    );
  };

  const MainPlanet = () => {
    return (
      <div className="mainPlanet">
        <motion.img
          initial="initial"
          animate="animate"
          whileInView="hover" // Start hover after slide-in
          viewport={{ once: true }} // Only trigger once
          src="/planet-center-plain.png"
          style={{ zIndex: 1 }}
          title="My Expertise"
        />
        <h2 className="title">My Expertise</h2>
      </div>
    );
  };

  return (
    <div className="planets-container">
      <MainPlanet />

      {/* ✅ Add any planet as a subcomponent */}
      <Planet
        type="ringedMagentaAmber"
        title="Frontend"
        className="sub-planet"
      />
      <Planet type="pinkCyan" title="Backend" className="sub-planet" />
      <Planet type="limeGreen" title="Node JS" className="sub-planet" />
      <Planet type="silverRed" title="Laravel" className="sub-planet" />
      <Planet
        type="pinkAmberCyanMagenta"
        title="Design"
        className="sub-planet"
      />
      <Planet type="brown" title="AI/ML" className="sub-planet" />
      <Planet type="yellow" title="Testing" className="sub-planet" />
      <Planet type="cyan" title="Security" className="sub-planet" />
    </div>
  );
};

export default Planets;
