import "./Education.css";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education-section">
      <div className="container">
        <h2>{t("education")}</h2>
        <div className="text-paragraph-item">
          <p>
            {t("university-first")}
            <span> | {t("university-first-month")}</span>
          </p>
          <p>{t("university-first-specoalization")}</p>
        </div>
        <div className="text-paragraph-item">
          <p>
            {t("university")}
            <span> | {t("university-second-month")}</span>
          </p>
          <p>{t("university-second-specoalization")}</p>
        </div>
        <div className="text-paragraph-item">
          <p>
            {t("university")}
            <span> | {t("university-third-month")}</span>
          </p>
          <p>{t("university-third-specoalization")}</p>
        </div>
      </div>
    </section>
  );
}
