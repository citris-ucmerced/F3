import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/F3_Logo.png";
import Sidebar from "./Sidebar";

const Navbar = () => {

  /*
  * The routes array is an array of objects
  * 
  * Each object has a name and an endpoint
  * 
  * If the object has a sublink array then the links in the sublink array will be displayed as a dropdown menu
  * 
  */
  const routes = [
    {
      name: "Home",
      endpoint: "/",
    },
    {
      name: "News",
      endpoint: "/News",
    },
    {
      name: "Research",
      endpoint: "",
      sublinks: [
        {
          name: "Challenge Grants",
          endpoint: "/ChallengeGrants",
        },
        {
          name: "Student Projects ",
          endpoint: "/StudentProjects",
        }
      ],
    },
    {
      name: "People",
      endpoint: "/People",
    },
    {
      name: "Contact Us",
      endpoint: "/ContactUs",
    },
  ];

  const [open, setOpen] = useState(false);

  const toggleSidebar = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <AppBar className="main-navbar">
      <Toolbar>

        <Box component="image">
          <a href="/">
            <img className="logo" src={logo} alt="F3 logo" />
          </a>
        </Box>
        
        <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>
          <a href="/" style={{ textDecoration: "inherit", color: "black" }}>
            F3
          </a>
        </Typography>

        {/* Hamburger menu only visible when in mobile view */}
        <Button onClick={toggleSidebar(true)} id="hamburger-menu">
          <MenuIcon />
        </Button>

        {/* This Swipeable Drawer allows for the sidebar to be swipeable */}
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleSidebar(false)}
          onOpen={toggleSidebar(true)}
        >
          <Sidebar routes={routes} toggleSidebar={toggleSidebar} />
        </SwipeableDrawer>

        {/* List the routes, only visiible when in desktop view */}
        {routes.map((route) => {

          {/* If route does not sublinks key then just display route */}
          if (route.sublinks === undefined) {
            return (
              <Link to={route.endpoint} className="nav-link" key={route.name}>
                {route.name}
              </Link>
            );
          } else {
          
          {/* Else if route has the sublinks then display route with dropdown menu */}
            return (
              <div className="dropdown">
                <Link to={route.endpoint} className="nav-link" key={route.name}>
                  {route.name}
                </Link>
                
                <div className="dropdown-content">
                  {route.sublinks.map((sublink) => (
                    <Link to={sublink.endpoint} key={sublink.name} className="sublink">
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }
        })}

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
