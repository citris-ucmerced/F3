import { Typography } from "@mui/material";

import Navbar from "../components/Navbar.js";
import NewsCard from "../components/NewsCard.js";
import NewsSearchBar from "../components/NewsSearchBar.js";
import newsCSV from "../assets/sheets/news.csv";
import readCSV from "../utils/CSVReader.js";
import Footer from "../components/Footer.js";
import { useEffect, useState } from "react";

const News = () => {
  const [data, setData] = useState([]);
  const [newsCards, setNewsCards] = useState([]);

  useEffect(() => {
    readCSV(newsCSV, setData);
  }, []);

  useEffect(() => {
    const newsCardUI = data.map((content) => {
      const tags = content.tags.split(",").map((item) => item.trim());
      return (
        <NewsCard
          title={content.title}
          imageName={content.imageName}
          description={content.description}
          tags={tags}
        />
      );
    });
    setNewsCards(newsCardUI);
  }, [data]);

  return (
    <div className="page">
      <Navbar />
      <Typography variant="h4" component="h1" className="page-title">
        Challenge Grants
      </Typography>

      {/* <NewsSearchBar />    <--- Future implementation */}

      <div className="news-card-container">{newsCards}</div>

      <Footer />
    </div>
  );
};

export default News;
