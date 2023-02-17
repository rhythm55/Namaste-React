import React from "react";
import ReactDOM from "react-dom/client";

// using react to manipulate the DOM
helloReactElement = React.createElement(
  "h1",
  {
    id: "rectHelloElement",
  },
  "Hello from react tag"
);
smileReactElement = React.createElement(
  "h1",
  {
    id: "rectSmileElement",
  },
  "Smile!! from inner react tag"
);
smileReactDiv = React.createElement(
  "div",
  {
    id: "smile",
  },
  smileReactElement
);
reactContainer = ReactDOM.createRoot(document.getElementById("reactContainer"));
reactContainer.render([helloReactElement, smileReactDiv]);
