import { projectData } from "src/assets/data.js";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      {projectData.map((data) => {
        return (
          <div className="project flex" key={data.projectName}>
            <div>
              <h3>{data.projectName}</h3>
              <p>{data.projectDesc}</p>
            </div>
            <div>
              <img src={data.image1} alt="project-image" />
            </div>
            <div className="project-links-container flex">
              <a href={data.live} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-up-right-from-square project-link" />
              </a>
              <a href={data.github} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github project-link"></i>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
