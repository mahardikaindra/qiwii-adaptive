import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../screens/Home";
import HealthCare from "../screens/HealthCare";
import Entertainment from "../screens/Entertainment";
import Government from "../screens/Government";
import Finance from "../screens/Finance";
import Salon from "../screens/Salon";
import Services from "../screens/Services";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/kesehatan"} component={HealthCare} />
        <Route path={"/entertainment"} component={Entertainment} />
        <Route path={"/pemerintahan"} component={Government} />
        <Route path={"/keuangan"} component={Finance} />
        <Route path={"/kecantikan"} component={Salon} />
        <Route path={"/services"} component={Services} />
        <Route path={"/adaptive"} component={Home} />
        <Route path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
