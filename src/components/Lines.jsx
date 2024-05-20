import { useEffect, useState } from "react";

const Lines = () => {
  // get screen size
  const [width, setWidth] = useState(window.innerWidth);
  const [lines, setLines] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //  generates lines when width resizes
  const generateLines = () => {
    if (width > 700) {
      setLines(20);
    }
    if (width < 700) {
      setLines(12);
    }
    if (width < 400) {
      setLines(6);
    }
  };

  useEffect(() => {
    generateLines(width);
  }, [width]);

  return (
    <div className="line-container">
      {[...Array(lines)].map((_, index) => (
        <div key={index} className="line" />
      ))}
    </div>
  );
};

export default Lines;
