import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

const NewsCard = ({ title, fileName, link, description }) => {

  const NEWS_IMAGE_PATH = "./images/news/";
  const newsImage = NEWS_IMAGE_PATH + fileName

  return (
    <a href={link} class='news-link'>
      <Card className="news-card custom-card" title="Click me to read more!">
        <CardMedia className="news-card-image" component="img" image={newsImage} />
        <CardContent className="news-card-text">
          <Typography className="news-card-title" variant="h5">{title}</Typography>
          <Typography className="news-card-description" variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
};

export default NewsCard;
