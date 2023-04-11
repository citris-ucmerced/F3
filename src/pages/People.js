
import Navbar from '../components/Navbar'
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import PeopleCard from '../components/PeopleCard';

const People = () => {
    return(
        <div>
            <Navbar />
            <Container>
                <Box className="header" sx={{margin: '3rem 0'}}>
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