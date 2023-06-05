import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";

import GrantCardModal from "./GrantCardModal.js";

const GRANT_IMAGE_PATH = "./images/challenge-grants/";

const GrantCard = ({ proposal, description, fileName, team }) => {
  const image = GRANT_IMAGE_PATH + fileName;

  const [open, setOpen] = useState(false);

  return (
    <>
      <GrantCardModal
        proposal={proposal}
        team={team}
        description={description}
        fileName={fileName}
        open={open}
        setOpen={setOpen}
      />
      <div className="grant-card-container">
        <Card
          className="custom-card grant-card grant-card-modal clickable-card"
          onClick={() => {
            setOpen(true);
          }}
        >
          <CardMedia component="img" image={image} alt={fileName} />
          <CardContent>
            <Box className="grant-card-text-container">
              <Typography variant="h5" className="card-title">
                {proposal}
              </Typography>

              <Typography className="card-subtitle" variant="p">
                {team.join(" • ")}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default GrantCard;
