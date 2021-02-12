import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import backdrop from "../../Img/Backdrop.jpg";
import backdrop2 from "../../Img/Backdrop2.jpg";
import jordan from "../../Img/jordan.png";
import jordan2 from "../../Img/jordan2.png";
import Aos from "aos";
import "aos/dist/aos.css";

import "./style.scss";

// Parallax setup
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 70}px,${y / 30}px,0) scale(1.2)`;
const trans2 = (x, y) => `translate3d(${x / 150}px,${y / 80}px,0) `;

const AnimatedImage = () => {
  // Scroll Animation
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

  // Image loading
  const [loading, setLoading] = useState(true);
  const [currentJordanSrc, updateJordanSrc] = useState(jordan2);
  const [currentBgSrc, updateBgSrc] = useState(backdrop2);

  useEffect(() => {
    // start loading original image
    const jordanImageToLoad = new Image();
    const bgImageToLoad = new Image();
    jordanImageToLoad.src = jordan;
    bgImageToLoad.src = backdrop;
    jordanImageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      updateJordanSrc(jordan);
    };
    bgImageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      updateBgSrc(backdrop);
    };
  }, []);
  return (
    <div
      data-aos="fade"
      data-aos-offset="0"
      data-aos-once
      className={`container`}>
      <animated.img
        style={{
          transform: props.xy.interpolate(trans2),
          opacity: loading ? 0.5 : 1,
          transition: "opacity .15s linear",
        }}
        src={currentJordanSrc}
        alt=""
        className="image image__front"
      />

      <animated.img
        src={currentBgSrc}
        alt=""
        className="image image__back"
        style={{
          transform: props.xy.interpolate(trans1),
          opacity: loading ? 0.5 : 1,
          transition: "opacity .15s linear",
        }}
      />
    </div>
  );
};

export default AnimatedImage;
