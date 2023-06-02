import { Container, Typography, Box, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ContactUs = () => {
  return (
    <div className="page">
      <Navbar />
      <Typography variant="h4" component="h1" className="page-title">
        Contact Us
      </Typography>

      <Container className="contact-us-container">
          <Grid container className="custom-card contact-info">
            <Grid item xs={12} sm={6}md={4} lg={3} container justifyContent="center" alignItems="center">
              <div>
                <Typography variant="h6" align="center">
                  Phone Number
                </Typography>
                <Typography align="center">(209) 382-4216</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} container justifyContent="center" alignItems="center">
              <div>
                <Typography variant="h6" align="center">
                  Email Address
                </Typography>
                <Typography align="center">vista@ucmerced.edu</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} container justifyContent="center" alignItems="center">
                <Typography variant="h6" align="center">
                  Mailing Address
                </Typography>
                <Typography align="center">
                  F3, University of California, Merced 5200 North Lake Road Merced, CA
                  95343
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} container justifyContent="center" alignItems="center">
                <Typography variant="h6" align="center">
                  Physical Location
                </Typography>
                <Typography align="center">
                  Arts and Computational Sciences Building, Room 305, University of California, Merced
                </Typography>
            </Grid>
          </Grid>
        <Box className="contact-form">
          <iframe
            src="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=o-nf9HjKmEm3p-bQaS6s5iTKSvsBWF5BqrxIXpmK-adUQUM2VFRUWDY2RkZKSE1RSjAxM1pOSDA0Ty4u"
            title="Contact Us Microsoft Form"
          />
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default ContactUs;
