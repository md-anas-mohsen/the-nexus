// AsteroidField.jsx
import React, { useState, useEffect } from "react";
import "./asteroidfield.scss";

const AsteroidField = ({ count = 5, speed = 1, direction = "right" }) => {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    const newAsteroids = Array.from({ length: count }, (_, i) => ({
      id: i,
      row: Math.floor(Math.random() * 2),
      col: Math.floor(Math.random() * 4),
      scale: 0.2 + Math.random() * 4, // e.g., 0.9, 1.3, etc.
      position: Math.random() * 100,
      moveDuration: 10 / (speed * (0.5 + Math.random() * 1.5)),
      spinDuration: Math.random() * 6 + 2,
      spinReverse: Math.random() > 0.5,
    }));
    setAsteroids(newAsteroids);
  }, [count, speed, direction]);

  return (
    <div className="asteroid-field">
      {asteroids.map((ast) => {
        const moveStyle = {};
        if (["right", "left"].includes(direction)) {
          moveStyle.top = `${ast.position}%`;
        } else {
          moveStyle.left = `${ast.position}%`;
        }

        return (
          <div
            key={ast.id}
            className={`asteroid-move move-${direction}`}
            style={{ ...moveStyle, animationDuration: `${ast.moveDuration}s` }}
          >
            {/* Spinning wrapper — NO transform here */}
            <div
              className="asteroid-spin"
              style={{
                animationDuration: `${ast.spinDuration}s`,
                animationDirection: ast.spinReverse ? "reverse" : "normal",
              }}
            >
              {/* Sprite with scale applied directly */}
              <div
                className="asteroid-sprite"
                style={{
                  backgroundPosition: `-${ast.col * 64}px -${ast.row * 64}px`,
                  transform: `scale(${ast.scale})`, // ✅ Scale on sprite
                  transformOrigin: "center",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AsteroidField;
