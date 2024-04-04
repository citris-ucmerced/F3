import { Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./styles/Footer.css";
import logo from "../assets/images/F3_Logo.png";

const Footer = () => {
  return (
    <Grid container className="footer" sx={{ padding: { xs: "1rem", sm: "3rem" } }}>

      <Grid item xs={12} sm={4}>
        <Link to="/">
          <img className="logo" src={logo} alt="F3 Innovate Logo" style={{ width: '100%', maxWidth: '15rem', height: 'auto' }} />
        </Link>
        <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>Farms Food Future Innovate</Typography>
        <Typography>Let's build the future of food together!</Typography>
        <div style={{ maxWidth: "400px" }}> 
       <Typography variant="body2" sx={{ marginTop: "1rem", fontSize: "0.73rem"}}>
        Funding support from the US Department of Commerce, Economic Development Agency Build Back Better Regional Challenge, investment no. 07 79 07893, “Fresno-Merced Future of Food (F3) Initiative” and the UC Merced iCREATE project, award no. 07 79 07913.
      </Typography>
</div>

      </Grid>
      

      <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems={{xs: "flex-start", sm: "center"}}>
        <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
          <Link to="/ContactUs">Contact Us</Link>
        </Typography>
        <Typography>Email: vista@ucmerced.edu</Typography>
        <Typography>Phone: (209) 382-4216</Typography>
      </Grid>

      <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems={{ xs: "flex-start", sm: "flex-end" }}>
      <Typography variant="h6" sx={{ marginBottom: "1rem" }}>Follow Us</Typography>
      <Grid item container direction="row" justifyContent={{ xs: "flex-start", sm: "flex-end" }}>
        <a href="https://twitter.com/f3ucmerced" style={{ marginRight: "1rem" }}>
            <TwitterIcon style={{ fill: "black" }} />
        </a>
        <a href="https://www.instagram.com/f3innovate/">
            <InstagramIcon style={{ fill: "black" }} />
        </a>
    </Grid>
</Grid>


     

      <Grid item xs={12} display="flex" justifyContent="center" paddingTop={"1rem"}>
        <Typography>©2023 Farms Food Future | All rights reserved.</Typography>
      </Grid>
      
    </Grid>
  );
};

export default Footer;
