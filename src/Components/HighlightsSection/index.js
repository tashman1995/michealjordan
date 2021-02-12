import React, { useEffect } from "react";
import trophy from "../../Img/trophy.jpg";
import trophy2 from "../../Img/trophy2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import "./style.scss";

const HighlightsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="highlights">
      <div className="highlights__head">
        <h2
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-once
          className="highlights__title heading-primary">
          Career
          <br /> Highlights
        </h2>
        <img
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-once
          className="highlights__main-image"
          src={trophy}
          alt=""
        />
        <img
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-once
          className="highlights__sub-image"
          src={trophy2}
          alt=""
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="500"
        data-aos-once
        className="highlights__content">
        <div className="highlights__side-header">
          <p className="paragraph bold primary caps">6X NBA Championships</p>
        </div>
        <div className="highlights__main-text">
          <p className="highlights__columns paragraph">
            By acclamation, Michael Jordan is the greatest basketball player of
            all time. Although, a summary of his basketball career and influence
            on the game inevitably fails to do it justice, as a phenomenal
            athlete with a unique combination of fundamental soundness, grace,
            speed, power, artistry, improvisational ability and an unquenchable
            competitive desire, Jordan single-handedly redefined the NBA
            superstar.
            <br />
            <br />
            Even contemporaneous superstars recognized the unparalleled position
            of Jordan. Magic Johnson said, “There’s Michael Jordan and then
            there is the rest of us.” Larry Bird, following a playoff game where
            Jordan dropped 63 points on the Boston Celtics in just his second
            season, appraisal of the young player was: “God disguised as Michael
            Jordan.”
            <br />
            <br />A brief listing of his top accomplishments would include the
            following: Rookie of the Year; Five-time NBA MVP; Six-time NBA
            champion; Six-time NBA Finals MVP; Ten-time All-NBA First Team; Nine
            time NBA All-Defensive First Team; Defensive Player of the Year;
            14-time NBA All-Star; Three-time NBA All-Star MVP; 50th Anniversary
            All-Time Team; Ten scoring titles — an NBA record and seven
            consecutive matching Wilt Chamberlain; Retired with the NBA’s
            highest scoring average of 30.1ppg; Hall of Fame inductee. However,
            his impact is far greater than awards and championships. He burst
            into the league as a rookie sensation scoring in droves with an
            unmatchable first step and acrobatic drives and dunks and concluded
            his career as a cultural icon. Along the way, he became a true
            champion who spearheaded the globalization of the NBA with his
            dynamic on-court abilities and personal sense of style that was
            marketed to the masses.
          </p>
          <div className="highlights__quote">
            <p className="paragraph primary">
              "There is no "i" in team but <br /> there is in win"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
