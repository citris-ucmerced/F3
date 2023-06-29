import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import csvFile from "../assets/sheets/studentProjects.csv"; // Change this to read from student projects csv
import { readCSV } from "../utils/CSVReader";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer.js";

const StudentProjects = () => {
  const [data, setData] = useState([]);
  const [grantCards, setGrantCards] = useState([]);

  useEffect(() => {
    readCSV(csvFile, setData);
  }, []);

  useEffect(() => {
    const grantCardUI = data.map((content) => {
      const team = content.team.split(",").map((item) => item.trim());
      return (
        <ProjectCard
          proposal={content.proposal}
          description={content.description}
          fileName={content.imageFile}
          team={team}
        />
      );
    });
    setGrantCards(grantCardUI);
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Student Projects</title>
        <meta
          name="description"
          content="Check out our student projects!"
        />
        <link rel="canonical" href="/StudentProjects" />
      </Helmet>
      <div className="page">
        <Navbar />

        <Typography variant="h4" component="h1" className="page-title">
          Student Projects
        </Typography>

        { grantCards }

        <Footer />
      </div>
    </>
  );
};

export default StudentProjects;
