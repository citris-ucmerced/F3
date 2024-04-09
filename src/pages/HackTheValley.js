import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    Container,
    Typography,
    Box,
  } from "@mui/material";



import "./styles/HackTheValley.css";
import { useEffect } from "react";
import { Padding } from "@mui/icons-material";

const HackTheValley = () => {
  
  return (
    <>
      <Helmet>
        <title>F3 | Farms, Food, Future</title>
        {/* <meta name="description" content="Pioneering sustainable food production through cutting-edge research and development. Training the next generation for the future of food workforce."/> */}
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <Box style={{paddingTop: "10px", Padding: "5px"}} className="page">
        <Container style={{background: "white"}}>
            <Typography variant="h2" component="h1" align="center" className="page-title" gutterBottom >
              Hack The Valley Online Guide Book
            </Typography>
        </Container>

        <Container style={{background: "white"}}>
            <Typography variant="" component="h3" align="" gutterBottom >
              Resources
            </Typography>

            <div id="resources" style={{paddingLeft: "10px"}}>
                GitHub: <a href="https://merced-my.sharepoint.com/:w:/g/personal/mtapia14_ucmerced_edu/EfRl1N1aFhJIu89wI6OrM08BNoDHvieuyHakF-1AoAyZFg?e=2EGDTN">Doc</a> <br />
                Repo: <a> Link </a> <br />
                Examples: link goes here <br />
            </div>


            <Typography style={{paddingTop: "10px"}} variant="" component="h3" align="" gutterBottom >
                Robot Path Creation 
            </Typography>

            <div style={{paddingLeft: "10px"}}>
                Create your own path, virtually or physically, upload it to the Amiga, and run your code!
                <br />
                
            </div>

            <div style={{paddingLeft: "10px"}}>
                <b >Virtual</b> <br />
                <span style={{paddingLeft: "10px"}}>
                        In this section you will use Python to create a path around the obstacle course set up by us! <br></br>
                        <b style={{paddingLeft: "10px"}}>Goal: </b> Make it through the course WITHOUT hitting any cones
                </span>
                <br /> <b >Physical</b> <br />
                <span style={{paddingLeft: "10px"}}>
                    Using the onboard controller on the Amiga, you can program your own path without having to code.
                    <b style={{paddingLeft: "10px"}}>Goal: </b> Make it through the course WITHOUT hitting any cones
                </span>
            </div>

            <Typography style={{paddingTop: "10px"}} variant="" component="h3" align="" gutterBottom >
              Computer Vision
            </Typography>

            <div style={{paddingLeft: "10px"}}>
                With an existing data set, by using a camera client, watch how the Amiga will use image processing on 
                various fields and crops!
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />

        </Container>

        
            
      </Box>
      
      <Footer/>
    </>
  );
};

export default HackTheValley;
