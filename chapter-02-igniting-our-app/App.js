var $21nHh$react = require("react");
var $21nHh$reactdomclient = require("react-dom/client");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}


// using js to manipulate the DOM
helloElement = document.createElement("h1");
helloElement.innerHTML = "Hello from javascript tag";
rootElement = document.getElementById("root");
rootElement.appendChild(helloElement);
// using react to manipulate the DOM
helloReactElement = /*#__PURE__*/ (0, ($parcel$interopDefault($21nHh$react))).createElement("h1", {
    id: "rectHelloElement"
}, "Hello from react tag");
smileReactElement = /*#__PURE__*/ (0, ($parcel$interopDefault($21nHh$react))).createElement("h1", {
    id: "rectSmileElement"
}, "Smile!! from inner react tag");
smileReactDiv = /*#__PURE__*/ (0, ($parcel$interopDefault($21nHh$react))).createElement("div", {
    id: "smile"
}, smileReactElement);
reactContainer = (0, ($parcel$interopDefault($21nHh$reactdomclient))).createRoot(document.getElementById("reactContainer"));
reactContainer.render([
    helloReactElement,
    smileReactDiv
]);


//# sourceMappingURL=app.js.map
