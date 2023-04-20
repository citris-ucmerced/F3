import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const NewsCard = ({ title, description, imageName }) => {

  const NEWS_IMAGE_PATH = "./images/news/";
  const newsImage = NEWS_IMAGE_PATH + imageName;

  return (
    <Card className="news-card">
      <CardMedia component="img" image={newsImage} />
      <div className="news-card-text">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" className="news-card-description">
          {description}
        </Typography>
      </div>
    </Card>
  );
};

export default NewsCard;
