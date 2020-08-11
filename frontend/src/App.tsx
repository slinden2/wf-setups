import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Auth from "./components/user/Auth";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Container
      component="main"
      maxWidth={"lg"}
      style={{ border: "1px solid red" }}
    >
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
    </Container>
  );
};

export default App;
