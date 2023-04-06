import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
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
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/News" className="nav-link">News</Link>
        <Link to="/ChallengeGrants" className="nav-link">Challenge Grants</Link>
        <Link to="/People" className="nav-link">People</Link>
        <Link to="/ContactUs" className="nav-link">Contact Us</Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;