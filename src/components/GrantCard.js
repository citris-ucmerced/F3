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

const GrantCard = ({ content }) => {
  const { proposal, team, description, imageName } = content;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GrantCardModal content={content} open={open} handleClose={handleClose} />
      <div className="grant-card-container">
        <Card className="grant-card grant-card-modal">
          <CardMedia
            component="img"
            image={require("../assets/images/challenge-grants/" + imageName)}
            alt={imageName}
          />

          <CardContent>
            <Typography variant="h5" component="div">
              {proposal}
            </Typography>

            <Typography>{team.join(" • ")}</Typography>

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
