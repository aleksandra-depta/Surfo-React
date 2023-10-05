import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/user.context";
import { OfferProvider } from "./contexts/offerSelected.context";
import { AddRemoveProvider } from "./contexts/controlAddRemoveCarts.context";
import { LinksNavMyAccountProvider } from "./contexts/linksMyAcount.context";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";

import Container from "react-bootstrap/Container";

import { ThemeProvider } from "styled-components";
import { COLORS } from "./styled/themeColors";

const theme = {
  colors: COLORS,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <OfferProvider>
            <AddRemoveProvider>
              <LinksNavMyAccountProvider>
                <Container md>
                  <App />
                </Container>
              </LinksNavMyAccountProvider>
            </AddRemoveProvider>
          </OfferProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
