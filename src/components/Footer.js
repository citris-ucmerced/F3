import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

  return (

    <AppBar className='main-footer'>
      <Toolbar>
        <Typography sx={{ flexGrow: 1}}>
          @2023 F3. All rights reserved.
        </Typography>

            <TwitterIcon style={{ fill: "black" }}/>
            <FacebookIcon style={{ fill: "black" }}/>
            <InstagramIcon style={{ fill: "black" }}/>
            <LinkedInIcon style={{ fill: "black" }}/>
        </Toolbar>
    </AppBar>
  );
}

export default Footer;