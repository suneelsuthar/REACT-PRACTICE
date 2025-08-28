import React from "react";

const ProductCard = (props) => {
  console.log(props.data.title);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "350px",
      }}
    >
      <h1>Name: {props.data.title}</h1>
      <h1>Price: {props.data.price}</h1>
      <button onClick={() => props.clickMe(props.data)}>Buy</button>
    </div>
  );
};

export { ProductCard };
