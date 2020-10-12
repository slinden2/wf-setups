import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Auth from "./components/user/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import AddSetupPage from "./components/AddSetupPage";
import { SetupPage } from "./components/SetupPage";
import Header from "./components/Header";
import { MainContainer } from "./styles/elements/MainContainer";
import { ContentContainer } from "./styles/elements/ContentContainer";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import { useAuthContext } from "./context/AuthContext";
import Stripes from "./styles/elements/Stripes";
import HomePage from "./components/HomePage";

const App = () => {
  const { isAuth } = useAuthContext();

  return (
    <Router>
      <MainContainer>
        <Header />
        <ContentContainer isAuth={isAuth}>
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <ProtectedRoute exact path="/setups">
                <AddSetupPage />
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
          </div>
        </ContentContainer>
        <div className="bg-grey">
          <Stripes />
        </div>
      </MainContainer>
      {isAuth && <Footer />}
    </Router>
  );
};

export default App;
