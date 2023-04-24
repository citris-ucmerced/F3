import { Container } from "@mui/material";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
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
          <h1 className="home-banner-text" >F3 Innovate:</h1>
          <h2 className="home-banner-text" >supporting the central valley</h2>
        </Container>
      </div>
    </div>
  );
};

export default Home;
