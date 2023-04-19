import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

const NewsCard = ({ content }) => {

    const { imageName, heading, summary, tags } = content
    const NEWS_IMAGE_PATH = "./images/news/";
    const newsImage = NEWS_IMAGE_PATH + imageName;

    return(
        <Card className='news-card'>
            <CardMedia
                component='img'
                image = {newsImage}
            />
            <Typography variant='h5'>
                { heading }
            </Typography>
            <Typography variant='body2' className='news-card-summary'>
                { summary }
            </Typography>
        </Card>
    );
}

export default NewsCard;