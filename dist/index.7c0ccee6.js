// heading=React.createElement("h1",{id:"heading"},"Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("h1", {}, "I'm H1"),
    React.createElement("h2", {}, "I'm h2")
], React.createElement("div", {
    id: "child 2"
}, "I'm p2"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
