const header = React.createElement(
    "div",
    { id: "parent" },

    React.createElement(
        "div",
        { id: "child" },

        React.createElement(
            "h1",
            { id: "heading1" },
            "First Heading"
        ),

        React.createElement(
            "h2",
            { id: "heading2" },
            "Second Heading"
        )
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);