import "App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Fade } from "@mui/material";
import theme from "theme";
import Main from "routes/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fade in>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </Fade>
    </ThemeProvider>
  );
}
export default App;
