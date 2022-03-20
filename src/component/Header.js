import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return <div className="header">
    <h1>
      <img className="header_img" src="img/header-logo.png" alt="logo" />
      <Link to="/" className="title">Hocavoca</Link>
    </h1>
    <div className="container">
    <div className="menu">
      <div className="gage"></div>
      <a href="#x" className="link">
      Add Word
      </a>
    </div>
    <div className="menu">
      <div className="gage"></div>
      <a href="#x" className="link">
        Add Day
      </a>
    </div>
    </div>
  </div>;
}
