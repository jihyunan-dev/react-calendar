import Calendar from "../pages/Calendar";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
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
