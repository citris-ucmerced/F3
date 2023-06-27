import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const Sidebar = ({ routes, toggleDrawer }) => (
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

export default Sidebar;
