import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorsList = colors.map((color) => (
    <li key={color} style={{ color }}>
      {color}
    </li>
  ));
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorsList}
      </ol>
    </div>
  );
}

export default ColorList;
