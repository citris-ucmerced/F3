import { Container, Typography, Box, Card } from "@mui/material";
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
        <Box sx={{ display: 'flex', flex: "4" }}>
          <iframe
            src="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=o-nf9HjKmEm3p-bQaS6s5iTKSvsBWF5BqrxIXpmK-adUQUM2VFRUWDY2RkZKSE1RSjAxM1pOSDA0Ty4u"
            title="Contact Us Microsoft Form"
          />
        </Box>
        <Card className="info custom-card" sx={{ flex: "3", alignItems: 'baseline'}}>
          <Typography variant="p">
            <b>Phone:</b> (209) 382-4216
            <br />
            <b>Email:</b> lbernacchi@ucmerced.edu
          </Typography>
          <br />
          <Typography variant="p">
            <b>Mailing Address:</b><br/>CITRIS University of California, Merced 5200
            North Lake Road Merced, CA 95343
          </Typography>
          <br />
          <Typography variant="p">
            <b>Physical Location:</b><br/>CITRIS University of California, Merced 5200
            North Lake Road Merced, CA 95343
          </Typography>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
