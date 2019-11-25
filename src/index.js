import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Themes from "../src/components/Admin Panel/Dashboard/themes";
import Routes from "../src/Routes/routes";
import { ThemeProvider } from "@material-ui/styles";
import { LayoutProvider } from "../src/components/Admin Panel/Dashboard/context/LayoutContext";
import { UserProvider } from "../src/components/Admin Panel/Dashboard/context/UserContext";

render(
  <Provider store={store}>
    <LayoutProvider>
      <UserProvider>
        <ThemeProvider theme={Themes.default}>
          <Routes />
        </ThemeProvider>
      </UserProvider>
    </LayoutProvider>
  </Provider>,

  document.getElementById("root")
);

// unregister() to register() below. Note this comes with some pitfalls.
