import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.scss";

import Header from "./components/Header";
import RestrauntList from "./components/RestrauntCardList";
import Footer from "./components/Footer";
import Body from "./components/Body";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

reactContainer = ReactDOM.createRoot(document.getElementById("reactContainer"));
reactContainer.render(<AppLayout />);
