import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import csvFile from "../assets/sheets/challengeGrants.csv";
import { readCSV } from "../utils/CSVReader";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer.js";

import "./styles/ChallengeGrants.css"

const ChallengeGrants = () => {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    readCSV(csvFile, setData);
  }, []);

  useEffect(() => {
    const cardsUI = data.map((content) => {
      const team = content.team.split(",").map((item) => item.trim());
      return (
        <ProjectCard
          proposal={content.proposal}
          description={content.description}
          fileName={content.fileName}
          team={team}
        />
      );
    });
    setCards(cardsUI);
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Challenge Grants</title>
        <meta
          name="description"
          content="Check out the recipients of our challenge grants!"
        />
        <link rel="canonical" href="/ChallengeGrants" />
      </Helmet>
      <div className="page">
        <Navbar />

        <Typography variant="h4" component="h1" className="page-title">
          Challenge Grants
        </Typography>

        <Box mb={12}>{cards}</Box>

        <Footer />
      </div>
    </>
  );
};

export default ChallengeGrants;
