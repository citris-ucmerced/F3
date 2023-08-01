import { Grid, Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./styles/Home.css"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>F3 - Farms, Food, Future</title>
        <meta
          name="description"
          content="Pioneering sustainable food production through cutting-edge research and development. Training the next generation for the future of food workforce."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div>
        <Navbar />

        <Box id="video-container">
          <video
            autoPlay
            muted
            loop
            id="home-video"
            className="filtered-video"
            src={require("../assets/video/tractor.mp4")}
            type="video/mp4"
            playsInline
          />
          <Box className="full-size centered">
            <Grid container spacing={1} id="banner-content">
              <Grid item xs={12} sm={6} display="flex" id="F3">
                <Typography
                  variant="h1"
                  sx={{ fontWeight: "500", marginBottom: "-1rem" }}
                >
                  F3
                </Typography>
              </Grid>
              <Grid item container xs={12} sm={6} id="innovate">
                <Typography variant="h4" sx={{ fontWeight: "400" }}>
                  Innovate
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "300",
                    marginX: "1rem",
                    textAlign: "center",
                  }}
                >
                  Supporting the Central Valley
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Footer />
      </div>
    </>
  );
};

export default Home;
