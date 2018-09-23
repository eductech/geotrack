import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faVimeoV 
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer footer_card">
      <div className="footer__company-info">
        <h3>GEOTRACK</h3>
        <small>&copy; Geotrack Ink. All right reserved 2016</small>
      </div>
      <a className="footer__link footer__link_ref" href="#">APP API</a>
      <a className="footer__link footer__link_ref" href="#">SUPPORT</a>
      <a className="footer__link footer__link_social" href="#">
        <FontAwesomeIcon icon={faFacebook}/>
      </a>
      <a className="footer__link footer__link_social" href="#">
        <FontAwesomeIcon icon={faTwitter}/>
      </a>
      <a className="footer__link footer__link_social" href="#">
        <FontAwesomeIcon icon={faInstagram}/>
      </a>
      <a className="footer__link footer__link_social" href="#">
        <FontAwesomeIcon icon={faVimeoV}/>
      </a>
    </footer>
  );
}

export default Footer;