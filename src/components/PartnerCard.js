import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import "./styles/PartnerCard.css";

const PartnerCard = ({ name, description, imageUrl, learnMoreUrl }) => {
  return (
    <Card className="partner-card">
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={learnMoreUrl} target="_blank" rel="noopener noreferrer">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PartnerCard;
