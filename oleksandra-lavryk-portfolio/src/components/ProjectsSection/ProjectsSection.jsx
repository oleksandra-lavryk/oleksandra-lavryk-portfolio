import "./ProjectsSection.css";
import { projectList } from "../../data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";

export default function ProjectsSection() {
  return (
    <section id="projects-section">
      <h2>Projects</h2>
      <div className="container project-grid-wrapper">
        {projectList.map((item) => {
          return <ProjectItem key={item.id} project={item} />;
        })}
      </div>
    </section>
  );
}
