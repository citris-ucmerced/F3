import { Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import TwitterIcon from "@mui/icons-material/Twitter";
import "./styles/Footer.css";
import logo from "../assets/images/F3_Logo.png";


const Footer = () => {
  return (
    <Grid container className="footer" sx={{ paddingX: "3rem" }}>



      <Grid item xs={4}>
        <Link to="/">
        <img className="logo" src={logo} alt="F3 Innovate Logo" style={{ width: '50rem', height: 'auto' }} />

        </Link>
        <Typography variant ="h6" sx={{marginBottom: "0.5rem"}}>Farms Food Future Innovate</Typography>
        <Typography>Let's build the future of food together!</Typography>
      </Grid>

      <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
          <Link to="/ContactUs">Contact Us</Link>
        </Typography>
        <Typography>Email: vista@ucmerced.edu</Typography>
        <Typography>Phone: (209) 382-4216</Typography>
      </Grid>

      <Grid item xs={4} display="flex" flexDirection="column" alignItems="flex-end">
        <Typography variant="h6" sx={{ marginBottom: "1rem" }}>Follow Us</Typography>
        <a href="https://twitter.com/f3ucmerced">
          <TwitterIcon style={{ fill: "black", marginBottom: "1rem" }} />
        </a>
      </Grid>

      <Grid item xs={12} display="flex" justifyContent="center" paddingTop={"1rem"}>
        <Typography>©2023 Farms Food Future | All rights reserved.</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
