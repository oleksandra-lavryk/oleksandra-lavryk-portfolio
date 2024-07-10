import "./Header.css";
import { useState, useEffect } from "react";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
    i18n.changeLanguage(language);
  }, [language]);

  function handleMobileOpen() {
    setIsMobileOpen(!isMobileOpen);
  }

  function hadleLanguageSwitch(e) {
    setLanguage(e.target.innerHTML.toLowerCase());
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
          <a href="#projects-section">{t("projects")}</a>
          <a href="#skills-section">{t("skills")}</a>
          <a href="#education-section">{t("education")}</a>
          <a href="#experience-section">{t("experience")}</a>
          <a href="#contacts-section">{t("contacts")}</a>
        </nav>
        <div className="languages">
          <span
            className={language === "en" ? "active" : ""}
            onClick={hadleLanguageSwitch}
          >
            EN
          </span>
          <span
            className={language === "ua" ? "active" : ""}
            onClick={hadleLanguageSwitch}
          >
            UA
          </span>
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
