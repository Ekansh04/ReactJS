// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");
import React from "react";
import ReactDOM from "react-dom/client";

// React Component

const title = (
  <h1 className="head">Namaste React🚀 using JSX</h1>
);
// console.log(heading);

// React Components

const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>;
};


const HeadingComponent2 = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React 🚀 functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
