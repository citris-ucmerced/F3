import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ImSpinner2 } from "react-icons/im";

const PeopleCard = ({ name, title, description, fileName }) => {
  // const PEOPLE_IMAGE_PATH = "./images/people/";
  const PEOPLE_IMAGE_PATH = "./";

  const image = PEOPLE_IMAGE_PATH + fileName;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };


  return (
    <div className="flip-card">
      <div className={`flip-card-inner ${isFlipped ? "do-flip" : ""}`}>
        <div className="flip-card-front">
          <Card className="people-card custom-card">
            <CardActionArea
              disableRipple={true}
              onClick={() => {
                setIsFlipped(!isFlipped);
              }}
            >
              {!imageLoaded && (
                <div className="loading-animation">
                  <ImSpinner2 />
                </div>
              )}
              <CardMedia
                component="img"
                draggable={false}
                image={image}
                onLoad={handleImageLoaded}
                style={{ display: imageLoaded ? "block" : "none" }}
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

        <div className="flip-card-back">
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
                    marginTop: "1rem",
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
      </div>
    </div>
  );
};

export default PeopleCard;
