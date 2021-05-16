import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../screens/Home";
import HealthCare from "../screens/HealthCare";
import Government from "../screens/Government";
import Finance from "../screens/Finance";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/kesehatan"} component={HealthCare} />
        <Route exact path={"/pemerintahan"} component={Government} />
        <Route exact path={"/keuangan"} component={Finance} />
        <Route path={"/adaptive"} component={Home} />
        <Route path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
