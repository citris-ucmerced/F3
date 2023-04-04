import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import logo from '../assets/images/F3_Logo.png'

const Navbar = () => {

  return (

    <AppBar className='main-navbar'>
      <Toolbar>
        <Box
          component="image"
        >
          <img className="logo" src={ logo } alt="F3 logo" />
        </Box>
        <Typography sx={{ flexGrow: 1}}>
          F3 Innovate
        </Typography>
        <Button color="inherit"><Link to="/" className="nav-link">Home</Link></Button>
        <Button color="inherit"><Link to="/News" className="nav-link">News</Link></Button>
        <Button color="inherit"><Link to="/ChallengeGrants" className="nav-link">Challenge Grants</Link></Button>
        <Button color="inherit"><Link to="/People" className="nav-link">People</Link></Button>
        <Button color="inherit" >Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;