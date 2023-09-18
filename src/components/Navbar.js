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
          name: "People",
          endpoint: "/People",
        },
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
        <Box display="flex" alignItems="center">
          <a href="/">
            <img className="logo" src={logo} alt="F3 logo" />
          </a>
          <Typography className="holographic-blue-text">
            Farms Food Future Innovate
          </Typography>
        </Box>

        <Button onClick={toggleSidebar(true)} id="hamburger-menu">
          <MenuIcon />
        </Button>

        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleSidebar(false)}
          onOpen={toggleSidebar(true)}
        >
          <Sidebar routes={routes} toggleSidebar={toggleSidebar} />
        </SwipeableDrawer>

        {/* ... (rest of the code remains the same) */}

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;