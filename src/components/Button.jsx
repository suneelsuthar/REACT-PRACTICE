import React from "react";

const Button = (props) => {
    console.log(props)
  return (
    <button onClick={props.clickMe}  style={{ backgroundColor: "green", padding: 10, borderRadius: 10 }}>
      {props.title}
    </button>
  );
};

export default Button;
