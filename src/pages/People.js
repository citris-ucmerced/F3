import Navbar from "../components/Navbar";
import { Typography, Container } from "@mui/material";

import { useEffect, useState } from "react";
import { readCSVSortedByColumn } from "../utils/CSVReader";
import staffCSV from "../assets/sheets/staff.csv";
import Footer from "../components/Footer";
import PeopleSection from "../components/PeopleSection";

const COLUMN_TITLE = "section";

const People = () => {
  const [data, setData] = useState({});
  const [peopleCards, setPeopleCards] = useState([]);

  useEffect(() => {
    readCSVSortedByColumn(staffCSV, COLUMN_TITLE, setData);
  }, []);

  useEffect(() => {
    if (data.keys !== undefined) {
      const peopleCards = data.keys.map((key) => {
        return (
          <PeopleSection title={key} peopleData={data.dataByCategory[key]} />
        );
      });
      setPeopleCards(peopleCards);
    }
  }, [data]);

  return (
    <div className="page">
      <Navbar />
      <Container>
        <Typography className="page-title" variant="h4" component="h1">
        Get to Know Our Team
        </Typography>
        {peopleCards}
      </Container>
      <Footer />
    </div>
  );
};

export default People;
