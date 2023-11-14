import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import Home from "./pages/Home.js";
import Events from "./pages/Events.js";
import EventDetails from "./pages/EventDetails.js";
import News from "./pages/News.js";
import ChallengeGrants from "./pages/ChallengeGrants.js";
import StudentProjects from "./pages/StudentProjects.js";
import People from "./pages/People.js";
import InnovateShowcase from "./pages/InnovateShowcase.js";
import FarmBotChallenge from "./pages/FarmBotChallenge.js";
import ContactUs from "./pages/ContactUs.js";
import NotFound from "./pages/NotFound.js";
import Mission from "./pages/Mission.js";

import "./global.css";

/*
  Wrapping in StyledEngineProvider is required for overriding MUI
  styles with CSS. See https://mui.com/guides/interoperability/#controlling-priority-3
  for more information.

  (e.g. So we can target Mui Components with CSS like this:
    .class .MuiButton-root {
      background-color: red;
    }
  )

  We use react-browser-router for routing. See https://reactrouter.com/en/main/router-components/browser-router
  for more information.

*/

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Events/:id" element={<EventDetails />} />
          <Route path="/News" element={<News />} />
          <Route path="/ChallengeGrants" element={<ChallengeGrants />} />
          <Route path="/People" element={<People />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/StudentProjects" element={<StudentProjects />} />
          <Route path="/InnovateShowcase" element={<InnovateShowcase />} />
          <Route path="/FarmBotChallenge" element={<FarmBotChallenge />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/" exact component={Events} />
          <Route path="/events/:id" component={EventDetails} />


        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
