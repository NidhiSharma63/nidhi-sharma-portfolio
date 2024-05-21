import bg from "src/assets/card-hello-background.png";
import girl from "/src/assets/blue-girl.png";
const About = () => {
  return (
    <div className="about">
      <div className="left-section-container animated-background">
        <img src={bg} alt="bg-image" className="animate-image" />
        <div className="left-section flex">
          <div className="left-left-section">
            <div className="circle" />
            <div>
              <h1>Hi, I&apos;m Nidhi Sharma</h1>
              <p>Frontend developer</p>
            </div>
          </div>
          <div className="left-right-section flex">
            <a
              href="https://github.com/NidhiSharma63"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/nidhi-sharma-55329823b/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a
              href="https://medium.com/@nidhisharma639593"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-medium" />
            </a>
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
      <div className="right-section">
        <div className="layer-1 right-section-layers" />
        <div className="layer-2 right-section-layers" />
        <div className="layer-3 right-section-layers" />
        <div className="layer-4 right-section-layers" />
        {/* <i className="fa-solid fa-star" /> */}
        {/* <i className="icon fa-solid fa-star" /> */}
        {[...Array(15)].map((_, index) => (
          <i key={index} className="icon fa-solid fa-star" />
        ))}
        <img src={girl} alt="girl" />
      </div>
    </div>
  );
};

export default About;
