const SkillsAndContact = () => {
  return (
    <div className="skills-and-contact">
      <div className="skill-section">
        <div className="skill-left-section flex">
          <h6>My Skills</h6>
          <p>
            I have following skills in my skill set JavaScript, HTML, React,
            Material UI, Tailwind, Redux, React-tankstack query, Graphql, Node,
            Mongodb and git
          </p>
        </div>
        <div className="skill-right-section">
          {/* <div className="skill-icon"> */}
          <img
            src="/src/assets/react.png"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              zIndex: "9999",
            }}
          />
          <img
            src="/src/assets/javscript.png"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              zIndex: "9999",
            }}
          />
          <img
            src="/src/assets/nodejs.png"
            style={{
              width: "70px",
              height: "70px",
              // borderRadius: "50%",
              zIndex: "9999",
            }}
          />
          <img
            src="/src/assets/mongodb.png"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              zIndex: "9999",
              objectFit: "contain",
            }}
          />
          {/* </div> */}
          <img
            src="/src/assets/nextjs.png"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              zIndex: "9999",
              objectFit: "contain",
            }}
          />
          <img
            src="/src/assets/tailwind.jpg"
            style={{
              width: "70px",
              height: "70px",
              // borderRadius: "50%",
              zIndex: "9999",
              objectFit: "contain",
            }}
          />

          <img
            src="/src/assets/typescript.png"
            style={{
              width: "70px",
              height: "70px",
              // borderRadius: "50%",
              zIndex: "9999",
              objectFit: "contain",
            }}
          />
          <img
            src="/src/assets/github.png"
            style={{
              width: "70px",
              height: "70px",
              // borderRadius: "50%",
              zIndex: "9999",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <div className="contact-section"></div>
    </div>
  );
};

export default SkillsAndContact;
