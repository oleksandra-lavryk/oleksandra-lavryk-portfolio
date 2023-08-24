import "./About.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about-section">
      <div className="container">
        <div className="about-text">
          <h3>{t("about-title-first")}</h3>
          <h3>{t("about-title-second")}</h3>
          <div className="about-photo--mobile">
            <img src="assets/photo.png" alt="" />
          </div>
          <p>{t("about-text")}</p>
        </div>
        <div className="about-photo">
          <img src="assets/photo.png" alt="" />
        </div>
      </div>
    </section>
  );
}
