import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello I am Learning Namaste React"
);
console.log(heading);

// JSX = HTML like syntax
const jsxHeading = (<h1 id="heading">Hello I am Learning JSX</h1>);
console.log(jsxHeading);

// React functional component
const FirstComponent = () => {
    return (
        <div className="first-component">
            <h1>Hello I am functional Component</h1>
            <SecondComponent />
        </div>
    )
}
const name = "Karan Singh";
// React functional component
const SecondComponent = () => {
    return (
        <div className="second-component">
            <h2>{name}</h2>
            <h1>Hello I am second functional Component</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
root.render(<FirstComponent />);