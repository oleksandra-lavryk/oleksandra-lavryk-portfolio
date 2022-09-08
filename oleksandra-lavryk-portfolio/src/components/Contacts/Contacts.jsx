import "./Contacts.css";
import cvPdf from "../../data/CV-Lavryk.pdf";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <section id="contacts-section">
      <h2>{t("contacts")}</h2>
      <div className="phone-address-wrapper">
        <a href="tel:+4550280082">+45 50 28 00 82</a>
        <p>{t("contacts-address")}</p>
      </div>
      <div className="contacts-social-icons">
        <a href="https://github.com/oleksandra-lavryk">
          <img src="assets/github.svg" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/oleksandra-lavryk/">
          <img src="assets/linkedin.svg" alt="" />
        </a>
        <a href="mailto:oleksandra.lavryk96@gmail.com">
          <img src="assets/email.svg" alt="" />
        </a>
        <a href={cvPdf} download="Lavryk CV" target="_blank" rel="noreferrer">
          <img src="assets/cv-download.svg" alt="" />
        </a>
      </div>
    </section>
  );
}
