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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import "./styles/Navbar.css";

const Navbar = () => {
  const routes = [
    {
      name: "About",
      endpoint: "",
      sublinks: [
        {
          name:"Mission",
          endpoint:"/Mission"
        },
        {
          name: "People",
          endpoint: "/People",
        }
       
      ],
    },
    {
      name: "Get Involved",
      endpoint: "",
      icon: faChevronDown,
      sublinks: [
        {
          name: "Events",
          endpoint: "/Events",
        },
        {
          name: "News",
          endpoint: "/News",
        },
        {
          name: "Contact Us",
          endpoint: "/ContactUs",
        },
        {
          name: "F3 Innovate Showcase",
          endpoint: "/InnovateShowcase",
        },
        {
          name: "Farm Bot Challenge",
          endpoint: "/FarmBotChallenge",
        },
         {
          name:"Support Us",
          endpoint: "/SupportUs"
          // endpoint:"https://engage.ucmerced.edu/vista"
        },

      ],
    },
    {
      name: "Research",
      endpoint: "",
      icon: faChevronDown,
      sublinks: [
        {
          name: "Challenge Grants",
          endpoint: "/ChallengeGrants",
        },
        {
          name: "Student Projects",
          endpoint: "/StudentProjects",
        },
      ],
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
        <Box display="flex" alignItems="center" flexGrow={1}>
          <a href="/">
            <img className="logo" src={logo} alt="F3 logo" />
          </a>
          <Typography className="holographic-blue-text">
            Farms Food Future Innovate
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          {routes.map((route) => {
            if (route.sublinks === undefined) {
              return (
                <Link to={route.endpoint} className="nav-link" key={route.name}>
                  {route.name}
                </Link>
              );
            } else {
              return (
                <div className="dropdown">
                  <Link to={route.endpoint} className="nav-link" key={route.name}>
                    {route.name} <FontAwesomeIcon className="chevron" icon={faChevronDown} color="black" />
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
          
          <Button onClick={toggleSidebar(true)} id="hamburger-menu">
            <MenuIcon />
          </Button>
        </Box>

        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleSidebar(false)}
          onOpen={toggleSidebar(true)}
        >
          <Sidebar routes={routes} toggleSidebar={toggleSidebar} />
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
