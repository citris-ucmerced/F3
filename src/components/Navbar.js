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
  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "News",
      route: "/News",
    },
    {
      name: "Research",
      route: "",
      sublinks: [
        {
          name: "Challenge Grants",
          route: "/ChallengeGrants",
        },
        {
          name: "Student Projects ",
          route: "/StudentProjects",
        }
      ],
    },
    {
      name: "People",
      route: "/People",
    },
    {
      name: "Contact Us",
      route: "/ContactUs",
    },
  ];

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
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
        <Button onClick={toggleDrawer(true)} id="hamburger-menu">
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Sidebar routes={routes} toggleDrawer={toggleDrawer} />
        </SwipeableDrawer>
        {routes.map((route) => {
          if (route.sublinks === undefined) {
            return (
              <Link to={route.route} className="nav-link" key={route.name}>
                {route.name}
              </Link>
            );
          } else {
            return (
              <div className="dropdown">
                <Link to={route.route} className="nav-link" key={route.name}>
                  {route.name}
                </Link>
                
                <div className="dropdown-content">
                  {route.sublinks.map((sublink) => (
                    <Link to={sublink.route} key={sublink.name} className="sublink">
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
