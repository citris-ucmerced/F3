import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { readCSVSortedByColumn } from "../utils/CSVReader";
import csvFile from "../assets/sheets/studentProjects.csv";
import ProjectSection from "../components/ProjectSection";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer.js";

const StudentProjects = () => {
  const [data, setData] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    readCSVSortedByColumn(csvFile, "section", setData);
  }, []);

  useEffect(() => {
    if (data.keys !== undefined) {
      const cardsUI = data.keys.map((key) => {
        console.log(data);
        return (
          <ProjectSection title={key} projectData={data.dataByCategory[key]} />
        );
      });
      setCards(cardsUI);
    }
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Student Projects</title>
        <meta name="description" content="Check out our student projects!" />
        <link rel="canonical" href="/StudentProjects" />
      </Helmet>
      <div className="page">
        <Navbar />

        <Typography variant="h4" component="h1" className="page-title">
          Student Projects
        </Typography>

        <Box mb={12}>{cards}</Box>

        <Footer />
      </div>
    </>
  );
};

export default StudentProjects;
