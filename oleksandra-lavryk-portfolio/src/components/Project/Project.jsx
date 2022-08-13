import "./Project.css";
export default function About({ project }) {
  return (
    <>
      <div className="project-item">
        <img src={project.image} alt="" />
        <div className="project-item-hover-info">
          <div>
            <h4>{project.name}</h4>
            <p className="technologies">{project.technologies}</p>
          </div>

          <p className="description">{project.description}</p>
          <div className="project-item-links">
            <a href={project.url} target="_blank" rel="noreferrer">
              Link
            </a>
            <a href={project.gitUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
