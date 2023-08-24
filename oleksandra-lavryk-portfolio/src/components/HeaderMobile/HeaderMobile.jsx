import "./HeaderMobile.css";
import { useTranslation } from "react-i18next";

export default function HeaderMobile({ handleMenu }) {
  const { t } = useTranslation();
  return (
    <nav className="mobile-navigation">
      <a href="#about-section" onClick={() => handleMenu()}>
        {t("about")}
      </a>
      <a href="#projects-section" onClick={() => handleMenu()}>
        {t("projects")}
      </a>
      <a href="#skills-section" onClick={() => handleMenu()}>
        {t("skills")}
      </a>
      <a href="#education-section" onClick={() => handleMenu()}>
        {t("education")}
      </a>
      <a href="#experience-section" onClick={() => handleMenu()}>
        {t("experience")}
      </a>
      <a href="#contacts-section" onClick={() => handleMenu()}>
        {t("contacts")}
      </a>
    </nav>
  );
}
