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

const PeopleCard = ({ name, title, description, fileName }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const image = PEOPLE_IMAGE_PATH + fileName;

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div>
        <Card className="people-card custom-card">
          <CardActionArea
            disableRipple={true}
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
      </div>

      <div>
        <Card className="people-card custom-card">
          <CardActionArea
            disableRipple={true}
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
              <br />
              <div
                className="people_card_description"
                style={{
                  marginTop: '1rem',
                  maxHeight: "15.5rem", // Adjust the height as per your requirements
                  overflowY: "auto",
                }}
              >
                <Typography className="people_card_description" variant="p">
                  {description}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </ReactCardFlip>
  );
};

export default PeopleCard;
