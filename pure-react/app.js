const Person = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.occupation),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", { class: "title" }, "React is rendered."),
        React.createElement(
            Person,
            {
                name: "Tejas",
                occupation: "Frontend Developer",
            },
            null
        ),
        React.createElement(
            Person,
            {
                name: "Yihua",
                occupation: "Instructor",
            },
            null
        ),
        React.createElement(
            Person,
            {
                name: "Andrei",
                occupation: "Lead Instructor",
            },
            null
        ),
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);