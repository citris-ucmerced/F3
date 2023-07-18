import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";

const ProjectSection = ({ title, projectData }) => {
  const [projectCards, setProjectCards] = useState([]);

  useEffect(() => {
    const cards = projectData.map((data) => {
      console.log(data.imageName);
      if (typeof data.team === "string") data.team = data.team.split(",");

      return (
        <ProjectCard
          proposal={data.proposal}
          description={data.description}
          fileName={data.imageFile}
          team={data.team}
        />
      );
    });
    setProjectCards(cards);
  }, []);

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h5" sx={{ marginBottom: "2rem", textAlign: "center"}}>
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
          paddingBottom: "10rem",
        }}
      >
        {projectCards}
      </Box>
    </Container>
  );
};

export default ProjectSection;
