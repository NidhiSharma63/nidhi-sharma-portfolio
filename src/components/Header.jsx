const Header = () => {
  return (
    <div className="header flex">
      <h1 className="title">
        Nidhi Sharma<span>,&nbsp;Frontend developer</span>
      </h1>
      <div className="nav flex">
        <a href="#projects">Work</a>
        <a href="#skills">Skills</a>
        <a
          href="https://medium.com/@nidhisharma639593"
          target="_blank"
          className="contact-links"
          rel="noreferrer"
        >
          Blogs
        </a>
      </div>
    </div>
  );
};

export default Header;
