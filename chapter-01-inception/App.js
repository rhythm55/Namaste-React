// using js to manipulate the DOM
helloElement = document.createElement("h1");
helloElement.innerHTML = "Hello from javascript tag";
rootElement = document.getElementById("root");
rootElement.appendChild(helloElement);

// using react to manipulate the DOM
helloReactElement = React.createElement(
  "h1",
  { id: "rectHelloElement" },
  "Hello from react tag"
);
smileReactElement = React.createElement(
  "h1",
  { id: "rectSmileElement" },
  "Smile!! from inner react tag"
);
smileReactDiv = React.createElement("div", { id: "smile" }, smileReactElement);

reactContainer = ReactDOM.createRoot(document.getElementById("reactContainer"));
reactContainer.render([helloReactElement, smileReactDiv]);
