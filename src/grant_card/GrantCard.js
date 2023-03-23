import {Card, CardMedia, CardContent, Typography, Button, makeStyles, Box} from '@material-ui/core'
import image from '../assets/images/Sankja_Banerjee.jpeg'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '60rem',
        margin: 'auto',
        marginTop: '10%'
    },
    media: {
        height: 'auto',
        width: '15rem',
        objectFit: 'cover', // ensure the entire image fits within the height
    },
    title: {
        margin: '1rem'
    },
    affiliates: {
        color: 'grey',
        margin: '1rem'
    },
    paragraph: {
        fontWeight: 'light',
        color: 'grey',
        overflow: 'hidden', // hide any overflowing content
        textOverflow: 'ellipsis', // add an ellipsis (...) to the end of the text if it overflows
        display: '-webkit-box', // use the legacy display box model for cross-browser compatibility
        '-webkit-box-orient': 'vertical', // specify vertical orientation for the box model
        '-webkit-line-clamp': 6,
        margin: '1rem'
    },
    box: {
        flexDirection: 'column'
    },
    btn: {
        float: 'right',
        color: 'blue'
    }
});

const GrantCard = () => {
    const classes = useStyles();

    return(
        <Card className={ classes.root }>
        <CardMedia
            className={classes.media}
            component="img" 
            image={image}
        />
        <Box className={ classes.box }>
            <CardContent>
                <Typography variant="h6" color="textPrimary" className={ classes.title }>
                    Development of a smart water pre-treatment system for controlled environment agriculture using micro-plasma and AI machines
                </Typography>

                <Typography variant="h7" color="textPrimary" className={ classes.affiliates }>
                    Sankha Banerjee • Venkattraman Ayyaswamy • Gerardo Diaz
                </Typography>

                <Typography variant="body1" color="textPrimary" className={ classes.paragraph }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam similique ad 
                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
                quasi aliquam eligendi, placeat qui corporis
                </Typography>
                <Button  className= { classes.btn }>
                Learn More
                </Button>
            </CardContent>
        </Box>
        </Card>
    );
}

export default GrantCard;