import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
