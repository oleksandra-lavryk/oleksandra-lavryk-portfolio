import "./Skills.css";
import { skills } from "../../data/skills";

const skillTranslateDeg = skills.length !== 0 ? 360 / skills.length : 0;

export default function Skills() {
  return (
    <section id="skills-section">
      <h2>Skills &#38; Technologies</h2>
      <div className="skill-container">
        {skills.map((item, index) => {
          let divTransformStyle = {
            transform: `rotate(${
              index * skillTranslateDeg
            }deg) translateX(325px) rotate(${-index * skillTranslateDeg}deg)`,
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
