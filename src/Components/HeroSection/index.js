import React, { useEffect } from "react";
import AnimatedImage from "../AnimatedImage";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.scss";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="hero">
      <h1 className="hero__text">
        <span
          data-aos="fade-left"
          data-aos-offset="0"
          data-aos-delay="200"
          data-aos-once
          className="hero__text--1 heading heading-primary">
          "Some wish <br /> it would happen
        </span>
        <span
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="600"
          data-aos-once
          className="hero__text--2 heading heading-primary">
          others
        </span>
        <span
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="600"
          data-aos-once
          className="hero__text--3 heading heading-primary">
          make it
        </span>
        <span
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="1000"
          data-aos-once
          className="hero__text--4 heading heading-primary">
          happen"
        </span>
      </h1>
      <div className="hero__image">
        {" "}
        <AnimatedImage />
      </div>

      {/* <img src={heroImage} alt="" className="hero__image" /> */}

      <div
        data-aos="fade"
        data-aos-offset="0"
        data-aos-delay="1400"
        data-aos-once
        className="hero__sub-text hero__sub-text--left">
        <p className="small-paragraph primary">
          NBA x6 <br />
          1998 <br />
          1997 <br />
          1996 <br />
          1993 <br />
          1992 <br />
          1991 <br />
          NBA MVP <br />
          1998 <br />
          1996 <br />
          1992 <br />
          1991 <br />
          1988 <br />
          1988 <br />
        </p>
      </div>
      <div
        data-aos="fade"
        data-aos-offset="0"
        data-aos-delay="1400"
        data-aos-once
        className="hero__sub-text hero__sub-text--right">
        <p className="small-paragraph primary">
          NBA FMVP <br />
          1998 <br />
          1997 <br />
          1996 <br />
          1993 <br />
          1992 <br />
          1991 <br />
          NBA ESPY <br />
          1997 <br />
          1998 <br />
          1999 <br />
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
