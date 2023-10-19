// const heading = React.createElement("h1", {id:"heading",xyz:"abc"}, "Hello world");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "div",
  { id: "perent" },[
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello world i am abhishek"),
    React.createElement("h6", {}, "hello world i am child-1"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "hello world i am child 2"),
    React.createElement("h1", {}, "hello world i am child 2"),
  ])
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
