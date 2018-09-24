import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const addClass = () => {
    const nav = document.getElementById("topnav");
    if (nav.className === "header__nav") {
      nav.className += " header__nav_responsive";
    } else {
      nav.className = "header__nav";
    }
  } 

  return (
    <header className="header header_card">
      <div className="header__logo">
        <img src="/images/logo.png" alt="Logo" />
        <div>
          <h3>GEOTRACK</h3>
          <small>ver 1.0</small>
        </div>
      </div>
      <nav id="topnav" className="header__nav">
        <ul>
          <li className="active"><a href="#" title="go to Geomap section">GEOMAP</a></li>
          <li><a href="#" title="go to Home section">HOME</a></li>
          <li><a href="#" title="go to About section">ABOUT</a></li>
          <li><a href="#" title="go to Features section">FEATURES</a></li>
          <li><a href="#" title="go to Pricing section">PRICING</a></li>
        </ul>
        <button title="Show menu" onClick={addClass}>
          <FontAwesomeIcon icon={faBars}/>
        </button>
      </nav>
      <div className="header__search">
        <form role="search">
          <button title="Start search">
            <FontAwesomeIcon icon={faSearch}/>
          </button>
          <input 
            type="search" id="site-search" name="q"
            placeholder="Search geotrack"
            aria-label="Search through geotrack content" 
          />
        </form>
      </div>
      <div className="header__avatar">
        <img src="/images/avatar.png" alt="Avatar" />
        <div aria-hidden></div>
      </div>
    </header>
  );
}

export default Header;