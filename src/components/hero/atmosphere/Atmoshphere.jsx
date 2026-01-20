import React from "react";
import Nebula from "./nebula/Nebula";
import StarFall from "./starfall/StarFall";
import AsteroidField from "./asteroids/AsteroidField";

const Atmoshphere = () => {
  return (
    <>
      <Nebula />
      <StarFall />
      <AsteroidField count={6} speed={1.5} direction="down" />
    </>
  );
};

export default Atmoshphere;
