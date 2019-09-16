import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

// Components
import Homepage from "./pages/homepage/homepage.component";
import HatsPage from "./pages/hats/hats.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
