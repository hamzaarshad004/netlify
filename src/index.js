import React from "react";
import { render } from "react-dom";

import Routes from "../src/Routes/routes";
import { ThemeProvider } from "@material-ui/styles";

render(
  <ThemeProvider theme={Themes.default}>
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
);

// unregister() to register() below. Note this comes with some pitfalls.
