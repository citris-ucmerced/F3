import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";

const PeopleSection = ({ title, peopleData }) => {
  const [peopleCards, setPeopleCards] = useState([]);

  useEffect(() => {
    const peopleCards = peopleData.map((data) => {
      return (
        <PeopleCard
          name={data.name}
          title={data.title}
          description={data.description}
          filename={data.filename}
        />
      );
    });
    setPeopleCards(peopleCards);
  }, []);

  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5" sx={{marginBottom:"2rem"}}>{title}</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
          paddingBottom: "10rem",
        }}
      >
        {peopleCards}
      </Box>
    </Container>
  );
};

export default PeopleSection;
