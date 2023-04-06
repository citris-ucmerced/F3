import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import Home from "./pages/Home.js";
import News from "./pages/News.js";
import ChallengeGrants from "./pages/ChallengeGrants.js";
import People from "./pages/People.js";
import ContactUs from "./pages/ContactUs.js"
import "./App.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/News" element={<News />} />
            <Route path="/ChallengeGrants" element={<ChallengeGrants />} />
            <Route path="/People" element={<People />} />
            <Route path="ContactUs" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
