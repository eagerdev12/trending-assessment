import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Repository, Developer } from "../pages";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Repository} />
        <Route exact path="/developer" component={Developer} />
      </Switch>
    </Router>
  );
}
