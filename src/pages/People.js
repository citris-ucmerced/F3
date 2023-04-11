
import Navbar from '../components/Navbar'
import { Box, Typography, Container } from '@mui/material';
import PeopleCard from '../components/PeopleCard';

const People = () => {
    return(
        <div>
            <Navbar />
            <Container>
                <Box className="header">
                    <Typography sx={{width:'fit-content', margin:'auto'}} variant='h4' component='h1'>
                        Our Team
                    </Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:4}}>
                    <PeopleCard/>
                    <PeopleCard/>
                    <PeopleCard/>
                    <PeopleCard/>
                    <PeopleCard/>
                    <PeopleCard/>
                    <PeopleCard/>

                </Box>
                
            </Container>
        </div>
    );
}

export default People;