import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {readCSV} from "../utils/CSVReader.js";

import Navbar from "../components/Navbar.js";
import NewsCard from "../components/NewsCard.js";
import newsCSV from "../assets/sheets/news.csv";
import Footer from "../components/Footer.js";

const News = () => {
  const [data, setData] = useState([]);
  const [newsCards, setNewsCards] = useState([]);

  useEffect(() => {
    readCSV(newsCSV, setData);
  }, []);

  useEffect(() => {
    const newsCardUI = data.map((content) => {
      return (
        <NewsCard
          title={content.title}
          fileName={content.fileName}
          link={content.link   }
          description={content.description}
          date={content.date}
        />
      );
    });


    newsCardUI.sort((a, b) => new Date(b.props.date) - new Date(a.props.date));

    setNewsCards(newsCardUI);
  }, [data]);

  return (
    <>
      <Helmet>
        <title>News</title>
        <meta name="description" content="Check out recent F3 news!" />
        <link rel="canonical" href="/News" />
      </Helmet>

    <div className="page">
      <Navbar />
      <Typography variant="h4" component="h1" className="page-title">
        News
      </Typography>

      {/* <NewsSearchBar />    <--- Future implementation */}

      <div className="news-card-container">{newsCards}</div>

      <Footer />
    </div>
    </>
  );
};

export default News;
