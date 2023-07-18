import {
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  Box,
  Grid,
} from "@mui/material";

const PROJECT_IMAGE_PATH = "./images/projects/";
const PEOPLE_IMAGE_PATH = "./images/people/";

const ProjectCardModal = ({
  proposal,
  team,
  description,
  fileName,
  open,
  setOpen,
}) => {
  const grantImage = PROJECT_IMAGE_PATH + fileName;

  const Participants = team.map((name) => {

    let filename = name.replace(/ /g, "_");
    filename = filename.replace(/-/g, "_");
    filename = filename.replace(/^_/, "");
    let participantImage = PEOPLE_IMAGE_PATH + filename + ".jpg";

    console.log(participantImage);

    const handleImageError = (e) => {
      e.target.src = PEOPLE_IMAGE_PATH + "default.jpg";
    };

    return (
      <CardContent className="modal-individuals-profile">
        <CardMedia
          component="img"
          image={participantImage}
          onError={handleImageError}
        />
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
          <CardMedia component="img" image={grantImage} alt={fileName} />
        </Grid>
        <Grid item xs={9}>
          <Box>
            <Typography id="typ_id" variant="h5">
              { proposal }
            </Typography>
            <Box className="modal-individuals-container">{ Participants }</Box>
            <Typography className="modal-description" variant="body2">
              { description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ProjectCardModal;
