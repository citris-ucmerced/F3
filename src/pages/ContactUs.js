import React from 'react';
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

import "./styles/ContactUs.css"; // Ensure this CSS file includes the new styles


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
      <Box className="page" style={{ backgroundColor: "#84BEF2", color: "#333" }}>
        <Navbar />
        <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Box my={4}>
            <Typography variant="h4" component="h1" align="center" style={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>

            <Grid container spacing={4} style={{ marginTop: "2rem" }}>
              {contactDetails.map((contact, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    style={{
                      height: "100%",
                      backgroundColor: "#fff",
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                      borderRadius: "8px",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" style={{ fontWeight: "500" }}>{contact.title}</Typography>
                      <Typography paragraph>{contact.detail}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>



            <Box mt={4} p={1} style={{  borderRadius: "8px", overflow:"hidden"}}>
            <iframe
            src="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=o-nf9HjKmEm3p-bQaS6s5iTKSvsBWF5BqrxIXpmK-adUQUM2VFRUWDY2RkZKSE1RSjAxM1pOSDA0Ty4u"
            title="Contact Us Microsoft Form"
           style={{
            width: "1.2 * 100%", // 120% of the container width
            height: "1.2 * 500px", // 120% of the desired height
            transform: "scale(0.900)", // scale down to 83.3%
            transformOrigin: "center",
            border: "none",
            borderRadius: "8px",
            margin:"-5px"
          }}
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
