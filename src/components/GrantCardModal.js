import {
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  Box,
  Grid
} from "@mui/material";


const GrantCardModal = ({ content, open, handleClose }) => {

    const { proposal, team, description, imageName } = content;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth='true' maxWidth='md' sx={{height:'80%', marginTop:'5%'}}>
          <Grid className="modal" container spacing={2}>
            <Grid item xs={3}>
                <CardMedia
                  component="img"
                  image={require("../assets/images/challenge-grants/" + imageName)}
                  alt={imageName}
                />
            </Grid>
            <Grid item xs={9}>
              <Box>
                  <Typography id="typ_id" variant="h5">
                    {proposal}
                  </Typography>
                  <Box className="modal-individuals-container">
                    {team.map((name) => {
                      let img;
                      try {
                        img = require("../assets/images/grant-participants/" +
                          name +
                          ".jpeg");
                      } catch (e) {
                        img = require("../assets/images/grant-participants/default.jpg");
                      }
                      return (
                        <CardContent className="modal-individuals-profile">
                          <CardMedia component="img" image={img} />
                          <Typography>{name}</Typography>
                        </CardContent>
                      );
                    })}
                  </Box>
                  <Typography className="modal-description" variant="body2">
                    {description}
                  </Typography>
              </Box>
            </Grid>
          </Grid>
    </Dialog>
  );
};

export default GrantCardModal;
