import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material'
import { useState } from 'react'
import image from '../../../assets/images/Sankja_Banerjee.jpeg'

import './GrantCard.css'



const GrantCard = () => {

    const content = {
        title: "Development of a smart water pre-treatment system for controlled environment agriculture using micro-plasma and AI machines",
        affiliates: ["Sankha Banerjee", "Venkattraman Ayyaswamy", "Gerardo Diaz"],
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam  consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo  fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam  quasi aliquam eligendi, placeat qui corporis"
    }

    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        <Card
            sx={{
                width: isOpen ? '90rem' : '70rem',
                height: isOpen ? '40rem' : '25rem'
            }}
        >
            <CardMedia
                component="img"
                image={image}
            />
            <Box className="description">
                <CardContent>
                    <Typography
                        variant="h6"
                        color="textPrimary"
                        className="title"
                    >
                        {content.title}
                    </Typography>

                    <Typography
                        variant="h7"
                        color="textPrimary"
                        className="affiliates"
                    >
                        {content.affiliates.join(' • ')}
                    </Typography>

                    <Typography 
                        variant="body1" 
                        color="textPrimary" 
                        className="paragraph"
                    >
                        {content.about}
                    </Typography>
                    <Button 
                        className="learn-more-button" 
                        onClick={() => { handleClick() }}
                    >
                        Learn More
                    </Button>
                </CardContent>
            </Box>
        </Card>
    );
}

export default GrantCard;