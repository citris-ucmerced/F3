import { Helmet } from "react-helmet-async";
import { Container, Typography} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnerCard from "../components/PartnerCard"; // New component for partner cards
import AOS from "aos";
import 'aos/dist/aos.css';

import "./styles/Home.css";
import { useEffect } from "react";
import partnerData from "../components/partnerData";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>F3 - Farms, Food, Future</title>
        <meta name="description" content="Pioneering sustainable food production through cutting-edge research and development. Training the next generation for the future of food workforce."/>
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <div className="home-banner">
          <div className="home-banner-video-container">
            <video autoplay="autoplay" muted={true} loop id="home-banner-video">
              <source
                src={require("../assets/video/tractor(compressed)-Trim.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
        <Container className="home-banner-text-container">
            <h1 className="home-banner-text" data-aos="fade-right">F3 Innovate:</h1>
            <h2 className="home-banner-text" data-aos="flip-down"><span style={{color: "#FFCC8E"}}>supporting</span> the central valley</h2>
        </Container>
        </div>
            
      <div className="page-home">
        <Typography variant="h2" component="h1" className="page-title">
          Our Partners
        </Typography>

      

        <div className="partners-container" data-aos="flip-up">
          {partnerData.map((partner, index) => (
            <PartnerCard
              key={index}
              name={partner.name}
              description={partner.description}
              imageUrl={partner.imageUrl}
              learnMoreUrl={partner.learnMoreUrl}
            />
          ))}
        </div>
      </div>
      
      <Footer/>
    </>
  );
};

export default Home;
