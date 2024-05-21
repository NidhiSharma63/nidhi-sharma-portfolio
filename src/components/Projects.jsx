import projectData from "src/assets/data.js";

const Projects = () => {
  return (
    <div className="projects-container">
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
              <a href={data.live}>
                <i className="fa-solid fa-link project-link" />
              </a>
              <a href={data.github}>
                <i className="fa-brands fa-github project-link" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
