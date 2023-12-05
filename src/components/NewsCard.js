import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ImSpinner2 } from "react-icons/im";

const NewsCard = ({ title, author, position, fileName, link, description, date, externalLink }) => {
  const NEWS_IMAGE_PATH = "./images/news/";
  const newsImage = NEWS_IMAGE_PATH + fileName;
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const actualLink = externalLink === 'true' ? link : `/News/${toSlug(title)}`;

  return (
    <a href={actualLink} className="news-link" rel={externalLink === 'true' ? "noopener noreferrer" : undefined}>
      <Card
        className="news-card custom-card clickable-card"
        title="Click me to read more!"
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
            <span className="author-position">{position}</span>
          </Typography>
          <Typography className="news-card-description" variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
};

export default NewsCard;

function toSlug(title) {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}
