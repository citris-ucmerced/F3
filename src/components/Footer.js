import { Grid, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./styles/Footer.css"

const Footer = () => {
  return (
    <Grid container className="footer" sx={{ paddingX: "3rem" }}>
      <Grid item xs={8} display="flex" justifyContent="flex-start">
        <Typography>©2023 Farms Food Future | All rights reserved.</Typography>
      </Grid>

      <Grid item xs={4} display="flex" justifyContent="flex-end">
        <a href="https://twitter.com/f3ucmerced">
          <TwitterIcon style={{ fill: "black" }} />
        </a>
      </Grid>
    </Grid>
  );
};

export default Footer;
