import Navbar from "../components/Navbar";
import { Box, Typography, Container } from "@mui/material";
import PeopleCard from "../components/PeopleCard";
import { useEffect, useState } from "react";
import readCSV from "../utils/CSVReader";
import staffCSV from "../assets/sheets/staff.csv";
import Footer from "../components/Footer";

const People = () => {
  const [data, setData] = useState([]);
  const [peopleCards, setPeopleCards] = useState([]);

  useEffect(() => {
    readCSV(staffCSV, setData);
  }, []);

  useEffect(() => {
    const peopleCardUI = data.map((content) => {
      return (
        <PeopleCard
          name={content.name}
          title={content.title}
          description={content.description}
        />
      );
    });
    setPeopleCards(peopleCardUI);
  }, [data]);

  return (
    <div className="page">
      <Navbar />
      <Container>
        <Typography
          className="page-title"
          variant="h4"
          component="h1"
        >
          Our Team
        </Typography>
        <Box

          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 4,
            paddingBottom:'10rem'
          }}
        >
          {peopleCards}
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default People;
