import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const PEOPLE_IMAGE_PATH = "./images/people/";

const PeopleCard = ({ name, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const image = PEOPLE_IMAGE_PATH + name + ".jpeg";

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <Card className="people-card custom-card">
        <CardActionArea
          onClick={() => {
            setIsFlipped(!isFlipped);
          }}
        >
          <CardMedia
            component="img"
            draggable={false}
            image={image}
            alt="person"
          />
          <CardContent>
            <Typography className="card-title" variant="h5">
              {name}
            </Typography>
            <Typography className="card-subtitle" variant="p">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className="people-card custom-card">
        <CardActionArea
          onClick={() => {
            setIsFlipped(!isFlipped);
          }}
        >
          <CardContent>
            <Typography className="card-title" variant="h5">
              {name}
            </Typography>
            <Typography className="card-subtitle" variant="p">
              {title}
            </Typography>
            <Typography className="people_card_description" variant="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ReactCardFlip>
  );
};

export default PeopleCard;
