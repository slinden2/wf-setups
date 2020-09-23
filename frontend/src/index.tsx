import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import { SetupProvider } from "./context/SetupContext";
import { NotificationProvider } from "./context/NotificationContext";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <SetupProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </SetupProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
