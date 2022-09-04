import "./Skills.css";
import { useState, useEffect } from "react";
import { skills } from "../../data/skills";

const skillTranslateDeg = skills.length !== 0 ? 360 / skills.length : 0;

export default function Skills() {
  const [divWidth, setDivWidth] = useState(0);

  let containerStyle = { width: divWidth, height: divWidth };

  let resizeWindow = () => {
    if (window.innerWidth < 1200) {
      setDivWidth(window.innerWidth / 2 + 100);
    } else if (window.innerWidth < 450) {
      setDivWidth(window.innerWidth / 2 - 100);
    } else {
      setDivWidth(650);
    }
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <section id="skills-section">
      <h2>Skills &#38; Technologies</h2>
      <div className="skill-container" style={containerStyle}>
        {skills.map((item, index) => {
          let divTransformStyle = {
            transform: `rotate(${index * skillTranslateDeg}deg) translateX(${
              divWidth / 2
            }px) rotate(${-index * skillTranslateDeg}deg)`,
          };
          return (
            <div className="skill-item" key={item.id} style={divTransformStyle}>
              {item.name}
            </div>
          );
        })}
        <div className="skill-background-image"></div>
      </div>
    </section>
  );
}
