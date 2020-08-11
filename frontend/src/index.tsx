import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import apolloClient from "./apolloClient";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <CssBaseline />
          <App />
        </AuthProvider>
      </ApolloProvider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
