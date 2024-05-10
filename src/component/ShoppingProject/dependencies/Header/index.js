import React from 'react';
import Logo from "../../../../assest/logo1.png"
const Header = () => {

  return (
    <>
      <header id="main-header">
        <div id="main-title">
          <img src={Logo} alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button>Cart</button>
        </p>
      </header>
    </>
  );
};

export default Header;
