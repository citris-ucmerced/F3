import { Link } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SideBar = ({ routes, toggleDrawer }) => {

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {routes.map((route) => {
          if (route.sublinks === undefined) {
            return (
              <ListItem key={route.name} disablePadding>
                <ListItemButton component={Link} to={route.route}>
                  <ListItemText primary={route.name} />
                </ListItemButton>
              </ListItem>
            );
          } else {
            return (
              <div key={route.name}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={route.name} />
                    <ArrowDropDownIcon />
                  </ListItemButton>
                </ListItem>
                {route.sublinks.map((sublink) => (
                  <ListItem key={sublink.name} disablePadding sx={{ paddingLeft: "20px"}}>
                    <ListItemButton component={Link} to={sublink.route}>
                      <ListItemText primary={sublink.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </div>
            );
          }
        })}
      </List>
    </Box>
  );
};

export default SideBar;