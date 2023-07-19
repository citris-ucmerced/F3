import { Link } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SideBar = ({ routes, toggleSidebar }) => {

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleSidebar(false)}
      onKeyDown={toggleSidebar(false)}
    >
      <List>
        {routes.map((route) => {

          {/* If route does not sublinks key then just display route */}
          if (route.sublinks === undefined) {
            return (
              <ListItem key={route.name} disablePadding>
                <ListItemButton component={Link} to={route.endpoint}>
                  <ListItemText primary={route.name} />
                </ListItemButton>
              </ListItem>
            );
          } else {
            {/* Else if route has the sublinks then display route with sublinks */}
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
                    <ListItemButton component={Link} to={sublink.endpoint}>
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