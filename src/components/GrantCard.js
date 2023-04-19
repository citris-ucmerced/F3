import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";

import GrantCardModal from "./GrantCardModal.js";

const IMAGE_PATH = "../assets/images/challenge-grants/default.jpg";

const GrantCard = ({ content }) => {
  const { proposal, description, imageName } = content;
  const team = content.team.split(",").map((item) => item.trim());
  let image;
  try {
    image = require(IMAGE_PATH + imageName);
  } catch (error) {
    image = require(IMAGE_PATH);
  }


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GrantCardModal
        proposal={proposal}
        team={team}
        description={description}
        image={image}
        open={open}
        handleClose={handleClose}
      />
      <div className="grant-card-container">
        <Card className="grant-card grant-card-modal">
          <CardMedia component="img" image={image} alt={imageName} />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {proposal}
            </Typography>

            <Typography>{team.join("•")}</Typography>

            <Box>
              <Button className="learn-more-button" onClick={handleClickOpen}>
                Learn More
              </Button>
            </Box>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default GrantCard;
