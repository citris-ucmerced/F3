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

const GRANT_IMAGE_PATH = "./images/challenge-grants/";

const GrantCard = ({ proposal, description, imageName, team }) => {
  const image = GRANT_IMAGE_PATH + imageName;

  const [open, setOpen] = useState(false);

  return (
    <>
      <GrantCardModal
        proposal={proposal}
        team={team}
        description={description}
        imageName={imageName}
        open={open}
        setOpen={setOpen}
      />
      <div className="grant-card-container">
        <Card className="grant-card grant-card-modal">
          <CardMedia component="img" image={image} alt={imageName} />
          <CardContent>
            <Box className="grant-card-text-container">
              <Typography variant="h5" className="card-title">
                {proposal}
              </Typography>

              <Typography className="card-subtitle" variant="p">
                {team.join(" • ")}
              </Typography>
            </Box>
            <Button
              variant="contained"
              className="learn-more-button"
              onClick={() => {
                setOpen(true);
              }}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default GrantCard;
