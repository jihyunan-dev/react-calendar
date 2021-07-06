import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";

import Calendar from "../pages/Calendar";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Calendar />
      </div>
    </ThemeProvider>
  );
}

export default App;
