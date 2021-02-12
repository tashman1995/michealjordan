import React, { useEffect } from "react";
import signature from "../../Img/signature.png";
import Aos from "aos";
import "aos/dist/aos.css";

import "./style.scss";

const Nav = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section
      data-aos="fade-down"
      data-aos-offset="0"
      data-aos-once
      className="nav">
      <div className="nav__section nav__section--description">
        <p className="small-paragraph bold">
          Micheal Jeffrey Jordan, the greatest basketball player of all time,
          born February 17, 1963.
        </p>
      </div>
      <div className="nav__section nav__section--date">
        {" "}
        <p className="small-paragraph">Chicago Bulls, 1984-1990, 1993-1998</p>
      </div>
      <div className="nav__section nav__section--sig">
        <img className="nav__sig" src={signature} alt="" />
      </div>
    </section>
  );
};

export default Nav;
