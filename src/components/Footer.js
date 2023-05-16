import { AppBar, Toolbar, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

  return (

    <AppBar className='main-footer'>
      <Toolbar>
        <Typography sx={{ flexGrow: 1}}>
          ©2023 F3 | All rights reserved.
        </Typography>

            <a href="https://twitter.com/f3ucmerced">
              <TwitterIcon style={{ fill: "black" }}/>
            </a>
        </Toolbar>
    </AppBar>
  );
}

export default Footer;