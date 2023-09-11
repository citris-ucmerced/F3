import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";

import "./styles/Home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>F3 - Farms, Food, Future</title>
        <meta name="description" content="Pioneering sustainable food production through cutting-edge research and development. Training the next generation for the future of food workforce."/>
        <link rel="canonical" href="/" />
      </Helmet>

      <div>
        <Navbar />
        <div className="home-banner">
          <div className="home-banner-video-container">
            <video autoplay="autoplay" muted={true} loop id="home-banner-video">
              <source
                src={require("../assets/video/tractor.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
          <Container className="home-banner-text-container">
            <h1 className="home-banner-text">F3 Innovate:</h1>
            <h2 className="home-banner-text"><span style={{color: "#FFCC8E"}}>supporting</span> the central valley</h2>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;