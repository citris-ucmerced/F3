import { AppBar, Toolbar, Typography, Button } from '@mui/material';


const Navbar = () => {

    return (
      
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1}}>
              F3 Innovate
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">News</Button>
            <Button color="inherit">Challenge Grants</Button>
            <Button color="inherit">Our Team</Button>
            <Button color="inherit">Contact Us</Button>
          </Toolbar>
        </AppBar>
      );
}

export default Navbar;