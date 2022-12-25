const headingOne = React.createElement("h1", { id: "title" }, "Heading 1");
const headingTwo = React.createElement("h1", { id: "title" }, "Heading 2");
const container = React.createElement("div", { id: "container" }, [
  headingOne,
  headingTwo,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
