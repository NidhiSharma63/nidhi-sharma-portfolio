import React from "react";

const Lines = () => {
  return (
    <div className="line-container">
      {[...Array(25)].map((_, index) => (
        <div key={index} className="line"></div>
      ))}
    </div>
  );
};

export default Lines;
