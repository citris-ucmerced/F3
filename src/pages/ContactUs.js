import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="page">
      <Navbar />
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" align="center">
            Contact Us
          </Typography>

          <Grid container spacing={4} sx={{marginTop: "2rem"}}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Phone Number
                  </Typography>
                  <Typography paragraph>(209) 382-4216</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Email Address
                  </Typography>
                  <Typography paragraph>vista@ucmerced.edu</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Mailing Address
                  </Typography>
                  <Typography paragraph>
                    F3, University of California, Merced 5200 North Lake Road Merced, CA
                    95343
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Physical Location
                  </Typography>
                  <Typography paragraph>
                    Arts and Computational Sciences Building, Room 305, University of California, Merced
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box mt={4} p={2} className="contact-form">
            <iframe
              src="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=o-nf9HjKmEm3p-bQaS6s5iTKSvsBWF5BqrxIXpmK-adUQUM2VFRUWDY2RkZKSE1RSjAxM1pOSDA0Ty4u"
              title="Contact Us Microsoft Form"
              style={{width: '100%', height: '500px', border: 'none'}}
            />
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
