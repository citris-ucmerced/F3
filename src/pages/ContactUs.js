import { Container, Typography, Box } from "@mui/material";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Box className="header">
        <Typography
          sx={{ width: "fit-content", margin: "auto" }}
          variant="h4"
          component="h1"
        >
          Contact Us
        </Typography>
      </Box>
      <Container className="contact-us-container">
        <Box sx={{ flex: "4" }}>
          <iframe
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=o-nf9HjKmEm3p-bQaS6s5iEyxpMcRwBLumaQqCTOHI1UQ1ZNSVFRTFhRRTFDRTNOM1VXMzJCOEpSVS4u"
            title="Contact Us Microsoft Form"
          />
        </Box>
        <Box className="info-box" sx={{ flex: "3" }}>
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
