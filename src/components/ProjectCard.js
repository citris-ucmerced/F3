import { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { ImSpinner2 } from "react-icons/im";

import GrantCardModal from "./ProjectCardModal.js";

import "./styles/ProjectCard.css";

// TODO refactor grant card to project card

const ProjectCard = ({ proposal, description, fileName, team }) => {
  const IMAGE_ASSETS_PATH = "./images/projects/";
  const image = IMAGE_ASSETS_PATH + fileName;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

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
          {!imageLoaded && (
            <div className="loading-animation grant-card-media" style={{width: "24rem"}}>
              <ImSpinner2 />
            </div>
          )}
          <CardMedia
            className="grant-card-media"
            component="img"
            image={image}
            alt={fileName}
            onLoad={handleImageLoaded}
            style={{ display: imageLoaded ? "block" : "none" }}
          />
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

export default ProjectCard;
