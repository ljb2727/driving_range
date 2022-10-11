import * as React from "react";
import "App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Fade } from "@mui/material";
import theme from "theme";
import Main from "routes/Main";
import Detail from "routes/Detail";
import Pay from "routes/Pay";
import Test from "routes/Test";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fade in>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/pay/:id/:floor/:box/" element={<Pay />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </div>
      </Fade>
    </ThemeProvider>
  );
}
export default App;
