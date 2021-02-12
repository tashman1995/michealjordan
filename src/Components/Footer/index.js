import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="heading-primary  footer__heading">
        Micheal Jordan <br />
        Micheal Jordan <br />
        Micheal Jordan <br />
        Micheal Jordan <br />
        Micheal Jordan <br />
        Micheal Jordan <br />
      </h2>
      <ul className="footer__links">
        <li className="footer__link">
          <a
            className="footer__link-text"
            href="//www.facebook.com/jumpman23"
            target="_blank"
            rel="noopener noreferrer">
            FaceBook
          </a>
        </li>
        <li className="footer__link">
          <a
            className="footer__link-text"
            href={"//www.youtube.com/user/jumpman23"}
            target="_blank"
            rel="noopener noreferrer">
            Youtube
          </a>
        </li>
        <li className="footer__link">
          <a
            className="footer__link-text"
            href={"//www.instagram.com/jumpman23/"}
            target="_blank"
            rel="noopener noreferrer">
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
