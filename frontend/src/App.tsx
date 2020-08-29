import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "./components/user/Auth";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/">
          <div>You are logged in</div>
        </ProtectedRoute>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
