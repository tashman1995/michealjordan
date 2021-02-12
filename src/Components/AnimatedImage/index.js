import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import backdrop from "../../Img/Backdrop.jpg";
import jordan from "../../Img/jordan.png";
import Aos from "aos";
import "aos/dist/aos.css";

import "./style.scss";

// Parallax setup
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 70}px,${y / 30}px,0) scale(1.2)`;
const trans2 = (x, y) => `translate3d(${x / 150}px,${y / 80}px,0) `;

const AnimatedImage = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };
  // Parallax Animation
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const onMouseMove = ({ clientX: x, clientY: y }) => {
    set({ xy: calc(x, y) });
  };
  return (
    <div
      data-aos="fade"
      data-aos-offset="0"
      data-aos-once
      className={`container`}>
      <animated.img
        style={{ transform: props.xy.interpolate(trans2) }}
        src={jordan}
        alt=""
        className="image image__front"
      />

      <animated.img
        src={backdrop}
        alt=""
        className="image image__back"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
    </div>
  );
};

export default AnimatedImage;
