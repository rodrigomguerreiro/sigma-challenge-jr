// @flow

import * as React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import Main from "./componentes/Main";

import SiteWrapper from "./SiteWrapper";


import "tabler-react/dist/Tabler.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
     <SiteWrapper>
      <Main/>
      </SiteWrapper>
    </Router>
  );
}

export default App;
