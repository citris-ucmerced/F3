import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material'
import { useState } from 'react'

import './GrantCard.css'



const GrantCard = ({ content }) => {

    const { proposal, team, description, imageName } = content

    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        <Card
            sx={{
                minWidth: '40rem',
                width: isOpen ? '70%' : '50%',
            }}
        >
            <CardContent sx={{ display: 'flex', flexDirection: 'row'}}>
                <Box sx={{ width: "35%", height: '100%' }}>
                    <CardMedia
                        component="img"
                        image={require("../assets/images/grant-participants/" + imageName)}
                        alt={imageName}
                    />
                </Box>
                <Box sx={{display: 'flex', width: "65%" }}>
                    <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', }}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            className="title"
                            sx={{
                                flex: 1
                            }}
                        >
                            {proposal}
                        </Typography>

                        <Typography
                            variant="h7"
                            color="textPrimary"
                            className="affiliates"
                            sx={{
                                textAlign: 'center',
                                flex: 1
                            }}
                        >
                            {team.join(' • ')}
                        </Typography>

                        <Typography
                            variant="body1"
                            color="textPrimary"
                            className="paragraph"
                            sx={{
                                flex: 10
                            }}
                        >
                            {description}
                        </Typography>
                        <Button
                            className="learn-more-button"
                            onClick={() => { handleClick() }}
                            sx={{
                                flex: 1
                            }}
                        >
                            Learn More
                        </Button>
                    </CardContent>
                </Box>
            </CardContent>
        </Card>
    );
}

export default GrantCard;