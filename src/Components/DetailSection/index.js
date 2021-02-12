import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./style.scss";

const DetailSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="detail">
      <table
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-once
        className="detail__table detail__table--window">
        <thead>
          <tr>
            <th className="detail__num" rowSpan="2">
              <h2 className="heading-primary">23</h2>
            </th>
            <th className="detail__name">
              <h2 className="heading-secondary">Michael Jordan</h2>
            </th>
          </tr>
          <tr>
            <td className="detail__name">
              <p className="bold">Chicago Bulls, 1984-1993, 1995-1998</p>
            </td>
          </tr>
        </thead>
      </table>
      <table className="detail__table detail__table--mobile">
        <thead>
          <tr>
            <th className="detail__num">
              <h2 className="heading-primary">23</h2>
            </th>
          </tr>
          <tr>
            <th className="detail__name">
              <h2 className="heading-secondary">Michael Jordan</h2>
            </th>
          </tr>
          <tr>
            <td className="detail__name">
              <p className="bold">Chicago Bulls, 1984-1993, 1995-1998</p>
            </td>
          </tr>
        </thead>
      </table>
    </section>
  );
};

export default DetailSection;
