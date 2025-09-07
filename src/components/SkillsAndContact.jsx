import { skills } from "src/assets/data";
import yogaGirl from "/src/assets/yoga-girl.png";

const SkillsAndContact = () => {
  return (
    <div className="skills-and-contact max-width " id="skills">
      <div className="skill-section background-image-div">
        <div className="skill-left-section flex">
          <h6>My Skills</h6>
          <p>
            I have following skills in my skill set JavaScript, HTML, React,
            Material UI, Tailwind, Redux, React-tankstack query, Graphql, Node,
            Mongodb and git
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1J6I8woagMR8ORymfrONUsT6MZsJyAxok/view?usp=sharing"
            rel="noreferrer"
          >
            <button className="btn">Get Resume</button>
          </a>
        </div>
        <div className="skill-right-section">
          {skills.map((skill) => {
            return (
              <img
                key={skill}
                src={skill}
                className="skill-icon"
                // style={{
                //   width: "70px",
                //   height: "70px",
                //   // borderRadius: "50%",
                //   zIndex: "9999",
                //   objectFit: "contain",
                // }}
                alt="skill"
              />
            );
          })}
        </div>
      </div>
      <div className="contact-section flex">
        <div>
          {" "}
          <p>Get in touch</p>
          <p>
            <strong>nidhisharma639593@gmail.com</strong>
          </p>
        </div>
        <img src={yogaGirl} alt="yoga-girl" />
        <a
          href="https://github.com/NidhiSharma63"
          target="_blank"
          rel="noreferrer"
          className="contact-links"
        >
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/nidhi-sharma-55329823b/"
          target="_blank"
          rel="noreferrer"
          className="contact-links"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a
          href="https://medium.com/@nidhisharma639593"
          target="_blank"
          className="contact-links"
          rel="noreferrer"
        >
          <i className="fa-brands fa-medium" />
        </a>
      </div>
    </div>
  );
};

export default SkillsAndContact;
