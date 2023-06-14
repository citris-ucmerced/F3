import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import recipientsCSV from "../assets/sheets/recipients.csv";
import { readCSV } from "../utils/CSVReader";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import GrantCard from "../components/GrantCard";
import Footer from "../components/Footer.js";

const ChallengeGrants = () => {
  const [data, setData] = useState([]);
  const [grantCards, setGrantCards] = useState([]);

  useEffect(() => {
    readCSV(recipientsCSV, setData);
  }, []);

  useEffect(() => {
    const grantCardUI = data.map((content) => {
      const team = content.team.split(",").map((item) => item.trim());
      return (
        <GrantCard
          proposal={content.proposal}
          description={content.description}
          fileName={content.fileName}
          team={team}
        />
      );
    });
    setGrantCards(grantCardUI);
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

        {grantCards}

        <Footer />
      </div>
    </>
  );
};

export default ChallengeGrants;
