import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const contactDetails = [
    {
      title: "Phone Number",
      detail: "(209) 382-4216",
    },
    {
      title: "Email Address",
      detail: "vista@ucmerced.edu",
    },
    {
      title: "Mailing Address",
      detail:
        "F3, University of California, Merced 5200 North Lake Road Merced, CA 95343",
    },
    {
      title: "Physical Location",
      detail:
        "Arts and Computational Sciences Building, Room 305, University of California, Merced",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Have questions? Reach out and we'll be in touch!" />
        <link rel="canonical" href="/ContactUs" />
      </Helmet>

      <Box className="page">
        <Navbar />
        <Container>
          <Box my={4}>
            <Typography variant="h2" className="page-title" component="h1" align="center" gutterBottom>
              Contact Us
            </Typography>

            <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
              {contactDetails.map((contact, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6">{contact.title}</Typography>
                      <Typography paragraph>{contact.detail}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box mt={4} p={2} className="contact-form">
              <iframe
                src="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=o-nf9HjKmEm3p-bQaS6s5iTKSvsBWF5BqrxIXpmK-adUQUM2VFRUWDY2RkZKSE1RSjAxM1pOSDA0Ty4u"
                title="Contact Us Microsoft Form"
                style={{ width: "100%", height: "500px", border: "none" }}
              />
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default ContactUs;
