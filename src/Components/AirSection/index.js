import React, { useEffect } from "react";
import jumpMan from "../../Img/jumpman.png";
import jordanAndAir from "../../Img/jordanandair.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import "./style.scss";

const AirSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="air">
        <div
          data-aos="fade-right"
          data-aos-offset="700"
          data-aos-once
          className="air__logo-container">
          <img className="air__logo" src={jumpMan} alt="" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="700"
          data-aos-once
          className="air__header">
          <h2 className="heading-primary heading-primary--large">
            Air <br /> &nbsp; Jordan
          </h2>
        </div>
        <div
          className="air__content"
          data-aos="fade-up"
          data-aos-offset="700"
          data-aos-once>
          <img className="air__jordan-img" src={jordanAndAir} alt="" />
          <div className="air__sub-title">
            <p className="paragraph bold primary caps ">Step into Air</p>
          </div>
          <div className="air__text">
            <div className="air__sub-title air__sub-title--mobile">
              <p className="paragraph bold primary caps ">Step into Air</p>
            </div>
            <p className="paragraph air__columns">
              The shoe was born after a deal signed in 1984. At that time,
              Converse was the official shoe of the NBA. The company told him
              they couldn't put Jordan above the other athletes they sponsored,
              which included players like Larry Bird and Magic Johnson, so
              Jordan decided against partnering with them. His favorite shoe at
              the time was actually Adidas, but the brand told him they just
              couldn't make a shoe work at that time. Jordan's agent, David
              Falk, wanted him to go with Nike, which at the time was known more
              for track shoes, but Jordan wasn't interested. So Falk, appealed
              to Jordan's mother, Deloris. "My mother said, 'You're going to go
              listen, you may not like it, but you're going to go listen,'"
              Jordan remembers. Nike offered him a great deal, one that was
              unheard of for a rookie, and his father said he'd have to be a
              fool not to take it. So Jordan did.
              <br />
              <br />
              From there, it was all about getting Jordan his own shoe. "Nike
              had just come out with this new technology for their running shoes
              called air soles," says Falk. "And obviously Michael played in the
              air, so I said, 'I got it, we're going to call it Air Jordan.'"
              "Nike's expectation when we signed the deal was, at the end of
              year four, they hoped to sell $3 million worth of Air Jordans,"
              Falk recalls. "In year one, we sold $126 million."
            </p>
          </div>
          <div className="air__side-text small-paragraph primary">
            1985 <br />
            1985 <br />
            1985 <br />
            1985 <br />
            1985 <br />
            1985 <br />
            1985 <br />
            1985 <br />
            1985 <br />
            1985 <br />
            1985 <br />
            1985 <br />
            1985 <br />
            1985 <br />
          </div>
        </div>
      </section>
    </>
  );
};

export default AirSection;
