import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

const NewsCard = ({ content }) => {

    const { imageName, heading, summary, tags } = content



    return(
        <Card className='news-card'>
            <CardMedia
                component='img'
                image = {require('../assets/images/news/' + imageName)}
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