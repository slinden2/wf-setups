import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "./components/user/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/HomePage";
import { SetupPage } from "./components/SetupPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/">
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path="/setups/:id">
          <SetupPage />
        </ProtectedRoute>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
