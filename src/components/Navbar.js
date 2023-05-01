import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material";
import { useState } from 'react';

import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/F3_Logo.png";

const Navbar = () => {
  const routes = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'News',
      route: '/News'
    },
    {
      name: 'Challenge Grants',
      route: '/ChallengeGrants'
    },
    {
      name: 'People',
      route: '/People'
    },
    {
      name: 'Contact Us',
      route: '/ContactUs'
    }
  ];

  const SideBar = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {routes.map((route) => (
          <ListItem key={route.name} disablePadding>
            <ListItemButton component={Link} to={route.route}>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <AppBar className="main-navbar">
      <Toolbar>
        <Box component="image">
          <img className="logo" src={logo} alt="F3 logo" />
        </Box>
        <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }}>F3 Innovate</Typography>

        <Button onClick={toggleDrawer(true)} id="hamburger-menu">
          <MenuIcon/>
        </Button>

        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <SideBar />
        </SwipeableDrawer>

        {
          routes.map((route) => (
            <Link to={route.route} className="nav-link" key={route.name}>
              {route.name}
            </Link>
          ))
        }

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;