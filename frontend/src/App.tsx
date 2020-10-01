import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Auth from "./components/user/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/HomePage";
import { SetupPage } from "./components/SetupPage";
import Header from "./components/Header";
import { MainContainer } from "./styles/elements/MainContainer";
import { ContentContainer } from "./styles/elements/ContentContainer";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Router>
      <MainContainer>
        <Header />
        <ContentContainer>
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
            <Route path="/404">
              <PageNotFound />
            </Route>
            <Route path="*">
              <Redirect push to="/404" />
            </Route>
          </Switch>
        </ContentContainer>
      </MainContainer>
      <Footer />
    </Router>
  );
};

export default App;
