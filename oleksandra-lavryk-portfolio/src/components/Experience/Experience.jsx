import "./Experience.css";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience-section">
      <h2>{t("experience")}</h2>

      <div className="text-paragraph-item">
        <p>
          {t("experience-title-first")}
          <span>| {t("experience-month-first")}</span>
        </p>
        <p>{t("experience-info-first")}</p>
      </div>
      <div className="text-paragraph-item">
        <p>
          {t("experience-title-second")}{" "}
          <span>| {t("experience-month-second")}</span>
        </p>
        <p>{t("experience-info-second")}</p>
      </div>
    </section>
  );
}
