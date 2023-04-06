import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material'
import { useState } from 'react'



const GrantCard = ({ content }) => {

    const { proposal, team, description, imageName } = content

    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        <div className='grant-card-container'>
            <Card 
                className='grant-card grant-card-modal'
            
            >
                <CardMedia
                    component = 'img'
                    image = {require("../assets/images/grant-participants/" + imageName)}
                    alt={ imageName }
                />

                <CardContent>
                    <Typography variant='h5' component='div'>
                        { proposal }
                    </Typography>

                    <Typography>
                        { team.join(' • ') }
                    </Typography>

                    <Box>
                        <Button className='learn-more-button'> Learn More </Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
}

export default GrantCard;