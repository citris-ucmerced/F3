import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
const PeopleCard = () => {
  return (
    <Card sx={{flexDirection: 'column',}}>
      {/* <CardMedia component="img"
        height="194"
        image={require("../assets/images/grant-participants/Sankja Banerjee.jpeg")}
        alt="person"/> */}
      <CardContent>
        <Typography>
          Name
        </Typography>
        <Typography>
          Title
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PeopleCard;
