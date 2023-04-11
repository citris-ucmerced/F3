import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
const PeopleCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
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
            image={require("../assets/images/grant-participants/Sankja Banerjee.jpeg")}
            alt="person"
          />
          <CardContent>
            <Typography variant="h5">Fred Adams</Typography>
            <Typography variant="p">Professional Baker</Typography>
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
            <Typography variant="h5">Fred Adams</Typography>
            <Typography variant="p" >Professional Baker <br/></Typography>
            <Typography variant="p">
              A workshop series inaugural event to learn about technology,
              Computer Science, networking and research. This is a free
              conference, open to Central Valley students. Discover paid
              research opportunities and apply at this event. Register here.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ReactCardFlip>
  );
};

export default PeopleCard;
