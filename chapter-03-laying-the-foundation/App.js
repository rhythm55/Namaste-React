import React from "react";
import ReactDOM from "react-dom/client";

import './styles.css'
import logo from './images/logo.png';
import userIcon from './images/user-icon.png';


// mutliple elements in jsx
// const HeadingComponent = (props) => (
//     <div className="title" key="title">
//       <h1 key="h1">
//         This is h1 tag
//       </h1>
//       <h2 key="h2">
//         This is h2 tag
//       </h2>
//       <h3 key="h3">
//         This is h3 tag
//       </h3>
//     </div>
//   );

const HeadingComponent = () => (
  <nav>
    <ul className="list-style">
      <li>
        <img src={logo} alt="logo" className="icon" />
      </li>
      <li>
        <input type="text" placeholder="search anything"></input>
      </li>
      <li>
       <img src={userIcon} alt="user" className="icon" />
      </li>
    </ul>
  </nav>
)

reactContainer = ReactDOM.createRoot(document.getElementById("reactContainer"));
reactContainer.render(<HeadingComponent/>);
