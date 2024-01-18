import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ title, author, position, fileName, link, description, date, externalLink }) => {
  const NEWS_IMAGE_PATH = "./images/news/";
  const newsImage = NEWS_IMAGE_PATH + fileName;
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const actualLink = externalLink === 'true' ? link : `/News/${toSlug(title)}`;

  // Function to extract the first two paragraphs
  const getFirstTwoParagraphs = (text) => {
    const paragraphs = text.split('\n').filter(Boolean);
    return paragraphs.length > 2 ? `${paragraphs[0]}\n\n${paragraphs[1]}` : text;
  };

  const firstTwoParagraphs = getFirstTwoParagraphs(description);

  // Handle card click
  const handleCardClick = (event) => {
    if (event.target.tagName !== 'A') { // Prevent navigation if the link is clicked
      if (externalLink === 'true') {
        window.open(link, '_blank');
      } else {
        navigate(actualLink);
      }
    }
  };

  return (
    <Card 
      className="news-card custom-card clickable-card" 
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      {!imageLoaded && (
        <div className="loading-animation"><ImSpinner2 /></div>
      )}
      <CardMedia
        className="news-card-image"
        component="img"
        image={newsImage}
        onLoad={handleImageLoaded}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      <CardContent className="news-card-text">
        <Typography className="news-card-title" variant="h5">
          {title}
        </Typography>

        <Typography className="news-card-author">
          By: <span className="author-name">{author}</span>
          {position && <span className="author-position">{position}</span>}
        </Typography>
        <Typography className="news-card-description" variant="body2">
          {firstTwoParagraphs}
          <br></br>
          <Link href={actualLink} className="read-more-link">
            Read More...
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;

function toSlug(title) {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}
