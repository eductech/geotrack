import React from "react";

const Header = () => {
  return (
    <header className="header header_card">
      <div className="header__logo">
        <img src="/images/logo.png" alt="Logo" />
        <div>
          <h3>GEOTRACK</h3>
          <small>ver 1.0</small>
        </div>
      </div>
      <nav className="header_nav">
        <ul>
          <li><a href="#">GEOMAP</a></li>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">FEATURES</a></li>
          <li><a href="#">PRICING</a></li>
        </ul>
      </nav>
      <div className="header__search">
        <form role="search">
          <input 
            type="search" id="site-search" name="q"
            placeholder="Search geotrack"
            aria-label="Search through geotrack content" 
          />
          <button>Search</button>
        </form>
      </div>
      <div className="header__avatar">
        <img src="/images/avatar.png" alt="Avatar" />
      </div>
    </header>
  );
}

export default Header;