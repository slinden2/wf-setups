import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import discordLogo from "./assets/discord.svg";
import Auth from "./components/user/Auth";

const discordAuthUrl: string =
  "https://discord.com/api/oauth2/authorize?client_id=738387634262638593&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify%20email";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <main className="App">
            <div className="signup-discord">
              <a href={discordAuthUrl}>
                Sign Up with Discord
                <img className="discord-logo" src={discordLogo}></img>
              </a>
            </div>
          </main>
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
