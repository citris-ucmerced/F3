import { Typography } from "@mui/material";

import Navbar from "../components/Navbar.js";
import NewsCard from "../components/NewsCard.js";
import newsCSV from "../assets/sheets/news.csv";
import {readCSV} from "../utils/CSVReader.js";
import Footer from "../components/Footer.js";
import { useEffect, useState } from "react";

// import NewsSearchBar from "../components/NewsSearchBar.js";


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

    console.log(newsCardUI)
    setNewsCards(newsCardUI);
  }, [data]);

  return (
    <div className="page">
      <Navbar />
      <Typography variant="h4" component="h1" className="page-title">
        News
      </Typography>

      {/* <NewsSearchBar />    <--- Future implementation */}

      <div className="news-card-container">{newsCards}</div>

      <Footer />
    </div>
  );
};

export default News;
