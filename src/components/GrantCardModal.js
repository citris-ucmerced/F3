import {
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  Box,
  Grid,
} from "@mui/material";

const GRANT_IMAGE_PATH = "./images/challenge-grants/";
const PEOPLE_IMAGE_PATH = "./images/people/";

const GrantCardModal = ({
  proposal,
  team,
  description,
  imageName,
  open,
  setOpen,
}) => {
  const grantImage = GRANT_IMAGE_PATH + imageName;
  const grantParticipants = team.map((name) => {
    let participantImage = PEOPLE_IMAGE_PATH + name + ".jpeg";
    return (
      <CardContent className="modal-individuals-profile">
        <CardMedia component="img" image={participantImage} />
        <Typography>{name}</Typography>
      </CardContent>
    );
  });

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      fullWidth="true"
      maxWidth="md"
      sx={{ height: "80%", marginTop: "5%" }}
    >
      <Grid className="modal" container spacing={2}>
        <Grid item xs={3} id="modal-cover">
          <CardMedia component="img" image={grantImage} alt={imageName} />
        </Grid>
        <Grid item xs={9}>
          <Box>
            <Typography id="typ_id" variant="h5">
              {proposal}
            </Typography>
            <Box className="modal-individuals-container">
              {grantParticipants}
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
