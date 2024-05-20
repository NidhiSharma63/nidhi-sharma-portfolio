const About = () => {
  return (
    <div className="about">
      <div className="left-section-container animated-background">
        <img
          src="/src/assets/card-hello-background.png"
          alt="bg-image"
          className="animate-image"
        />
        <div className="left-section flex">
          <div className="left-left-section">
            <div className="circle" />
            <div>
              <h1>Hi, I'm Nidhi Sharma</h1>
              <p>Frontend developer</p>
            </div>
          </div>
          <div className="left-right-section flex">
            <i className="fa-brands fa-github" />
            <i className="fa-brands fa-linkedin-in" />
            <i className="fa-brands fa-medium" />
          </div>
        </div>
        <div className="middle-section">
          A frontend developer who turns imagination into reality.
        </div>
        <div className="last-section">
          As a programmer, I am driven by a desire to create and innovate. I am
          a self-taught developer who has spent the past year learning
          programming through online resources and projects
        </div>
      </div>
      <div className="right-section"></div>
    </div>
  );
};

export default About;
