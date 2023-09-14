import { Helmet } from "react-helmet-async";
import { Container, Typography } from "@mui/material";

import Navbar from "../components/Navbar";
import AOS from "aos";
import 'aos/dist/aos.css';

import "./styles/Home.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
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
                src={require("../assets/video/tractor.mp4")}
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
        <div className="about-content">
        <Typography variant="h2" component="h1" className="page-title" data-aos="fade-zoom-in">
          Our Partners
        </Typography>
          {/*<div className="animate" data-aos="fade-down"></div>
          <div className="animate" data-aos="fade-right"></div>*/}
          <div className="animate partners" data-aos="flip-up"></div>
        </div>
        </div>
    </>
  );
};

export default Home;