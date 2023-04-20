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

const PeopleCard = ({name, title, description}) => {
  
  const [isFlipped, setIsFlipped] = useState(false);

  const image = PEOPLE_IMAGE_PATH + name + ".jpeg"

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <Card className="people_card">
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
            <Typography variant="h5">{name}</Typography>
            <Typography variant="p">{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className="people_card">
        <CardActionArea
          onClick={() => {
            setIsFlipped(!isFlipped);
          }}
        >
          <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="p" >{title}</Typography>
            <br/>
            <Typography variant="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ReactCardFlip>
  );
};

export default PeopleCard;
