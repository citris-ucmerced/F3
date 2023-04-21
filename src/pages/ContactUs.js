import { Container, Typography, Box } from "@mui/material";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <div className="page">
      <Navbar />
      <Typography variant="h4" component="h1" className="page-title">
        Contact Us
      </Typography>

      <Container className="contact-us-container">
        <Box sx={{ display: 'flex', flex: "4" }}>
          <iframe
            src="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=o-nf9HjKmEm3p-bQaS6s5iTKSvsBWF5BqrxIXpmK-adUQUM2VFRUWDY2RkZKSE1RSjAxM1pOSDA0Ty4u"
            title="Contact Us Microsoft Form"
          />
        </Box>
        <Box className="info-box" sx={{ flex: "3", alignItems: 'baseline'}}>
          <Typography variant="p">
            <b>Phone:</b> (111)-111-1111
            <br />
            <b>Email:</b> email@email.com
          </Typography>
          <Typography variant="p">
            <b>Mailing Address:</b><br/>CITRIS University of California, Merced 5200
            North Lake Road Merced, CA 95343
          </Typography>
          <Typography variant="p">
            <b>Physical Location:</b><br/>CITRIS University of California, Merced 5200
            North Lake Road Merced, CA 95343
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default ContactUs;
