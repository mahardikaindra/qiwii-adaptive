import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../screens/Home";
import HealthCare from "../screens/HealthCare";
import PhotoStudio from "../screens/PhotoStudio";
import Entertainment from "../screens/Entertainment";
import Events from "../screens/Event";
import Government from "../screens/Government";
import Finance from "../screens/Finance";
import Salon from "../screens/Salon";
import Services from "../screens/Services";
import TempatWisata from "../screens/TempatWisata";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/kesehatan"} component={HealthCare} />
        <Route path={"/tempatwisata"} component={TempatWisata} />
        <Route path={"/entertainment"} component={Entertainment} />
        <Route path={"/photoStudio"} component={PhotoStudio} />
        <Route path={"/event"} component={Events} />
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
