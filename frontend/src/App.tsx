import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

import Auth from "./components/user/Auth";
import AuthPage from "./components/user/AuthPage";
import { useMeQuery } from "./generated/apolloComponents";

const App = () => {
  const loggedUser = useMeQuery();
  const isAuth: boolean = !!loggedUser?.data?.me;

  return (
    <Container
      component="main"
      maxWidth={"lg"}
      style={{ border: "1px solid red" }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            {loggedUser.loading ? (
              <CircularProgress />
            ) : isAuth ? (
              <div>You are logged in</div>
            ) : (
              <AuthPage />
            )}
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
