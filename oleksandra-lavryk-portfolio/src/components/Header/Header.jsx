import "./Header.css";

export default function Header() {
  return (
    <header>
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
      </div>
    </header>
  );
}
