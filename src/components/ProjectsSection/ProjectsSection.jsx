import "./ProjectsSection.css";
import { projectList } from "../../data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const { t } = useTranslation();
  return (
    <section id="projects-section">
      <h2>{t("projects")}</h2>
      <div className="container project-grid-wrapper">
        {projectList.map((item) => {
          return <ProjectItem key={item.id} project={item} />;
        })}
      </div>
    </section>
  );
}
