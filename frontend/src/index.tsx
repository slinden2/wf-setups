import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import { SetupProvider } from "./context/SetupContext";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <SetupProvider>
          <App />
        </SetupProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
