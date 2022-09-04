import "./Header.css";
import { useState } from "react";
import HeaderMobile from "../HeaderMobile/HeaderMobile";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function handleMobileOpen() {
    setIsMobileOpen(!isMobileOpen);
  }
  return (
    <header className={`${isMobileOpen ? "open-mobile" : ""}`}>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="assets/logo.svg" alt="" />
          </a>
        </div>
        <nav className="header-nav">
          <a href="#projects-section">Projects</a>
          <a href="#skills-section">Skills</a>
          <a href="#education-section">Education</a>
          <a href="#experience-section">Experience</a>
          <a href="#contacts-section">Contacts</a>
        </nav>
        <div className="languages">
          <span>EN</span>
          <span>UA</span>
        </div>
        <div
          className={`mobile-open-burger ${
            isMobileOpen ? "mobile-open-burger--close" : ""
          }`}
          onClick={handleMobileOpen}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {isMobileOpen ? <HeaderMobile handleMenu={handleMobileOpen} /> : ""}
    </header>
  );
}
