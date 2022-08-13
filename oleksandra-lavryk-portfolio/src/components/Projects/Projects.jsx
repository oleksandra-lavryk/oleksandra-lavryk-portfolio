import "./Projects.css";
import projectList from "../../data/projects";
import Project from "../Project/Project";

export default function About() {
  return (
    <section id="projects-section">
      <h2>Projects</h2>
      <div className="container project-grid-wrapper">
        {projectList.map((item) => {
          return <Project key={item.id} project={item} />;
        })}
      </div>
    </section>
  );
}
