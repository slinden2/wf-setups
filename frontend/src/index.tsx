import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import { SetupProvider } from "./context/SetupContext";
import { NotificationProvider } from "./context/NotificationContext";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <SetupProvider>
          <NotificationProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </NotificationProvider>
        </SetupProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
