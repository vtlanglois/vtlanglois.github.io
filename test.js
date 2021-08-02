var root = document.querySelector("#test-root");
var element = React.createElement(
  "h1",
  null,
  "Hello World!"
);

ReactDOM.render(element, root);