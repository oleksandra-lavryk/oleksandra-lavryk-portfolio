import "./HeaderMobile.css";

export default function HeaderMobile({ handleMenu }) {
  return (
    <nav className="mobile-navigation">
      <a href="#about-section" onClick={() => handleMenu()}>
        About Me
      </a>
      <a href="#projects-section" onClick={() => handleMenu()}>
        Projects
      </a>
      <a href="#skills-section" onClick={() => handleMenu()}>
        Skills
      </a>
      <a href="#education-section" onClick={() => handleMenu()}>
        Education
      </a>
      <a href="#experience-section" onClick={() => handleMenu()}>
        Experience
      </a>
      <a href="#contacts-section" onClick={() => handleMenu()}>
        Contacts
      </a>
    </nav>
  );
}
