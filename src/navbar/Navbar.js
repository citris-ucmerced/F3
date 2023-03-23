import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:  {
      backgroundColor:'white',
      color: 'black',
    },
    title: {
      flexGrow: 1,
    }
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" classes={{root: classes.root}}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              F3 Innovate
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">News</Button>
            <Button color="inherit">Challenge Grants</Button>
            <Button color="inherit">Our Team</Button>
            <Button color="inherit">Contact Us</Button>
          </Toolbar>
        </AppBar>
      );
}

export default Navbar;