import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../screens/Home";
import HealthCare from "../screens/HealthCare";
import Government from "../screens/Government";
import Finance from "../screens/Finance";
import Salon from "../screens/Salon";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/kesehatan"} component={HealthCare} />
        <Route exact path={"/pemerintahan"} component={Government} />
        <Route exact path={"/keuangan"} component={Finance} />
        <Route exact path={"/kecantikan"} component={Salon} />
        <Route path={"/adaptive"} component={Home} />
        <Route path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
