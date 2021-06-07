import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import HealthCare from "../screens/HealthCare";
import PhotoStudio from "../screens/PhotoStudio";
import Entertainment from "../screens/Entertainment";
import Events from "../screens/Event";
import Government from "../screens/Government";
import Finance from "../screens/Finance";
import Salon from "../screens/Salon";
import Service from "../screens/Service";
import Services from "../screens/Services";
import TempatWisata from "../screens/TempatWisata";
import Movies from "../screens/Movies";

function RouteKesehatan() {
  let { url } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${url}`} component={HealthCare} />
        <Route path={`${url}/:id`} component={Service} />
      </Switch>
    </Router>
  );
}

function RoutePemerintah() {
  let { url } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${url}`} component={Government} />
        <Route path={`${url}/:id`} component={Service} />
      </Switch>
    </Router>
  );
}

function RouteFinance() {
  let { url } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${url}`} component={Finance} />
        <Route path={`${url}/:id`} component={Service} />
      </Switch>
    </Router>
  );
}

function RouteSalon() {
  let { url } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${url}`} component={Salon} />
        <Route path={`${url}/:id`} component={Service} />
      </Switch>
    </Router>
  );
}

function RouteBengkel() {
  let { url } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${url}`} component={Services} />
        <Route path={`${url}/:id`} component={Service} />
      </Switch>
    </Router>
  );
}

function RouteMovies() {
  let { url } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${url}`} component={Movies} />
        <Route path={`${url}/:id`} component={Service} />
      </Switch>
    </Router>
  );
}

function RouteTempatWisata() {
  let { url } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${url}`} component={TempatWisata} />
        <Route path={`${url}/:id`} component={Service} />
      </Switch>
    </Router>
  );
}

function RoutePhotoStudio() {
  let { url } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${url}`} component={PhotoStudio} />
        <Route path={`${url}/:id`} component={Service} />
      </Switch>
    </Router>
  );
}

function RouteEvents() {
  let { url } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${url}`} component={Events} />
        <Route path={`${url}/:id`} component={Service} />
      </Switch>
    </Router>
  );
}

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/kesehatan"} component={RouteKesehatan} />
        <Route path={"/bioskop"} component={RouteMovies} />
        <Route path={"/tempatwisata"} component={RouteTempatWisata} />
        <Route path={"/entertainment"} component={Entertainment} />
        <Route path={"/photoStudio"} component={RoutePhotoStudio} />
        <Route path={"/events"} component={RouteEvents} />
        <Route path={"/pemerintahan"} component={RoutePemerintah} />
        <Route path={"/keuangan"} component={RouteFinance} />
        <Route path={"/kecantikan"} component={RouteSalon} />
        <Route path={"/services"} component={RouteBengkel} />
        <Route path={"/adaptive"} component={Home} />
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
        <Route path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
