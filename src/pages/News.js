import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar.js';
import NewsCard from '../components/NewsCard.js';
import Footer from '../components/Footer.js';
import { readCSV } from '../utils/CSVReader.js';
import newsCSV from '../assets/sheets/news.csv';
import './styles/News.css';

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    readCSV(newsCSV, setData);
  }, []);

  const newsCards = data && data.map((content, index) => (
    <NewsCard
      key={index}
      title={content.title}
      author={content.author}
      position={content.position}
      fileName={content.fileName}
      link={content.link}
      description={content.description}
      date={content.date}
      externalLink={content.externalLink} // Pass the externalLink property to NewsCard
    />
  ));

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

        <Box className="news-card-container" mb={12}>
          {newsCards}
        </Box>

        <Footer />
      </div>
    </>
  );
};

export default News;
