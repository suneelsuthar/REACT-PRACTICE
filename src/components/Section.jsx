import React from "react";

const Section = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "green",
      }}
    >
      {children}
      {/* <h1>Name:{name}</h1>
      <h1>Serial Number:{serialNum}</h1>

      <button onClick={clickMe}>Click Me</button> */}
    </div>
  );
};

export default Section;
